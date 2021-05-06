// 地址輸入框
// cha
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';
import { ReactComponent as EditIcon } from './../../image/edit_icon.svg';
import { ReactComponent as DeleteIcon } from './../../image/delete_icon.svg';
import InputAddressEdit from './InputAddressEdit';

function InputAddress() {
  const [addressEdit, setAddressEdit] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  // 點擊變色
  const selectAddress = () => {
    const inputArea = document.querySelector('.iris-InputAddress');
    inputArea.style['border-color'] = '#fff';
    inputArea.style['box-shadow'] = '0 0 0.5rem #f5a016';
    const DeleteIcon = document.querySelector('.iris-delete-icon');
    DeleteIcon.style.fill = '#f5a016';
    const EditIcon = document.querySelector('.iris-edit-icon');
    EditIcon.style.fill = '#f5a016';
  };

  const editModeOn = () => {
    setAddressEdit(true);
  };

  return addressEdit ? (
    <InputAddressEdit
      setAddressEdit={setAddressEdit}
      setNewAddress={setNewAddress}
    />
  ) : (
    <>
      <div
        className="form-control iris-InputAddress"
        onClick={() => {
          selectAddress();
        }}
      >
        {newAddress}
        {/* <span>{newAddress}</span> */}
        <EditIcon
          className="iris-edit-icon"
          onClick={() => {
            editModeOn();
          }}
        />
        <DeleteIcon className="iris-delete-icon" />
      </div>
    </>
  );
}

export default InputAddress;
