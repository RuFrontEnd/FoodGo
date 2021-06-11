import React, { useState, useEffect } from 'react';
import './Style.scss';
import { useSelector } from 'react-redux';

function RuAddFavorite(props) {
  const { data, dataFav, isShowFav, setIsShowFav, proudctId } = props;

  // 新增與刪除最愛邏輯
  const currentUser = useSelector((state) => state.member.currentUser);
  const currentUser_sid = currentUser;
  const product_sid = proudctId;
  const addFav = (e) => {
    console.log(proudctId);
    if (isShowFav) {
      // console.log(product_sid)
      const newFavItem = {
        currentUser: currentUser_sid,
        product_sid: product_sid,
      };
      setIsShowFav(false); // 按鈕隱藏

      // 待開啟 s
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
          // console.log(o)
        });
      // 待開啟 e
    } else if (!isShowFav) {
      setIsShowFav(true); // 按鈕定住
      // 發送資料
      // console.log(product_sid)
      const newFavItem = {
        currentUser: currentUser_sid,
        product_sid: product_sid,
      };
      // console.log(newProfile)
      // 待開啟 s
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
          // console.log(o)
        });
      // 待開啟 e
    }
  };

  // if (!dataFav) {
  //   return
  // }
  return (
    <>
      <button
        className="addFavorite-btn addFavorite-btn-n"
        onClick={(e) => {
          addFav(e);
        }}
      ></button>
    </>
  );
}

export default RuAddFavorite;
