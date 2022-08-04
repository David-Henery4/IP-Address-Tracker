import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import SetInitialView from "./SetInitialView";
import { useSelector } from "react-redux/es/exports";
import { Icon } from "leaflet";
import locationMarker from "../images/icon-location.svg";
// import "../images/icon-location.svg"

const customIcon = new Icon({
  iconUrl: locationMarker,
  iconSize: [25, 30],
});

const Map = () => {
  const { lat, long } = useSelector((store) => {
    return store.ip;
  });
  //
  return (
    <MapContainer
      id="map"
      className="map"
      center={[lat, long] || [51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <SetInitialView lat={lat || 51.505} long={long || -0.09} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long] || [51.505, -0.09]} icon={customIcon}>
        <Popup>IP address location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
