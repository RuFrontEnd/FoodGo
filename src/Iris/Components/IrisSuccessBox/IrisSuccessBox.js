import React, { useState, useEffect } from 'react'
import './IrisSuccessBox.scss'

function IrisSuccessBox(props) {
  const { showSuccessBox, setShowSuccessBox } = props
  if (showSuccessBox === true) {
    console.log('show')
    document.querySelector('.iris-login-success-mask').style.display = 'block'
    document.querySelector('.iris-login-success-container').style.display =
      'block'
  } else {
    if (
      document.querySelector('.iris-login-success-container') &&
      document.querySelector('.iris-login-success-mask')
    ) {
      document.querySelector('.iris-login-success-mask').style.display = 'none'
      document.querySelector('.iris-login-success-container').style.display =
        'none'
    }
  }

  return (
    <>
      <div
        class="iris-login-success-mask"
        onClick={() => {
          setShowSuccessBox(false)
        }}
      ></div>
      <div class="iris-login-success-container">
        <div class="iris-success-checkmark">
          <div class="iris-check-icon">
            <span class="icon-line line-tip"></span>
            <span class="icon-line line-long"></span>
            <div class="icon-circle"></div>
            <div class="icon-fix"></div>
          </div>
          <div class="iris-login-sucess">登入成功</div>
        </div>
      </div>
    </>
  )
}

export default IrisSuccessBox
