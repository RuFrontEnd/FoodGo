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
  const [data, setData] = useState('');
  const [dataFav, setDataFav] = useState('');
  const [showFavArr, setShowFavArr] = useState([]);

  // 向後端請求資料
  useEffect(() => {
    // // 拿商品列表
    axios.get('http://localhost:5000/product/bento').then((res) => {
      console.log('res', res);
      setData(res.data);
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
        console.log(copyJsonFav);
      });
  }, []);
  // 第二種寫法
  // useEffect(async () => {
  //   // 拿商品列表
  //   const promiseData = await axios.get('http://localhost:5000/product/bento'); // 等待promise物件回傳
  //   setData(promiseData.data); // 再執行非同步的setData
  // }, []);

  useEffect(() => {
    // 第一次掛載DOM 與 每次state改變時 都會觸發
    // console.log(searchInput)

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
    let title1 = data[0].productname;
    let title2 = data[1].productname;
    let title3 = data[2].productname;
    let title4 = data[3].productname;
    let title5 = data[4].productname;
    let title6 = data[5].productname;
    let title7 = data[6].productname;
    let title8 = data[7].productname;
    let title9 = data[8].productname;
    let title10 = data[9].productname;
    let title11 = data[10].productname;
    let title12 = data[11].productname;
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
  }, [searchInput, data, dataFav]); // 如果這邊沒有設定state, 就只會在掛載時執行一次 / 如果有, 在每次state變動時都會執行一次.

  // 等待兩個fetch都結束
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
                dataFav={dataFav}
                title={data[0].productname}
                comment={data[0].contentNum}
                buy={data[0].purchased}
                price={data[0].price}
                stars={data[0].startRating}
                id={'ru-addCart-btn-1'}
                proudctId={data[0].sid}
                parentId={'ru-addCart-btn-warp-1'}
                imgId={data[0].img_id}
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
                dataFav={dataFav}
                title={data[1].productname}
                comment={data[1].contentNum}
                buy={data[1].purchased}
                price={data[1].price}
                stars={data[1].startRating}
                id={'ru-addCart-btn-2'}
                proudctId={data[1].sid}
                parentId={'ru-addCart-btn-warp-2'}
                imgId={data[1].img_id}
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
                dataFav={dataFav}
                title={data[2].productname}
                comment={data[2].contentNum}
                buy={data[2].purchased}
                price={data[2].price}
                stars={data[2].startRating}
                id={'ru-addCart-btn-3'}
                proudctId={data[2].sid}
                parentId={'ru-addCart-btn-warp-3'}
                imgId={data[2].img_id}
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
                dataFav={dataFav}
                title={data[3].productname}
                comment={data[3].contentNum}
                buy={data[3].purchased}
                price={data[3].price}
                stars={data[3].startRating}
                id={'ru-addCart-btn-4'}
                proudctId={data[3].sid}
                parentId={'ru-addCart-btn-warp-4'}
                imgId={data[3].img_id}
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
                dataFav={dataFav}
                title={data[4].productname}
                comment={data[4].contentNum}
                buy={data[4].purchased}
                price={data[4].price}
                stars={data[4].startRating}
                id={'ru-addCart-btn-5'}
                proudctId={data[4].sid}
                parentId={'ru-addCart-btn-warp-5'}
                imgId={data[4].img_id}
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
                dataFav={dataFav}
                title={data[5].productname}
                comment={data[5].contentNum}
                buy={data[5].purchased}
                price={data[5].price}
                stars={data[5].startRating}
                id={'ru-addCart-btn-6'}
                proudctId={data[5].sid}
                parentId={'ru-addCart-btn-warp-6'}
                imgId={data[5].img_id}
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
                dataFav={dataFav}
                title={data[6].productname}
                comment={data[6].contentNum}
                buy={data[6].purchased}
                price={data[6].price}
                stars={data[6].startRating}
                id={'ru-addCart-btn-7'}
                proudctId={data[6].sid}
                parentId={'ru-addCart-btn-warp-7'}
                imgId={data[6].img_id}
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
                dataFav={dataFav}
                title={data[7].productname}
                comment={data[7].contentNum}
                buy={data[7].purchased}
                price={data[7].price}
                stars={data[7].startRating}
                id={'ru-addCart-btn-8'}
                proudctId={data[7].sid}
                parentId={'ru-addCart-btn-warp-8'}
                imgId={data[7].img_id}
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
                dataFav={dataFav}
                title={data[8].productname}
                comment={data[8].contentNum}
                buy={data[8].purchased}
                price={data[8].price}
                stars={data[8].startRating}
                id={'ru-addCart-btn-9'}
                proudctId={data[8].sid}
                parentId={'ru-addCart-btn-warp-9'}
                imgId={data[8].img_id}
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
                dataFav={dataFav}
                title={data[9].productname}
                comment={data[9].contentNum}
                buy={data[9].purchased}
                price={data[9].price}
                stars={data[9].startRating}
                id={'ru-addCart-btn-10'}
                proudctId={data[9].sid}
                parentId={'ru-addCart-btn-warp-10'}
                imgId={data[9].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp11 && (
              <RuCard
                data={data}
                dataFav={dataFav}
                title={data[10].productname}
                comment={data[10].contentNum}
                buy={data[10].purchased}
                price={data[10].price}
                stars={data[10].startRating}
                id={'ru-addCart-btn-11'}
                proudctId={data[10].sid}
                parentId={'ru-addCart-btn-warp-11'}
                imgId={data[10].img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                currentUser={currentUser}
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            )}
            {itemWarp12 && (
              <RuCard
                data={data}
                dataFav={dataFav}
                title={data[11].productname}
                comment={data[11].contentNum}
                buy={data[11].purchased}
                price={data[11].price}
                stars={data[11].startRating}
                id={'ru-addCart-btn-12'}
                proudctId={data[11].sid}
                parentId={'ru-addCart-btn-warp-12'}
                imgId={data[11].img_id}
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

export default RuBento;
