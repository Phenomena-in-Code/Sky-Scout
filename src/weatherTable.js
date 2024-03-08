import Table from "react-bootstrap/Table";
import { getImage } from "./weatherMarkers";
import leftArrow from "./images/left-arrow-svgrepo-com.svg";
import rightArrow from "./images/right-arrow-svgrepo-com.svg";
import JumpIntoViewCell from "./jumpIntoViewCell";

function WeatherTable({
  formattedDateArray,
  weatherData,
  highlightedDate,
  setHighlightedDate,
}) {
  function handleLeftClick() {
    if (highlightedDate > 0) {
      setHighlightedDate((highlightedDate) => highlightedDate - 1);
    }
  }

  function handleRightClick() {
    if (highlightedDate < formattedDateArray.length - 1) {
      setHighlightedDate((highlightedDate) => highlightedDate + 1);
    }
  }

  return (
    <Table responsive size="sm">
      <thead>
        <tr>
          <th className="sticky-col" style={{ verticalAlign: "middle" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "30px" }}
                src={leftArrow}
                alt=""
                onClick={handleLeftClick}
              ></img>
              <p>Date</p>
              <img
                style={{ width: "30px" }}
                src={rightArrow}
                alt=""
                onClick={handleRightClick}
              ></img>
            </div>
          </th>
          {formattedDateArray.map((date, i) => (
            <th
              key={i}
              className={highlightedDate === i ? "highlighted" : undefined}
            >
              {date}

              <div>
                <img
                  style={{ width: "50px", margin: "-10px" }}
                  src={getImage(weatherData.daily.weathercode[i])}
                  alt=""
                ></img>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="sticky-col">Temperature +</td>

          {/* <JumpIntoViewCell
            formattedDateArray={formattedDateArray}
            highlightedDate={highlightedDate}
            weatherData={weatherData}
          /> */}

          {formattedDateArray.map((_, i) => (
            <JumpIntoViewCell
              key={i}
              i={i}
              highlightedDate={highlightedDate}
              weatherData={weatherData}
            />

            // Hoe zorg ik er hierboven voor dat als (highlightedDate === i), dat de td met key 'i' in focus wordt gebracht?
            // id? ref?
          ))}
        </tr>

        <tr>
          <td className="sticky-col">Temperature -</td>
          {formattedDateArray.map((_, i) => (
            <td
              key={i}
              className={highlightedDate === i ? "highlighted" : undefined}
            >
              {weatherData.daily.temperature_2m_min[i]} °C
            </td>
          ))}
        </tr>
        <tr>
          <td className="sticky-col">Precipitation</td>
          {formattedDateArray.map((_, i) => (
            <td
              key={i}
              className={highlightedDate === i ? "highlighted" : undefined}
            >
              {weatherData.daily.precipitation_sum[i]} mm
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default WeatherTable;
