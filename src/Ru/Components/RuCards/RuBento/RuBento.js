import React, { useState, useEffect } from 'react';
import 'Ru/Components/RuCards/Style.scss';
import RuNothing from 'Ru/Components/RuNothing/RuNothing';
import RuCard from 'Ru/Components/RuCard/RuCard';
import axios from 'axios';

function RuBento(props) {
  const { searchInput, handleCartNumber, currentUser, count, setCount } = props;
  const [itemWarp1, setItemWarp1] = useState(false);
  const [itemWarp2, setItemWarp2] = useState(false);
  const [itemWarp3, setItemWarp3] = useState(false);
  const [itemWarp4, setItemWarp4] = useState(false);
  const [itemWarp5, setItemWarp5] = useState(false);
  const [itemWarp6, setItemWarp6] = useState(false);
  const [itemWarp7, setItemWarp7] = useState(false);
  const [itemWarp8, setItemWarp8] = useState(false);
  const [itemWarp9, setItemWarp9] = useState(false);
  const [itemWarp10, setItemWarp10] = useState(false);
  const [itemWarp11, setItemWarp11] = useState(false);
  const [itemWarp12, setItemWarp12] = useState(false);
  const [isShowNothing, setIsShowNothing] = useState(false);
  const [commodities, setCommodities] = useState([]);
  const [dataFav, setDataFav] = useState('');
  const [showFavArr, setShowFavArr] = useState([]);

  // 向後端請求資料
  useEffect(() => {
    // 拿商品列表
    axios.get('http://localhost:5000/product/bento').then((res) => {
      setCommodities(res.data);
    });
    axios.get('http://localhost:5000/member/myFavList').then((res) => {
      setDataFav(res.data);
    });
  }, []);

  useEffect(() => {
    // 第一次掛載DOM 與 每次state改變時 都會觸發
    // console.log(searchInput)

    // 等待兩個fetch都結束
    if (!commodities || !dataFav) {
      return;
    }

    // 拿到有幾筆要固定我的最愛按鈕 邏輯
    const favArr = []; // 放抓到的dataFav[i].product_sid資料
    for (let i = 0; i < dataFav.length; i++) {
      // 如果當前會員 跟 我的最愛資料表的member_sid匹配
      if (currentUser === dataFav[i].member_sid) {
        // console.log(dataFav[i].product_sid)
        favArr.push(dataFav[i].product_sid);
      }
    }
    // console.log(favArr)
    setShowFavArr(favArr); // 這樣才可以傳到RuAddFavorite
    // console.log(showFavArr)

    // 搜尋功能 s
    let title1 = commodities[0].productname;
    let title2 = commodities[1].productname;
    let title3 = commodities[2].productname;
    let title4 = commodities[3].productname;
    let title5 = commodities[4].productname;
    let title6 = commodities[5].productname;
    let title7 = commodities[6].productname;
    let title8 = commodities[7].productname;
    let title9 = commodities[8].productname;
    let title10 = commodities[9].productname;
    let title11 = commodities[10].productname;
    let title12 = commodities[11].productname;
    const $containerA = document.querySelector('.ru-itemWarp');

    setItemWarp1(true);
    setItemWarp2(true);
    setItemWarp3(true);
    setItemWarp4(true);
    setItemWarp5(true);
    setItemWarp6(true);
    setItemWarp7(true);
    setItemWarp8(true);
    setItemWarp9(true);
    setItemWarp10(true);
    setItemWarp11(true);
    setItemWarp12(true);
    setIsShowNothing(false);

    if (title1.indexOf(searchInput) == -1) {
      setItemWarp1(false);
    }
    if (title2.indexOf(searchInput) == -1) {
      setItemWarp2(false);
    }
    if (title3.indexOf(searchInput) == -1) {
      setItemWarp3(false);
    }
    if (title4.indexOf(searchInput) == -1) {
      setItemWarp4(false);
    }
    if (title5.indexOf(searchInput) == -1) {
      setItemWarp5(false);
    }
    if (title6.indexOf(searchInput) == -1) {
      setItemWarp6(false);
    }
    if (title7.indexOf(searchInput) == -1) {
      setItemWarp7(false);
    }
    if (title8.indexOf(searchInput) == -1) {
      setItemWarp8(false);
    }
    if (title9.indexOf(searchInput) == -1) {
      setItemWarp9(false);
    }
    if (title10.indexOf(searchInput) == -1) {
      setItemWarp10(false);
    }
    if (title11.indexOf(searchInput) == -1) {
      setItemWarp11(false);
    }
    if (title12.indexOf(searchInput) == -1) {
      setItemWarp12(false);
    }
    if (
      title1.indexOf(searchInput) == -1 &&
      title2.indexOf(searchInput) == -1 &&
      title3.indexOf(searchInput) == -1 &&
      title4.indexOf(searchInput) == -1 &&
      title5.indexOf(searchInput) == -1 &&
      title6.indexOf(searchInput) == -1 &&
      title7.indexOf(searchInput) == -1 &&
      title8.indexOf(searchInput) == -1 &&
      title9.indexOf(searchInput) == -1 &&
      title10.indexOf(searchInput) == -1 &&
      title11.indexOf(searchInput) == -1 &&
      title12.indexOf(searchInput) == -1
    ) {
      setIsShowNothing(true);
    }
    // 搜尋功能 e
    return () => {};
  }, [searchInput, commodities, dataFav]); // 如果這邊沒有設定state, 就只會在掛載時執行一次 / 如果有, 在每次state變動時都會執行一次.

  // 等待兩個fetch都結束
  if (!commodities || !dataFav) {
    return <></>;
  }
  return (
    <>
      {/* 商品區 - 網頁版 s */}
      <div className="ru-item-container">
        {/* 卡片區 s */}
        <div className="ru-card-warp">
          <div className="ru-itemWarp">
            {isShowNothing && <RuNothing />}
            {commodities.map((commodity, index) => (
              <RuCard
                data={commodities}
                dataFav={dataFav}
                title={commodity.productname}
                comment={commodity.contentNum}
                buy={commodity.purchased}
                price={commodity.price}
                stars={commodity.startRating}
                id={`ru-addCart-btn-${index + 1}`}
                proudctId={commodity.sid}
                parentId={`ru-addCart-btn-warp-${index + 1}`}
                imgId={commodity.img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            ))}
          </div>
        </div>
        {/* 卡片區 e */}
        {/* 背景米圖 s */}
        {/* <img src={background}></img> */}
        {/* 背景米圖 e */}
      </div>
    </>
  );
}

export default RuBento;
