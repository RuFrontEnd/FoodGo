// height:50px  font-size:20px
// Janice 地址選單
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';
import { ReactComponent as BackArrow } from './../../image/back_arrow.svg';
import $ from 'jquery';

function MainPageSelectBox(props) {
  const { value, id } = props;
  const openList = () => {
    $('.iris-mainpage-select').trigger('click');
  };
  window.onclick = (e) => {
    console.log(e.target);
    console.log(e.target.tagName);
  };

  return (
    <>
      <div className="iris-mainpage-select-wrapper d-flex">
        <div className="iris-selectbar-wrapper">
          <select
            className="form-control iris-mainpage-select"
            id="exampleFormControlSelect1"
          >
            <option value={value} id={id}></option>
            <option value={value} id={id}></option>
            <option value={value} id={id}></option>
          </select>
          <div className="iris-mainpage-whitebox"></div>
          <BackArrow
            className="iris-mainpage-backarrow"
            onClick={() => {
              openList();
            }}
          />
          <div
            onClick={() => {
              openList();
            }}
          >
            1234
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageSelectBox;
