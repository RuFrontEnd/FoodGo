import React, { useState, useEffect } from 'react';
import 'components/productCard/productCard.scss';
import starEmpty from 'assets/svg/starEmpty.svg';
import starHalf from 'assets/svg/starHalf.svg';
import starFull from 'assets/svg/starFull.svg';
import OptionButton from 'components/optionButton/OptionButton';
import AddFavoriteButton from 'components/addFavoriteButton/AddFavoriteButton';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { endpoint } from 'variable/variable';
import { updateCartToLocalStorage } from 'utils/utils';
import useAxios from 'hooks/useGetData';

export const addMyFav = (favItem) => {
  return fetch(`${endpoint}/member/addMyFav`, {
    method: 'POST',
    body: JSON.stringify(favItem),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};

export const deleteMyFav = (favItem) => {
  return fetch(`${endpoint}/member/deleteMyFav`, {
    method: 'POST',
    body: JSON.stringify(favItem),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
};

function ProductCard(props) {
  // title 品名
  // comment 有幾則評論
  // buy 有多少人買
  // price 價格
  // cardMargin 卡片margin => props傳入 card-margin
  // id 不同元件id => addCart-btn-n n為自訂數
  // parentId 不同元件父母id => addCart-btn-warp-n n為自訂數
  // imgId 產品圖片 => card-img-n n為1~9
  const {
    id,
    className,
    title,
    comment,
    buy,
    stars,
    price,
    productSid,
    imgId,
    dataFav,
    proudctId,
    isFavorite,
    favoriteCardStatus = false,
    testid = '',
  } = props;
  // const isFavorite = favorites.some((favorite) => {
  //   return favorite.product_sid === productSid;
  // });
  // console.log(isFavorite, 'isFavorite');
  const currentUser = useSelector((state) => state.member.currentUser);
  const [isFavActive, setIsFavActive] = useState(isFavorite);

  const handelLink = () => {
    props.history.push(`/bento/${productSid}`);
  };

  const switchFavStatus = () => {
    const newFavItem = {
      product_sid: proudctId,
      currentUser: currentUser,
    };
    isFavActive ? deleteMyFav(newFavItem) : addMyFav(newFavItem);
  };

  const addProductToCard = (proudctId, title, count, imgId, price) => {
    updateCartToLocalStorage(
      {
        // 設定要加入的資料
        id: proudctId,
        productName: title,
        productAmount: count,
        productImage: imgId,
        productPrice: price,
      },
      count,
      true
    );
  };

  return (
    <section className={className} id={id} data-testid={testid}>
      <div
        className={`ru-card-container ${
          favoriteCardStatus && 'ru-card-container-favorite'
        }`}
      >
        {/* item圖片s */}
        <section className="ru-card-img-warp">
          <Link className="ru-card-link" onClick={handelLink}>
            <img
              className="ru-card-img"
              style={{
                // "/" => 表示在public資料夾
                backgroundImage: `url("/productImages/Bento/${imgId}.jpg")`,
              }}
            ></img>
          </Link>
          {/* 是否固定我的最愛按鈕 */}
          <div className={`ru-card-abs ${isFavActive && 'ru-card-abs-stop'}`}>
            <AddFavoriteButton
              proudctId={proudctId}
              dataFav={dataFav}
              isActive={isFavActive}
              onClick={() => {
                setIsFavActive(!isFavActive);
                switchFavStatus();
              }}
            />
          </div>
        </section>
        {/* item圖片e */}
        {/* item資訊s */}
        <section
          className={`ru-card-info-warp ${
            favoriteCardStatus && 'ru-card-info-warp-favorite'
          }`}
        >
          <div className="ru-card-none">
            {/* 取間隔用 s */}
            <h3>${price}</h3>
            {/* 取間隔用 e */}
          </div>
          <div className="ru-card-info">
            <h2>{title}</h2>
            <section>
              <div>
                {stars === 5 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                  </div>
                )}
                {stars === 4.5 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starHalf} />
                  </div>
                )}
                {stars === 4 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starEmpty} />
                  </div>
                )}
                {stars === 3.5 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starHalf} />
                    <img className="ru-card-star" src={starEmpty} />
                  </div>
                )}
                {stars === 3 && (
                  <div className="ru-card-star-warp">
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starFull} />
                    <img className="ru-card-star" src={starEmpty} />
                    <img className="ru-card-star" src={starEmpty} />
                  </div>
                )}

                <span>
                  <p className="ru-card-num ru-card-commentNum">
                    {comment} 則評論
                  </p>
                  <p className="ru-card-num ru-card-buyNum">{buy} 已購買</p>
                </span>
              </div>
            </section>
          </div>
          <div
            className={`ru-card-price ${
              favoriteCardStatus && 'ru-card-price-favorite'
            }`}
          >
            <h3>${price}</h3>
          </div>
        </section>
        {/* item資訊e */}
        {/* 加入購物車按鈕s */}
        <section className="ru-card-addCartWarp">
          <div className="ru-card-hr">
            <OptionButton
              type={'origin'}
              className={'productCard-option-button'}
              text={'加入購物車'}
              onClick={() => {
                addProductToCard(proudctId, title, 1, imgId, price);
              }}
            />
          </div>
        </section>
        {/* 加入購物車按鈕e */}
      </div>
    </section>
  );
}
export default withRouter(ProductCard);
