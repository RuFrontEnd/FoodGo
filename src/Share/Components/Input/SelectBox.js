// height:50px  font-size:15px
// cha, Iris 選單
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';
import { ReactComponent as TriangleArrow } from './../../image/triangleArrow.svg';

function SelectBox() {
  return (
    <>
      <div className="iris-select-wrapper">
        <select
          className="form-control iris-select"
          id="exampleFormControlSelect1"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div className="iris-whitebox"></div>
        <TriangleArrow className="iris-triangle" />
      </div>
    </>
  );
}

export default SelectBox;
