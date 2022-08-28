import React, { useState, useEffect } from 'react';
import 'components/commodityList/commodityList.scss';
import EmptyHint from 'components/emptyHint/EmptyHint';
import { useSelector } from 'react-redux';
import ProductCard from 'components/productCard/ProductCard';
import FallBack from 'components/fallBack/FallBack';

function CommodityList(props) {
  const { commodities, searchInput, handleCartNumber, count, setCount } = props;

  useEffect(() => {
    if (!commodities) {
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

  if (!commodities) {
    return <FallBack />;
  } // waiting for fetching data complete then render

  return (
    <>
      <div className="ru-item-container">
        <div className="ru-card-warp">
          {/* {isShowNothing && <EmptyHint />} */}
          {commodities.map((commodity) => (
            <ProductCard
              className={'commdityList-productCard'}
              id={`ru-addCart-btn-${commodity.sid}`}
              productSid={commodity.sid}
              title={commodity.productname}
              comment={commodity.contentNum}
              buy={commodity.purchased}
              price={commodity.price}
              stars={commodity.startRating}
              proudctId={commodity.sid}
              imgId={commodity.img_id}
              handleCartNumber={handleCartNumber} // localStorage函式
              count={count}
              setCount={setCount}
              isFavorite={commodity.isFavorite}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CommodityList;
