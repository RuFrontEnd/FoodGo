import React from 'react';
import './ChaGoCartModal.scss';
// import Cross from './Images/cross.svg';
import ChaCartButton from './Cha-Cart-Button/ChaCartButton';
import { withRouter, useHistory } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import UpdateCartToLocalStorage from 'Share/Components/Tools/UpdateCartToLocalStorage';
const ChaGoCartModal = (props) => {
  const { closeModalSecret, orderItem, handleCartNumber } = props;
  // , takeDate, takeTime
  const GoCartDisplay = (props) => {
    const { takeDate, takeTime } = props;
    console.log('takeDate, takeTime', takeDate, takeTime);
    // .slice(0, 10)
    return (
      <>
        <div className="cha-go-cart-modal-container">
          <h1 onClick={closeModalSecret}>前往購物車</h1>
          <div className="cha-run-mons">
            <div className="cha-run-balls">
              <div className="cha-run-ball cha-run-ball1"></div>
              <div className="cha-run-ball cha-run-ball2"></div>
              <div className="cha-run-ball cha-run-ball3"></div>
            </div>
          </div>
          <Link to="/cart">
            <div
              onClick={() => {
                // closeModal
                orderItem.order_detail.forEach((item) => {
                  UpdateCartToLocalStorage({
                    id: item.sid,
                    productName: item.product_name,
                    productPrice: item.product_price,
                    productAmount: item.product_amount,
                    productImage: item.product_image,
                  });
                  handleCartNumber('add', item.product_amount);
                });
                // props.history.push('/cart');
                // orderItem.order_detail.forEach((item) =>
                //   handleCartNumber('add', item.product_amount)
                // );
              }}
            >
              <ChaCartButton
                text="確認"
                className="cha-run-btn  cha-submit-modal-button-btn"
              />
            </div>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cha-go-cart-claudia-overlay">
        <div className="cha-go-cart-claudia-modal-bg">
          <div
            className="cha-go-cart-claudia-modal-cross-img"
            alt=""
            // src={Cross}
          />
          {/* 光箱內容頂部 */}
          <div className="cha-go-cart-wrap-coupon-container">
            <div className="cha-go-cart-iris-coupon-container">
              <GoCartDisplay />
            </div>
          </div>
          {/* 光箱內容底部 */}
        </div>
      </div>
    </>
  );
};

export default withRouter(ChaGoCartModal);
