import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = (url, params) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(url, params).then((res) => {
      setData(res.data[0]);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, setData };
};

export default useGetData;
