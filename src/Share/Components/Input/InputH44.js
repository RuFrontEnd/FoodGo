// height:50px   font-size:20px   圓角輸入框
// iris 會員註冊/登入
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';

function InputH44(props) {
  const { placeholder, type, id } = props;
  return (
    <>
      <input
        className="form-control iris-InputH44"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </>
  );
}

export default InputH44;
