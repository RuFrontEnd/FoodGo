import React from 'react';
import './ChaRefundModal.scss';
// import Cross from './Images/cross.svg';
import ChaCartButton from './Cha-Cart-Button/ChaCartButton';
import ChaGrayButton from './Cha-Gray-Button/ChaGrayButton';

const ChaRefundModal = (props) => {
  const {
    closeModal,
    closeModalSecret,
    takeDate,
    takeTime,
    handleOrderState,
  } = props;
  // , takeDate, takeTime
  const RefundDisplay = (props) => {
    // const { takeDate, takeTime } = props;
    // const {
    //   closeModal,
    //   closeModalSecret,
    //   takeDate,
    //   takeTime,
    //   handleOrderState,
    // } = props;
    return (
      <>
        <div className="cha-refund-modal-container">
          {/* <span>下單成功</span> */}
          <div className="cha-refund-logo"></div>
          <div className="cha-horizontal-line-in-refund-modal"></div>
          <p> 確定要退費嗎？ 提醒您，若該訂單已使用優惠券，將無法退還 </p>
          <div className="cha-refund-confirm-btn">
            <div onClick={handleOrderState}>
              <ChaCartButton
                text="確認"
                className="cha-refund-modal-btn cha-refund-modal-button-btn"
              />
            </div>
            <div onClick={closeModal}>
              <ChaGrayButton
                text="取消"
                className="cha-gray-modal-btn cha-gray-modal-button-btn"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cha-refund-claudia-overlay">
        <div className="cha-refund-claudia-modal-bg">
          {/* 光箱內容頂部 */}
          <div className="cha-refund-wrap-coupon-container">
            <div className="cha-refund-iris-coupon-container">
              <RefundDisplay />
            </div>
          </div>
          {/* 光箱內容底部 */}
        </div>
      </div>
    </>
  );
};

export default ChaRefundModal;
