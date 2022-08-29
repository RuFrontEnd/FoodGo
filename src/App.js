import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// install react router => npm install react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { datacountries, datatownships } from 'data/AdministrativeDistrict.js';
import {
  login,
  logout,
  setCurrentUser,
  setCurrentUserData,
} from 'redux/member/memberActions'; // 判斷是否 login 的狀態

// TEST
import Navbar from 'components/navBar/NavBar';
import Footer from 'components/footer/Footer';
import ScrollToTop from 'components/scrollToTop/ScrollToTop';
import LoginModal from 'components/loginModal/LoginModal';
import FallBack from 'components/fallBack/FallBack';
import HomePage from 'pages/homePage/HomePage';
import Admin from 'pages/admin/Admin';

// const Suspense = () =>returnFallBack;
// 引入 所有人的總元件
const Farm = lazy(() => import('pages/farm/Farm'));
const ClaudiaFarmDetailedPage = lazy(() =>
  import('Claudia/Pages/ClaudiaFarmDetailedPage')
);

// const IrisOrderComment  =lazy(() => import( 'Iris/Pages/IrisOrderComment'));
// const IrisBeastiePoint  =lazy(() => import( 'Iris/Pages/IrisBeastiePoint'));
// const IrisGetCoupon  =lazy(() => import( 'Iris/Pages/IrisGetCoupon'));
const MyFav = lazy(() => import('pages/myFav/MyFav'));
const OrderManagement = lazy(() => import('pages/OrderManagement'));

const JessMenu = lazy(() => import('Jess/Pages/JessMenu'));
const JessBento = lazy(() => import('Jess/Pages/JessBento'));
const JessVegBox = lazy(() => import('Jess/Pages/JessVegBox'));

const ShoppingCart = lazy(() => import('pages/shoppingCart/ShoppingCart'));
const ChaGroupOrderCreate = lazy(() =>
  import('Cha/Components/Cha-Group-Order-Create/ChaGroupOrderCreate')
);
const ChaGroupOrderSearch = lazy(() =>
  import('Cha/Components/Cha-Group-Order-Search/ChaGroupOrderSearch')
);
const ChaGroupOrderSignIn = lazy(() =>
  import('Cha/Components/Cha-Group-Order-SignIn/ChaGroupOrderSignIn')
);
const ChaGroupOrderConfirm = lazy(() =>
  import('Cha/Components/Cha-Group-Order-Confirm/ChaGroupOrderConfirm')
);
const ChaGroupOrderMenu = lazy(() =>
  import('Cha/Components/Cha-Group-Order-Menu/ChaGroupOrderMenu')
);
const ChaProductList = lazy(() => import('Cha/Components-demo/ChaProductList'));
const ChaCartTest = lazy(() => import('Cha/Components-demo/ChaCartTest'));

const Userprofile = lazy(() => import('pages/userProfile/UserProfile'));
const ProductList = lazy(() => import('pages/productList/ProductList'));
const SaladList = lazy(() => import('pages/saladList/SaladList'));
const CustomBentoList = lazy(() =>
  import('pages/customBentoList/CustomBentoList')
);

// 路由表
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.member.isLogin);
  const showNavBar = useSelector((state) => state.navBar.showNavBar);
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

  if (isLogin === null) {
    return <></>;
  }

  let ws = new WebSocket('ws://localhost:5000');

  ws.onopen = () => {
    console.log('open connection');
  };

  //關閉後執行的動作，指定一個 function 會在連結中斷後執行
  ws.onclose = () => {
    console.log('close connection');
  };

  return (
    <Router>
      <>
        {/* 切頁時不重新渲染的部份 */}
        <Navbar
          style={{ display: !showNavBar && 'none' }}
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
        {/* <ScrollToTop> */}
        <Suspense fallback={<FallBack />}>
          <Switch>
            {/* 客製化便當 */}
            <Route exact path="/">
              <CustomBentoList
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
                ws={ws}
              />
            </Route>
            <Route exact path="/admin">
              <Admin ws={ws} />
            </Route>

            {/* 首頁 */}
            {/* <Route exact path="/">
                <HomePage
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
              </Route> */}
            {/* 便當商品列表 */}
            {/* <Route exact path="/productList">
                <ProductList
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
              </Route> */}
            {/* 沙拉商品列表 */}
            {/* <Route exact path="/productListSalad">
                <SaladList
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
              </Route> */}

            {/* claudia */}
            {/* <Route exact path="/farm">
                <Farm />
              </Route> */}
            {/* <Route exact path="/farmIntro">
                <ClaudiaFarmDetailedPage handleCartNumber={handleCartNumber} />
              </Route> */}
            {/* cha */}
            {/* <Route exact path="/cart">
                <ShoppingCart
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
              </Route> */}
            {/* <Route exact path="/groupOrder/groupOrderCreate">
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
              </Route> */}
            {/* 訂單管理已置入<IrisOrderManagement /> */}
            {/* 測試用：中繼站、商品清單 */}
            {/* <Route exact path="/chaProductList">
                <ChaProductList handleCartNumber={handleCartNumber} />
              </Route>
              <Route exact path="/chaCartTest">
                <ChaCartTest />
              </Route> */}
            {/* 404 */}

            {/* iris */}
            {/* <Route exact path="/memberUserprofile">
                <Userprofile
                  setShowBar={setShowBar}
                  // 會員
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
              </Route> */}
            {/* <Route exact path="/orderComment"> */}
            {/* 
                <IrisOrderComment
                  setShowBar={setShowBar}
                  // 會員
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
                />
               */}
            {/* </Route> */}
            {/* <Route exact path="/myFav">
                <MyFav
                  setShowBar={setShowBar}
                  // 會員
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
                />
              </Route> */}
            {/* <Route exact path="/beastiePoint"> */}
            {/*  */}
            {/* <IrisBeastiePoint
                setShowBar={setShowBar}
                // 會員
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
            {/*  */}
            {/* </Route> */}
            {/* <Route path="/getCoupon"> */}
            {/*  */}
            {/* <IrisGetCoupon
                setShowBar={setShowBar}
                // 會員
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
            {/*  */}
            {/* </Route> */}
            {/* <Route path="/orderManagement">
                <OrderManagement
                  handleCartNumber={handleCartNumber}
                  showBar={showBar}
                  setShowBar={setShowBar}
                  // 會員
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
                />
              </Route> */}
            {/* jess */}
            {/* <Route path="/menu">
                <JessMenu
                  setShowBar={setShowBar}
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
              </Route> */}
            {/* <Route path="/bento/:id?">
                <JessBento
                  setShowBar={setShowBar}
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
              </Route> */}
            {/* <Route path="/vegBox">
                <JessVegBox
                  setShowBar={setShowBar}
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
              </Route> */}
          </Switch>
        </Suspense>
        {/* </ScrollToTop> */}
        <Footer />
      </>
    </Router>
  );
}

export default App;
