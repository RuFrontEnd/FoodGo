import React, { useState, useEffect } from 'react';
import 'components/commodityList/commodityList.scss';
import EmptyHint from 'components/emptyHint/EmptyHint';
import { useSelector } from 'react-redux';
import ProductCard from 'components/productCard/ProductCard';

function CommodityList(props) {
  const {
    commodities,
    favorites,
    searchInput,
    handleCartNumber,
    count,
    setCount,
  } = props;

  // const [showFavArr, setShowFavArr] = useState([]);

  // useEffect(() => {
  //   // 等待兩個fetch都結束
  //   if (!data || !dataFav) {
  //     return;
  //   }

  //   // 拿到有幾筆要固定我的最愛按鈕 邏輯
  //   const favArr = []; // 放抓到的dataFav[i].product_sid資料
  //   for (let i = 0; i < dataFav.length; i++) {
  //     // 如果當前會員 跟 我的最愛資料表的member_sid匹配
  //     if (currentUser === dataFav[i].member_sid) {
  //       // console.log(dataFav[i].product_sid)
  //       favArr.push(dataFav[i].product_sid);
  //     }
  //   }
  //   // console.log(favArr)
  //   setShowFavArr(favArr); // 這樣才可以傳到RuAddFavorite
  // }, [searchInput, data, dataFav]); // 如果這邊沒有設定state, 就只會在掛載時執行一次 / 如果有, 在每次state變動時都會執行一次.

  useEffect(() => {
    if (!commodities || !favorites) {
      return;
    }
    if (searchInput !== '') {
      // console.log('searchInput', searchInput);
      // const _commodities = commodities.filter((commodity) => {
      //   return commodity.productname.includes(searchInput);
      // });
      // console.log('_commodities', _commodities);
      // setCommodities(_commodities);
    }
  }, [searchInput]);

  useEffect(() => {
    console.log('commodities', commodities);
  }, []);

  if (!commodities || !favorites) {
    return <></>;
  } // waiting for fetching data complete then render

  return (
    <>
      <div className="ru-item-container">
        <div className="ru-card-warp">
          <div className="ru-itemWarp">
            {/* {isShowNothing && <EmptyHint />} */}
            {commodities.map((commodity) => (
              <ProductCard
                id={`ru-addCart-btn-${commodity.sid}`}
                productSid={commodity.sid}
                favorites={favorites}
                title={commodity.productname}
                comment={commodity.contentNum}
                buy={commodity.purchased}
                price={commodity.price}
                stars={commodity.startRating}
                proudctId={commodity.sid}
                parentId={`ru-addCart-btn-warp-${index + 1}`}
                imgId={commodity.img_id}
                handleCartNumber={handleCartNumber} // localStorage函式
                showFavArr={showFavArr}
                count={count}
                setCount={setCount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommodityList;
