// height:50px  font-size:20px
// Janice 地址選單
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';
import { ReactComponent as BackArrow } from './../../image/triangleArrow.svg';
import $ from 'jquery';

function MainPageSelectBox() {
  return (
    <>
      <div className="iris-mainpage-select-wrapper d-flex">
        <div className="iris-selectbar-wrapper">
          <select
            className="form-control iris-mainpage-select"
            id="exampleFormControlSelect1"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="iris-mainpage-whitebox"></div>
          <BackArrow className="iris-mainpage-trianglearrow" />
        </div>
      </div>
    </>
  );
}

export default MainPageSelectBox;
