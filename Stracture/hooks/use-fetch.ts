import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

interface FetchedData {
  data: Array<any>;
  isLoading: boolean;
  error: boolean;
}

const useFetch = (url: string) => {
  const [fetchedData, setFetchedData] = useState<FetchedData>({
    data: [],
    isLoading: true,
    error: false,
  });
  const cancelTokenSource = axios.CancelToken.source();
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url, {
        cancelToken: cancelTokenSource.token,
      });
      setFetchedData({
        data: response.data,
        isLoading: false,
        error: false,
      });
    } catch (e) {
      if (axios.isCancel(e)) {
        console.warn('fetching data abborted');
      } else {
        console.error('error occured while fetching data');
      }
      setFetchedData({
        data: [],
        isLoading: false,
        error: true,
      });
    }
  }, [url]);

  useEffect(() => {
    fetchData();

    return () => cancelTokenSource.cancel();
  }, [url, fetchData]);

  const {data, isLoading, error} = fetchedData;
  return {data, isLoading, error};
};

export default useFetch;
