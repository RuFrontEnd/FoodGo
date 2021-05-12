// moved
import React, { useState, useEffect, useRef } from 'react';
import 'components/loginCard/loginCard.scss';
import LoginInput from 'components/loginInput/LoginInput.js';
import OptionButton from 'components/optionButton/OptionButton';
import { login } from 'redux/member/memberActions';
import { useDispatch } from 'react-redux';
import $ from 'jquery';

function LoginCard(props) {
  const {
    className,
    id,
    setCurrentUser,
    setShowSuccessBox,
    SetShowLoginCard,
    setShowLoginModal,
    setCurrentUserData,
  } = props;
  const dispatch = useDispatch();

  // 變成註冊表單
  const ToRegisterForm = () => {
    // 白底移動
    const loginEnrollCard = document.querySelector('.login-form');
    loginEnrollCard.style.transform = 'translate(5%, 0)';
    loginEnrollCard.style.transition = '1.3s';
    // -------------登入卡消失效果
    document.querySelector('.login-content').style.display = 'none';
    document.querySelector('.loginCard-background-wrap').style.opacity = '0';
    document.querySelector('.loginCard-background-wrap').style.transition =
      'opacity 2s';
    setTimeout(function () {
      document.querySelector('.loginCard-background-wrap').style.display =
        'none';
    }, 900);
    //------------ 註冊卡出現效果
    setTimeout(function () {
      document.querySelector('.register-background-wrap').style.display =
        'block';
    }, 990);
    document.querySelector('.register-content').style.display = 'flex';
    setTimeout(function () {
      document.querySelector('.register-background-wrap').style.opacity = '1';
      document.querySelector('.register-background-wrap').style.transition =
        'opacity 1.1s';
    }, 1100);
  };

  // 變成登入表單
  const ToLoginForm = () => {
    // 白底移動
    const loginEnrollCard = document.querySelector('.login-form');
    loginEnrollCard.style.transform = 'translate(-90%, 0)';
    loginEnrollCard.style.transition = '1.3s';
    // -------------註冊卡消失效果
    document.querySelector('.register-content').style.display = 'none';
    document.querySelector('.register-background-wrap').style.opacity = '0';
    document.querySelector('.register-background-wrap').style.transition =
      'opacity 2s';
    setTimeout(function () {
      document.querySelector('.register-background-wrap').style.display =
        'none';
    }, 900);
    //------------ 登入卡出現效果
    setTimeout(function () {
      document.querySelector('.loginCard-background-wrap').style.display =
        'block';
    }, 990);
    document.querySelector('.login-content').style.display = 'flex';
    setTimeout(function () {
      document.querySelector('.loginCard-background-wrap').style.opacity = '1';
      document.querySelector('.loginCard-background-wrap').style.transition =
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
        dispatch(login());
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
    let confirmPassword = document.querySelector('#createConfirmPassword')
      .value;
    let email = document.querySelector('#createmail').value;
    let mobile = document.querySelector('#createmobile').value;

    if (!account.match(/[A-Za-z0-9]{8,24}/)) {
      $('.empty-account').slideUp('slow');
      $('.wrong-account-format').slideDown('slow');
    } // 帳號小於8碼

    if (!password.match(/[A-Za-z0-9]{8,24}/)) {
      $('.empty-password').slideUp('slow');
      $('.wrong-password-format').slideDown('slow');
    } // 密碼小於8碼

    if (
      !confirmPassword.match(/[A-Za-z0-9]{8,24}/) ||
      confirmPassword !== password
    ) {
      $('.empty-password').slideUp('slow');
      $('.wrong-confirmPassword-format').slideDown('slow');
    } // 確認密碼小於8碼或確認密碼不等於密碼

    if (
      !email.match(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      )
    ) {
      $('.empty-email').slideUp('slow');
      $('.wrong-email-format').slideDown('slow');
    } // 信箱格式不符

    if (!mobile.match(/^09[0-9]{8}$/)) {
      $('.empty-mobile').slideUp('slow');
      $('.wrong-mobile-format').slideDown('slow');
    } // 手機格式不符

    // 資料都ok才送出
    if (
      account.match(/[A-Za-z0-9]{8,24}/) &&
      password.match(/[A-Za-z0-9]{8,24}/) &&
      confirmPassword.match(/[A-Za-z0-9]{8,24}/) &&
      confirmPassword === password &&
      email.match(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      ) &&
      mobile.match(/^09[0-9]{8}$/)
    ) {
      // 清空錯誤題示
      $('.empty-account').slideUp('slow');
      $('.empty-password').slideUp('slow');
      $('.empty-email').slideUp('slow');
      $('.empty-mobile').slideUp('slow');
      $('.wrong-account-format').slideUp('slow');
      $('.wrong-password-format').slideUp('slow');
      $('.wrong-confirmPassword-format').slideUp('slow');
      $('.wrong-email-format').slideUp('slow');
      $('.wrong-mobile-format').slideUp('slow');

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
      $('.register-alert').slideDown('slow');
      // 2秒後消失
      setTimeout(() => {
        $('.register-alert').slideUp('slow');
      }, 2000);
      document.querySelector('#createaccount').value = '';
      document.querySelector('#createpassword').value = '';
      document.querySelector('#createConfirmPassword').value = '';
      document.querySelector('#createmail').value = '';
      document.querySelector('#createmobile').value = '';
    }
  };

  const handleFake = () => {
    document.querySelector('#createaccount').value = '456456456';
    document.querySelector('#createpassword').value = '456456456';
    document.querySelector('#createConfirmPassword').value = '456456456';
    document.querySelector('#createmail').value = '456456456@gmail.com';
    document.querySelector('#createmobile').value = '0945456456';
  };

  return (
    <div className={className} id={id}>
      {/* <button
        onClick={() => {
          handleFake();
        }}
      >
        假資料
      </button> */}
      <div className="loginCard-container d-flex align-items-center">
        <section className="loginCard-background-container">
          <div className="loginCard-background-wrap">
            {/* <LoginCardBg /> */}
            <img src={require('./Images/login_card.png')} />
          </div>
          <div className="register-background-wrap">
            {/* <RegisterCardBg /> */}
            <img src={require('./Images/register_card.png')} />
          </div>
        </section>
        <section className="login-form">
          {/* ----------------登入表單----------------- */}
          <div className="login-content">
            <div className="login-title">會員登入</div>
            <div className="alert alert-danger login-alert" role="alert">
              帳號或密碼錯誤
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">帳號</div>
              <LoginInput type="text" id="useraccount" />
            </div>
            <div className="login-input d-flex  align-items-center justify-content-between">
              <div className="login-text">密碼</div>
              <LoginInput type="password" id="userpassword" />
            </div>
            <div className="login-other d-flex">
              <div className="form-check">
                <input
                  class="form-check-input big-checkbox"
                  type="checkbox"
                  id="gridCheck"
                />
                <div className="login-remember-me">記住我</div>
              </div>
              <div className="login-forget-pw">忘記密碼</div>
            </div>
            <div
              className="login-button"
              onClick={() => {
                handleLogin();
              }}
            >
              <OptionButton text={'登入'} type={'green'} />
            </div>
            <div className="d-flex">
              <div className="no-account">還沒有帳號嗎?</div>
              <div
                className="no-account-register"
                onClick={() => {
                  ToRegisterForm();
                }}
              >
                註冊訂餐
              </div>
            </div>
          </div>
          {/* ----------------註冊表單----------------- */}
          <div className="register-content">
            <div className="register-title">會員註冊</div>
            <div className="alert alert-success register-alert" role="alert">
              註冊成功
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">帳號</div>
              <LoginInput type="text" id="createaccount" />
            </div>
            <div class="wrong-account-format">*帳號要大於8碼</div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">密碼</div>
              <LoginInput type="password" id="createpassword" />
            </div>
            <div className="wrong-password-format">*密碼要大於8碼</div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">確認密碼</div>
              <LoginInput type="password" id="createConfirmPassword" />
            </div>
            <div className="wrong-confirmPassword-format">
              *兩次輸入的密碼不符
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">信箱</div>
              <LoginInput type="text" id="createmail" />
            </div>
            <div class="wrong-email-format">*請填入正確的信箱格式</div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">手機</div>
              <LoginInput type="text" id="createmobile" />
            </div>
            <div className="wrong-mobile-format">*請填入正確的手機格式</div>
            <div
              className="register-button"
              onClick={() => {
                handleRegister();
              }}
            >
              <OptionButton text={'送出'} />
            </div>
            <div className="d-flex">
              <div className="no-account">已經有帳號了嗎?</div>
              <div
                className="login-now"
                onClick={() => {
                  ToLoginForm();
                }}
              >
                立即登入
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginCard;
