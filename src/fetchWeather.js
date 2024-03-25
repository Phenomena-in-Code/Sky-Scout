export default async function fetchWeather(
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
) {
  function formatDateForAPI(date) {
    var d = new Date(date);
    var month = "" + (d.getMonth() + 1);
    var day = "" + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  let smallScreen = false;
  if (window.matchMedia("(max-width: 700px)").matches) {
    smallScreen = true;
  }

  try {
    setLocationResult(null);
    setHighlightedDate(0);
    //fetch geolocation of the provided city or country name
    const fetchedGeoData = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}`,
      { signal: abortController.signal }
    );
    const parsedGeoData = await fetchedGeoData.json();
    if (parsedGeoData.results) {
      setLocationResult(parsedGeoData.results[0].name);
      const { latitude, longitude, timezone } = parsedGeoData.results["0"];
      setPosition([latitude, longitude]);
      //fetch weather data for the retrieved coordinates
      if (startDate && endDate) {
        let APIStartDate = formatDateForAPI(startDate);
        let APIEndDate = formatDateForAPI(endDate);
        const fetchedWeatherData = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&start_date=${APIStartDate}&end_date=${APIEndDate}`,
          { signal: abortController.signal }
        );
        const parsedWeatherData = await fetchedWeatherData.json();
        if (parsedWeatherData.daily) {
          // set weather data for the retrieved coordinates
          setWeatherData(parsedWeatherData);
          //get weathercodes from the geolocations deviating from the given locations according to the specified deviance and set this data in {additional data}

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
          // .. additionalMarker5
          const fetchedAdditionalData5 = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${
              latitude + 2 * latitudeDevianceAdditionalMarkers
            }&longitude=${longitude}&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
          );
          const parsedAdditionalData5 = await fetchedAdditionalData5.json();
          setAdditionalData((additionalData) => ({
            ...additionalData,
            additional5: parsedAdditionalData5,
          }));
          // .. additionalMarker6
          const fetchedAdditionalData6 = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${
              longitude + 2 * longitudeDevianceAdditionalMarkers
            }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
          );
          const parsedAdditionalData6 = await fetchedAdditionalData6.json();
          setAdditionalData((additionalData) => ({
            ...additionalData,
            additional6: parsedAdditionalData6,
          }));
          // .. additionalMarker7
          const fetchedAdditionalData7 = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${
              latitude - 2 * latitudeDevianceAdditionalMarkers
            }&longitude=${longitude}&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
          );
          const parsedAdditionalData7 = await fetchedAdditionalData7.json();
          setAdditionalData((additionalData) => ({
            ...additionalData,
            additional7: parsedAdditionalData7,
          }));
          // .. additionalMarker8
          const fetchedAdditionalData8 = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${
              longitude - 2 * longitudeDevianceAdditionalMarkers
            }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
          );
          const parsedAdditionalData8 = await fetchedAdditionalData8.json();
          setAdditionalData((additionalData) => ({
            ...additionalData,
            additional8: parsedAdditionalData8,
          }));

          if (smallScreen === false) {
            // .. additionalMarker9
            const fetchedAdditionalData9 = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${
                latitude + latitudeDevianceAdditionalMarkers
              }&longitude=${
                longitude + 3 * longitudeDevianceAdditionalMarkers
              }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
            );
            const parsedAdditionalData9 = await fetchedAdditionalData9.json();
            setAdditionalData((additionalData) => ({
              ...additionalData,
              additional9: parsedAdditionalData9,
            }));
            // .. additionalMarker10
            const fetchedAdditionalData10 = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${
                latitude - latitudeDevianceAdditionalMarkers
              }&longitude=${
                longitude + 3 * longitudeDevianceAdditionalMarkers
              }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
            );
            const parsedAdditionalData10 = await fetchedAdditionalData10.json();
            setAdditionalData((additionalData) => ({
              ...additionalData,
              additional10: parsedAdditionalData10,
            }));
            // .. additionalMarker11
            const fetchedAdditionalData11 = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${
                latitude + latitudeDevianceAdditionalMarkers
              }&longitude=${
                longitude - 3 * longitudeDevianceAdditionalMarkers
              }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
            );
            const parsedAdditionalData11 = await fetchedAdditionalData11.json();
            setAdditionalData((additionalData) => ({
              ...additionalData,
              additional11: parsedAdditionalData11,
            }));
            // .. additionalMarker12
            const fetchedAdditionalData12 = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${
                latitude - latitudeDevianceAdditionalMarkers
              }&longitude=${
                longitude - 3 * longitudeDevianceAdditionalMarkers
              }&timezone=${timezone}&daily=weathercode&start_date=${APIStartDate}&end_date=${APIEndDate}`
            );
            const parsedAdditionalData12 = await fetchedAdditionalData12.json();
            setAdditionalData((additionalData) => ({
              ...additionalData,
              additional12: parsedAdditionalData12,
            }));
          }
          //
          setShowAdditionalMarkers(true);
        }
      }
    }
  } catch (error) {
    if (!abortController.signal.aborted) {
      console.log(error);
    }
  }
}
