import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisGetCouponSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as BeastieCoupon20 } from './Images/beastie_coupon20.svg';
import { ReactComponent as BeastieCoupon } from './Images/beastie_coupon.svg';
import { ReactComponent as BeastieCouponGrey } from './Images/beastie_coupon_grey.svg';
import { ReactComponent as CouponVerticalLine } from './Images/coupon_vertical_line.svg';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function IrisGetCouponSect(props) {
  const { couponStatus, setCouponStatus } = props;
  const currentUser = useSelector((state) => state.member.currentUser);
  const history = useHistory();

  const gotoProfilePage = () => {
    history.push('/memberUserprofile');
  };

  // --------- 取得目前user的優惠券領取狀態 --------- //
  // 取得所有人的優惠券領取狀態
  async function getCouponStatusFromServer() {
    const url = 'http://localhost:5000/member/couponStatus';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();

    // console.log('data', data)
    setCouponStatus(data);
  }

  // 載入
  useEffect(() => {
    getCouponStatusFromServer();

    // 過濾出現在使用者的資料
    const currentUserCouponStatus = couponStatus.filter(
      (item) => item.member_sid === currentUser
    );

    // console.log('couponStatus', couponStatus)
    // console.log('currentUserCouponStatus', currentUserCouponStatus)

    if (!currentUserCouponStatus) {
      return;
    }
    if (currentUserCouponStatus[0].coupon1_status === 1) {
      document.querySelector('.iris-coupon1-title').style.color = 'grey';
      document.querySelector('.iris-getcoupon1-learnmore').style.display =
        'none';
      document.querySelector('.iris-getcoupon1-received').style.display =
        'block';
      document.querySelector('.iris-beastieCoupon-svg').style.display = 'none';
      document.querySelector('.iris-beastieCoupon-grey-svg').style.display =
        'block';
    }
  }, [couponStatus]);

  return (
    <>
      <div className="container col-9">
        {/* <div className="row justify-content-center"> */}
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-comment-title">專屬優惠</h2>
          <WaveLine />
        </div>

        <div className="iris-getcoupon-content-container ">
          <div className="iris-getcoupon-container">
            <div className="iris-getcoupon-box d-flex align-items-center ">
              <div className="iris-coupon-icon">
                <BeastieCoupon className="iris-beastieCoupon-svg" />
                <BeastieCouponGrey className="iris-beastieCoupon-grey-svg" />
              </div>
              <CouponVerticalLine />
              <div className="iris-coupon-info d-flex flex-column">
                <div className="iris-coupon1-title">註冊禮</div>
                <div>
                  <div className="iris-coupon-issue">
                    <span>新會員填寫會員資料，即獲得30點怪獸幣!</span>
                  </div>
                  <div className="iris-coupon-due">
                    <span>活動截止日期: </span>
                    <span>不限</span>
                  </div>
                </div>
                <div className="iris-getcoupon1-wrapper">
                  <div
                    className="iris-getcoupon1-learnmore"
                    onClick={() => {
                      gotoProfilePage();
                    }}
                  >
                    點擊前往 >>
                  </div>
                  <div className="iris-getcoupon1-received">已領取</div>
                </div>
              </div>
            </div>

            <div className="iris-getcoupon-box d-flex align-items-center ">
              <div className="iris-coupon-icon">
                <BeastieCoupon20 />
              </div>
              <CouponVerticalLine />
              <div className="iris-coupon-info d-flex flex-column">
                <div className="iris-coupon-title">好友分享</div>
                <div>
                  <div className="iris-coupon-issue">
                    <span>分享給好友，即可獲得20點怪獸幣唷!!</span>
                  </div>
                  <div className="iris-coupon-due">
                    <span>活動截止日期: </span>
                    <span>2020/12/31</span>
                  </div>
                </div>
                <div className="iris-getcoupon-learnmore">點擊前往 >></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisGetCouponSect;
