import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard.scss';
// import RequestToServer from 'Cha/RequestToServer';
import ChaCartButton from './Cha-Cart-Button/ChaCartButton';
import { withRouter, useHistory } from 'react-router-dom';
import ChaCouponModal from './Cha-Coupon-Modal/ChaCouponModal';
import ChaSubmitModal from './Cha-Submit-Modal/ChaSubmitModal';

function ChaCartSubmitCard(props) {
  const {
    formatCheck,
    handleFormatCheck,
    // mealsDisplay,
    meals,
    setMeals,
    memberSid,
    name,
    mobile,
    takeWay,
    county,
    district,
    address,
    beastieCoin,
    takeDate,
    takeTime,
    handleCartNumber,
  } = props;

  const [shipping, setShipping] = useState(0);
  const [tableware, setTableware] = useState('');
  const [orderState, setOrderState] = useState('未送達');

  // const [beastieCoin, setBeastieCoin] = useState(60);
  // const [totalAmount, setTotalAmount] = useState(0);
  // const [subtotalPrice, setSubtotalPrice] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  // fetch用
  const [error, setError] = useState([]);

  // 控制Coupon光箱
  const [couponModalController, setCouponModalController] = useState(false);
  // 控制Submit光箱
  const [submitModalController, setSubmitModalController] = useState(false);
  // 光箱內的checkbox
  const [useBeastieCoin, setUseBeastieCoin] = useState(0);
  const [couponSid, setCouponSid] = useState(0);

  // 計算商品總量
  const calcuTotalAmount = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount;
    }
    return total;
  };
  let totalAmount = calcuTotalAmount(meals);
  // let totalAmount = calcuTotalAmount(mealsDisplay);
  // setTotalAmount(calcuTotalAmount(mealsDisplay));

  // 計算商品價格小計
  const calcuSubtotalPrice = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].productAmount * items[i].productPrice;
    }
    return total;
  };
  let subtotalPrice = calcuSubtotalPrice(meals);
  // let subtotalPrice = calcuSubtotalPrice(mealsDisplay);
  // setSubtotalPrice(calcuSubtotalPrice(mealsDisplay));

  useEffect(() => {
    // 運費的商業邏輯
    if (totalAmount > 0 && totalAmount < 3) {
      setShipping(50);
    } else {
      setShipping(0);
    }
    if (totalAmount >= 10) {
      setOrderState('火速運送中');
    } else {
      setOrderState('未送達');
    }
    console.log('useEffect，依[totalAmount]，改變運費、訂單狀態');
  }, [totalAmount]);

  // 計算總價
  let totalPrice = subtotalPrice + shipping - useBeastieCoin;
  // setTotalPrice(
  //   subtotalPrice + shipping - (totalAmount > 0 ? beastieCoin : 0)

  // 提交訂單後，清除localstorage
  const handleSubmitCartRemoveLocalStorage = () => {
    localStorage.removeItem('cart');
    // const currentCartNumber =
    //   JSON.parse(localStorage.getItem('cartNumber')) || 0;
    // const otherCart = currentCartNumber - totalAmount;
    // localStorage.setItem('cartNumber', JSON.stringify(otherCart));
    // handleCartNumber('minus', totalAmount);
    console.log('提交訂單後，清除localstorage');
  };

  // POST給my_order的資料
  async function createToMyOrder() {
    const bodyData = {
      order_state: orderState,
      member_sid: memberSid,
      take_person: name,
      mobile: mobile,
      take_way: takeWay,
      take_county: county,
      take_district: district,
      take_address: address,
      take_date: takeDate,
      take_time: takeTime,
      total_amount: totalAmount,
      subtotal_price: subtotalPrice,
      total_price: totalPrice,
      shipping: shipping,
      beastie_coin: useBeastieCoin,
      tableware: tableware,
      created_at: new Date(),
    };

    const url = 'http://localhost:5000/cart-api/my-order';
    console.log('要送到my-order的Data', bodyData);
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    try {
      const response = await fetch(request);
      const dataMyOrder = await response.json();

      createToMyOrderDetail(dataMyOrder.insertId);
      // data會是一個物件值
      console.log('完成送出my-order', dataMyOrder);
    } catch (error) {
      setError(error);
    }
  }
  // console.log('memberSids', memberSid);
  // console.log('meals', meals);

  // POST給my_order_detail的資料
  async function createToMyOrderDetail(orderSid) {
    // let myOrderDetailArray = mealsDisplay.map((item) => ({
    let myOrderDetailArray = meals.map((item) => ({
      member_sid: memberSid,
      order_sid: orderSid,
      product_sid: item.id,
      product_amount: item.productAmount,
      product_name: item.productName,
      product_price: item.productPrice,
      product_image: item.productImage ? item.productImage : '',
    }));

    const url = 'http://localhost:5000/cart-api/my-order-detail';
    console.log('要送到my-order-detail的data', myOrderDetailArray);
    console.log('綁定訂單編號：', orderSid);

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(myOrderDetailArray),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    try {
      setSubmitModalController(true);
      const response = await fetch(request);
      const dataMyOrderDetail = await response.json();
      // data會是一個物件值
      console.log('完成送出my-order-detail', dataMyOrderDetail);
    } catch (error) {
      setError(error);
    }
  }

  // window.addEventListener('scroll', () => {
  //   shoppingListState();
  // });
  // // main code
  // function shoppingListState() {
  //   let shoppingList = document.querySelector('.cha-aside-card');
  //   let w = Math.ceil(
  //     (Math.round(window.pageYOffset) /
  //       (document.body.scrollHeight - window.innerHeight)) *
  //       100
  //   );
  //   if (w >= 92) {
  //     shoppingList.classList.add('cha-control');
  //   } else {
  //     shoppingList.classList.remove('cha-control');
  //   }
  // }

  async function deleteCouponListData(paramsCouponSid) {
    const url = `http://localhost:5000/cart-api/use-coupon/${paramsCouponSid}`;
    console.log('對use-coupon送出刪除請求，優惠券編號：', paramsCouponSid);
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    console.log('對use-coupon刪除完成', data);

    // console.log(dataAllOrder);
    // console.log(
    //   dataOrders[0] && dataOrders[0].take_person && dataOrders[0].take_person
    // );
  }

  useEffect(() => {
    if (formatCheck) {
      console.log('useEffect，[formatCheck]，格式檢查若通過，提交訂單');
      createToMyOrder();
      couponSid && deleteCouponListData(couponSid);
      // props.history.push('/orderManagement');移動到確認交易的光箱內
      handleSubmitCartRemoveLocalStorage();
      handleCartNumber('minus', totalAmount);
    }
  }, [formatCheck]);

  return (
    <>
      {/* Modal */}
      {couponModalController && (
        <ChaCouponModal
          closeModal={() => setCouponModalController(false)}
          useBeastieCoin={useBeastieCoin}
          setUseBeastieCoin={setUseBeastieCoin}
          couponSid={couponSid}
          setCouponSid={setCouponSid}
        >
          {/* <ChaBeastiePointSect /> */}
        </ChaCouponModal>
      )}
      {submitModalController && (
        <ChaSubmitModal
          closeModalSecret={() => setSubmitModalController(false)}
          takeDate={takeDate}
          takeTime={takeTime}
          closeModal={() => {
            // 頁面跳轉跟確認按鈕放在一起了
            props.history.push('/orderManagement');
            setSubmitModalController(false);
          }}
        >
          {/* <ChaBeastiePointSect /> */}
        </ChaSubmitModal>
      )}
      <div className="cha-aside-card-fake"></div>
      <div className="cha-aside-card">
        <div className="cha-step-header">
          <span
            onClick={() => {
              localStorage.removeItem('cart');
              localStorage.removeItem('cartNumber');
              const newCart = localStorage.getItem('cart') || '[]';
              setMeals(JSON.parse(newCart));
            }}
          >
            購
          </span>
          物清單
          {/* <button
            className="cha-control-normal-switch cha-farmer-cart-switch"
            onClick={() => {
              props.history.push('/checkpoint');
            }}
          >
            小農購物車
          </button>
          <button
            className="cha-normal-cart-switch"
            disabled
            onClick={() => {
              props.history.push('/checkpoint');
            }}
          >
            訂餐購物車
          </button> */}
        </div>
        <div className="cha-little-total">
          <div>
            小計 X <span>{totalAmount}</span>
          </div>
          <div>${subtotalPrice}</div>
        </div>

        <div className="cha-shipping">
          <div>運費</div>
          <div>${shipping}</div>
        </div>
        <div className="cha-monster-coin">
          <div className="form-group">
            <input
              type="checkbox"
              name="cha-monster-coin"
              value="cha-monster-coin"
              id="cha-monster-coin"
            />
            <label
              htmlFor="cha-monster-coin"
              // style={{ cursor: 'pointer' }}
              onClick={() => setCouponModalController(true)}
            >
              使用怪獸幣
            </label>
          </div>
          <div>-${useBeastieCoin}</div>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-tableware">
          <label>
            <input
              type="radio"
              name="tableware"
              value="yes"
              onChange={(e) => {
                setTableware(e.target.value);
              }}
              checked={tableware === 'yes'}
            />
            附餐具
          </label>
          <label>
            <input
              type="radio"
              name="tableware"
              value="no"
              onChange={(e) => {
                setTableware(e.target.value);
              }}
              checked={tableware === 'no'}
            />
            不附餐具
          </label>
        </div>
        <div className="cha-horizontal-line"></div>
        <div className="cha-shopping-list-total">
          <div onClick={() => setSubmitModalController(true)}>總計</div>
          <div className="cha-shopping-list-total-number">${totalPrice}</div>
        </div>
        {/* 提交按鈕 */}
        <div className=" d-flex align-items-center flex-column">
          <div
            className="cha-shopping-cart-btn-div"
            onClick={() => {
              handleFormatCheck();
              // console.log('商品數為0不給提交，目前商品數：', totalAmount);
              // totalAmount && createToMyOrder();
              // couponSid && deleteCouponListData(couponSid);
              // // props.history.push('/orderManagement');移動到確認交易的光箱內
              // handleSubmitCartRemoveLocalStorage();
              // handleCartNumber('minus', totalAmount);
            }}
          >
            <ChaCartButton
              text="送出"
              className="cha-shopping-cart-btn cha-submit-button-btn"
            />
          </div>
          <div className="cha-wrong-format">資料填寫不正確</div>
        </div>
      </div>
    </>
  );
}
export default withRouter(ChaCartSubmitCard);
