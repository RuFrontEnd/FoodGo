// 地址輸入框編輯狀態
// cha
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';
import { ReactComponent as EditIcon } from './../../image/edit_icon.svg';
import { ReactComponent as DeleteIcon } from './../../image/delete_icon.svg';

function InputAddressEdit(props) {
  const { setAddressEdit, setNewAddress } = props;

  // 按enter跳出編輯模式，並記錄input值
  const editModeOff = (e) => {
    let keypress = e.keyCode;
    if (keypress === 13) {
      setAddressEdit(false);
      setNewAddress(document.querySelector('.iris-InputAddress-edit').value);
    }
  };
  return (
    <>
      <input
        className="form-control iris-InputAddress-edit"
        onKeyDown={(e) => {
          editModeOff(e);
        }}
      />
    </>
  );
}

export default InputAddressEdit;
