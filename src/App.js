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
  const [additionalData, setAdditionalData] = useState({
    additional1: null,
    additional2: null,
    additional3: null,
    additional4: null,
  });
  const [showAdditionalMarkers, setShowAdditionalMarkers] = useState(false);
  const latitudeDevianceAdditionalMarkers = 0.12;
  const longitudeDevianceAdditionalMarkers = 0.2;

  // const latitudeDevianceAdditionalMarkers = 0.06;
  // const longitudeDevianceAdditionalMarkers = 0.1;

  // can I not link to index.css in index.html to be able to remove this?
  document.body.style.position = "relative";

  return (
    <div className="flex-container">
      <UserPanel
        setPosition={setPosition}
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
      />
      <WeatherDetails
        weatherData={weatherData}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}

export default App;
