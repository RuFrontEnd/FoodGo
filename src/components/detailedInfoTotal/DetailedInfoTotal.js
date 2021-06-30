import React, { useState, useEffect } from 'react';
import 'components/detailedInfoTotal/detailedInfoTotal.scss';

// 監控瀏覽器寬度
function DetailedInfoTotal(props) {
  const {
    data,
    riceName,
    meetName,
    vegNameA,
    vegNameB,
    vegNameC,
    eggName,
  } = props;
  const [carbohydratesRice, setCarbohydratesRice] = useState(0);
  const [proteinRice, setProteinRice] = useState(0);
  const [fatRice, setFatRice] = useState(0);

  const [carbohydratesMeet, setCarbohydratesMeet] = useState(0);
  const [proteinMeet, setProteinMeet] = useState(0);
  const [fatMeet, setFatMeet] = useState(0);

  const [carbohydratesVegA, setCarbohydratesVegA] = useState(0);
  const [proteinVegA, setProteinVegA] = useState(0);
  const [fatVegA, setFatVegA] = useState(0);

  const [carbohydratesVegB, setCarbohydratesVegB] = useState(0);
  const [proteinVegB, setProteinVegB] = useState(0);
  const [fatVegB, setFatVegB] = useState(0);

  const [carbohydratesVegC, setCarbohydratesVegC] = useState(0);
  const [proteinVegC, setProteinVegC] = useState(0);
  const [fatVegC, setFatVegC] = useState(0);

  const [carbohydratesEgg, setCarbohydratesEgg] = useState(0);
  const [proteinEgg, setProteinEgg] = useState(0);
  const [fatEgg, setFatEgg] = useState(0);

  const [totalCarbohydrates, setTotalCarbohydrates] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  useEffect(() => {
    // console.log(
    //   data,
    //   data[0],
    //   data[0].productName,
    //   data[0].cabohydrate,
    //   riceName,
    //   riceName === data[0].productName
    // );

    // 給予營養標示邏輯
    for (let i = 0; i < data.length; i++) {
      // 如果副食欄位有副食
      switch (riceName) {
        // 等於資料內的productName
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydratesRice(data[i].cabohydrate);
          setProteinRice(data[i].protein);
          setFatRice(data[i].fat);
          break;
      }
      // 如果主食欄位有主食
      switch (meetName) {
        // 等於資料內的productName
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydratesMeet(data[i].cabohydrate);
          setProteinMeet(data[i].protein);
          setFatMeet(data[i].fat);
          break;
      }
      // 如果配菜A欄位有配菜
      switch (vegNameA) {
        // 等於資料內的productName
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydratesVegA(data[i].cabohydrate);
          setProteinVegA(data[i].protein);
          setFatVegA(data[i].fat);
          break;
      }
      // 如果配菜B欄位有配菜
      switch (vegNameB) {
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydratesVegB(data[i].cabohydrate);
          setProteinVegB(data[i].protein);
          setFatVegB(data[i].fat);
          break;
      }
      // 如果配菜C欄位有配菜
      switch (vegNameC) {
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydratesVegC(data[i].cabohydrate);
          setProteinVegC(data[i].protein);
          setFatVegC(data[i].fat);
          break;
      }
      // 如果蛋欄位有蛋
      switch (eggName) {
        case data[i].productName:
          // 給予該項產品的 碳水化合物 / 蛋白質 / 脂肪 克數
          setCarbohydratesEgg(data[i].cabohydrate);
          setProteinEgg(data[i].protein);
          setFatEgg(data[i].fat);
          break;
      }
    }

    // 加總碳水化合物
    setTotalCarbohydrates(
      carbohydratesRice +
        carbohydratesMeet +
        carbohydratesVegA +
        carbohydratesVegB +
        carbohydratesVegC +
        carbohydratesEgg
    );
    // 加總蛋白質
    setTotalProtein(
      proteinRice +
        proteinMeet +
        proteinVegA +
        proteinVegB +
        proteinVegC +
        proteinEgg
    );
    // 加總脂肪
    setTotalFat(fatRice + fatMeet + fatVegA + fatVegB + fatVegC + fatEgg);

    return () => {};
  }, [
    data,
    riceName,
    meetName,
    vegNameA,
    vegNameB,
    vegNameC,
    eggName,
    carbohydratesRice,
    proteinRice,
    fatRice,
    carbohydratesMeet,
    proteinMeet,
    fatMeet,
    carbohydratesVegA,
    proteinVegA,
    fatVegA,
    carbohydratesVegB,
    proteinVegB,
    fatVegB,
    carbohydratesVegC,
    proteinVegC,
    fatVegC,
    carbohydratesEgg,
    proteinEgg,
    fatEgg,
    totalCarbohydrates,
    totalProtein,
    totalFat,
  ]);

  if (!data) {
    return;
  }
  return (
    <>
      <ul className="ru-detailedInfoTotal">
        <li>總碳水化合物: {totalCarbohydrates}g</li>
        <li>總蛋白質: {totalProtein}g</li>
        <li>總脂肪: {totalFat}g</li>
      </ul>
    </>
  );
}

export default DetailedInfoTotal;
