import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// install react router => npm install react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from 'components/navBar/NavBar';
import Footer from 'components/footer/Footer';
import LoginModal from 'components/loginModal/LoginModal';

// 引入 所有人的總元件
import ClaudiaFarmIndex from 'Claudia/Pages/ClaudiaFarmIndex';
import ClaudiaFarmDetailedPage from 'Claudia/Pages/ClaudiaFarmDetailedPage';

// import IrisOrderComment from 'Iris/Pages/IrisOrderComment';
// import IrisMyFav from 'Iris/Pages/IrisMyFav';
// import IrisBeastiePoint from 'Iris/Pages/IrisBeastiePoint';
// import IrisGetCoupon from 'Iris/Pages/IrisGetCoupon';
// import IrisOrderManagement from 'Iris/Pages/IrisOrderManagement';
import JessMenu from 'Jess/Pages/JessMenu';
import JessBento from 'Jess/Pages/JessBento';
import JessVegBox from 'Jess/Pages/JessVegBox';

import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart';
import ChaGroupOrderCreate from 'Cha/Components/Cha-Group-Order-Create/ChaGroupOrderCreate';
import ChaGroupOrderSearch from 'Cha/Components/Cha-Group-Order-Search/ChaGroupOrderSearch';
import ChaGroupOrderSignIn from 'Cha/Components/Cha-Group-Order-SignIn/ChaGroupOrderSignIn';
import ChaGroupOrderConfirm from 'Cha/Components/Cha-Group-Order-Confirm/ChaGroupOrderConfirm';
import ChaGroupOrderMenu from 'Cha/Components/Cha-Group-Order-Menu/ChaGroupOrderMenu';
import ChaCheckpoint from 'Cha/Pages/ChaCheckpoint';
import ChaProductList from 'Cha/Components-demo/ChaProductList';
import ChaCartTest from 'Cha/Components-demo/ChaCartTest';

import HomePage from 'pages/homePage/HomePage';
import Userprofile from 'pages/userProfile/UserProfile';
import RuProudctListSalad from 'Ru/Pages/RuProudctListSalad'; // delete later
import RuProudctListCustom from 'Ru/Pages/RuProudctListCustom'; // delete later
import ProductList from 'pages/productList/ProductList';

// 加入 toTop 按鈕元件
import ScrollToTop from 'Share/Components/ScrollToTop/ScrollToTop';

import {
  datacountries,
  datatownships,
} from '../src/Janice/Components/JanIndexx/data.js';

// 判斷是否 login 的狀態
import {
  login,
  logout,
  setCurrentUser,
  setCurrentUserData,
} from 'redux/member/memberActions';

// 路由表
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.member.isLogin);
  const currentUser = useSelector((state) => state.member.currentUser);
  const [showBar, setShowBar] = useState(true);
  const [cartNumber, setCartNumber] = useState(0);
  const [amount, setAmount] = useState(1);

  // ---------- iris ---------- //
  const [showLoginModal, setShowLoginModal] = useState(false); //控制是否秀光箱
  const [showSuccessBox, setShowSuccessBox] = useState(false);
  const [couponStatus, setCouponStatus] = useState([]);
  const [couponOneStatus, setCouponOneStatus] = useState('');

  //--------------有使用Vnavbar的人，請幫我傳狀態(county,township,address,selectDate,slecteTime,takeOrNo共12個,兆廷要多加textCounty,textTownship)到你們的頁面--------------//
  const [county, setCounty] = useState(-1);
  const [township, setTownship] = useState(-1);
  const [address, setAddress] = useState('');
  const [selectDate, setSelectDate] = useState(new Date());
  const [slecteTime, setSelectTime] = useState('11:00 ~ 11:30');
  const [takeOrNot, setTakeOrNot] = useState('外送');
  const [textAddress, setTextAddress] = useState(address);

  //----------------------索引值轉字串----------------------
  const [textCounty, setTextCounty] = useState('');
  const [textTownship, setTextTownship] = useState('');

  useEffect(async () => {
    const accessToken = localStorage.getItem('accessToken');
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // JSON.parse()轉數值
    const currentCartNumber =
      JSON.parse(localStorage.getItem('cartNumber')) || 0;

    if (accessToken && currentUser) {
      const _currentUser = { currentUser: currentUser };
      await fetch('http://localhost:5000/member/loginVerify', {
        method: 'POST',
        body: JSON.stringify(_currentUser),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        }),
      }) // 將token送到後端做JWT驗證
        .then((res) => res.json())
        .then((jsonData) => {
          if (jsonData.status) {
            dispatch(login());
            dispatch(setCurrentUser(currentUser));
            dispatch(setCurrentUserData(currentUser));
          }
          if (!jsonData.status) {
            dispatch(logout());
          }
        });
    }
    if (!accessToken || !currentUser) {
      dispatch(logout());
    }
    setCartNumber(currentCartNumber);
  }, []); // 判斷初始會員狀態與資料(是否須要重新登入)

  useEffect(() => setTextAddress(address), [address]);
  useEffect(
    () => setTextCounty(county !== -1 ? datacountries[county] : ''),
    [county]
  );
  useEffect(
    () =>
      setTextTownship(
        county !== -1 && township !== -1 ? datatownships[county][township] : ''
      ),
    [township]
  );

  // 20201112舊版購物車icon計數處理器
  const handleCartNumber = (type = 'add', amount = 1) => {
    if (type === 'add') {
      const newCartNumber = +cartNumber + amount;
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
      setCartNumber(newCartNumber);
    }
    if (type === 'minus') {
      const newCartNumber = +cartNumber - amount;
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
      setCartNumber(newCartNumber);
    }
  };

  if (isLogin === null) {
    return <></>;
  }
  return (
    <Router>
      <>
        {/* 切頁時不重新渲染的部份 */}
        <Navbar
          style={{ display: !showBar && 'none' }}
          cartNumber={cartNumber}
          amount={amount}
          setShowLoginModal={setShowLoginModal}
          setShowSuccessBox={setShowSuccessBox}
          showLoginModal={showLoginModal}
        />
        <LoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          showSuccessBox={showSuccessBox}
          setShowSuccessBox={setShowSuccessBox}
        />
        <ScrollToTop>
          <Switch>
            {/* claudia */}
            <Route exact path="/farmMap">
              <ClaudiaFarmIndex />
            </Route>
            <Route exact path="/farmIntro">
              <ClaudiaFarmDetailedPage handleCartNumber={handleCartNumber} />
            </Route>
            {/* ru */}
            <Route exact path="/productList">
              <ProductList
                setShowBar={setShowBar}
                handleCartNumber={handleCartNumber}
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
                amount={amount}
                setAmount={setAmount}
              />
            </Route>
            {/* cha */}
            <Route exact path="/cart">
              <ChaCart
                setShowBar={setShowBar}
                setCartNumber={setCartNumber}
                // handleCartNumber={handleCartNumber}
                // county={county}
                // setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                // address={address}
                // setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
                textCounty={textCounty}
                textTownship={textTownship}
                textAddress={textAddress}
              />
            </Route>
            <Route exact path="/groupOrder/groupOrderCreate">
              <ChaGroupOrderCreate />
            </Route>
            <Route path="/groupOrder/groupOrderSearch">
              <ChaGroupOrderSearch />
            </Route>
            <Route path="/groupOrder/groupOrderSignIn">
              <ChaGroupOrderSignIn />
            </Route>
            <Route path="/groupOrder/groupOrderConfirm">
              <ChaGroupOrderConfirm />
            </Route>
            <Route path="/groupOrder/groupOrderMenu">
              <ChaGroupOrderMenu />
            </Route>
            {/* 訂單管理已置入<IrisOrderManagement /> */}
            {/* 測試用：中繼站、商品清單 */}
            <Route exact path="/checkpoint">
              <ChaCheckpoint />
            </Route>
            <Route exact path="/chaProductList">
              <ChaProductList handleCartNumber={handleCartNumber} />
            </Route>
            <Route exact path="/chaCartTest">
              <ChaCartTest />
            </Route>
            {/* 404 */}

            {/* iris */}
            <Route exact path="/memberUserprofile">
              <Userprofile
                setShowBar={setShowBar}
                // 會員
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                couponStatus={couponStatus}
                setCouponStatus={setCouponStatus}
                couponOneStatus={couponOneStatus}
                setCouponOneStatus={setCouponOneStatus}
                // vnbar
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              />
            </Route>
            <Route exact path="/orderComment">
              {/* <IrisOrderComment
                setShowBar={setShowBar}
                // 會員
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                // vnbar
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              /> */}
            </Route>
            <Route exact path="/myFav">
              {/* <IrisMyFav
                setShowBar={setShowBar}
                // 會員
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                // vnbar
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              /> */}
            </Route>
            <Route exact path="/beastiePoint">
              {/* <IrisBeastiePoint
                setShowBar={setShowBar}
                // 會員
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                // vnbar
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              /> */}
            </Route>
            <Route path="/getCoupon">
              {/* <IrisGetCoupon
                setShowBar={setShowBar}
                // 會員
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                couponStatus={couponStatus}
                setCouponStatus={setCouponStatus}
                couponOneStatus={couponOneStatus}
                // vnbar
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              /> */}
            </Route>
            <Route path="/orderManagement">
              {/* <IrisOrderManagement
                handleCartNumber={handleCartNumber}
                showBar={showBar}
                setShowBar={setShowBar}
                // 會員
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                // vnbar
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              /> */}
            </Route>
            {/* jess */}
            <Route path="/menu">
              <JessMenu
                setShowBar={setShowBar}
                currentUser={currentUser}
                setCartNumber={setCartNumber}
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              />
            </Route>
            <Route path="/bento/:id?">
              <JessBento
                setShowBar={setShowBar}
                currentUser={currentUser}
                setCartNumber={setCartNumber}
                handleCartNumber={handleCartNumber}
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              />
            </Route>
            <Route path="/vegBox">
              <JessVegBox
                setShowBar={setShowBar}
                currentUser={currentUser}
                setCartNumber={setCartNumber}
                handleCartNumber={handleCartNumber}
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
              />
            </Route>
            {/* janice */}
            <Route exact path="/">
              <HomePage
                currentUser={currentUser}
                takeOrNot={takeOrNot}
                setTakeOrNot={setTakeOrNot}
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                slecteTime={slecteTime}
                setSelectTime={setSelectTime}
                setShowBar={setShowBar}
                county={county}
                setCounty={setCounty}
                township={township}
                setTownship={setTownship}
                address={address}
                setAddress={setAddress}
              />
            </Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    </Router>
  );
}

export default App;
