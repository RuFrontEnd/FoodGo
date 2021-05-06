import React, { useState, useEffect } from 'react';
import 'Cha/Components/Cha-Components/Style.css';

function ChaApp(props) {
  const [total, setTotal] = useState(0);
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);

  // 載入資料用
  async function getTotalFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true);

    const url = 'http://localhost:5555/counter/1';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      //console.log(data)
      setTotal(data.total);
    } catch (error) {
      setError(error);
    }
  }

  // 載入資料用
  async function updateTotalToServer(value) {
    // 開啟載入的指示圖示
    setDataLoading(true);

    const newTotal = { total: total + value };

    const url = 'http://localhost:5555/counter/1';

    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newTotal),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    try {
      const response = await fetch(request);
      const data = await response.json();
      // data會是一個物件值
      console.log(data);

      // 驗証成功後再設定…
      setTotal(total + value);
    } catch (error) {
      setError(error);
    }
  }

  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getTotalFromServer();
  }, []);

  // 每次total資料有改變，2秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 700);
  }, [total]);

  const loading = (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  const display = (
    <>
      <h1>{total}</h1>
      <button className="A" onClick={() => updateTotalToServer(1)}>
        +1
      </button>
      <button onClick={() => updateTotalToServer(-1)}>-1</button>
    </>
  );

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display;
}

export default ChaApp;
