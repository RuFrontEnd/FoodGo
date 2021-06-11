import React, { useState, useEffect } from 'react';
import 'components/addFavoriteButton/addFavoriteButton.scss';
import { endpoint } from 'variable/variable';
import { useSelector } from 'react-redux';

function AddFavoriteButton(props) {
  const { className, style, proudctId, isActive, setIsActive } = props;
  const currentUser = useSelector((state) => state.member.currentUser);

  // 新增與刪除最愛邏輯

  useEffect(() => {
    const newFavItem = {
      currentUser: currentUser,
      product_sid: proudctId,
    };
    if (isActive) {
      fetch(`${endpoint}/member/addMyFav`, {
        method: 'POST',
        body: JSON.stringify(newFavItem),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
    }
    if (!isActive) {
      fetch(`${endpoint}/member/deleteMyFav`, {
        method: 'POST',
        body: JSON.stringify(newFavItem),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
    }
  }, [isActive]);

  return (
    <>
      <button
        id={isActive ? 'addFavoriteButton-active' : 'addFavoriteButton'}
        className={`${className} addFavoriteButton`}
        style={style}
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      ></button>
    </>
  );
}

export default AddFavoriteButton;
