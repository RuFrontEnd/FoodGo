import React, { useState, useEffect } from 'react';
import 'Ru/Components/RuCards/Style.scss';
import RuNothing from 'Ru/Components/RuNothing/RuNothing';
import RuCard from 'Ru/Components/RuCard/RuCard';

// 引用圖片
import background from './Images/background.png';

function RuSalad(props) {
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

  const [isShowNothing, setIsShowNothing] = useState(false);
  // 後端資料
  const [data, setData] = useState('');
  const [dataFav, setDataFav] = useState('');
  const [showFavArr, setShowFavArr] = useState([]);

  // 向後端請求資料
  useEffect(() => {
    fetch('http://localhost:5000/product/bento') // 非同步
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson)
        const copyJson = [...myJson];
        setData(copyJson);
      });

    // 拿 我的最愛
    fetch('http://localhost:5000/member/myFavList') // 非同步
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson)
        const copyJsonFav = [...myJson];
        setDataFav(copyJsonFav);
        // console.log(copyJsonFav);
      });
  }, []);

  useEffect(() => {
    // 等待兩個fetch都結束
    if (!data || !dataFav) {
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
    let title1 = data[12].productname;
    let title2 = data[13].productname;
    let title3 = data[14].productname;
    let title4 = data[15].productname;
    let title5 = data[16].productname;
    let title6 = data[17].productname;
    let title7 = data[18].productname;
    let title8 = data[19].productname;
    let title9 = data[20].productname;
    let title10 = data[21].productname;
    const $containerA = document.querySelector('.ru-itemWarp');

    // 第一次掛載DOM 與 每次state改變時 都會觸發
    // console.log(searchInput)
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
    if (
      title1.indexOf(searchInput) == -1 &&
      title2.indexOf(searchInput) == -1 &&
      title3.indexOf(searchInput) == -1 &&
      title4.indexOf(searchInput) == -1 &&
      title5.indexOf(searchInput) == -1 &&
      title6.indexOf(searchInput) == -1 &&
      title7.indexOf(searchInput) == -1 &&
      title8.indexOf(searchInput) == -1 &&
      title9.indexOf(searchInput) == -1
    ) {
      setIsShowNothing(true);
    }
    return () => {};
  }, [searchInput, data, dataFav]); // 如果這邊沒有設定state, 就只會在掛載時執行一次 / 如果有, 在每次state變動時都會執行一次.
  // 搜尋功能 e
  if (!data || !dataFav) {
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
            {itemWarp1 && (
              <RuCard
                data={data}
                title={data[12].productname}
                comment={data[12].contentNum}
                buy={data[12].purchased}
                price={data[12].price}
                stars={data[12].startRating}
                id={'ru-addCart-btn-12'}
                proudctId={data[12].sid}
                parentId={'ru-addCart-btn-warp-12'}
                imgId={data[12].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp2 && (
              <RuCard
                data={data}
                title={data[13].productname}
                comment={data[13].contentNum}
                buy={data[13].purchased}
                price={data[13].price}
                stars={data[13].startRating}
                id={'ru-addCart-btn-13'}
                proudctId={data[13].sid}
                parentId={'ru-addCart-btn-warp-13'}
                imgId={data[13].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp3 && (
              <RuCard
                data={data}
                title={data[14].productname}
                comment={data[14].contentNum}
                buy={data[14].purchased}
                price={data[14].price}
                stars={data[14].startRating}
                id={'ru-addCart-btn-14'}
                proudctId={data[14].sid}
                parentId={'ru-addCart-btn-warp-14'}
                imgId={data[14].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}

            {itemWarp4 && (
              <RuCard
                data={data}
                title={data[15].productname}
                comment={data[15].contentNum}
                buy={data[15].purchased}
                price={data[15].price}
                stars={data[15].startRating}
                id={'ru-addCart-btn-15'}
                proudctId={data[15].sid}
                parentId={'ru-addCart-btn-warp-15'}
                imgId={data[15].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp5 && (
              <RuCard
                data={data}
                title={data[16].productname}
                comment={data[16].contentNum}
                buy={data[16].purchased}
                price={data[16].price}
                stars={data[16].startRating}
                id={'ru-addCart-btn-16'}
                proudctId={data[16].sid}
                parentId={'ru-addCart-btn-warp-16'}
                imgId={data[16].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp6 && (
              <RuCard
                data={data}
                title={data[17].productname}
                comment={data[17].contentNum}
                buy={data[17].purchased}
                price={data[17].price}
                stars={data[17].startRating}
                id={'ru-addCart-btn-17'}
                proudctId={data[17].sid}
                parentId={'ru-addCart-btn-warp-17'}
                imgId={data[17].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}

            {itemWarp7 && (
              <RuCard
                data={data}
                title={data[18].productname}
                comment={data[18].contentNum}
                buy={data[18].purchased}
                price={data[18].price}
                stars={data[18].startRating}
                id={'ru-addCart-btn-18'}
                proudctId={data[18].sid}
                parentId={'ru-addCart-btn-warp-18'}
                imgId={data[18].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp8 && (
              <RuCard
                data={data}
                title={data[19].productname}
                comment={data[19].contentNum}
                buy={data[19].purchased}
                price={data[19].price}
                stars={data[19].startRating}
                id={'ru-addCart-btn-19'}
                proudctId={data[19].sid}
                parentId={'ru-addCart-btn-warp-19'}
                imgId={data[19].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp9 && (
              <RuCard
                data={data}
                title={data[20].productname}
                comment={data[20].contentNum}
                buy={data[20].purchased}
                price={data[20].price}
                stars={data[20].startRating}
                id={'ru-addCart-btn-20'}
                proudctId={data[20].sid}
                parentId={'ru-addCart-btn-warp-20'}
                imgId={data[20].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp10 && (
              <RuCard
                data={data}
                title={data[21].productname}
                comment={data[21].contentNum}
                buy={data[21].purchased}
                price={data[21].price}
                stars={data[21].startRating}
                id={'ru-addCart-btn-21'}
                proudctId={data[21].sid}
                parentId={'ru-addCart-btn-warp-21'}
                imgId={data[21].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
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

export default RuSalad;
