import React from 'react';
import 'components/addFavoriteButton/addFavoriteButton.scss';
import { endpoint } from 'variable/variable';
import { useSelector } from 'react-redux';

function addFavoriteButton(props) {
  const { className, style, isShowFav, setIsShowFav, proudctId } = props;

  // 新增與刪除最愛邏輯
  const currentUser = useSelector((state) => state.member.currentUser);
  const addFav = (e) => {
    const newFavItem = {
      currentUser: currentUser,
      product_sid: proudctId,
    };
    if (isShowFav) {
      setIsShowFav(false); // 按鈕隱藏
      // 待開啟 s
      fetch(`${endpoint}/member/deleteMyFav`, {
        method: 'POST',
        body: JSON.stringify(newFavItem),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
    }
    if (!isShowFav) {
      setIsShowFav(true); // 按鈕定住
      fetch(`${endpoint}/member/addMyFav`, {
        method: 'POST',
        body: JSON.stringify(newFavItem),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
    }
  };

  return (
    <>
      <button
        id="addFavoriteButton"
        className={className}
        style={style}
        onClick={(e) => {
          addFav(e);
        }}
      ></button>
    </>
  );
}

export default addFavoriteButton;
