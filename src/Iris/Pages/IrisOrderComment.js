import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisOrderCommentSect from '../Components/IrisOrderCommentSect/IrisOrderCommentSect';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
import { useSelector } from 'react-redux';

function IrisOrderComment(props) {
  const [commentDelete, setCommentDelete] = useState('');
  const {
    currentUserData,
    setShowLoginModal,
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
          commentDelete={commentDelete}
          currentUserData={currentUserData}
        />
        <IrisOrderCommentSect
          commentDelete={commentDelete}
          setCommentDelete={setCommentDelete}
        />
      </div>
      <ScrollButton />
    </>
  );
}

export default IrisOrderComment;
