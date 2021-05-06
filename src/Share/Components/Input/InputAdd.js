// height:40px   font-size:15px   方角
// 增新地址輸入框
// cha
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';

function InputAdd(props) {
  const { id, type, placeholder } = props;

  const turnOrange = () => {
    const symbolAdd = document.querySelector('.iris-symbolAdd');
    symbolAdd.style.color = '#f5a016';
  };
  const turnGrey = () => {
    const symbolAdd = document.querySelector('.iris-symbolAdd');
    symbolAdd.style.color = '#858585';
  };

  return (
    <>
      <div className="iris-select-wrapper">
        <input
          className="form-control iris-InputAdd"
          type={type}
          placeholder={placeholder}
          id={id}
        />
        <div
          className="iris-whitebox-add"
          onMouseEnter={() => {
            turnOrange();
          }}
          onMouseLeave={() => {
            turnGrey();
          }}
        ></div>
        <div className="iris-symbolAdd">+</div>
      </div>
    </>
  );
}

export default InputAdd;
