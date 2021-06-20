import React, { useState } from 'react';
import 'components/loginModal/loginModal.scss';
import LoginCard from 'components/loginCard/LoginCard';
import LoginSuccessBox from 'components/loginSuccessBox/LoginSuccessBox';

function LoginModal(props) {
  const {
    showLoginModal,
    setShowLoginModal,
    setCurrentUser,
    showSuccessBox,
    setShowSuccessBox,
  } = props;

  // 若ShowLoginModal是true，就秀登入畫面
  if (document.querySelector('.iris-login-mask')) {
    if (showLoginModal === true) {
      // 秀登入畫面
      document.querySelector('.iris-login-mask').style.display = 'block';
      document.querySelector('.iris-login-container').style.display = 'block';
      document.documentElement.style.overflowY = 'hidden'; // 禁止滾動
    } else {
      document.querySelector('.iris-login-mask').style.display = 'none';
      document.querySelector('.iris-login-container').style.display = 'none';
      // document.querySelector('.iris-sucess-container').style.display = 'none'
      document.documentElement.style.overflowY = 'scroll';
    }
  }

  return (
    <>
      <div
        className="iris-login-mask"
        onClick={() => {
          setShowLoginModal(false); // 點擊黑色遮罩把ShowLoginModa把改回false
        }}
      ></div>
      <LoginCard
        className={'container iris-login-container'}
        setCurrentUser={setCurrentUser}
        setShowSuccessBox={setShowSuccessBox}
        setShowLoginModal={setShowLoginModal}
      />
      <LoginSuccessBox
        showSuccessBox={showSuccessBox}
        setShowSuccessBox={setShowSuccessBox}
      />
    </>
  );
}

export default LoginModal;
