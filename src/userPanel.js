import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Calendar from "./calendar";
import ToggleButtons from "./toggleButtons";

export default function UserPanel() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  // in try catch finally block (error start with console.log(err);, later change)

  useEffect(() => {
    async function fetchGeoData() {
      try {
        //fetch geolocation
        const fetchedGeoData = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const parsedFetchedGeoData = await fetchedGeoData.json();
        if (parsedFetchedGeoData.results) {
          const { latitude, longitude, timezone, name } =
            parsedFetchedGeoData.results["0"];
          //fetch actual weather data
          //TODO add start date and end date for data
          const weatherData = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min&start_date=2024-02-15&end_date=2024-02-17`
          );
          const parsedWeatherData = await weatherData.json();
          setWeatherData(parsedWeatherData);
          console.log(parsedWeatherData);
        }
      } catch (error) {
        console.log(error);
        //alert?
      }
    }
    fetchGeoData();
  }, [location]);

  return (
    <div className="user-panel">
      {/* Only use data if the returned object is no empty object. Empty objects are returned by geo-api if no match is found */}
      {/* {data?.results?.["0"]?.id && <div>{data.results["0"].id}</div>} */}
      <div className="flex-dir-row">
        <InputGroup size="lg" className="mb-0">
          {/* <InputGroup.Text id="city">Where?</InputGroup.Text> */}
          <Form.Control
            placeholder="City..."
            aria-label="City"
            onChange={(e) => setLocation(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className="flex-dir-row">
        <InputGroup size="lg" className="mb-0">
          {/* <InputGroup.Text id="date">When?</InputGroup.Text> */}
          <ToggleButtons></ToggleButtons>
          <Calendar />
        </InputGroup>
      </div>
    </div>
  );
}

/* <ToggleButton
        type="checkbox"
        variant="secondary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton> */

/* <FloatingLabel
        controlId="floatingCity"
        label="Which City?"
        className="mb-3"
      >
        <Form.Control type="string" placeholder="Which City?" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingDate" label="Which Date">
        <Form.Control type="date" placeholder="Which Date?" />
      </FloatingLabel> */

/* <Button variant="secondary" id="weather-input" as="input"></Button> */
