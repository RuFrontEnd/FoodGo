import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisDataEditSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import InputH40 from './InputH40/InputH40';
// import SelectBox from './../../../Share/Components/Input/SelectBox';
import Button from './../../../Share/Components/Button/Button';
import $ from 'jquery';

function IrisDataEditSect(props) {
  const {
    currentUser,
    setShowUpdateModal,
    setShowGetCouponBox,
    setBeastiePointAdd,
    couponStatus,
    setCouponStatus,
    couponOneStatus,
    setCouponOneStatus,
  } = props;
  const [userInfo, setUserInfo] = useState([]);

  // -------先新增會員資料折價券領取狀態資料表--------//
  const postCouponStatus = () => {
    const dataToBeSend = { currentUser: currentUser };
    fetch('http://localhost:5000/member/addCouponStatus', {
      method: 'POST',
      body: JSON.stringify(dataToBeSend),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((r) => r.json())
      .then((o) => {
        // console.log(o)
      });
    console.log('postCouponStatus');
  };

  useEffect(() => {
    postCouponStatus();
  }, []);

  // ------------ 更新會員資料 ----------------- //
  const updateProfile = () => {
    const familyname = document.querySelector('#iris-member-family-name').value;
    const givenname = document.querySelector('#iris-member-given-name').value;
    const birthday = document.querySelector('#iris-member-birthday').value;
    const mobile = document.querySelector('#iris-member-mobile').value;

    // 如果新密碼欄位value不一樣
    if (
      document.querySelector('#iris-member-new-password').value !==
      document.querySelector('#iris-set-new-password').value
    ) {
      // 秀出提示
      $('.iris-password-inconsistent').slideDown('slow');
      // 2秒後消失
      setTimeout(() => {
        $('.iris-password-inconsistent').slideUp('slow');
      }, 2000);
      // 如果新密碼欄位value一樣就送出
    } else {
      let password;
      // 如果新密碼欄位有值的話
      if (document.querySelector('#iris-member-new-password').value !== '') {
        // 設定密碼為新密碼
        password = document.querySelector('#iris-member-new-password').value;
      } else {
        // 否則設定密碼為舊密碼(密碼不變)
        password = document.querySelector('#iris-member-password').value;
      }
      const email = document.querySelector('#iris-member-email').value;
      const address = document.querySelector('#iris-member-address').value;
      const newProfile = {
        member_id: currentUser,
        familyname: familyname,
        givenname: givenname,
        birthday: birthday,
        mobile: mobile,
        password: password,
        email: email,
        address: address,
      };
      // console.log(newProfile)
      // 更新會員資料
      fetch('http://localhost:5000/member/updateProfile', {
        method: 'POST',
        body: JSON.stringify(newProfile),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
        .then((r) => r.json())
        .then((o) => {
          // console.log(o)
        });

      // 第一次填資料送優惠券
      // coupon1_status=0 代表之前沒領過
      if (currentUserCouponStatus[0].coupon1_status === 0) {
        const newCouponStatus = {
          currentUser: currentUser,
          coupon1: 1,
          coupon2: 0,
          coupon_type: 3,
        };
        // 更新領取狀態
        fetch('http://localhost:5000/member/changeCouponStatus', {
          method: 'POST',
          body: JSON.stringify(newCouponStatus),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })
          .then((r) => r.json())
          .then((o) => {
            // console.log(o)
          });
        // 新增優惠券
        fetch('http://localhost:5000/member/addCoupon', {
          method: 'POST',
          body: JSON.stringify(newCouponStatus),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        })
          .then((r) => r.json())
          .then((o) => {
            // console.log(o)
          });

        // 2. 連動menu數字
        // 設甚麼值無所謂，重點是讓狀態改變，menu那邊useEffect才會偵測到
        setBeastiePointAdd(newCouponStatus.coupon1);

        // 秀成功獲取優惠券光箱
        setShowGetCouponBox(true);
        // setData()
      } else {
        // 秀更新成功光箱
        setShowUpdateModal(true);
        // setData()
      }
    }
  };

  // -------- 取得目前user的資料 ---------- //
  // 取得所有會員的資料
  async function getUserInfoFromServer() {
    const url = 'http://localhost:5000/member/allUserProfile';

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
    setUserInfo(data);
  }

  // 過濾出現在使用者的資料
  const currentUserInfo = userInfo.filter(
    (userInfo) => userInfo.member_sid === currentUser
  );
  // console.log(currentUserInfo[0])

  useEffect(() => {
    getUserInfoFromServer();
  }, []);

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

    // console.log(data)
    setCouponStatus(data);
  }
  // 載入
  useEffect(() => {
    getCouponStatusFromServer();
  }, [couponStatus]);

  // 過濾出現在使用者的資料
  const currentUserCouponStatus = couponStatus.filter(
    (couponStatus) => couponStatus.member_sid === currentUser
  );

  // console.log(currentUserCouponStatus[0].coupon1_status)

  // ----------- 把user資料代進去 ----------- //
  useEffect(() => {
    console.log('currentUserInfo', currentUserInfo);
  }, [currentUserInfo]);

  const setData = () => {
    currentUserInfo.map((item, index) => {
      const userFamilyName = item.name.slice(0, 1);
      const userGivenName = item.name.slice(1, 3);
      // const userBirthday = item.birthday.slice(0, 10);
      const userBirthday = '';
      const fullAddress = item.county + item.district + item.address;

      let familyname = document.querySelector('#iris-member-family-name');
      let givenname = document.querySelector('#iris-member-given-name');
      let birthday = document.querySelector('#iris-member-birthday');
      let mobile = document.querySelector('#iris-member-mobile');
      let oldPassword = document.querySelector('#iris-member-password');
      let email = document.querySelector('#iris-member-email');
      let address = document.querySelector('#iris-member-address');

      familyname.value = userFamilyName;
      givenname.value = userGivenName;
      // 讓新註冊會員的生日顯示為空值
      if (userBirthday !== '1899-11-29') {
        birthday.value = userBirthday;
      } else {
        birthday.value = '';
      }
      mobile.value = item.mobile;
      oldPassword.value = item.password;
      email.value = item.email;
      address.value = fullAddress;
    });
  };

  useEffect(() => {
    setData();
  }, [userInfo]);

  const fillInData = () => {
    document.querySelector('#iris-member-family-name').value = '陳';
    document.querySelector('#iris-member-given-name').value = '雪莉';
    document.querySelector('#iris-member-birthday').value = '1995-02-09';
    document.querySelector('#iris-member-address').value =
      '台北市南港區南港路一段27號';
  };

  return (
    <>
      <div className="container col-9">
        {/* <div className="row justify-content-center"> */}
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">會員資料</h2>
          <WaveLine />
          <div />
          <div className="row justify-content-center">
            <h6
              className="iris-profile-note"
              onClick={() => {
                fillInData();
              }}
            >
              ※ 部分資料以 * 或隱藏處理，保護您的個人隱私
            </h6>
            {/* <div
              class="alert alert-success iris-update-success-alert"
              role="alert"
            >
              帳號或密碼錯誤
            </div> */}
            <form className="iris-form-adjust">
              <div className="d-flex  align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box testtest">姓氏</div>
                <InputH40
                  type="text"
                  placeholder=""
                  id="iris-member-family-name"
                />
                <div className="iris-input-box">名字</div>

                <InputH40
                  type="text"
                  placeholder=""
                  id="iris-member-given-name"
                />
              </div>
              <div className="d-flex noF-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">生日</div>

                <InputH40
                  type="text"
                  placeholder=""
                  id="iris-member-birthday"
                />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">手機</div>
                <InputH40 type="text" placeholder="" id="iris-member-mobile" />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">密碼</div>
                <InputH40
                  type="password"
                  placeholder=""
                  id="iris-member-password"
                />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">新密碼</div>
                <InputH40
                  type="password"
                  placeholder=""
                  id="iris-set-new-password"
                />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">確認新密碼</div>
                <InputH40
                  type="password"
                  placeholder=""
                  id="iris-member-new-password"
                />
              </div>
              <div class="iris-password-inconsistent">
                *密碼不符，請再次確認
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">信箱</div>
                <InputH40 type="text" placeholder="" id="iris-member-email" />
              </div>
              <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">配送地址</div>
                <InputH40 type="text" placeholder="" id="iris-member-address" />
              </div>
            </form>
            <div
              className="iris-profile-button"
              onClick={() => {
                updateProfile();
              }}
            >
              <Button className="button-btn" text="更新個人資料" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisDataEditSect;
