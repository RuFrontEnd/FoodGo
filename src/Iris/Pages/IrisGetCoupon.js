import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisGetCouponSect from '../Components/IrisGetCouponSect/IrisGetCouponSect';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';

function IrisGetCoupon(props) {
  const {
    isLogin,
    currentUser,
    currentUserData,
    setShowLoginModal,
    couponStatus,
    setCouponStatus,
    couponOneStatus,
    setCouponOneStatus,
    setShowBar,
  } = props;

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
      <VNavbar {...props} />
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect
          currentUser={currentUser}
          currentUserData={currentUserData}
        />
        <IrisGetCouponSect
          currentUser={currentUser}
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
