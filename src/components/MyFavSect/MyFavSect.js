// correct

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as StarOrange } from './Images/star_orange.svg';
import { ReactComponent as StarGrey } from './Images/star_grey.svg';
import 'components/myFavSect/myFavSect.scss';
import ProductCard from 'components/productCard/ProductCard'; //productCard
// import Star123 from './Images/star_orange.svg';
import { useSelector } from 'react-redux';
import axios from 'axios';

function MyFavSect(props) {
  const {
    userFavDelete,
    // 設定userFavDelete的狀態，傳到memberMenu，若有改變數字會減一
    setUserFavDelete,
  } = props;
  const currentUser = useSelector((state) => state.member.currentUser);
  const [myFav, setMyFav] = useState([]);
  const [showFavArr, setShowFavArr] = useState([]);
  const [hideCard, setHideCard] = useState(false);

  // 得到目前所有的最愛資料
  const getMyFav = () => {
    const url = 'http://localhost:5000/member/myFavList';
    axios.get(url, { params: { member_sid: currentUser } }).then((res) => {
      console.log('res.data', res.data);
      setMyFav(res.data[0]);
    });
  };

  // 一開始就會開始載入資料
  useEffect(() => {
    getMyFav();
  }, []);

  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">我的最愛</h2>
          <WaveLine />
        </div>
        <div className="iris-cards-container row">
          {/* // const imageId = 'card-img-' + item.product_sid return ( */}
          <div class="col-4">
            {/* <ProductCard
            data={commodities}
            favorites={favorites}
            title={commodity.productname}
            comment={commodity.contentNum}
            buy={commodity.purchased}
            price={commodity.price}
            stars={commodity.startRating}
            id={`ru-addCart-btn-${index + 1}`}
            proudctId={commodity.sid}
            parentId={`ru-addCart-btn-warp-${index + 1}`}
            imgId={commodity.img_id}
            handleCartNumber={handleCartNumber} // localStorage函式
            showFavArr={showFavArr}
            count={count}
            setCount={setCount}
            /> */}
            {/* <IrisCard
                  key={item.product_sid}
                  title={item.productname}
                  comment={item.contentNum}
                  price={item.price}
                  imgId={item.img_id}
                  showFavArr={showFavArr}
                  currentUserFav={currentUserFav}
                  stars={item.starRating}
                  proudctId={item.product_sid}
                  setUserFavDelete={setUserFavDelete}
                  hideCard={hideCard}
                  setHideCard={setHideCard}
                /> */}
          </div>
          {/* ); */}
        </div>
      </div>
    </>
  );
}

export default MyFavSect;
