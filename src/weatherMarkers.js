import L from "leaflet";
import solidSun from "./images/day.svg";
import solidCloudSun from "./images/cloudy-day-1.svg";
import solidCloud from "./images/cloudy.svg";
import fog from "./images/wi-fog.svg";
import lightRain from "./images/rainy-4.svg";
import heavyRain from "./images/rainy-6.svg";
import snow from "./images/snowy-4.svg";
import thunderstorm from "./images/thunder.svg";

export function getIcon(weathercode) {
  switch (true) {
    case [0].includes(weathercode):
      return weatherMarker0;
    case [1, 2].includes(weathercode):
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

export function getImage(weathercode) {
  switch (true) {
    case [0].includes(weathercode):
      return solidSun;
    case [1, 2].includes(weathercode):
      return solidCloudSun;
    case [3].includes(weathercode):
      return solidCloud;
    case [45, 48].includes(weathercode):
      return fog;
    case [51, 56, 61, 66, 80].includes(weathercode):
      return lightRain;
    case [53, 55, 63, 65, 57, 67, 81, 82].includes(weathercode):
      return heavyRain;
    case [71, 73, 75, 77, 85, 86].includes(weathercode):
      return snow;
    case [95, 96, 99].includes(weathercode):
      return thunderstorm;
    default:
      console.log("Weathercode not found");
  }
}

export const weatherMarker0 = new L.Icon({
  iconUrl: solidSun,
  iconRetinaUrl: solidSun,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(120, 120),
});

export const weatherMarker1 = new L.Icon({
  iconUrl: solidCloudSun,
  iconRetinaUrl: solidCloudSun,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(120, 120),
});
export const weatherMarker2 = new L.Icon({
  iconUrl: solidCloud,
  iconRetinaUrl: solidCloud,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(120, 120),
});

export const weatherMarker3 = new L.Icon({
  iconUrl: fog,
  iconRetinaUrl: fog,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(120, 120),
});

export const weatherMarker4 = new L.Icon({
  iconUrl: lightRain,
  iconRetinaUrl: lightRain,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(120, 120),
});

export const weatherMarker5 = new L.Icon({
  iconUrl: heavyRain,
  iconRetinaUrl: heavyRain,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(120, 120),
});

export const weatherMarker6 = new L.Icon({
  iconUrl: snow,
  iconRetinaUrl: snow,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(120, 120),
});

export const weatherMarker7 = new L.Icon({
  iconUrl: thunderstorm,
  iconRetinaUrl: thunderstorm,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(120, 120),
});
