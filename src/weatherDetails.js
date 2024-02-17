export default function WeatherDetails({ weatherData }) {
  function getFormattedDate(date) {
    let formattedDate = new Intl.DateTimeFormat("en", {
      weekday: "short",
      month: "long",
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

  function Day({ date, low, high, code }) {
    return (
      <div className="day">
        <p>{date}</p>
        <p>Low: {low}</p>
        <p>High: {high}</p>
        <p>{code}</p>
      </div>
    );
  }

  return (
    weatherData && (
      <div className="weather-details">
        {formattedDateArray.map((date, i) => (
          <Day
            key={date}
            date={date}
            low={weatherData.daily.temperature_2m_min[i]}
            high={weatherData.daily.temperature_2m_max[i]}
            code={weatherData.daily.weathercode[i]}
          />
        ))}
      </div>
    )
  );
}
