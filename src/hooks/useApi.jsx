import { useEffect, useState } from "react";

/**
 * Custom hook for making API requests and managing loading and error states.
 *
 * @param {string} url - The URL of the API to fetch data from.
 * @returns {Object} - An object containing the fetched data, loading state, and error state.
 * @example
 * const { data, isLoading, isError } = useApi('https://api.example.com/data');
 */

export default function useApi(url) {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);

  return { data, isLoading, isError };
}
