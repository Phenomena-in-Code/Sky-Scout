import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { getIcon } from "./weatherMarkers";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

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
  highlightedDate,
}) {
  let zoomLevel;
  if (window.matchMedia("(max-width: 700px)").matches) {
    zoomLevel = 9;
    console.log("smartph");
  } else {
    zoomLevel = 10;
    console.log("geen smartph");
  }

  const positionMarker1 = [
    position[0] + latitudeDevianceAdditionalMarkers,
    position[1] + longitudeDevianceAdditionalMarkers,
  ];
  const positionMarker2 = [
    position[0] + latitudeDevianceAdditionalMarkers,
    position[1] - longitudeDevianceAdditionalMarkers,
  ];
  const positionMarker3 = [
    position[0] - latitudeDevianceAdditionalMarkers,
    position[1] + longitudeDevianceAdditionalMarkers,
  ];
  const positionMarker4 = [
    position[0] - latitudeDevianceAdditionalMarkers,
    position[1] - longitudeDevianceAdditionalMarkers,
  ];

  const positionMarker5 = [
    position[0] + 2 * latitudeDevianceAdditionalMarkers,
    position[1],
  ];

  const positionMarker6 = [
    position[0],
    position[1] + 2 * longitudeDevianceAdditionalMarkers,
  ];

  const positionMarker7 = [
    position[0] - 2 * latitudeDevianceAdditionalMarkers,
    position[1],
  ];

  const positionMarker8 = [
    position[0],
    [position[1] - 2 * longitudeDevianceAdditionalMarkers],
  ];

  const positionMarker9 = [
    position[0] + latitudeDevianceAdditionalMarkers,
    [position[1] + 3 * longitudeDevianceAdditionalMarkers],
  ];

  const positionMarker10 = [
    position[0] - latitudeDevianceAdditionalMarkers,
    [position[1] + 3 * longitudeDevianceAdditionalMarkers],
  ];

  const positionMarker11 = [
    position[0] + latitudeDevianceAdditionalMarkers,
    [position[1] - 3 * longitudeDevianceAdditionalMarkers],
  ];

  const positionMarker12 = [
    position[0] - latitudeDevianceAdditionalMarkers,
    [position[1] - 3 * longitudeDevianceAdditionalMarkers],
  ];

  function ViewComponent() {
    const map = useMap();
    map.setView(position);
  }

  return (
    <MapContainer center={position} zoom={zoomLevel}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ViewComponent />
      {showAdditionalMarkers && (
        <>
          <Marker
            icon={getIcon(weatherData.daily.weathercode[highlightedDate])}
            position={position}
          ></Marker>
          <Marker
            icon={getIcon(
              additionalData.additional1.daily.weathercode[highlightedDate]
            )}
            position={positionMarker1}
          ></Marker>
          <Marker
            icon={getIcon(
              additionalData.additional2.daily.weathercode[highlightedDate]
            )}
            position={positionMarker2}
          ></Marker>
          <Marker
            icon={getIcon(
              additionalData.additional3.daily.weathercode[highlightedDate]
            )}
            position={positionMarker3}
          ></Marker>
          <Marker
            icon={getIcon(
              additionalData.additional4.daily.weathercode[highlightedDate]
            )}
            position={positionMarker4}
          ></Marker>
          <Marker
            icon={getIcon(
              additionalData.additional5.daily.weathercode[highlightedDate]
            )}
            position={positionMarker5}
          ></Marker>
          <Marker
            icon={getIcon(
              additionalData.additional6.daily.weathercode[highlightedDate]
            )}
            position={positionMarker6}
          ></Marker>
          <Marker
            icon={getIcon(
              additionalData.additional7.daily.weathercode[highlightedDate]
            )}
            position={positionMarker7}
          ></Marker>
          <Marker
            icon={getIcon(
              additionalData.additional8.daily.weathercode[highlightedDate]
            )}
            position={positionMarker8}
          ></Marker>
          {zoomLevel === 10 && (
            <>
              <Marker
                icon={getIcon(
                  additionalData.additional9.daily.weathercode[highlightedDate]
                )}
                position={positionMarker9}
              ></Marker>
              <Marker
                icon={getIcon(
                  additionalData.additional10.daily.weathercode[highlightedDate]
                )}
                position={positionMarker10}
              ></Marker>
              <Marker
                icon={getIcon(
                  additionalData.additional11.daily.weathercode[highlightedDate]
                )}
                position={positionMarker11}
              ></Marker>
              <Marker
                icon={getIcon(
                  additionalData.additional12.daily.weathercode[highlightedDate]
                )}
                position={positionMarker12}
              ></Marker>
            </>
          )}
        </>
      )}
    </MapContainer>
  );
}
