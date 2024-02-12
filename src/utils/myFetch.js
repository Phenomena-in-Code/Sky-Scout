export default async function myFetch(url) {
  const fetchedData = await fetch(url);
  const parsedFetchedData = await fetchedData.json();
  return parsedFetchedData;
}
