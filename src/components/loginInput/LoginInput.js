// inputH44
// height:50px   font-size:20px   圓角輸入框
// iris 會員註冊/登入
import React, { useState, useEffect } from 'react';
import './loginInput.scss';

function LoginInput(props) {
  const { placeholder, type, id } = props;
  return (
    <>
      <input
        className="LoginInput"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </>
  );
}

export default LoginInput;
