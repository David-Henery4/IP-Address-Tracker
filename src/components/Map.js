import React, { useEffect, useState } from 'react'
// import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import SetInitialView from './SetInitialView';
import { useSelector } from 'react-redux/es/exports';

const Map = () => {
  const {lat,long} = useSelector((store) => {
    return store.ip
  })
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
      <Marker position={[lat, long] || [51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map