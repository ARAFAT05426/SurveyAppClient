import { useState, useEffect } from 'react';
import axios from 'axios';

const useRefetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}${url}`, { withCredentials: true });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useRefetch;
