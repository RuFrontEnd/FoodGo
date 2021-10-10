import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberMenuSect from 'components/memberMenuSect/MemberMenuSect';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
// import './IrisMemberPage.scss';
// import 'pages/myFav/myFav.scss';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { ReactComponent as WaveLine } from 'assets/svg/wave_line.svg';

const Container = styled.section`
  margin-top: 60px;
  display: flex;
`;

const ContentContainer = styled.div``;

const ContentWrap = styled.div`
  width: 100;
  padding-left: 10%;
  padding-right: 10%;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  color: #a59583;
  font-size: 2.4rem;
  font-weight: bold;
`;

function MemberLayout(props) {
  const isLogin = useSelector((state) => state.member.isLogin);
  const { currentUser, children, title } = props;
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
      <ContentContainer className="container col-9">
        {title && (
          <ContentWrap className="row justify-content-center">
            <Title>{title}</Title>
            <WaveLine />
          </ContentWrap>
        )}
        {children}
      </ContentContainer>
      <ScrollButton />
    </Container>
  );
}

export default withRouter(MemberLayout);
