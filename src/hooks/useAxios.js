import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, method, params) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(url, params).then((res) => {
      setData(res.data[0]);
    });
  };

  const postData = () => {
    axios.get(url, params).then((res) => {
      setData(res.data[0]);
    });
  };

  useEffect(() => {
    if (method === 'get') {
      getData();
    }
    if (method === 'post') {
      postData();
    }
  }, []);

  return data;
};

export default useAxios;
