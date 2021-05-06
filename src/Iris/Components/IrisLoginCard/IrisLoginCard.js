import React, { useState, useEffect } from 'react';
import './IrisLoginCard.scss';
import { ReactComponent as LoginCardBg } from './Images/login_card.svg';
import { ReactComponent as RegisterCardBg } from './Images/register_card.svg';
import InputH44 from './../../../Share/Components/Input/InputH44.js';
import Button from './Button/Button';
import ButtonLogin from './Button/ButtonLogin';
import $ from 'jquery';
// import IrisSuccessBox from './../IrisSuccessBox/IrisSuccessBox'

function IrisLoginCard(props) {
  const {
    setIsLogin,
    setCurrentUser,
    isLogin,
    setShowSuccessBox,
    SetShowLoginCard,
    setShowLoginModal,
    setCurrentUserData,
  } = props;

  // 變成註冊表單
  const ToRegisterForm = () => {
    // 白底移動
    const loginEnrollCard = document.querySelector('.iris-login-form');
    loginEnrollCard.style.transform = 'translate(5%, 0)';
    loginEnrollCard.style.transition = '1.3s';
    // -------------登入卡消失效果
    document.querySelector('.iris-login-content').style.display = 'none';
    document.querySelector('.iris-login-background').style.opacity = '0';
    document.querySelector('.iris-login-background').style.transition =
      'opacity 2s';
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.display = 'none';
    }, 900);
    //------------ 註冊卡出現效果
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.display =
        'block';
    }, 990);
    document.querySelector('.iris-register-content').style.display = 'flex';
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.opacity = '1';
      document.querySelector('.iris-register-background').style.transition =
        'opacity 1.1s';
    }, 1100);
  };

  // 變成登入表單
  const ToLoginForm = () => {
    // 白底移動
    const loginEnrollCard = document.querySelector('.iris-login-form');
    loginEnrollCard.style.transform = 'translate(-90%, 0)';
    loginEnrollCard.style.transition = '1.3s';
    // -------------註冊卡消失效果
    document.querySelector('.iris-register-content').style.display = 'none';
    document.querySelector('.iris-register-background').style.opacity = '0';
    document.querySelector('.iris-register-background').style.transition =
      'opacity 2s';
    setTimeout(function () {
      document.querySelector('.iris-register-background').style.display =
        'none';
    }, 900);
    //------------ 登入卡出現效果
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.display = 'block';
    }, 990);
    document.querySelector('.iris-login-content').style.display = 'flex';
    setTimeout(function () {
      document.querySelector('.iris-login-background').style.opacity = '1';
      document.querySelector('.iris-login-background').style.transition =
        'opacity 1.1s';
    }, 1100);
  };

  // 登入
  let userinfo = [];
  // 拿資料庫會員資料
  async function getData() {
    const url = 'http://localhost:5000/member/allUserProfile';
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    });
    const response = await fetch(request);
    userinfo = await response.json();
  }

  // 登入比對帳密
  // 要用 async await, 先拿到資料再比對
  async function handleLogin() {
    await getData();
    const useraccount = document.querySelector('#useraccount').value;
    const userpassword = document.querySelector('#userpassword').value;
    for (let i = 0; i < userinfo.length; i++) {
      if (
        // 正確
        useraccount === userinfo[i].account &&
        userpassword === userinfo[i].password
      ) {
        setIsLogin(true);
        setCurrentUser(userinfo[i].member_sid); // 設定目前使用者id

        // 放在localStorage
        let currentUserStorage = parseInt(userinfo[i].member_sid);
        localStorage.setItem('currentUser', currentUserStorage);

        setCurrentUserData(userinfo[i]);
        console.log(userinfo[i]);
        setShowLoginModal(false); // 登入光箱消失
        setShowSuccessBox(true); // 出現登入成功光箱)
      } else {
        // 若帳密錯誤，顯示錯誤提示
        $('.iris-login-alert').slideDown('slow');
        // 2秒後消失
        setTimeout(() => {
          $('.iris-login-alert').slideUp('slow');
        }, 2000);
        // 清空input
        document.querySelector('#useraccount').value = '';
        document.querySelector('#userpassword').value = '';
      }
    }
  }

  // 註冊功能
  const handleRegister = () => {
    let account = document.querySelector('#createaccount').value;
    let password = document.querySelector('#createpassword').value;
    let email = document.querySelector('#createmail').value;
    let mobile = document.querySelector('#createmobile').value;

    // 帳號小於8碼
    if (!account.match(/[A-Za-z0-9]{8,24}/)) {
      $('.iris-empty-account').slideUp('slow');
      $('.iris-wrong-account-format').slideDown('slow');
      // 密碼小於8碼
    }
    if (!password.match(/[A-Za-z0-9]{8,24}/)) {
      $('.iris-empty-password').slideUp('slow');
      $('.iris-wrong-password-format').slideDown('slow');
      // 信箱格式不符
    }
    if (
      !email.match(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      )
    ) {
      $('.iris-empty-email').slideUp('slow');
      $('.iris-wrong-email-format').slideDown('slow');
      // 手機格式不符
    }
    if (!mobile.match(/^09[0-9]{8}$/)) {
      $('.iris-empty-mobile').slideUp('slow');
      $('.iris-wrong-mobile-format').slideDown('slow');
    }

    // 資料都ok才送出
    if (
      account.match(/[A-Za-z0-9]{8,24}/) &&
      password.match(/[A-Za-z0-9]{8,24}/) &&
      email.match(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      ) &&
      mobile.match(/^09[0-9]{8}$/)
    ) {
      // 清空錯誤題示
      $('.iris-empty-account').slideUp('slow');
      $('.iris-empty-password').slideUp('slow');
      $('.iris-empty-email').slideUp('slow');
      $('.iris-empty-mobile').slideUp('slow');
      $('.iris-wrong-account-format').slideUp('slow');
      $('.iris-wrong-password-format').slideUp('slow');
      $('.iris-wrong-email-format').slideUp('slow');
      $('.iris-wrong-mobile-format').slideUp('slow');

      // 把輸入的內容包成物件傳出去
      const newRegister = {
        account: account,
        password: password,
        email: email,
        mobile: mobile,
        name: null,
      };

      fetch('http://localhost:5000/member/userRegister', {
        method: 'POST',
        body: JSON.stringify(newRegister),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
        .then((r) => r.json())
        .then((o) => {
          console.log(o);
        });

      // 若註冊成功，顯示成功提示
      $('.iris-register-alert').slideDown('slow');
      // 2秒後消失
      setTimeout(() => {
        $('.iris-register-alert').slideUp('slow');
      }, 2000);
      document.querySelector('#createaccount').value = '';
      document.querySelector('#createpassword').value = '';
      document.querySelector('#createmail').value = '';
      document.querySelector('#createmobile').value = '';
    }
  };

  return (
    <>
      <div className="iris-login-card-container d-flex align-items-center">
        <div className="iris-card-background">
          <div className="iris-login-background">
            {/* <LoginCardBg /> */}
            <img src={require('./Images/login_card.png')} />
          </div>
          <div className="iris-register-background">
            {/* <RegisterCardBg /> */}
            <img src={require('./Images/register_card.png')} />
          </div>
        </div>
        <div className="iris-login-form">
          {/* ----------------登入表單----------------- */}
          <div className="iris-login-content">
            <div className="iris-login-title">會員登入</div>
            <div className="alert alert-danger iris-login-alert" role="alert">
              帳號或密碼錯誤
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">帳號</div>
              <InputH44 type="text" id="useraccount" />
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">密碼</div>
              <InputH44 type="password" id="userpassword" />
            </div>
            <div className="iris-login-other d-flex">
              <div className="form-check">
                <input
                  class="form-check-input iris-big-checkbox"
                  type="checkbox"
                  id="gridCheck"
                />
                <div className="iris-login-remember-me">記住我</div>
              </div>
              <div className="iris-login-forget-pw">忘記密碼</div>
            </div>
            <div
              className="iris-login-button"
              onClick={() => {
                handleLogin();
              }}
            >
              <ButtonLogin
                className="button-btn-g"
                id="iris-login-btn"
                text="登入"
              />
            </div>
            <div className="d-flex">
              <div className="iris-no-account">還沒有帳號嗎?</div>
              <div
                className="iris-no-account-register"
                onClick={() => {
                  ToRegisterForm();
                }}
              >
                註冊訂餐
              </div>
            </div>
          </div>

          {/* ----------------註冊表單----------------- */}
          <div className="iris-register-content">
            <div className="iris-register-title">會員註冊</div>
            <div
              className="alert alert-success iris-register-alert"
              role="alert"
            >
              註冊成功
            </div>
            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">帳號</div>
              <InputH44 type="text" id="createaccount" />
            </div>
            <div class="iris-wrong-account-format">*帳號要大於8碼</div>

            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">密碼</div>
              <InputH44 type="password" id="createpassword" />
            </div>
            <div className="iris-wrong-password-format">*密碼要大於8碼</div>

            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">信箱</div>
              <InputH44 type="text" id="createmail" />
            </div>
            <div class="iris-wrong-email-format">*請填入正確的信箱格式</div>

            <div className="iris-login-input d-flex  align-items-center">
              <div className="iris-login-text">手機</div>
              <InputH44 type="text" id="createmobile" />
            </div>
            <div className="iris-wrong-mobile-format">
              *請填入正確的手機格式
            </div>

            <div
              className="iris-register-button"
              onClick={() => {
                handleRegister();
              }}
            >
              <Button
                className="button-btn"
                id="iris-register-btn"
                text="送出"
              />
            </div>
            <div className="d-flex">
              <div className="iris-no-account">已經有帳號了嗎?</div>
              <div
                className="iris-login-now"
                onClick={() => {
                  ToLoginForm();
                }}
              >
                立即登入
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IrisLoginCard;
