import React, { useEffect, useState } from 'react'
// import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import SetInitialView from './SetInitialView';

const Map = () => {
  const [long, setLong] = useState(-0.09);
  const [lat, setLat] = useState(51.505);
  // const position = [51.505, -0.09];
  //
  useEffect(() => {
    const userLocal = navigator.geolocation;
    userLocal.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      setLat(lat)
      setLong(long)
    });
  }, [])
  //
  return (
      <MapContainer
        id="map"
        className="map"
        center={[lat, long]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <SetInitialView lat={lat} long={long}/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat,long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
}

export default Map