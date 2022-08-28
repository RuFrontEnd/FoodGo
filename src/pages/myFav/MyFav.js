import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberMenuSect from 'components/memberMenuSect/MemberMenuSect';
import MyFavSect from 'components/myFavSect/MyFavSect';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
import MemberLayout from 'layout/MemberLayout';
// import './IrisMemberPage.scss';
import 'pages/myFav/myFav.scss';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MyFav(props) {
  const isLogin = useSelector((state) => state.member.isLogin);
  const [userFavDelete, setUserFavDelete] = useState('');
  const { currentUser, setShowLoginModal, setShowBar } = props;
  const currentUserData = useSelector((state) => state.member.currentUserData);

  useEffect(() => {
    setShowBar(true);
  }, []);

  // 在此頁面按登出的話直接導到首頁
  if (isLogin === false) {
    // setShowLoginModal(true)
    return <Redirect to="/" />;
  }

  return (
    <MemberLayout title={'我的最愛'}>
      <MyFavSect
        currentUser={currentUser}
        userFavDelete={userFavDelete}
        setUserFavDelete={setUserFavDelete}
      />
    </MemberLayout>
  );
}

export default withRouter(MyFav);
