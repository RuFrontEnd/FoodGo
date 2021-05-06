import React, { useState } from 'react'
import './IrisLoginModal.scss'
import IrisLoginCard from './../IrisLoginCard/IrisLoginCard'
import IrisSuccessBox from './../IrisSuccessBox/IrisSuccessBox'

function IrisLoginModal(props) {
  const [showSuccessBox, setShowSuccessBox] = useState(false)
  const {
    showLoginModal,
    setShowLoginModal,
    setIsLogin,
    setCurrentUser,
    isLogin,
    currentUserData,
    setCurrentUserData,
  } = props

  // 若ShowLoginModal是true，就秀登入畫面
  if (document.querySelector('.iris-login-mask')) {
    if (showLoginModal === true) {
      // 秀登入畫面
      document.querySelector('.iris-login-mask').style.display = 'block'
      document.querySelector('.iris-login-container').style.display = 'block'
      document.documentElement.style.overflowY = 'hidden' // 禁止滾動
    } else {
      document.querySelector('.iris-login-mask').style.display = 'none'
      document.querySelector('.iris-login-container').style.display = 'none'
      // document.querySelector('.iris-sucess-container').style.display = 'none'
      document.documentElement.style.overflowY = 'scroll'
    }
  }

  return (
    <>
      <div
        className="iris-login-mask"
        onClick={() => {
          setShowLoginModal(false) // 點擊黑色遮罩把ShowLoginModa把改回false
        }}
      ></div>
      <div class="container iris-login-container">
        <IrisLoginCard
          setIsLogin={setIsLogin}
          setCurrentUser={setCurrentUser}
          isLogin={isLogin}
          setShowSuccessBox={setShowSuccessBox}
          setShowLoginModal={setShowLoginModal}
          setCurrentUserData={setCurrentUserData}
        />
      </div>
      {/* <div class="iris-login-success-element"> */}
      <IrisSuccessBox
        showSuccessBox={showSuccessBox}
        setShowSuccessBox={setShowSuccessBox}
      />
      {/* </div> */}
    </>
  )
}

export default IrisLoginModal
