// correct

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as StarOrange } from './Images/star_orange.svg';
import { ReactComponent as StarGrey } from './Images/star_grey.svg';
import 'components/myFavSect/myFavSect.scss';
import ProductCard from 'components/productCard/ProductCard'; //productCard
// import IrisCard from './IrisCard/IrisCard';
import FallBack from 'components/fallBack/FallBack';
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
  const [myFavItems, setMyFavItems] = useState([]);
  const [showFavArr, setShowFavArr] = useState([]);
  const [hideCard, setHideCard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 得到目前所有的最愛資料

  const getMyFav = () => {
    const url = 'http://localhost:5000/member/myFavList';
    axios.get(url, { params: { member_sid: currentUser } }).then((res) => {
      // console.log('res.data', res.data);
      setMyFavItems(res.data);
      setIsLoading(false);
    });
  };

  // 一開始就會開始載入資料
  useEffect(() => {
    getMyFav();
  }, []);

  useEffect(() => {
    console.log('myFavItems', myFavItems);
  }, [myFavItems]);

  if (isLoading) {
    return <FallBack />;
  }

  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">我的最愛</h2>
          <WaveLine />
        </div>
        <div className="iris-cards-container row">
          {myFavItems.map((myFavItem) => (
            <ProductCard
              title={myFavItem.productname}
              comment={myFavItem.contentNum}
              buy={myFavItem.purchased}
              price={myFavItem.price}
              stars={myFavItem.startRating}
              proudctId={myFavItem.sid}
              imgId={myFavItem.img_id}
              isFavorite={true}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyFavSect;
