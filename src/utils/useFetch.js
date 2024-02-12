import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      const fetchedData = await fetch(url);
      const parsedFetchedData = await fetchedData.json();
      setData(parsedFetchedData);
    })();
  }, [url]);
  return data;
}
