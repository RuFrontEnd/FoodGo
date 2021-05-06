import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './ChaBeastiePointSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as BesatieBook } from './Images/beastie_book.svg';
import { ReactComponent as BesatieCoin } from './Images/beastie_coin.svg';
import { ReactComponent as BesatieQ } from './Images/beastie_q.svg';
import { ReactComponent as VerticalLine } from './Images/vertical_line.svg';
import { ReactComponent as PencilIcon } from './Images/pencil_icon.svg';
import { ReactComponent as BeastieCoupon20 } from './Images/beastie_coupon20.svg';
import { ReactComponent as BeastieCoupon20Grey } from './Images/beastie-coupon20-grey.svg';
import { ReactComponent as CouponVerticalLine } from './Images/coupon_vertical_line.svg';

function ChaBeastiePointSect(props) {
  const { currentUser } = props;
  const [couponList, setCouponList] = useState([]);

  // 若localStorage有小怪獸名字就用此名，沒有就叫小怪獸
  let beastieName = localStorage.getItem('beastieName');
  if (beastieName) {
    beastieName = localStorage.getItem('beastieName');
  } else {
    beastieName = '小怪獸';
  }

  // -------- 點擊鉛筆改名字 --------- //
  const changeBeastieName = () => {
    // 把現在的名字放到輸入框
    document.querySelector(
      '.iris-beastie-name-input'
    ).value = document.querySelector('.iris-beastie-name').innerText;
    // 點擊icon後名字消失，顯示輸入框
    document.querySelector('.iris-beastie-name').style.display = 'none';
    document.querySelector('.iris-beastie-name-input').style.display = 'block';
  };

  // -------- 按下enter確認改名 --------- //
  const recordNewName = (e) => {
    // 按下ENTER
    let keypress = e.keyCode;
    if (keypress === 13) {
      // 讓名字等於INPUT裡的值，input消失，名字出現
      document.querySelector(
        '.iris-beastie-name'
      ).innerText = document.querySelector('.iris-beastie-name-input').value;
      document.querySelector('.iris-beastie-name-input').style.display = 'none';

      document.querySelector('.iris-beastie-name').style.display = 'block';
      // 放到localStorage
      localStorage.setItem(
        'beastieName',
        document.querySelector('.iris-beastie-name-input').value
      );
    }
  };

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

    console.log(data);
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
      <div className="iris-coupon-box d-flex align-items-center ">
        <div className="iris-coupon-icon">
          <div className="iris-coupon-img" id={couponImgId}>
            {/* <BeastieCoupon20 /> */}
          </div>
        </div>
        <CouponVerticalLine />
        <div className="iris-coupon-info d-flex flex-column">
          <div className="iris-coupon-title">{item.coupon_type}0元怪獸幣</div>
          <div>
            <div className="iris-coupon-issue">
              <span>領取時間:</span>
              <span> {isseuDate}</span>
              <span> {isseuTime}</span>
            </div>
            <div className="iris-coupon-due">
              <span>使用期限:</span>
              <span> {dueDate}</span>
              <span> {dueTime} </span>
              <span>前</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default ChaBeastiePointSect;
