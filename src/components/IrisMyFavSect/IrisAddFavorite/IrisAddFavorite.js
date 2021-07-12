import React, { useState, useEffect } from 'react';
import './IrisAddFavorite.scss';
import { useSelector } from 'react-redux';

function IrisAddFavorite(props) {
  const {
    key,
    data,
    dataFav,
    isShowFav,
    setIsShowFav,
    proudctId,
    setUserFavDelete,
    setHideCard,
  } = props;

  const currentUser = useSelector((state) => state.member.currentUser);

  // 新增與刪除最愛邏輯
  const addFav = (e) => {
    console.log(proudctId);
    if (isShowFav) {
      // console.log(product_sid)
      const newFavItem = {
        currentUser: currentUser,
        product_sid: proudctId,
      };
      setIsShowFav(false); // 按鈕隱藏

      // 連動menu數字
      // 設甚麼值無所謂，重點是讓狀態改變，menu那邊useEffect才會偵測到
      setUserFavDelete(proudctId);

      fetch('http://localhost:5000/member/deleteMyFav', {
        method: 'POST',
        body: JSON.stringify(newFavItem),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
        .then((r) => r.json())
        .then((o) => {
          console.log(o);
        });
    } else if (!isShowFav) {
      setIsShowFav(true); // 按鈕定住
      // 發送資料
      // console.log(product_sid)
      const newFavItem = {
        currentUser: currentUser,
        product_sid: proudctId,
      };
      // console.log(newProfile)

      fetch('http://localhost:5000/member/addMyFav', {
        method: 'POST',
        body: JSON.stringify(newFavItem),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
        .then((r) => r.json())
        .then((o) => {
          console.log(o);
        });
    }
  };

  return (
    <>
      <button
        className="iris-addFavorite-btn iris-addFavorite-btn-n"
        onClick={(e) => {
          addFav(e);
        }}
      ></button>
    </>
  );
}

export default IrisAddFavorite;
