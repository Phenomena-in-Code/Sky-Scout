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
      <div className="weatherTable shadow-lg">
        <WeatherTable
          formattedDateArray={formattedDateArray}
          weatherData={weatherData}
          highlightedDate={highlightedDate}
          setHighlightedDate={setHighlightedDate}
        />
      </div>
    )
  );
}
