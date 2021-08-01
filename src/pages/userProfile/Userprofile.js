import React, { useState, useEffect } from 'react';
import MemberMenuSect from 'components/memberMenuSect/MemberMenuSect';
import DataEditSect from 'components/dataEditSect/DataEditSect';
import 'pages/userProfile/userProfile.scss';
import { Redirect } from 'react-router-dom';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
import GetCouponBox from 'components/getCouponBox/GetCouponBox';
import { useSelector } from 'react-redux';
import axios from 'axios';
import FallBack from 'components/fallBack/FallBack';

function UserProfile(props) {
  const isLogin = useSelector((state) => state.member.isLogin);
  const currentUser = useSelector((state) => state.member.currentUser);
  const currentUserData = useSelector((state) => state.member.currentUserData);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showGetCouponBox, setShowGetCouponBox] = useState(false);
  const [beastiePointAdd, setBeastiePointAdd] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const {
    setShowBar,
    setShowLoginModal,
    setCouponStatus,
    couponOneStatus,
    setCouponOneStatus,
  } = props;

  if (showUpdateModal === true) {
    document.querySelector('.iris-update-success-mask').style.display = 'block';
    document.querySelector('.iris-update-success-box').style.display = 'block';
  } else {
    if (
      document.querySelector('.iris-update-success-mask') &&
      document.querySelector('.iris-update-success-box')
    ) {
      document.querySelector('.iris-update-success-mask').style.display =
        'none';
      document.querySelector('.iris-update-success-box').style.display = 'none';
    }
  }

  if (showGetCouponBox === true) {
    document.querySelector('.IrisGetCouponBox').style.display = 'block';
  } else {
    if (document.querySelector('.IrisGetCouponBox')) {
      document.querySelector('.IrisGetCouponBox').style.display = 'none';
    }
  }

  const getUserInfoFromServer = () => {
    axios
      .get('http://localhost:5000/member/singleUserProfile', {
        params: {
          member_sid: currentUser,
        },
      })
      .then((res) => {
        setUserInfo(res.data[0]);
      });
  };

  useEffect(() => {
    setShowBar(true);
    getUserInfoFromServer();
  }, []);

  useEffect(() => {
    console.log('userInfo', userInfo);
  }, [userInfo]);

  // 在此頁面按登出的話直接導到首頁
  if (isLogin === false) {
    // setShowLoginModal(true)
    return <Redirect to="/" />;
  }

  if (userInfo.length === 0) {
    return <FallBack />;
  }
  return (
    <>
      {/* <VNavbar {...props} /> */}
      <div className="container iris-memberpage-container">
        <MemberMenuSect
          beastiePointAdd={beastiePointAdd}
          currentUserData={currentUserData}
        />
        <DataEditSect
          setShowUpdateModal={setShowUpdateModal}
          setShowGetCouponBox={setShowGetCouponBox}
          setBeastiePointAdd={setBeastiePointAdd}
          // couponStatus={couponStatus}
          setCouponStatus={setCouponStatus}
          couponOneStatus={couponOneStatus}
          setCouponOneStatus={setCouponOneStatus}
          memberData={userInfo}
        />
        <div
          className="iris-update-success-mask"
          onClick={() => {
            setShowUpdateModal(false);
          }}
        ></div>
        <div class="iris-update-success-box">
          <div class="iris-update-success-checkmark">
            <div class="iris-check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
            <div class="iris-update-sucess">會員資料更新成功</div>
          </div>
        </div>
      </div>
      <ScrollButton />
      <div className="IrisGetCouponBox">
        <GetCouponBox
          showGetCouponBox={showGetCouponBox}
          setShowGetCouponBox={setShowGetCouponBox}
        />
      </div>
    </>
  );
}

export default UserProfile;
