import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisBeastiePointSect from '../Components/IrisBeastiePointSect/IrisBeastiePointSect';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
import IrisBeastieRuleBox from '../Components/IrisBeastieRuleBox/IrisBeastieRuleBox';

function IrisBeastiePoint(props) {
  const {
    isLogin,
    currentUser,
    currentUserData,
    setShowLoginModal,
    setShowBar,
  } = props;
  const [showRuleBox, setShowRuleBox] = useState(false);

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
        <IrisBeastiePointSect
          currentUser={currentUser}
          setShowRuleBox={setShowRuleBox}
        />
      </div>
      <ScrollButton />
      <IrisBeastieRuleBox
        showRuleBox={showRuleBox}
        setShowRuleBox={setShowRuleBox}
      />
    </>
  );
}

export default IrisBeastiePoint;
