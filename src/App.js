import "bootstrap/dist/css/bootstrap.min.css";
import Map from "./map";
import UserPanel from "./userPanel";
import { useState } from "react";
import WeatherDetails from "./weatherDetails";

function App() {
  const [position, setPosition] = useState([52.375, 4.8991996]);
  const [weatherData, setWeatherData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [additionalData, setAdditionalData] = useState({});
  const [highlightedDate, setHighlightedDate] = useState(0);
  const [showAdditionalMarkers, setShowAdditionalMarkers] = useState(false);
  const latitudeDevianceAdditionalMarkers = 0.24;
  const longitudeDevianceAdditionalMarkers = 0.4;

  document.body.style.position = "relative";

  return (
    <div className="flex-container">
      <UserPanel
        setPosition={setPosition}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        endDate={endDate}
        setEndDate={setEndDate}
        startDate={startDate}
        setStartDate={setStartDate}
        additionalData={additionalData}
        setAdditionalData={setAdditionalData}
        setShowAdditionalMarkers={setShowAdditionalMarkers}
        latitudeDevianceAdditionalMarkers={latitudeDevianceAdditionalMarkers}
        longitudeDevianceAdditionalMarkers={longitudeDevianceAdditionalMarkers}
        setHighlightedDate={setHighlightedDate}
      />
      <Map
        position={position}
        weatherData={weatherData}
        startDate={startDate}
        endDate={endDate}
        additionalData={additionalData}
        showAdditionalMarkers={showAdditionalMarkers}
        latitudeDevianceAdditionalMarkers={latitudeDevianceAdditionalMarkers}
        longitudeDevianceAdditionalMarkers={longitudeDevianceAdditionalMarkers}
        highlightedDate={highlightedDate}
      />
      <WeatherDetails
        weatherData={weatherData}
        startDate={startDate}
        endDate={endDate}
        highlightedDate={highlightedDate}
        setHighlightedDate={setHighlightedDate}
      />
    </div>
  );
}

export default App;
