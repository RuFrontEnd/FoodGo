import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberMenuSect from 'components/memberMenuSect/MemberMenuSect';
// import MyFavSect from 'components/myFavSect/MyFavSect';
import MyFavSect from 'components/myFavSect/MyFavSect';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
// import VNavbar from 'Share/Components/VNavbar/VNavbar';
// import './IrisMemberPage.scss';
import 'pages/myFav/myFav.scss';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const Container = styled.section`
  margin-top: 60px;
  display: flex;
`;

function MemberLayout(props) {
  const isLogin = useSelector((state) => state.member.isLogin);
  const {
    currentUser,
    children,
    // setShowBar
  } = props;
  const currentUserData = useSelector((state) => state.member.currentUserData);

  // useEffect(() => {
  //   setShowBar(true);
  // }, []);

  // 在此頁面按登出的話直接導到首頁
  if (isLogin === false) {
    // setShowLoginModal(true)
    return <Redirect to="/" />;
  }
  return (
    <Container className="container">
      <MemberMenuSect
        currentUser={currentUser}
        currentUserData={currentUserData}
      />
      {children}
      <ScrollButton />
    </Container>
  );
}

export default withRouter(MemberLayout);
