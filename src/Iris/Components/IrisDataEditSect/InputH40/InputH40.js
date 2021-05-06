// height:40px   font-size:15px   方角輸入框
// cha 結帳,揪團表單  iris會員資料表單
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './Input.scss'

function InputH40(props) {
  const { placeholder, type, id, userInfo, setUserInfo } = props

  return (
    <>
      <input
        className="form-control iris-InputH40"
        type={type}
        placeholder={placeholder}
        id={id}
        // value={userInfo}
        // onChange={(e) => setUserInfo(e.target.value)}
      />
    </>
  )
}

export default InputH40
