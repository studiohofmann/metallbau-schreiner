"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const Map = () => {
  const center: LatLngExpression = [46.861505, 2.496587];

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[43.56295237, 1.46810716]}>
        <Popup>Hello world!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
