import React, { useState, useEffect } from 'react';
import 'components/addFavoriteButton/addFavoriteButton.scss';
import { useSelector } from 'react-redux';

function AddFavoriteButton(props) {
  const { className, style, isActive, onClick = () => {} } = props;

  // 新增與刪除最愛邏輯

  return (
    <>
      <button
        id={isActive ? 'addFavoriteButton-active' : 'addFavoriteButton'}
        className={`${className} addFavoriteButton`}
        style={style}
        onClick={onClick}
      ></button>
    </>
  );
}

export default AddFavoriteButton;
