import React, { useState, useEffect } from 'react';
import './App.css';

// 安裝 react router 用於制定路由 => npm install react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// 引入 共用元件
import Navbar from 'Share/Components/NavBar/NavBar';
import Footer from 'Share/Components/Footer/Footer';

// 引入 所有人的總元件
import ClaudiaFarmIndex from 'Claudia/Pages/ClaudiaFarmIndex';
import ClaudiaFarmDetailedPage from 'Claudia/Pages/ClaudiaFarmDetailedPage';
import RuProudctList from 'Ru/Pages/RuProudctList'; // delete later
import RuProudctListSalad from 'Ru/Pages/RuProudctListSalad'; // delete later
import RuProudctListCustom from 'Ru/Pages/RuProudctListCustom'; // delete later
import ProductList from 'pages/productList/ProductList';

import IrisOrderComment from 'Iris/Pages/IrisOrderComment';
import IrisMyFav from 'Iris/Pages/IrisMyFav';
import IrisBeastiePoint from 'Iris/Pages/IrisBeastiePoint';
import IrisGetCoupon from 'Iris/Pages/IrisGetCoupon';
import IrisOrderManagement from 'Iris/Pages/IrisOrderManagement';
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

import JanIndex from 'Janice/Pages/JanIndex';

import IrisLoginModal from 'Iris/Components/IrisLoginModal/IrisLoginModal';
import IrisUserprofile from 'Iris/Pages/IrisUserprofile';

// 加入 toTop 按鈕元件
import ScrollToTop from 'Share/Components/ScrollToTop/ScrollToTop';

import {
  datacountries,
  datatownships,
} from '../src/Janice/Components/JanIndexx/data.js';

// 路由表
function App() {
  const [showBar, setShowBar] = useState(true);
  const [cartNumber, setCartNumber] = useState(0);
  const [amount, setAmount] = useState(1);

  // ---------- iris ---------- //
  const [currentUser, setCurrentUser] = useState(''); // 目前用戶
  const [currentUserData, setCurrentUserData] = useState({}); // 目前用戶
  const [isLogin, setIsLogin] = useState(false); //是否登入，預設否
  const [showLoginModal, setShowLoginModal] = useState(false); //控制是否秀光箱
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
  // setTextCounty(turnCon);
  const [textTownship, setTextTownship] = useState('');
  // setTextTownship(turnTown);

  useEffect(() => setTextAddress(address), [address]);
  useEffect(() => setTextCounty(county !== -1 ? datacountries[county] : ''), [
    county,
  ]);
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
  // 20201112新版購物車icon計數處理器(修正減項邏輯，單純加的人可以不用)
  // const handleCartNumber2 = (type = 'add', amount = 1) => {
  //   if (type === 'add') {
  //     let currentCartNumber =
  //       JSON.parse(localStorage.getItem('cartNumber')) || 0;
  //     let newCartNumber = +currentCartNumber + amount;
  //     localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
  //     setCartNumber(newCartNumber);
  //   }
  //   if (
  //     type === 'minus' &&
  //     JSON.parse(localStorage.getItem('cartNumber')) > 0
  //   ) {
  //     let currentCartNumber =
  //       JSON.parse(localStorage.getItem('cartNumber')) || 0;
  //     let newCartNumber = +currentCartNumber - amount;
  //     localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
  //     setCartNumber(newCartNumber);
  //   }
  // };

  useEffect(() => {
    const currentCartNumber =
      JSON.parse(localStorage.getItem('cartNumber')) || 0;
    setCartNumber(currentCartNumber);
  }, []);

  useEffect(() => {
    // console.log(amount)
    return () => {};
  }, [amount]);

  // 若localstorage有user就用user資料
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
      // console.log(localStorage.getItem('currentUser'))
      setIsLogin(true);
    }
  }, []);

  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <div style={{ display: !showBar && 'none' }}>
          <Navbar
            cartNumber={cartNumber}
            amount={amount}
            setShowLoginModal={setShowLoginModal}
            showLoginModal={showLoginModal}
            setIsLogin={setIsLogin}
            isLogin={isLogin}
            currentUser={currentUser}
          />
        </div>
        <IrisLoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          setIsLogin={setIsLogin}
          setCurrentUser={setCurrentUser}
          isLogin={isLogin}
          currentUserData={currentUserData}
          setCurrentUserData={setCurrentUserData}
        />
        {/* 放切頁時不重新渲染的部份 e*/}
        {/* 路由設定開始 */}

        <ScrollToTop>
          <Switch>
            {/* claudia */}
            {/* 放"page資料夾"內的元件 */}
            <Route exact path="/farmMap">
              <ClaudiaFarmIndex />
            </Route>
            <Route exact path="/farmIntro">
              <ClaudiaFarmDetailedPage handleCartNumber={handleCartNumber} />
            </Route>
            {/* ru */}
            {/* 放"page資料夾"內的元件 */}
            <Route exact path="/productList">
              <ProductList
                setShowBar={setShowBar}
                handleCartNumber={handleCartNumber}
                currentUser={currentUser}
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
                isLogin={isLogin}
                amount={amount}
                setAmount={setAmount}
              />
            </Route>
            <Route exact path="/productListSalad">
              <RuProudctListSalad
                setShowBar={setShowBar}
                handleCartNumber={handleCartNumber}
                currentUser={currentUser}
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
                isLogin={isLogin}
              />
            </Route>
            <Route exact path="/productListCustom">
              <RuProudctListCustom
                setShowBar={setShowBar}
                handleCartNumber={handleCartNumber}
                amount={amount}
                setAmount={setAmount}
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
                isLogin={isLogin}
              />
            </Route>
            {/* cha */}
            {/* 放"page資料夾"內的元件 */}
            {/* 購物車 */}

            <Route exact path="/cart">
              <ChaCart
                setShowBar={setShowBar}
                setCartNumber={setCartNumber}
                isLogin={isLogin}
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
            {/* 揪團 */}
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
            {/* 放"page資料夾"內的元件 */}
            <Route exact path="/memberUserprofile">
              <IrisUserprofile
                setShowBar={setShowBar}
                // 會員
                isLogin={isLogin}
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                currentUserData={currentUserData}
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
              <IrisOrderComment
                setShowBar={setShowBar}
                // 會員
                isLogin={isLogin}
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                currentUserData={currentUserData}
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
            <Route exact path="/myFav">
              <IrisMyFav
                setShowBar={setShowBar}
                // 會員
                isLogin={isLogin}
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                currentUserData={currentUserData}
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
            <Route exact path="/beastiePoint">
              <IrisBeastiePoint
                setShowBar={setShowBar}
                // 會員
                isLogin={isLogin}
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                currentUserData={currentUserData}
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
            <Route path="/getCoupon">
              <IrisGetCoupon
                setShowBar={setShowBar}
                // 會員
                isLogin={isLogin}
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                currentUserData={currentUserData}
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
              />
            </Route>
            <Route path="/orderManagement">
              <IrisOrderManagement
                handleCartNumber={handleCartNumber}
                showBar={showBar}
                setShowBar={setShowBar}
                // 會員
                isLogin={isLogin}
                currentUser={currentUser}
                setShowLoginModal={setShowLoginModal}
                currentUserData={currentUserData}
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
            {/* jess */}
            {/* 放"page資料夾"內的元件 */}
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
                isLogin={isLogin}
              />
            </Route>
            {/* component={JessBento} */}
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
                isLogin={isLogin}
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
                isLogin={isLogin}
              />
            </Route>
            {/* janice */}
            {/* 放"page資料夾"內的元件 */}
            <Route exact path="/">
              <JanIndex
                isLogin={isLogin}
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
        {/* 路由設定結束 */}

        {/* 放切頁時不重新渲染的部份 s*/}
        <Footer />
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  );
}

export default App;
