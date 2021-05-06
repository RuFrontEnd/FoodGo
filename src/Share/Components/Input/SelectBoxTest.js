// test

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';
import triangleArrow from './../../image/triangleArrow.svg';

function SelectBoxTest(props) {
  return (
    <>
      <div className="iris-select-wrapper">
        <select
          className="form-control iris-select"
          id="exampleFormControlSelect1"
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div className="iris-whitebox"></div>
        <img src={triangleArrow} alt="arrow" className="iris-triangle" />
      </div>
    </>
  );
}

export default SelectBoxTest;
