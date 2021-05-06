import React, { useState, useEffect } from 'react';
import './ChaCouponModal.scss';
import Cross from './Images/cross.svg';

// 優惠券的
import { ReactComponent as CouponVerticalLine } from './Images1/coupon_vertical_line.svg';
const ChaCouponModal = (props) => {
  const { closeModal } = props;
  const [couponList, setCouponList] = useState([]);
  const [currentUser, setCurrentUser] = useState(1);
  const { useBeastieCoin, setUseBeastieCoin, couponSid, setCouponSid } = props;

  // ------- 得到目前所有的優惠券資料 --------- //
  async function getCouponFromServer() {
    const url = 'http://localhost:5000/member/couponList';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();

    console.log('讀取優惠券資料', data);
    setCouponList(data);
  }

  // ------- 一開始就會開始載入資料 ------- //
  useEffect(() => {
    getCouponFromServer();
  }, []);

  // ------ 過濾出現在使用者的優惠券 ------ //
  const currentUserCoupon = couponList.filter(
    (couponList) => couponList.member_sid === currentUser
  );

  // ------- coupon template --------- //

  const couponDisplay = currentUserCoupon.map((item, index) => {
    const isseuDate = item.coupon_issue.slice(0, 10);
    const isseuTime = item.coupon_issue.slice(11, 16);
    const dueDate = item.coupon_due.slice(0, 10);
    const dueTime = item.coupon_due.slice(11, 16);
    const couponImgId = 'coupon-img-' + item.coupon_type;
    return (
      <label className="cha-coupon-add-checkbox" key={index}>
        <input
          type="radio"
          name="tableware"
          value={item.sid}
          onChange={(e) => {
            // setUseBeastieCoin(e.target.value);
            setCouponSid(e.target.value);
            // console.log('item.sid', couponSid === item.sid);
            // console.log('item.coupon_type', item.coupon_type);
            console.log('couponSid', couponSid);
            // console.log('item.sid', item.sid);
            setUseBeastieCoin(item.coupon_type * 10);
            console.log('選用優惠，額度為：', useBeastieCoin);
          }}
          checked={+couponSid === item.sid}
        />

        <div className="cha-iris-coupon-box d-flex align-items-center ">
          <div className="cha-iris-coupon-icon">
            <div className="cha-iris-coupon-img" id={couponImgId}>
              {/* <BeastieCoupon20 /> */}
            </div>
          </div>
          <CouponVerticalLine />
          <div className="cha-iris-coupon-info d-flex flex-column">
            <div className="cha-iris-coupon-title">
              {item.coupon_type}0元怪獸幣
            </div>
            <div>
              <div className="cha-iris-coupon-issue">
                <span>領取時間:</span>
                <span> {isseuDate}</span>
                <span> {isseuTime}</span>
              </div>
              <div className="cha-iris-coupon-due">
                <span>使用期限:</span>
                <span> {dueDate}</span>
                <span> {dueTime} </span>
                <span>前</span>
              </div>
            </div>
          </div>
        </div>
      </label>
    );
  });

  return (
    <>
      <div className="cha-claudia-overlay">
        <div className="cha-claudia-modal-bg">
          <div
            onClick={closeModal}
            className="cha-claudia-modal-cross-img"
            alt=""
            // src={Cross}
          />
          {/* 光箱內容頂部 */}
          <div className="cha-wrap-coupon-container">
            <div className="cha-iris-coupon-container">{couponDisplay}</div>
          </div>
          {/* 光箱內容底部 */}
        </div>
      </div>
    </>
  );
};

export default ChaCouponModal;
