import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberLayout from 'layout/MemberLayout';
import { Redirect } from 'react-router-dom';
import OrderManagementSect from 'components/orderManagementSect/OrderManagementSect';
import { useSelector } from 'react-redux';

// import IrisOrderCommentSect from '../Components/IrisOrderCommentSect/IrisOrderCommentSect';

function OrderManagement(props) {
  const { currentUserData, setShowLoginModal, setShowBar, handleCartNumber } =
    props;
  const [commentDelete, setCommentDelete] = useState('');
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
      <MemberLayout>
        <OrderManagementSect {...props} />
      </MemberLayout>
    </>
  );
}

export default OrderManagement;
