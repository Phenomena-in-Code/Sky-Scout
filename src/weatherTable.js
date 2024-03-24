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
  function handleLeftArrow() {
    if (highlightedDate > 0) {
      setHighlightedDate((highlightedDate) => highlightedDate - 1);
    }
  }

  function handleRightArrow() {
    if (highlightedDate < formattedDateArray.length - 1) {
      setHighlightedDate((highlightedDate) => highlightedDate + 1);
    }
  }

  return (
    <Table responsive size="sm" bordered>
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
                onClick={handleLeftArrow}
              ></img>
              <p>Date</p>
              <img
                style={{ width: "30px" }}
                src={rightArrow}
                alt=""
                onClick={handleRightArrow}
              ></img>
            </div>
          </th>
          {formattedDateArray.map((date, i) => (
            <th
              key={i}
              className={highlightedDate === i ? "highlighted" : undefined}
              onClick={() => {
                setHighlightedDate(i);
              }}
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

          {formattedDateArray.map((_, i) => (
            <JumpIntoViewCell
              key={i}
              i={i}
              highlightedDate={highlightedDate}
              weatherData={weatherData}
              setHighlightedDate={setHighlightedDate}
            />
          ))}
        </tr>

        <tr>
          <td className="sticky-col">Temperature -</td>
          {formattedDateArray.map((_, i) => (
            <td
              key={i}
              className={highlightedDate === i ? "highlighted" : undefined}
              onClick={() => {
                setHighlightedDate(i);
              }}
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
              onClick={() => {
                setHighlightedDate(i);
              }}
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
