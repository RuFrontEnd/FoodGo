import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
// import IrisBeastiePointSect from '../Components/IrisBeastiePointSect/IrisBeastiePointSect';
import ChaOrderManagement from './../../Cha/Components/Cha-Order-Management/ChaOrderManagement';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';

function IrisOrderManagement(props) {
  const {
    isLogin,
    currentUser,
    currentUserData,
    setShowLoginModal,
    setShowBar,
    handleCartNumber,
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
        <ChaOrderManagement {...props} />
      </div>
      <ScrollButton />
    </>
  );
}

export default IrisOrderManagement;
