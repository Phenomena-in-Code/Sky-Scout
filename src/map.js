import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";
// import { weatherMarker } from "./weatherMarker";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

// L.Marker.prototype.options.icon = weatherMarker;
L.Marker.prototype.options.icon = defaultIcon;

export default function Map() {
  const [position, setPosition] = useState([48.8566, 2.3522]);

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[48.8566, 2.3522]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
