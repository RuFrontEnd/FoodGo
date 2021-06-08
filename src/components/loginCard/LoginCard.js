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

  const [userAccountValue, setUserAccountValue] = useState('');
  const [userPasswordValue, setUserPasswordValue] = useState('');

  const [createAccountValue, setCreateAccountValue] = useState('');
  const [isCreateAccountWrong, setIsCreateAccountWrong] = useState(false);

  const [createPasswordValue, setCreatePasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [userEmailValue, setUserEmailValue] = useState('');
  const [userMobileValue, setUserMobileValue] = useState('');

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
      console.log('a');
      setIsCreateAccountWrong(true);
    } // 帳號小於8碼

    if (!createPasswordValue.match(/[A-Za-z0-9]{8,24}/)) {
      // $('.empty-password').slideUp('slow');
      $($wrongPasswordFormat.current).slideDown('slow');
    } // 密碼小於8碼

    if (
      !confirmPasswordValue.match(/[A-Za-z0-9]{8,24}/) ||
      confirmPasswordValue !== createPasswordValue
    ) {
      // $('.empty-password').slideUp('slow');
      $($wrongConfirmPasswordFormat.current).slideDown('slow');
    } // 確認密碼小於8碼或確認密碼不等於密碼

    if (
      !userEmailValue.match(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      )
    ) {
      // $('.empty-email').slideUp('slow');
      $($wrongEmailFormat.current).slideDown('slow');
    } // 信箱格式不符

    if (!userMobileValue.match(/^09[0-9]{8}$/)) {
      // $('.empty-mobile').slideUp('slow');
      $($wrongMobileFormat.current).slideDown('slow');
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
      // $('.empty-account').slideUp('slow');
      // $('.empty-password').slideUp('slow');
      // $('.empty-email').slideUp('slow');
      // $('.empty-mobile').slideUp('slow');
      $($wrongAccountFormat.current).slideUp('slow');
      $($wrongPasswordFormat.current).slideUp('slow');
      $($wrongConfirmPasswordFormat.current).slideUp('slow');
      $($wrongEmailFormat.current).slideUp('slow');
      $($wrongMobileFormat.current).slideUp('slow');

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
          <div className="login-content" ref={$loginContent}>
            <div className="login-title">會員登入</div>
            <div
              className="alert alert-danger login-alert"
              role="alert"
              ref={$loginAlert}
            >
              帳號或密碼錯誤
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">帳號</div>
              <LoginInput
                type="text"
                id="userAccount"
                ref={$userAccount}
                value={userAccountValue}
                setValue={setUserAccountValue}
              />
            </div>
            <div className="login-input d-flex  align-items-center justify-content-between">
              <div className="login-text">密碼</div>
              <LoginInput
                type="password"
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
          <div className="register-content" ref={$registerContent}>
            <div className="register-title">會員註冊</div>
            <div
              className="alert alert-success register-alert"
              role="alert"
              ref={$registerAlert}
            >
              註冊成功
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              {/* <div className="login-text">帳號</div> */}
              <LoginInput
                type="text"
                id="createAccount"
                ref={$createAccount}
                value={createAccountValue}
                setValue={setCreateAccountValue}
                isShowWrongText={isCreateAccountWrong}
                wrongText={'帳號要大於8碼'}
              />
            </div>
            {/* <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">密碼</div>
              <LoginInput
                type="password"
                id="createPassword"
                ref={$createPassword}
                value={createPasswordValue}
                setValue={setCreatePasswordValue}
              />
            </div>
            <div className="wrong-password-format" ref={$wrongPasswordFormat}>
              *密碼要大於8碼
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">確認密碼</div>
              <LoginInput
                type="password"
                id="createConfirmPassword"
                ref={$createConfirmPassword}
                value={confirmPasswordValue}
                setValue={setConfirmPasswordValue}
              />
            </div>
            <div
              className="wrong-confirmPassword-format"
              ref={$wrongConfirmPasswordFormat}
            >
              *兩次輸入的密碼不符
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">姓</div>
              <LoginInput
                type="text"
                id="creatEmail"
                ref={$createEmail}
                value={userEmailValue}
                setValue={setUserEmailValue}
              />
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">名字</div>
              <LoginInput
                type="text"
                id="creatEmail"
                ref={$createEmail}
                value={userEmailValue}
                setValue={setUserEmailValue}
              />
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">信箱</div>
              <LoginInput
                type="text"
                id="creatEmail"
                ref={$createEmail}
                value={userEmailValue}
                setValue={setUserEmailValue}
              />
            </div>
            <div class="wrong-email-format" ref={$wrongEmailFormat}>
              *請填入正確的信箱格式
            </div>
            <div className="login-input d-flex align-items-center justify-content-between">
              <div className="login-text">手機</div>
              <LoginInput
                type="text"
                id="createMobile"
                ref={$createMobile}
                value={userMobileValue}
                setValue={setUserMobileValue}
              />
            </div>
            <div className="wrong-mobile-format" ref={$wrongMobileFormat}>
              *請填入正確的手機格式
            </div>
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
            </div> */}

            <OptionButton
              onClick={handleRegister}
              className="register-button"
              text={'送出'}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginCard;
