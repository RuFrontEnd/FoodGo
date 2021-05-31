// inputH44
// height:50px   font-size:20px   圓角輸入框
// iris 會員註冊/登入
import React, { useState, useEffect } from 'react';
import './loginInput.scss';

const LoginInput = React.forwardRef((props, ref) => {
  const { placeholder, type, id, className, value, setValue } = props;
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      ref={ref}
      id={id}
      className={`LoginInput ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
});

export default LoginInput;
