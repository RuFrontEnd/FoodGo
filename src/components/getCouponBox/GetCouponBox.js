import React, { useState, useEffect } from 'react';
import 'components/getCouponBox/getCouponBox.scss';
import { ReactComponent as Coupon30 } from 'assets/svg/beastie_coupon30.svg';

function GetCouponBox(props) {
  const { setShowGetCouponBox } = props;
  return (
    <>
      <div
        class="iris-getCoupon-mask"
        onClick={() => {
          setShowGetCouponBox(false);
        }}
      ></div>
      <div class="iris-getCoupon-container">
        <div class="iris-coupon-img-wrapper">
          <Coupon30 />
        </div>

        <div class="iris-getCoupon-text1">新會員填寫資料</div>
        <div class="iris-getCoupon-text2">獲得30元怪獸幣</div>
      </div>
    </>
  );
}

export default GetCouponBox;
