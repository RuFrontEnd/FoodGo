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
<<<<<<< HEAD
                id={`ru-addCart-btn-${commodity.sid}`}
=======
>>>>>>> parent of 7f5406d... 去除productCard不必要參數
                productSid={commodity.sid}
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
