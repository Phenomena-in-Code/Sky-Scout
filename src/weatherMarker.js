import L from "leaflet";
import solidSun from "./images/day.svg";
import solidCloudSun from "./images/cloudy-day-1.svg";
import solidCloud from "./images/cloudy.svg";
import fog from "./images/wi-fog.svg";
import lightRain from "./images/rainy-4.svg";
import heavyRain from "./images/rainy-6.svg";
import snow from "./images/snowy-4.svg";
import thunderstorm from "./images/thunder.svg";

export const weatherMarker0 = new L.Icon({
  iconUrl: solidSun,
  iconRetinaUrl: solidSun,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});

export const weatherMarker1 = new L.Icon({
  iconUrl: solidCloudSun,
  iconRetinaUrl: solidCloudSun,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});
export const weatherMarker2 = new L.Icon({
  iconUrl: solidCloud,
  iconRetinaUrl: solidCloud,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});

export const weatherMarker3 = new L.Icon({
  iconUrl: fog,
  iconRetinaUrl: fog,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});

export const weatherMarker4 = new L.Icon({
  iconUrl: lightRain,
  iconRetinaUrl: lightRain,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});

export const weatherMarker5 = new L.Icon({
  iconUrl: heavyRain,
  iconRetinaUrl: heavyRain,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});

export const weatherMarker6 = new L.Icon({
  iconUrl: snow,
  iconRetinaUrl: snow,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});

export const weatherMarker7 = new L.Icon({
  iconUrl: thunderstorm,
  iconRetinaUrl: thunderstorm,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});

//     [[0], "☀️"], marker 0
//     [[1], "🌤"], marker 1
//     [[2], "⛅️"], marker 1
//     [[3], "☁️"], marker 2
//     [[45, 48], "🌫"], fog marker 3
//     [[51, 56, 61, 66, 80], "🌦"], light rain marker 4
//     [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"], heavy rain marker 5
//     [[71, 73, 75, 77, 85, 86], "🌨"], snowfall marker 6
//     [[95], "🌩"], thunderstorm marker 7
//     [[96, 99], "⛈"], thunderstorm with hail marker (8) made into 7
