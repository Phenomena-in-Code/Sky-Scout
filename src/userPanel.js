import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Calendar from "./calendar";
import TodayButton from "./todayButton";
import fetchWeather from "./fetchWeather";

export default function UserPanel({
  setPosition,
  weatherData,
  setWeatherData,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setAdditionalData,
  setShowAdditionalMarkers,
  latitudeDevianceAdditionalMarkers,
  longitudeDevianceAdditionalMarkers,
  setHighlightedDate,
}) {
  const [location, setLocation] = useState("");
  const [locationResult, setLocationResult] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetchWeather(
      abortController,
      location,
      startDate,
      endDate,
      latitudeDevianceAdditionalMarkers,
      longitudeDevianceAdditionalMarkers,
      setPosition,
      setWeatherData,
      setAdditionalData,
      setShowAdditionalMarkers,
      setHighlightedDate,
      setLocationResult
    );
    return () => {
      abortController.abort();
    };
  }, [
    location,
    setPosition,
    setWeatherData,
    endDate,
    startDate,
    setAdditionalData,
    setShowAdditionalMarkers,
    latitudeDevianceAdditionalMarkers,
    longitudeDevianceAdditionalMarkers,
    setHighlightedDate,
  ]);

  return (
    <div className="user-panel">
      <div className="flex-dir-row">
        <InputGroup size="lg" className="mb-0">
          <Form.Control
            style={{ padding: "4px" }}
            placeholder="Country or City..."
            aria-label="Place"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          {locationResult && (
            <InputGroup.Text
              className="location-preview"
              style={{ padding: "4px" }}
            >
              {locationResult}
            </InputGroup.Text>
          )}
        </InputGroup>
        <TodayButton
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          startDate={startDate}
          endDate={endDate}
        ></TodayButton>
      </div>
      <div className="flex-dir-row">
        <InputGroup size="lg" className="mb-0">
          <Calendar
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </InputGroup>
      </div>
    </div>
  );
}
