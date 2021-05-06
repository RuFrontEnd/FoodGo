// height:50px   font-size:20px   圓角輸入框
// janice 地圖搜尋框
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';

function InputH50(props) {
  const { placeholder, type, id } = props;
  return (
    <>
      <input
        className="form-control iris-inputH50"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </>
  );
}

export default InputH50;
