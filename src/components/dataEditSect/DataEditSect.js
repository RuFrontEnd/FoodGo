import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'components/dataEditSect/dataEditSect.scss';
import { ReactComponent as WaveLine } from 'assets/svg/wave_line.svg';
import FoodGoInput from 'components/foodGoInput/FoodGoInput';
// import SelectBox from './../../../Share/Components/Input/SelectBox';
import OptionButton from 'components/optionButton/OptionButton';
import { useSelector } from 'react-redux';
import axios from 'axios';

import $ from 'jquery';

function DataEditSect(props) {
  const {
    setShowUpdateModal,
    setShowGetCouponBox,
    setBeastiePointAdd,
    couponStatus,
    setCouponStatus,
    couponOneStatus,
    setCouponOneStatus,
    memberData,
  } = props;

  const currentUser = useSelector((state) => state.member.currentUser);
  const [name, setName] = useState(memberData.name);
  const [mobile, setMobile] = useState(memberData.mobile);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState(memberData.email);
  const [address, setAddress] = useState(memberData.address);

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
    // const familyname = document.querySelector('#iris-member-family-name').value;
    // const givenname = document.querySelector('#iris-member-given-name').value;
    // const birthday = document.querySelector('#iris-member-birthday').value;
    // const mobile = document.querySelector('#iris-member-mobile').value;

    // 如果新密碼欄位value不一樣
    // if (
    //   document.querySelector('#iris-member-new-password').value !==
    //   document.querySelector('#iris-set-new-password').value
    // ) {
    //   // 秀出提示
    //   $('.iris-password-inconsistent').slideDown('slow');
    //   // 2秒後消失
    //   setTimeout(() => {
    //     $('.iris-password-inconsistent').slideUp('slow');
    //   }, 2000);
    //   // 如果新密碼欄位value一樣就送出
    // } else {
    //   let password;
    //   // 如果新密碼欄位有值的話
    //   if (document.querySelector('#iris-member-new-password').value !== '') {
    //     // 設定密碼為新密碼
    //     password = document.querySelector('#iris-member-new-password').value;
    //   } else {
    //     // 否則設定密碼為舊密碼(密碼不變)
    //     // password = document.querySelector('#iris-member-password').value;
    //   }
    //   const email = document.querySelector('#iris-member-email').value;
    //   const address = document.querySelector('#iris-member-address').value;

    const _newProfile = {
      member_id: currentUser,
      name: name,
      mobile: mobile,
      email: email,
      address: address,
    };
    const newProfile = JSON.stringify(_newProfile);

    // console.log('newProfile', newProfile);

    // console.log(newProfile)
    // 更新會員資料
    axios
      .post('http://localhost:5000/member/updateProfile', newProfile, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((o) => {
        console.log(o);
      });
    // fetch('http://localhost:5000/member/updateProfile', {
    //   method: 'POST',
    //   body: JSON.stringify(newProfile),
    //   headers: new Headers({
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then((o) => {
    //     console.log(o);
    //   });

    // 第一次填資料送優惠券
    // coupon1_status=0 代表之前沒領過
    // if (currentUserCouponStatus[0].coupon1_status === 0) {
    //   const newCouponStatus = {
    //     currentUser: currentUser,
    //     coupon1: 1,
    //     coupon2: 0,
    //     coupon_type: 3,
    //   };
    //   // 更新領取狀態
    //   fetch('http://localhost:5000/member/changeCouponStatus', {
    //     method: 'POST',
    //     body: JSON.stringify(newCouponStatus),
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   })
    //     .then((r) => r.json())
    //     .then((o) => {
    //       // console.log(o)
    //     });
    //   // 新增優惠券
    //   fetch('http://localhost:5000/member/addCoupon', {
    //     method: 'POST',
    //     body: JSON.stringify(newCouponStatus),
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   })
    //     .then((r) => r.json())
    //     .then((o) => {
    //       // console.log(o)
    //     });

    //   // 2. 連動menu數字
    //   // 設甚麼值無所謂，重點是讓狀態改變，menu那邊useEffect才會偵測到
    //   setBeastiePointAdd(newCouponStatus.coupon1);

    //   // 秀成功獲取優惠券光箱
    //   setShowGetCouponBox(true);
    //   // setData()
    // } else {
    //   // 秀更新成功光箱
    //   setShowUpdateModal(true);
    //   // setData()
    // }
    // }
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

    // console.log(data)
    setCouponStatus(data);
  }
  // 載入
  // useEffect(() => {
  //   getCouponStatusFromServer();
  // }, [couponStatus]);

  // 過濾出現在使用者的資料
  // const currentUserCouponStatus = couponStatus.filter(
  //   (couponStatus) => couponStatus.member_sid === currentUser
  // );

  // console.log(currentUserCouponStatus[0].coupon1_status)

  // ----------- 把user資料代進去 ----------- //
  // useEffect(() => {
  //   console.log('currentUserInfo', currentUserInfo);
  // }, [currentUserInfo]);

  const setData = () => {
    // currentUserInfo.map((item, index) => {
    //   const userFamilyName = item.name.slice(0, 1);
    //   const userGivenName = item.name.slice(1, 3);
    //   // const userBirthday = item.birthday.slice(0, 10);
    //   const userBirthday = '';
    //   const fullAddress = item.county + item.district + item.address;
    //   let familyname = document.querySelector('#iris-member-family-name');
    //   let givenname = document.querySelector('#iris-member-given-name');
    //   let mobile = document.querySelector('#iris-member-mobile');
    //   let oldPassword = document.querySelector('#iris-member-password');
    //   let email = document.querySelector('#iris-member-email');
    //   let address = document.querySelector('#iris-member-address');
    //   familyname.value = userFamilyName;
    //   givenname.value = userGivenName;
    //   // 讓新註冊會員的生日顯示為空值
    //   // if (userBirthday !== '1899-11-29') {
    //   //   birthday.value = userBirthday;
    //   // } else {
    //   //   birthday.value = '';
    //   // }
    //   mobile.value = item.mobile;
    //   // oldPassword.value = item.password;
    //   email.value = item.email;
    //   address.value = fullAddress;
    // });
  };

  const fillInData = () => {
    // document.querySelector('#iris-member-family-name').value = '陳';
    document.querySelector('#iris-member-given-name').value = '雪莉';
    document.querySelector('#iris-member-address').value =
      '台北市南港區南港路一段27號';
  };

  useEffect(() => {}, [memberData]);

  return (
    <>
      <div
        id="dataEditSect-forms"
        className="d-flex flex-column justify-content-center align-items-center"
      >
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
            <div className="iris-input-box">姓名</div>
            <FoodGoInput
              type="text"
              placeholder=""
              id="iris-member-given-name"
              value={name}
              setValue={setName}
            />
          </div>
          <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
            <div className="iris-input-box">手機</div>
            <FoodGoInput
              type="text"
              placeholder=""
              id="iris-member-mobile"
              value={mobile}
              setValue={setMobile}
            />
          </div>
          {/* <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
                <div className="iris-input-box">密碼</div>
                <FoodGoInput
                  type="password"
                  placeholder=""
                  id="iris-member-password"
                />
              </div> */}
          <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
            <div className="iris-input-box">新密碼</div>
            <FoodGoInput
              type="password"
              placeholder=""
              id="iris-set-new-password"
              value={password}
              setValue={setPassword}
            />
          </div>
          <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
            <div className="iris-input-box">確認新密碼</div>
            <FoodGoInput
              type="password"
              placeholder=""
              id="iris-member-new-password"
              value={newPassword}
              setValue={setNewPassword}
            />
          </div>
          <div class="iris-password-inconsistent">*密碼不符，請再次確認</div>
          <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
            <div className="iris-input-box">信箱</div>
            <FoodGoInput
              type="text"
              placeholder=""
              id="iris-member-email"
              value={email}
              setValue={setEmail}
            />
          </div>
          <div className="d-flex no-wrap align-items-center iris-profile-item-wrapper">
            <div className="iris-input-box">地址</div>
            <FoodGoInput
              type="text"
              placeholder=""
              id="iris-member-address"
              value={address}
              setValue={setAddress}
            />
          </div>
        </form>
        <div
          className="iris-profile-button"
          onClick={() => {
            updateProfile();
          }}
        >
          <OptionButton
            type="origin"
            text="更新個人資料"
            className="dataEditSect-optionButton"
          />
        </div>
      </div>
    </>
  );
}

export default DataEditSect;
