import React, { useState, useEffect } from 'react';

import ChaCartProgressBar from 'Cha/Components/Cha-Cart-ProgressBar/ChaCartProgressBar';
import ChaCartSubmitCard from 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard';
import ChaCartStepCardStep1 from 'Cha/Components/Cha-Cart-Step-Card-Step1/ChaCartStepCardStep1';
import ChaCartStepCardStep2 from 'Cha/Components/Cha-Cart-Step-Card-Step2/ChaCartStepCardStep2';
import ChaCartStepCardStep3 from 'Cha/Components/Cha-Cart-Step-Card-Step3/ChaCartStepCardStep3';
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
import $ from 'jquery';
import 'Cha/Pages/Cha-Cart/ChaCart.scss';
// import { withRouter } from 'react-router-dom';

function ChaCart(props) {
  //-------------當前登入會員的id--------------//
  //------------預設林凱特，member_sid = 1-----//
  const [currentMemberSid, setCurrentMemberSid] = useState(1);

  // --------------餐點資料--------------//
  const [meals, setMeals] = useState([]);

  // ---------------控制navbar------------//
  const {
    setShowBar,
    setCartNumber,
    isLogin,
    county,
    township,
    address,
    selectDate,
    slecteTime,
    takeOrNo,
    setAddress,
    setCounty,
  } = props;
  // if (isLogin === false) {
  //   props.history.push('/');
  // }
  console.log('isLogin', isLogin);
  // ----------給「會員資料表」用-------------//
  const [memberSid, setMemberSid] = useState(1);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [takeWay, setTakeWay] = useState(takeOrNo);
  const [takeDate, setTakeDate] = useState(selectDate);
  const [takeTime, setTakeTime] = useState(slecteTime);
  // const [county, setCounty] = useState('');
  const [district, setDistrict] = useState(township);
  // const [address, setAddress] = useState('');
  const [beastieCoin, setBeastieCoin] = useState('');

  // 信用卡格式檢查用
  const [creditNumber, setCreditNumber] = useState('');
  const [credit3Number, setCredit3Number] = useState('');
  const [creditMonth, setCreditMonth] = useState('●●');
  const [creditYear, setCreditYear] = useState('●●');
  //格式檢查用
  const [formatCheck, setFormatCheck] = useState(false);

  //------------ 掛載就設定隱藏navbar----------//
  useEffect(() => {
    setShowBar(false);
    console.log('useEffect，在購物車隱藏navbar');
  }, []);

  //------------- 讀取LocalStorage-----------//
  function readCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]';
    setMeals(JSON.parse(newCart));
  }

  // ------------componentDidMount，一開始會載入資料(在元件初始化完成後)------//
  useEffect(() => {
    readCartFromLocalStorage();
    console.log('useEffect，讀取LocalStorage的「cart」', meals);
  }, []);
  // // }, [meals]);
  // // componentDidUpdate// 只要meals改變，就處理meals

  //------------- 更新購物車中的商品----------------//
  const updateCartToLocalStorage = (item, amount = 1, isAdded = true) => {
    // console.log(item, isAdded);
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id);
    // console.log('index', index);
    // found: index! == -1
    if (index > -1) {
      if (isAdded) {
        currentCart[index].productAmount += amount;
      } else if (!isAdded && currentCart[index].productAmount > 1) {
        currentCart[index].productAmount--;
      }
    } else {
      currentCart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    // 設定資料
    setMeals(currentCart);
    console.log('新增資料到LocalStorage的「cart」', currentCart);
  };
  // ---------------刪除的商品數量---------------//
  const deleteItemToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    // find if the product in the localstorage with its id
    const newCart = currentCart.filter((v) => v.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    console.log('刪除LocalStorage「cart」：被刪資料', item);
    // 設定資料
    setMeals(newCart);
  };

  //--------------- 20201112新版購物車icon計數處理器(cartNumber)---------------//
  const handleCartNumber = (type = 'add', amount = 1) => {
    if (type === 'add') {
      let currentCartNumber =
        JSON.parse(localStorage.getItem('cartNumber')) || 0;
      let newCartNumber = +currentCartNumber + amount;
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
      setCartNumber(newCartNumber);
      console.log('加入購物車的商品數量', amount);
    }
    if (
      type === 'minus' &&
      JSON.parse(localStorage.getItem('cartNumber')) > 1
    ) {
      let currentCartNumber =
        JSON.parse(localStorage.getItem('cartNumber')) || 0;
      let newCartNumber = +currentCartNumber - amount;
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
      setCartNumber(newCartNumber);
      console.log('減去購物車的商品數量', amount);
    }
  };

  //---------------fixed card(紹妤完成)---------------//
  window.addEventListener('scroll', () => {
    if (
      document.getElementsByClassName('cha-main-card-step1')[0] &&
      document.getElementsByClassName('cha-main-card-step2')[0] &&
      document.getElementsByClassName('cha-main-card-step3')[0]
    ) {
      const step1CardHeight = document.getElementsByClassName(
        'cha-main-card-step1'
      )[0].clientHeight;
      const step2CardHeight = document.getElementsByClassName(
        'cha-main-card-step2'
      )[0].clientHeight;
      const step3CardHeight = document.getElementsByClassName(
        'cha-main-card-step3'
      )[0].clientHeight;
      // console.log('step1', stepOneCardHeight)
      const asideCard = document.getElementsByClassName('cha-aside-card')[0];
      const asideColumn = document.getElementsByClassName('cha-aside')[0];
      //6 is border totals
      let mainHeight = step1CardHeight + step2CardHeight + step3CardHeight + 26;
      // console.log('mainHeight', mainHeight);
      asideColumn.style.height = `${mainHeight}px`;
      asideCard.style.top = `${window.pageYOffset}px`;
      // console.log('top', parseInt(asideCard.style.top))
      if (document.getElementsByClassName('cha-main')[0]) {
        // console.log('main height', document.getElementsByClassName('cha-main')[0].clientHeight)
        // console.log('cal top', mainHeight - parseInt(asideCard.style.top));
        if (mainHeight - parseInt(asideCard.style.top) < 570) {
          asideCard.style.bottom = '0px';
          asideCard.style.top = 'auto';
        } else {
          asideCard.style.top = `${window.pageYOffset}px`;
          asideCard.style.bottom = 'auto';
        }
      }
    }
  });

  //------------格式檢查的函式-------//
  // !password.match(/[A-Za-z0-9]{8,24}/)
  const handleFormatCheck = () => {
    console.log(
      '檢查到的購物車內商品：數量、meals===[]、meals.length===0',
      meals === [],
      meals.length === 0
    );
    // 購物車內商品不能為0
    if (meals.length === 0) {
      $('.cha-wrong-totalAmount').slideDown('slow');
      setTimeout(() => {
        $('.cha-wrong-totalAmount').slideUp('slow');
      }, 2000);
    } else {
      $('.cha-wrong-totalAmount').slideUp('slow');
    }

    //  姓名不能為空值
    if (name === '') {
      $('.cha-wrong-name').slideDown('slow');
    } else {
      $('.cha-wrong-name').slideUp('slow');
    }

    // 手機格式不符
    if (!mobile.match(/^09[0-9]{8}$/)) {
      $('.cha-wrong-mobile').slideDown('slow');
    } else {
      $('.cha-wrong-mobile').slideUp('slow');
    }

    //  取餐日期不能為空值
    if (!takeDate) {
      $('.cha-wrong-takeDate').slideDown('slow');
    } else {
      $('.cha-wrong-takeDate').slideUp('slow');
    }

    //信用卡號碼格式不符
    if (!(creditNumber.length === 16)) {
      $('.cha-wrong-creditNumber').slideDown('slow');
    } else {
      $('.cha-wrong-creditNumber').slideUp('slow');
    }
    // creditMonth={creditMonth}
    // setCreditMonth={setCreditMonth}
    // creditYear={creditYear}
    // 信用卡月份格式不符合
    if (creditMonth === '●●') {
      $('.cha-wrong-MONTH').slideDown('slow');
    } else {
      $('.cha-wrong-MONTH').slideUp('slow');
    }
    // 信用卡年分格式不符合
    if (creditYear === '●●') {
      $('.cha-wrong-YEAR').slideDown('slow');
    } else {
      $('.cha-wrong-YEAR').slideUp('slow');
    }
    // 信用卡後三碼格式不符合
    if (!(credit3Number.length === 3)) {
      $('.cha-wrong-credit3Number').slideDown('slow');
    } else {
      $('.cha-wrong-credit3Number').slideUp('slow');
    }
    if (
      !(meals.length === 0) &&
      !(name === '') &&
      mobile.match(/^09[0-9]{8}$/) &&
      takeDate &&
      creditNumber.length === 16 &&
      !(creditMonth === '●●') &&
      !(creditYear === '●●') &&
      credit3Number.length === 3
    ) {
      setFormatCheck(true);
      console.log('通過格式檢查，setFormatCheck(true)');
    } else {
      $('.cha-wrong-format').slideDown('slow');
      setTimeout(() => {
        $('.cha-wrong-format').slideUp('slow');
      }, 2000);
      console.log('未通過格式檢查');
    }
  };

  return (
    <>
      <ScrollButton />
      <ChaCartProgressBar />
      <div className="cha-wrap">
        {/* 訂單步驟欄*/}
        <main className="cha-main">
          {/* 步驟一*/}
          <ChaCartStepCardStep1
            meals={meals}
            setMeals={setMeals}
            // mealsDisplay={mealsDisplay}
            // setMealsDisplay={setMealsDisplay}
            // createCartToLocalStorage={createCartToLocalStorage}
            updateCartToLocalStorage={updateCartToLocalStorage}
            deleteItemToLocalStorage={deleteItemToLocalStorage}
            handleCartNumber={handleCartNumber}
          />
          {/* 步驟二 */}
          <ChaCartStepCardStep2
            currentMemberSid={currentMemberSid}
            setCurrentMemberSid={setCurrentMemberSid}
            memberSid={memberSid}
            setMemberSid={setMemberSid}
            name={name}
            setName={setName}
            mobile={mobile}
            setMobile={setMobile}
            county={county}
            setCounty={setCounty}
            district={district}
            setDistrict={setDistrict}
            address={address}
            setAddress={setAddress}
            beastieCoin={beastieCoin}
            setBeastieCoin={setBeastieCoin}
            takeDate={takeDate}
            setTakeDate={setTakeDate}
            takeWay={takeWay}
            setTakeWay={setTakeWay}
            takeTime={takeTime}
            setTakeTime={setTakeTime}
          />
          {/* 步驟三 */}
          <ChaCartStepCardStep3
            creditNumber={creditNumber}
            setCreditNumber={setCreditNumber}
            credit3Number={credit3Number}
            setCredit3Number={setCredit3Number}
            creditMonth={creditMonth}
            setCreditMonth={setCreditMonth}
            creditYear={creditYear}
            setCreditYear={setCreditYear}
          />
        </main>
        {/* 購物清單欄*/}
        <aside className="cha-aside">
          <ChaCartSubmitCard
            // step1
            meals={meals}
            setMeals={setMeals}
            handleFormatCheck={handleFormatCheck}
            memberSid={memberSid}
            name={name}
            mobile={mobile}
            takeWay={takeWay}
            county={county}
            district={district}
            address={address}
            beastieCoin={beastieCoin}
            takeDate={takeDate}
            takeTime={takeTime}
            handleCartNumber={handleCartNumber}
            formatCheck={formatCheck}
            {...props}
          />
        </aside>
      </div>
      {/* <div
        style={{ height: '6rem', width: '100%', backgroundColor: '#faf' }}
      ></div> */}
    </>
  );
}
// export default withRouter(ChaCart);
export default ChaCart;
