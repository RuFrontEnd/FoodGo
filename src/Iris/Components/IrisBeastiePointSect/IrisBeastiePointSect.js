import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisBeastiePointSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as BesatieBook } from './Images/beastie_book.svg';
import { ReactComponent as BesatieCoin } from './Images/beastie_coin.svg';
import { ReactComponent as BesatieQ } from './Images/beastie_q.svg';
import { ReactComponent as VerticalLine } from './Images/vertical_line.svg';
import { ReactComponent as PencilIcon } from './Images/pencil_icon.svg';
import { ReactComponent as BeastieCoupon20 } from './Images/beastie_coupon20.svg';
import { ReactComponent as BeastieCoupon20Grey } from './Images/beastie-coupon20-grey.svg';
import { ReactComponent as CouponVerticalLine } from './Images/coupon_vertical_line.svg';

function IrisBeastiePointSect(props) {
  const { currentUser, setShowRuleBox } = props
  const [couponList, setCouponList] = useState([])

  // 若localStorage有小怪獸名字就用此名，沒有就叫小怪獸
  let beastieName = localStorage.getItem('beastieName')

  if (beastieName) {
    if (currentUser === 1) {
      beastieName = '小Q怪'
    } else {
      beastieName = localStorage.getItem('beastieName')
    }
  } else {
    beastieName = '小怪獸'
    if (currentUser === 1) {
      beastieName = '小Q怪'
    }
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

    // console.log(data)
    setCouponList(data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getCouponFromServer();
  }, []);

  //  過濾出現在使用者的優惠券
  const currentUserCoupon = couponList.filter(
    (couponList) => couponList.member_sid === currentUser
  );

  // 計算總值
  let sum = 0
  function calctotalCoin(currentObject, index, array) {
    sum += currentObject.coupon_type
  }
  currentUserCoupon.forEach(calctotalCoin)
  let userBeastieCoin = sum * 10

  // ------- coupon template --------- //
  const couponDisplay = currentUserCoupon.map((item, index) => {
    const isseuDate = item.coupon_issue.slice(0, 10)
    // const isseuTime = item.coupon_issue.slice(11, 16)
    const dueDate = item.coupon_due.slice(0, 10)
    const dueTime = '23:59'
    const couponImgId = 'coupon-img-' + item.coupon_type
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
              {/* <span> {isseuTime}</span> */}
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

  return (
    <>
      <div className="container col-9">
        {/* <div className="row justify-content-center"> */}
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-comment-title">怪獸幣</h2>
          <WaveLine />
        </div>

        <div className="iris-beastie-content-container ">
          <div className="iris-beastie-icons-container d-flex  justify-content-center">
            <div className="iris-icon-box d-flex align-items-center iris-total-coin-box">
              <BesatieCoin />
              <p>怪獸幣總資產</p>
              <div className="iris-beastie-coin">{userBeastieCoin}</div>
            </div>

            <VerticalLine />

            <div className="iris-beastie-box ">
              <div className="iris-beastie-name-box d-flex align-items-center justify-content-center">
                <PencilIcon
                  className="iris-pencil-icon"
                  onClick={() => {
                    changeBeastieName();
                  }}
                />
                &nbsp;&nbsp;
                {/* <div className="iris-beastie-name">小Q怪</div> */}
                <div className="iris-beastie-name">{beastieName}</div>
                <input
                  className="iris-beastie-name-input"
                  onKeyDown={(e) => {
                    recordNewName(e);
                  }}
                />
              </div>
              <BesatieQ />
            </div>

            <VerticalLine />

            <div className="iris-icon-box d-flex align-items-center ">
              <div
                className="iris-rule-book"
                onClick={() => {
                  setShowRuleBox(true)
                }}
              >
                <BesatieBook />
              </div>
              <p>遊戲規則</p>
            </div>
          </div>

          <div className="iris-coupon-container">{couponDisplay}</div>
        </div>
      </div>
    </>
  );
}

export default IrisBeastiePointSect;
