import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisGetCouponSect from '../Components/IrisGetCouponSect/IrisGetCouponSect';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
import { useSelector } from 'react-redux';

function IrisGetCoupon(props) {
  const {
    currentUser,
    currentUserData,
    setShowLoginModal,
    couponStatus,
    setCouponStatus,
    couponOneStatus,
    setCouponOneStatus,
    setShowBar,
  } = props;

  const isLogin = useSelector((state) => state.member.isLogin);

  useEffect(() => {
    setShowBar(true);
  }, []);

  // 在此頁面按登出的話直接導到首頁
  if (isLogin === false) {
    // setShowLoginModal(true)
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect
          currentUserData={currentUserData}
        />
        <IrisGetCouponSect
          couponStatus={couponStatus}
          setCouponStatus={setCouponStatus}
          couponOneStatus={couponOneStatus}
          setCouponOneStatus={setCouponOneStatus}
        />
      </div>
      <ScrollButton />
    </>
  );
}

export default IrisGetCoupon;
