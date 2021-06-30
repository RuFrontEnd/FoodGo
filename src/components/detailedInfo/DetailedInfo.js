import React, { useState, useEffect } from 'react';
import 'components/detailedInfo/detailedInfo.scss';

// 監控瀏覽器寬度
function DetailedInfo(props) {
  const { data, riceName, meetName, vegNameA, vegNameB, vegNameC, eggName } =
    props;
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);

  useEffect(() => {
    // console.log(
    //   data,
    //   data[0],
    //   data[0].productName,
    //   data[0].cabohydrate,
    //   riceName,
    //   riceName === data[0].productName
    // )

    // 給予營養標示邏輯
    for (let i = 0; i < data.length; i++) {
      // if()
      // 如果副食欄位有副食
      switch (riceName) {
        // 等於資料內的productName
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydrates(data[i].cabohydrate);
          setProtein(data[i].protein);
          setFat(data[i].fat);
          break;
      }
      // 如果主食欄位有主食
      switch (meetName) {
        // 等於資料內的productName
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydrates(data[i].cabohydrate);
          setProtein(data[i].protein);
          setFat(data[i].fat);
          break;
      }
      // 如果配菜A欄位有配菜
      switch (vegNameA) {
        // 等於資料內的productName
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydrates(data[i].cabohydrate);
          setProtein(data[i].protein);
          setFat(data[i].fat);
          break;
      }
      // 如果配菜B欄位有配菜
      switch (vegNameB) {
        case data[i].productName:
          setCarbohydrates(data[i].cabohydrate);
          setProtein(data[i].protein);
          setFat(data[i].fat);
          break;
      }
      // 如果配菜C欄位有配菜
      switch (vegNameC) {
        case data[i].productName:
          setCarbohydrates(data[i].cabohydrate);
          setProtein(data[i].protein);
          setFat(data[i].fat);
          break;
      }
      // 如果蛋欄位有蛋
      switch (eggName) {
        case data[i].productName:
          setCarbohydrates(data[i].cabohydrate);
          setProtein(data[i].protein);
          setFat(data[i].fat);
          break;
      }
    }

    return () => {};
  }, [data, riceName, meetName, vegNameA, vegNameB, vegNameC, eggName]);

  if (!data) {
    return;
  }
  return (
    <>
      <ul className="ru-detailedInfo">
        <li>碳水化合物: {carbohydrates}g</li>
        <li>蛋白質: {protein}g</li>
        <li>脂肪: {fat}g</li>
      </ul>
    </>
  );
}

export default DetailedInfo;
