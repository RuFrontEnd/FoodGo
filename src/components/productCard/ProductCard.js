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
    data,
    dataFav,
    title,
    comment,
    buy,
    price,
    cardMargin,
    stars,
    id,
    proudctId,
    parentId,
    imgId,
    handleCartNumber,
    showFavArr,
    count,
    setCount,
  } = props;

  const currentUser = useSelector((state) => state.member.currentUser);
  const [isShowFav, setIsShowFav] = useState(false); // 是否要定住我的最愛按鈕
  const [path, setPath] = useState();
  const [isFavActive, setIsFavActive] = useState(false);

  // 定住我的最愛按鈕邏輯
  useEffect(() => {
    if (showFavArr !== undefined) {
      // console.log(showFavArr, showFavArr.length)
      for (let i = 0; i < showFavArr.length; i++) {
        // 當該會員的加入過我的最愛的商品id 匹配 這個card元件的商品id 時
        if (showFavArr[i] === proudctId) {
          // 就定住我的最愛按鈕
          setIsShowFav(true);
        }
      }
    }
  }, []);

  // 決定前往頁面 邏輯
  useEffect(() => {
    if (!data) {
      return;
    }
    data.forEach((dataItem) => {
      setPath('/bento/' + (dataItem.sid - 1));
    });
  }, [data]);
  // 決定path路徑

  useEffect(() => {
    const newFavItem = {
      currentUser: currentUser,
      product_sid: proudctId,
    };
    if (isFavActive) {
      fetch(`${endpoint}/member/addMyFav`, {
        method: 'POST',
        body: JSON.stringify(newFavItem),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
    }
    if (!isFavActive) {
      fetch(`${endpoint}/member/deleteMyFav`, {
        method: 'POST',
        body: JSON.stringify(newFavItem),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
    }
  }, [isFavActive]);

  if (!data) {
    return;
  }
  return (
    <>
      <div className="ru-card-container" id={cardMargin}>
        {/* item圖片s */}
        <section className="ru-card-img-warp">
          <Link to={path} className="ru-card-link">
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
              data={data}
              proudctId={proudctId}
              dataFav={dataFav}
              isActive={isFavActive}
              onClick={() => {
                setIsFavActive(!isFavActive);
              }}
            />
          </div>
        </section>
        {/* item圖片e */}
        {/* item資訊s */}
        <section className="ru-card-info-warp">
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
          <div className="ru-card-price">
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
            />
          </div>
        </section>
        {/* 加入購物車按鈕e */}
      </div>
    </>
  );
}
export default withRouter(ProductCard);
