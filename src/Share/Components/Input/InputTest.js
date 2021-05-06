// height:50px   font-size:20px   圓角輸入框
// janice
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function InputH50(props) {

  return (
    <>
      <input
        className="form-control iris-inputH50"
        type="text"
        placeholder="height:50px font-size:20px 圓角"
        value={props.input}
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
      />
    </>
  );
}

export default InputH50;
