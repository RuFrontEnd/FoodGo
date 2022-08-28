// moved
import React, { useState, useEffect, useRef } from 'react';
import 'components/loginCard/loginCard.scss';
import LoginInput from 'components/loginInput/LoginInput.js';
import OptionButton from 'components/optionButton/OptionButton';
import { login, setCurrentUser } from 'redux/member/memberActions';
import { useDispatch, useSelector } from 'react-redux';
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

function LoginCard(props) {
  const { className, id, setShowSuccessBox, setShowLoginModal } = props;
  const dispatch = useDispatch();
  const $loginCardBackgroundWrap = useRef();
  const $registerBackgroundWrap = useRef();
  const $loginForm = useRef();
  const $loginContent = useRef();
  const $registerContent = useRef();
  const $userAccount = useRef();
  const $userPassword = useRef();
  const $loginAlert = useRef();
  const $registerAlert = useRef();
  const $formCheckInput = useRef();

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

  // 註冊成功提示
  const [isRegistered, setIsRegistered] = useState(false);

  // 記住我
  const [isRemembered, setIsRemembered] = useState(false);

  // 註冊訊息
  const [registerStatus, setRegisterStatus] = useState({});

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
        // console.log('jsonData', jsonData);
        if (jsonData.status === true) {
          localStorage.setItem('accessToken', jsonData.accessToken);
          localStorage.setItem('currentUser', jsonData.currentUser);
          // localStorage.setItem('currentUserData', jsonData.currentUserData);
          console.log(jsonData);
          dispatch(login());
          dispatch(setCurrentUser(jsonData.currentUser)); // dispatch參數傳入到reducer的action參數
          // dispatch(setCurrentUserData(jsonData.currentUserData));
          setShowLoginModal(false); // 登入光箱消失
          setShowSuccessBox(true); // 出現登入成功光箱
        }
      });
  }

  // 註冊功能
  const handleRegister = () => {
    let unPassTimes = 0;
    // 驗證帳號
    if (createAccountValue.length === 0) {
      setCreateAccountWrongText('帳號不得為空');
      unPassTimes += 1;
    } else if (
      !createAccountValue.match(/.{8}/) ||
      createAccountValue.match(/.{25}/)
    ) {
      setCreateAccountWrongText('帳號不得小於8位數或大於24位數');
      unPassTimes += 1;
    } else if (!createAccountValue.match(/^[a-z]/i)) {
      setCreateAccountWrongText('帳號開頭須為英文字母');
      unPassTimes += 1;
    } else if (!createAccountValue.match(/^\w+$/)) {
      setCreateAccountWrongText('帳號不得含有特殊符號');
      unPassTimes += 1;
    }

    // 驗證密碼
    if (createPasswordValue.length === 0) {
      setCreatePasswordWrongText('密碼不得為空');
      unPassTimes += 1;
    } else if (
      !createPasswordValue.match(/.{8}/) ||
      createPasswordValue.match(/.{25}/)
    ) {
      setCreatePasswordWrongText('密碼不得小於8位數或大於24位數');
      unPassTimes += 1;
    } else if (!createPasswordValue.match(/^[a-z]/i)) {
      setCreatePasswordWrongText('密碼開頭須為英文字母');
      unPassTimes += 1;
    } else if (!createPasswordValue.match(/^\w+$/)) {
      setCreatePasswordWrongText('密碼不得含有特殊符號');
      unPassTimes += 1;
    } else if (createPasswordValue === createAccountValue) {
      setCreatePasswordWrongText('帳號密碼不得相同');
      unPassTimes += 1;
    }

    // 驗證確認密碼
    if (confirmPasswordValue !== createPasswordValue) {
      setConfirmPasswordWrongText('密碼與確認密碼不相同');
      unPassTimes += 1;
    }

    if (nameValue.length === 0) {
      setNameWrongText('姓名不得為空');
      unPassTimes += 1;
    }

    if (userEmailValue.length === 0) {
      setUserEmailWrongText('信箱不得為空');
      unPassTimes += 1;
    } else if (
      !userEmailValue.match(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
      )
    ) {
      setUserEmailWrongText('信箱格式錯誤');
      unPassTimes += 1;
    } // 信箱格式不符

    if (userMobileValue.length === 0) {
      setUserMobileWrongText('手機不得為空');
      unPassTimes += 1;
    } else if (!userMobileValue.match(/^09[0-9]{8}$/)) {
      setUserMobileWrongText('手機格式錯誤');
      unPassTimes += 1;
    } // 手機格式不符

    // 資料都ok才送出
    if (unPassTimes === 0) {
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
        name: nameValue,
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
          // console.log('o', o);
          setRegisterStatus(o);
          setIsRegistered(true);
          if (o.status === true) {
            setCreateAccountValue('');
            setCreatePasswordValue('');
            setConfirmPasswordValue('');
            setNameValue('');
            setUserEmailValue('');
            setUserMobileValue('');
          }
          if (o.status === false) {
            setCreateAccountValue('');
          }
          setTimeout(() => {
            setIsRegistered(false);
          }, 3 * 1000);
        });
    }
  };

  useEffect(() => {
    const cookies = document.cookie.split(';');
    let findcookieTimes = 0;
    cookies.forEach((cookie) => {
      if (cookie.indexOf('encryptedAccount=') >= 0) {
        const encryptAccount = cookie.replace('encryptedAccount=', '').trim('');
        const decryptedAccount = CryptoAES.decrypt(
          encryptAccount,
          'foodGoRememberMeSecret'
        ).toString(CryptoENC); // 解密帳號
        setUserAccountValue(decryptedAccount);
        findcookieTimes += 1;
      }
      if (cookie.indexOf('encryptedPassword=') >= 0) {
        const encryptPassword = cookie
          .replace('encryptedPassword=', '')
          .trim('');
        const decryptedPassword = CryptoAES.decrypt(
          encryptPassword,
          'foodGoRememberMeSecret'
        ).toString(CryptoENC); // 解密帳號
        setUserPasswordValue(decryptedPassword);
        findcookieTimes += 1;
      }
    });
    findcookieTimes === 2 ? setIsRemembered(true) : setIsRemembered(false); // 有記住的帳號密碼則checkbox為勾起; 反之則不勾
  }, []); // 判斷是否cookie已經有記住我的帳號密碼

  useEffect(() => {
    if (isRemembered && userAccountValue !== '' && userPasswordValue !== '') {
      // 加密
      const encryptedAccount = CryptoAES.encrypt(
        userAccountValue,
        'foodGoRememberMeSecret'
      ).toString(); // 加密帳號並轉字串

      const encryptedPassword = CryptoAES.encrypt(
        userPasswordValue,
        'foodGoRememberMeSecret'
      ).toString(); // 加密密碼並轉字串

      document.cookie = `encryptedAccount=${encryptedAccount}; max-age=${
        86400 * 1
      }`; // 存活一天
      document.cookie = `encryptedPassword=${encryptedPassword}; max-age=${
        86400 * 1
      }`; // 存活一天
    } // 按下有記住我則設cookie

    if (!isRemembered) {
      document.cookie = 'encryptedAccount=; max-age=0';
      document.cookie = 'encryptedPassword=$; max-age=0';
    } // 取消記住我則刪除cookie
  }, [isRemembered]);

  // useEffect(() => {
  //   if (registerStatus.status) {
  //     setCreateAccountValue('');
  //     setCreatePasswordValue('');
  //     setConfirmPasswordValue('');
  //     setNameValue('');
  //     setUserEmailValue('');
  //     setUserMobileValue('');
  //     setIsRegistered(true);
  //   }
  //   if (!registerStatus.status) {
  //     setCreateAccountValue('');
  //   }
  //   setTimeout(() => {
  //     setIsRegistered(false);
  //   }, 3 * 1000);
  // }, [registerStatus]);

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
            <div
              className="login-title"
              onClick={() => {
                setUserAccountValue('a123456789');
                setUserPasswordValue('a000000000');
              }}
            >
              會員登入
            </div>
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
                  onChange={() => {
                    setIsRemembered(!isRemembered);
                  }}
                  ref={$formCheckInput}
                  checked={isRemembered}
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
            <div
              className="register-title"
              onClick={() => {
                setCreateAccountValue('a07110711');
                setCreatePasswordValue('a07111111');
                setConfirmPasswordValue('a07111111');
                setNameValue('測試用帳號2');
                setUserEmailValue('as2million@gmail.com');
                setUserMobileValue('0907110000');
              }}
            >
              會員註冊
            </div>
            <div
              className={
                isRegistered
                  ? 'logCard-register-alert-active'
                  : 'logCard-register-alert-inactive'
              }
            >
              <div
                className={`${
                  registerStatus.status ? 'alert-success' : 'alert-danger'
                } register-alert`}
                role="alert"
              >
                {registerStatus.message}
              </div>
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
                setWrongText={setCreateAccountWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'密碼'}
                className={'loginCard-input'}
                value={createPasswordValue}
                setValue={setCreatePasswordValue}
                wrongText={createPasswordWrongText}
                setWrongText={setCreatePasswordWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'確認密碼'}
                className={'loginCard-input'}
                value={confirmPasswordValue}
                setValue={setConfirmPasswordValue}
                wrongText={confirmPasswordWrongText}
                setWrongText={setConfirmPasswordWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'姓名'}
                className={'loginCard-input'}
                value={nameValue}
                setValue={setNameValue}
                wrongText={nameWrongText}
                setWrongText={setNameWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'信箱'}
                className={'loginCard-input'}
                value={userEmailValue}
                setValue={setUserEmailValue}
                wrongText={userEmailWrongText}
                setWrongText={setUserEmailWrongText}
              />
              <LoginInput
                type="text"
                id="createAccount"
                title={'手機'}
                className={'loginCard-input'}
                value={userMobileValue}
                setValue={setUserMobileValue}
                wrongText={userMobileWrongText}
                setWrongText={setUserMobileWrongText}
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
