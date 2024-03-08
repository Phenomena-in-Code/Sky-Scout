import WeatherTable from "./weatherTable";

export default function WeatherDetails({
  weatherData,
  highlightedDate,
  setHighlightedDate,
}) {
  function getFormattedDate(date) {
    let formattedDate = new Intl.DateTimeFormat("en", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
    return formattedDate;
  }

  let formattedDateArray;

  weatherData &&
    (formattedDateArray = weatherData?.daily?.time?.map((date) =>
      getFormattedDate(date)
    ));
  console.log(formattedDateArray);

  return (
    weatherData && (
      <div className="weatherTable">
        <WeatherTable
          formattedDateArray={formattedDateArray}
          weatherData={weatherData}
          highlightedDate={highlightedDate}
          setHighlightedDate={setHighlightedDate}
        />
      </div>
    )
  );

  // function Day({ date, low, high, precipitation, code }) {
  //   return (
  //     <div className="day">
  //       <p>{date}</p>
  //       <p>Temperature High: {high}°C</p>
  //       <p>Temperature Low: {low}°C</p>
  //       <p>Daily precipitation: {precipitation}mm</p>
  //       <p>
  //         <img src={getImage(code)} alt=""></img>
  //       </p>
  //     </div>
  //   );
  // }

  // return (
  //   weatherData && (
  //     <div className="weather-details">
  //       {formattedDateArray.map((date, i) => (
  //         <Day
  //           key={date}
  //           date={date}
  //           low={weatherData.daily.temperature_2m_min[i]}
  //           high={weatherData.daily.temperature_2m_max[i]}
  //           precipitation={weatherData.daily.precipitation_sum[i]}
  //           code={weatherData.daily.weathercode[i]}
  //         />
  //       ))}
  //     </div>
  //   )
  // );
}
