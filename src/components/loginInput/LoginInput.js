// inputH44
// height:50px   font-size:20px   圓角輸入框
// iris 會員註冊/登入
import React, { useState, useEffect } from 'react';
import './loginInput.scss';

function LoginInput(props) {
  const { placeholder, type, id, className } = props;
  return (
    <input
      id={id}
      className={`LoginInput ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default LoginInput;
