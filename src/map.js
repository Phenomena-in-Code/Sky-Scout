import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { weatherMarker0 } from "./weatherMarker";
import { weatherMarker1 } from "./weatherMarker";
import { weatherMarker2 } from "./weatherMarker";
import { weatherMarker3 } from "./weatherMarker";
import { weatherMarker4 } from "./weatherMarker";
import { weatherMarker5 } from "./weatherMarker";
import { weatherMarker6 } from "./weatherMarker";
import { weatherMarker7 } from "./weatherMarker";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

// L.Marker.prototype.options.icon = weatherMarker;
L.Marker.prototype.options.icon = defaultIcon;

export default function Map({
  position,
  weatherData,
  startDate,
  endDate,
  additionalData,
  showAdditionalMarkers,
  latitudeDevianceAdditionalMarkers,
  longitudeDevianceAdditionalMarkers,
}) {
  const positionMarker1 = [
    position[0] + latitudeDevianceAdditionalMarkers,
    [position[1] + longitudeDevianceAdditionalMarkers],
  ];
  const positionMarker2 = [
    position[0] + latitudeDevianceAdditionalMarkers,
    [position[1] - longitudeDevianceAdditionalMarkers],
  ];
  const positionMarker3 = [
    position[0] - latitudeDevianceAdditionalMarkers,
    [position[1] + longitudeDevianceAdditionalMarkers],
  ];
  const positionMarker4 = [
    position[0] - latitudeDevianceAdditionalMarkers,
    [position[1] - longitudeDevianceAdditionalMarkers],
  ];

  function ViewComponent() {
    const map = useMap();
    map.setView(position);
  }

  function getIcon(weathercode) {
    switch (true) {
      case [0].includes(weathercode):
        return weatherMarker0;
      case [2].includes(weathercode):
        return weatherMarker1;
      case [3].includes(weathercode):
        return weatherMarker2;
      case [45, 48].includes(weathercode):
        return weatherMarker3;
      case [51, 56, 61, 66, 80].includes(weathercode):
        return weatherMarker4;
      case [53, 55, 63, 65, 57, 67, 81, 82].includes(weathercode):
        return weatherMarker5;
      case [71, 73, 75, 77, 85, 86].includes(weathercode):
        return weatherMarker6;
      case [95, 96, 99].includes(weathercode):
        return weatherMarker7;
      default:
        console.log("Weathercode not found");
    }
  }

  return (
    <MapContainer center={position} zoom={9}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ViewComponent />
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      {showAdditionalMarkers && (
        <>
          <Marker
            icon={getIcon(weatherData.daily.weathercode[0])}
            position={position}
          ></Marker>
          <Marker
            icon={getIcon(additionalData.additional1.daily.weathercode[0])}
            position={positionMarker1}
          ></Marker>
          <Marker
            icon={getIcon(additionalData.additional2.daily.weathercode[0])}
            position={positionMarker2}
          ></Marker>
          <Marker
            icon={getIcon(additionalData.additional3.daily.weathercode[0])}
            position={positionMarker3}
          ></Marker>
          <Marker
            icon={getIcon(additionalData.additional4.daily.weathercode[0])}
            position={positionMarker4}
          ></Marker>
        </>
      )}
    </MapContainer>
  );
}
