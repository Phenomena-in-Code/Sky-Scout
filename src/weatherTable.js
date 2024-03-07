import Table from "react-bootstrap/Table";
import { getImage } from "./weatherMarkers";
import leftArrow from "./images/left-arrow-svgrepo-com.svg";
import rightArrow from "./images/right-arrow-svgrepo-com.svg";

function WeatherTable({
  formattedDateArray,
  weatherData,
  highlightedDate,
  setHighlightedDate,
}) {
  // console.log(typeof formattedDateArray);
  // console.log(formattedDateArray);
  // console.log(highlightedDate);

  function handleLeftClick() {
    if (highlightedDate > 0) {
      setHighlightedDate((highlightedDate) => highlightedDate - 1);
    }
  }

  function handleRightClick() {
    // console.log("grrr");
    // console.log(highlightedDate);
    if (highlightedDate < formattedDateArray.length - 1) {
      setHighlightedDate((highlightedDate) => highlightedDate + 1);
      // console.log("grrr");
      // console.log(highlightedDate);
    }
  }

  // for (let i = formattedDateArray.length; i > 0; i--) {
  //   eval("const " + "column" + i + "= " + "useRef(null)" + ";");
  // }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th style={{ verticalAlign: "middle" }}>
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
            <th key={i} className={highlightedDate === i && "highlighted"}>
              {date}

              <div>
                <img
                  style={{ width: "50px" }}
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
          <td>Temperature +</td>
          {formattedDateArray.map((_, i) => (
            <td key={i} className={highlightedDate === i && "highlighted"}>
              {weatherData.daily.temperature_2m_max[i]} °C
            </td>
          ))}
        </tr>
        <tr>
          <td>Temperature -</td>
          {formattedDateArray.map((_, i) => (
            <td key={i} className={highlightedDate === i && "highlighted"}>
              {weatherData.daily.temperature_2m_min[i]} °C
            </td>
          ))}
        </tr>
        <tr>
          <td>Precipitation</td>
          {formattedDateArray.map((_, i) => (
            <td key={i} className={highlightedDate === i && "highlighted"}>
              {weatherData.daily.precipitation_sum[i]} mm
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default WeatherTable;
