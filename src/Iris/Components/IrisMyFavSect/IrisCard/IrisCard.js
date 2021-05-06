import React, { useState, useEffect } from 'react'
import './IrisCard.scss'
import star from './Images/star.svg'
import starHalf from './Images/starHalf.svg'
import starFull from './Images/starFull.svg'
import IrisAddCart from 'Iris/Components/IrisMyFavSect/IrisAddCart/IrisAddCart'
import IrisAddFavorite from 'Iris/Components/IrisMyFavSect/IrisAddFavorite/IrisAddFavorite'
import { withRouter } from 'react-router'

function IrisCard(props) {
  // title 品名
  // comment 有幾則評論
  // buy 有多少人買
  // price 價格
  // cardMargin 卡片margin => props傳入 card-margin
  // id 不同元件id => addCart-btn-n n為自訂數
  // parentId 不同元件父母id => addCart-btn-warp-n n為自訂數
  // imgId 產品圖片 => card-img-n n為1~9
  const {
    key,
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
    currentUser,
    showFavArr,
    currentUserFav,
    setUserFavDelete,
    hideCard,
    setHideCard,
  } = props

  const [isShowFav, setIsShowFav] = useState(false) // 是否要定住我的最愛按鈕

  //  if (showFavArr[0] === proudctId){
  //   setIsShowFav(true)
  //  }

  // 每個卡片跳轉到指定的詳頁 邏輯
  function linkToDetail() {
    for (let i = 0; i < 21; i++) {
      switch (proudctId) {
        case data[i].sid:
          props.history.push(`/bento/${i}`)
          break
      }
    }
  }

  // 定住我的最愛按鈕邏輯
  useEffect(() => {
    setIsShowFav(true)
  }, [])

  return (
    <>
      <div className="iris-card-container">
        {/* item圖片s */}
        <section className="iris-card-img-warp">
          <a href="" className="iris-card-link" onClick={linkToDetail}>
            <img
              className="iris-card-img"
              style={{
                // "/" => 表示在public資料夾
                backgroundImage: `url("/productImages/Bento/${imgId}.jpg")`,
              }}
            ></img>
          </a>
          {/* 是否固定我的最愛按鈕 */}
          {isShowFav ? (
            <div className="iris-card-abs iris-card-abs-stop">
              <IrisAddFavorite
                data={data}
                isShowFav={isShowFav}
                setIsShowFav={setIsShowFav}
                currentUser={currentUser}
                proudctId={proudctId}
                dataFav={dataFav}
                setUserFavDelete={setUserFavDelete}
                setHideCard={setHideCard}
              />
            </div>
          ) : (
            <div className="iris-card-abs">
              <IrisAddFavorite
                data={data}
                isShowFav={isShowFav}
                setIsShowFav={setIsShowFav}
                currentUser={currentUser}
                proudctId={proudctId}
                dataFav={dataFav}
              />
            </div>
          )}
        </section>
        {/* item圖片e */}
        {/* item資訊s */}
        <section className="iris-card-info-warp">
          {/* <div className="iris-card-none"> */}
          {/* 取間隔用 s */}
          {/* <h3>${price}</h3> */}
          {/* 取間隔用 e */}
          {/* </div> */}
          <div className="iris-card-info">
            <h2 className="iris-card-title">{title}</h2>

            {stars === 5 && (
              <div className="iris-card-star-warp">
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
              </div>
            )}
            {stars === 4.5 && (
              <div className="iris-card-star-warp">
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starHalf} />
              </div>
            )}
            {stars === 4 && (
              <div className="iris-card-star-warp">
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={star} />
              </div>
            )}
            {stars === 3.5 && (
              <div className="iris-card-star-warp">
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starHalf} />
                <img className="iris-card-star" src={star} />
              </div>
            )}
            {stars === 3 && (
              <div className="iris-card-star-warp">
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={starFull} />
                <img className="iris-card-star" src={star} />
                <img className="iris-card-star" src={star} />
              </div>
            )}

            <p className="iris-card-num iris-card-commentNum">
              {comment} 則評論
            </p>

            <h3>${price}</h3>
          </div>
          {/* <div className="iris-card-price">
            <h3>${price}</h3>
          </div> */}
        </section>
        {/* item資訊e */}
        {/* 加入購物車按鈕s */}
        <section className="iris-card-addCartWarp">
          <div className="iris-card-hr">
            <IrisAddCart
              target={'target'}
              id={id}
              proudctId={proudctId}
              parentId={parentId}
              price={price}
              title={title}
              handleCartNumber={handleCartNumber} // localStorage函式
            />
          </div>
        </section>
        {/* 加入購物車按鈕e */}
      </div>
    </>
  )
}
export default withRouter(IrisCard)
