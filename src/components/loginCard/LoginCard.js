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
    setShowLoginModal,
    setCurrentUserData,
  } = props;
  const dispatch = useDispatch();
  const $loginCardBackgroundWrap = useRef();
  const $registerBackgroundWrap = useRef();
  const $loginForm = useRef();
  const $loginContent = useRef();
  const $registerContent = useRef();
  const $userAccount = useRef();
  const $userPassword = useRef();
  const $createAccount = useRef();
  const $createPassword = useRef();
  const $createConfirmPassword = useRef();
  const $createEmail = useRef();
  const $createMobile = useRef();
  const $wrongAccountFormat = useRef();
  const $wrongPasswordFormat = useRef();
  const $wrongConfirmPasswordFormat = useRef();
  const $wrongEmailFormat = useRef();
  const $wrongMobileFormat = useRef();
  const $loginAlert = useRef();
  const $registerAlert = useRef();

  // 登入帳號
  const [userAccountValue, setUserAccountValue] = useState('');

  // 登入密碼
  const [userPasswordValue, setUserPasswordValue] = useState('');

  // 註冊帳號
  const [createAccountValue, setCreateAccountValue] = useState('');
  const [createAccountWrongText, setCreateAccountWrongText] = useState('');

  // 註冊密碼
  const [createPasswordValue, setCreatePasswordValue] = useState('');
  const [createPasswordWrongText, setCreatePasswordWrongText] = useState('');

  // 確認密碼
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [confirmPasswordWrongText, setConfirmPasswordWrongText] = useState('');

  // 姓名
  const [nameValue, setNameValue] = useState('');
  const [nameWrongText, setNameWrongText] = useState('');

  // 信箱
  const [userEmailValue, setUserEmailValue] = useState('');
  const [userEmailWrongText, setUserEmailWrongText] = useState('');

  // 手機
  const [userMobileValue, setUserMobileValue] = useState('');
  const [userMobileWrongText, setUserMobileWrongText] = useState('');

  // 變成註冊表單
  const ToRegisterForm = () => {
    // 白底移動
    $loginForm.current.style.transform = 'translate(5%, 0)';
    $loginForm.current.style.transition = '1.3s';
    // -------------登入卡消失效果
    $loginContent.current.style.display = 'none';
    $loginCardBackgroundWrap.current.style.opacity = '0';
    $loginCardBackgroundWrap.current.style.transition = 'opacity 2s';
    setTimeout(function () {
      $loginCardBackgroundWrap.current.style.display = 'none';
    }, 900);
    //------------ 註冊卡出現效果
    setTimeout(function () {
      $registerBackgroundWrap.current.style.display = 'block';
    }, 990);
    $registerContent.current.style.display = 'flex';
    setTimeout(function () {
      $registerBackgroundWrap.current.style.opacity = '1';
      $registerBackgroundWrap.current.style.transition = 'opacity 1.1s';
    }, 1100);
  };

  // 變成登入表單
  const ToLoginForm = () => {
    // 白底移動
    $loginForm.current.style.transform = 'translate(-90%, 0)';
    $loginForm.current.style.transition = '1.3s';
    // -------------註冊卡消失效果
    $registerContent.current.style.display = 'none';
    $registerBackgroundWrap.current.style.opacity = '0';
    $registerBackgroundWrap.current.style.transition = 'opacity 2s';
    setTimeout(function () {
      $registerBackgroundWrap.current.style.display = 'none';
    }, 900);
    //------------ 登入卡出現效果
    setTimeout(function () {
      $loginCardBackgroundWrap.current.style.display = 'block';
    }, 990);
    $loginContent.current.style.display = 'flex';
    setTimeout(function () {
      $loginCardBackgroundWrap.current.style.opacity = '1';
      $loginCardBackgroundWrap.current.style.transition = 'opacity 1.1s';
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
    // if (localStorage.getItem('accessToken')) {
    //   const token = { accessToken: localStorage.getItem('accessToken') };
    //   console.log('token', token);
    //   await fetch('http://localhost:5000/member/isUserAuth', {
    //     method: 'POST',
    //     body: JSON.stringify(token),
    //     headers: new Headers({
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     }),
    //   }).then((res) => res.json());
    //   // .then(jsonData);
    // }

    // if (!localStorage.getItem('accessToken')) {
    const member = {
      account: userAccountValue,
      password: userPasswordValue,
    };

    await fetch('http://localhost:5000/member/login', {
      method: 'POST',
      body: JSON.stringify(member),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((jsonData) => {
        console.log('jsonData', jsonData);
        if (jsonData.status === true) {
          localStorage.setItem('accessToken', jsonData.accessToken);
          localStorage.setItem('currentUser', jsonData.currentUser);
          dispatch(login());
          setCurrentUser(jsonData.currentUser);
          setShowLoginModal(false); // 登入光箱消失
          setShowSuccessBox(true); // 出現登入成功光箱
        }
      });
  }

  // 註冊功能
  const handleRegister = () => {
    if (!createAccountValue.match(/[A-Za-z0-9]{8,24}/)) {
      setCreateAccountWrongText('帳號不得小於8位數');
    } // 帳號小於8碼

    if (!createPasswordValue.match(/[A-Za-z0-9]{8,24}/)) {
      setCreatePasswordWrongText('密碼不得小於8位數');
    } // 密碼小於8碼

    if (
      !confirmPasswordValue.match(/[A-Za-z0-9]{8,24}/) ||
      confirmPasswordValue !== createPasswordValue
    ) {
      setConfirmPasswordWrongText('密碼與確認密碼不相同');
    } // 確認密碼小於8碼或確認密碼不等於密碼

    if (
      !userEmailValue.match(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      )
    ) {
      setUserEmailWrongText('信箱格式錯誤');
    } // 信箱格式不符

    if (!userMobileValue.match(/^09[0-9]{8}$/)) {
      setUserMobileWrongText('手機格式錯誤');
    } // 手機格式不符

    // 資料都ok才送出
    if (
      createAccountValue.match(/[A-Za-z0-9]{8,24}/) &&
      createPasswordValue.match(/[A-Za-z0-9]{8,24}/) &&
      confirmPasswordValue.match(/[A-Za-z0-9]{8,24}/) &&
      confirmPasswordValue === createPasswordValue &&
      userEmailValue.match(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      ) &&
      userMobileValue.match(/^09[0-9]{8}$/)
    ) {
      // 清空錯誤題示
      setCreateAccountWrongText('');
      setCreatePasswordWrongText('');
      setConfirmPasswordWrongText('');
      setUserEmailWrongText('');
      setUserMobileWrongText('');

      // 把輸入的內容包成物件傳出去
      const newRegister = {
        account: createAccountValue,
        password: createPasswordValue,
        email: userEmailValue,
        mobile: userMobileValue,
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
      $($registerAlert.current).slideDown('slow');
      // 2秒後消失
      setTimeout(() => {
        $($registerAlert.current).slideUp('slow');
      }, 2000);
      setCreateAccountValue('');
      setCreatePasswordValue('');
      setConfirmPasswordValue('');
      setUserEmailValue('');
      setUserMobileValue('');
    }
  };

  return (
    <div className={className} id={id}>
      <div className="loginCard-container d-flex align-items-center">
        <section className="loginCard-background-container">
          <div
            className="loginCard-background-wrap"
            ref={$loginCardBackgroundWrap}
          >
            {/* <LoginCardBg /> */}
            <img src={require('./Images/login_card.png')} />
          </div>
          <div
            className="register-background-wrap"
            ref={$registerBackgroundWrap}
          >
            {/* <RegisterCardBg /> */}
            <img src={require('./Images/register_card.png')} />
          </div>
        </section>
        <section className="login-form" ref={$loginForm}>
          {/* ----------------登入表單----------------- */}
          <div className="login-content form-content" ref={$loginContent}>
            <div className="login-title">會員登入</div>
            <div
              className="alert alert-danger login-alert"
              role="alert"
              ref={$loginAlert}
            >
              帳號或密碼錯誤
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <LoginInput
                className={'loginCard-input'}
                type="text"
                title={'帳號'}
                id="userAccount"
                ref={$userAccount}
                value={userAccountValue}
                setValue={setUserAccountValue}
              />
            </div>
            <div className="login-input d-flex  align-items-center justify-content-between">
              <LoginInput
                className={'loginCard-input'}
                type="password"
                title={'密碼'}
                id="userPassword"
                ref={$userPassword}
                value={userPasswordValue}
                setValue={setUserPasswordValue}
              />
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
            <OptionButton
              className="login-button"
              onClick={handleLogin}
              text={'登入'}
              type={'green'}
            />
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
          <div className="register-content form-content" ref={$registerContent}>
            <div className="register-title">會員註冊</div>
            <div
              className="alert alert-success register-alert"
              role="alert"
              ref={$registerAlert}
            >
              註冊成功
            </div>
            <div className="login-input d-flex flex-column align-items-end justify-content-between">
              <LoginInput
                type="text"
                id="createAccount"
                title={'帳號'}
                className={'loginCard-input'}
                value={createAccountValue}
                setValue={setCreateAccountValue}
                wrongText={createAccountWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'密碼'}
                className={'loginCard-input'}
                value={createPasswordValue}
                setValue={setCreatePasswordValue}
                wrongText={createPasswordWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'確認密碼'}
                className={'loginCard-input'}
                value={confirmPasswordValue}
                setValue={setConfirmPasswordValue}
                wrongText={confirmPasswordWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'姓名'}
                className={'loginCard-input'}
                value={nameValue}
                setValue={setNameValue}
                isShowWrongText={nameWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'信箱'}
                className={'loginCard-input'}
                value={userEmailValue}
                setValue={setUserEmailValue}
                wrongText={userEmailWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'手機'}
                className={'loginCard-input'}
                value={userMobileValue}
                setValue={setUserMobileValue}
                wrongText={userMobileWrongText}
              />
            </div>
            <OptionButton
              onClick={handleRegister}
              className="register-button"
              text={'送出'}
            />
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
