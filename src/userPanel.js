import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Calendar from "./calendar";
import TodayButton from "./todayButton";

export default function UserPanel({
  setPosition,
  setWeatherData,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setAdditionalData,
  setShowAdditionalMarkers,
  latitudeDevianceAdditionalMarkers,
  longitudeDevianceAdditionalMarkers,
}) {
  const [location, setLocation] = useState("");

  function formatDateForAPI(date) {
    var d = new Date(date);
    var month = "" + (d.getMonth() + 1);
    var day = "" + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      try {
        //fetch geolocation
        const fetchedGeoData = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`,
          { signal: abortController.signal }
        );
        const parsedGeoData = await fetchedGeoData.json();
        if (parsedGeoData.results) {
          const { latitude, longitude, timezone, name } =
            parsedGeoData.results["0"];
          setPosition([latitude, longitude]);
          //fetch actual data
          let APIStartDate = formatDateForAPI(startDate);
          let APIEndDate = formatDateForAPI(endDate);
          const fetchedWeatherData = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min&start_date=${APIStartDate}&end_date=${APIEndDate}`,
            { signal: abortController.signal }
          );
          const parsedWeatherData = await fetchedWeatherData.json();
          if (parsedWeatherData.daily) {
            setWeatherData(parsedWeatherData);
            console.log(parsedWeatherData);
            //get weathercodes from geolocations deviating from the above, to draw logos on map
            //get weathercode for additionalMarker1
            const fetchedAdditionalData1 = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${
                latitude + latitudeDevianceAdditionalMarkers
              }&longitude=${
                longitude + longitudeDevianceAdditionalMarkers
              }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
            );
            const parsedAdditionalData1 = await fetchedAdditionalData1.json();
            setAdditionalData((additionalData) => ({
              ...additionalData,
              additional1: parsedAdditionalData1,
            }));
            // get weathercode for additionalMarker2
            const fetchedAdditionalData2 = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${
                latitude + latitudeDevianceAdditionalMarkers
              }&longitude=${
                longitude - longitudeDevianceAdditionalMarkers
              }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
            );
            const parsedAdditionalData2 = await fetchedAdditionalData2.json();
            setAdditionalData((additionalData) => ({
              ...additionalData,
              additional2: parsedAdditionalData2,
            }));
            // get weathercode for additionalMarker3
            const fetchedAdditionalData3 = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${
                latitude - latitudeDevianceAdditionalMarkers
              }&longitude=${
                longitude + longitudeDevianceAdditionalMarkers
              }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
            );
            const parsedAdditionalData3 = await fetchedAdditionalData3.json();
            setAdditionalData((additionalData) => ({
              ...additionalData,
              additional3: parsedAdditionalData3,
            }));
            // get weathercode for additionalMarker4
            const fetchedAdditionalData4 = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${
                latitude - latitudeDevianceAdditionalMarkers
              }&longitude=${
                longitude - longitudeDevianceAdditionalMarkers
              }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
            );
            const parsedAdditionalData4 = await fetchedAdditionalData4.json();
            setAdditionalData((additionalData) => ({
              ...additionalData,
              additional4: parsedAdditionalData4,
            }));
            //
            setShowAdditionalMarkers(true);
            console.log(parsedAdditionalData1);
          }
        }
      } catch (error) {
        // if (!abortController.signal.aborted) {
        //   console.log(error);
        // }
        console.log(error);
        //alert?
      }
    }
    if (startDate && endDate) {
      fetchData();
    }
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
  ]);

  return (
    <div className="user-panel">
      <div className="flex-dir-row">
        <InputGroup size="lg" className="mb-0">
          <Form.Control
            placeholder="Country or City..."
            aria-label="Place"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
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
