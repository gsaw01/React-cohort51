import { useState, useEffect } from 'react';

export const useFetch = (initialUrl = null) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}. ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(`Error fetching data: ${err.message}`);
        setError(`Failed to fetch data`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error, setUrl };
};
