import React, { useState, useEffect } from 'react';
import 'components/commodityList/commodityList.scss';
import RuNothing from 'Ru/Components/RuNothing/RuNothing';
import RuCard from 'Ru/Components/RuCard/RuCard';
import axios from 'axios';

function BentoList(props) {
  const {
    commodities,
    favorites,
    searchInput,
    handleCartNumber,
    currentUser,
    count,
    setCount,
  } = props;

  const [showFavArr, setShowFavArr] = useState([]);

  useEffect(() => {
    if (!commodities || !favorites) {
      return;
    }

    // 拿到有幾筆要固定我的最愛按鈕 邏輯
    const favArr = []; // 放抓到的dataFav[i].product_sid資料
    for (let i = 0; i < favorites.length; i++) {
      // 如果當前會員 跟 我的最愛資料表的member_sid匹配
      if (currentUser === favorites[i].member_sid) {
        favArr.push(favorites[i].product_sid);
      }
    }
    setShowFavArr(favArr); // 這樣才可以傳到RuAddFavorite
  }, [commodities, favorites]);

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

  if (!commodities || !favorites) {
    return <></>;
  } // waiting for fetching data complete then render

  return (
    <>
      <div className="ru-item-container">
        <div className="ru-card-warp">
          <div className="ru-itemWarp">
            {/* {isShowNothing && <RuNothing />} */}
            {commodities.map((commodity, index) => (
              <RuCard
                data={commodities}
                favorites={favorites}
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
      </div>
    </>
  );
}

export default BentoList;