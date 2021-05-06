import React from 'react';
import './ChaSubmitModal.scss';
// import Cross from './Images/cross.svg';
import ChaCartButton from './Cha-Cart-Button/ChaCartButton';
const ChaSubmitModal = (props) => {
  const { closeModal, closeModalSecret, takeDate, takeTime } = props;
  // , takeDate, takeTime
  const SubmitDisplay = (props) => {
    const { takeDate, takeTime } = props;
    // console.log('takeDate, takeTime', takeDate, takeTime);
    // .slice(0, 10)
    return (
      <>
        <div className="cha-submit-modal-container">
          <h1 onClick={closeModalSecret}>下單成功</h1>
          <div className="cha-happy-mons">
            <div className="cha-happy-hearts">
              <div className="cha-happy-heart cha-happy-heart1"></div>
              <div className="cha-happy-heart cha-happy-heart2"></div>
              <div className="cha-happy-heart cha-happy-heart3"></div>
              <div className="cha-happy-heart cha-happy-heart4"></div>
            </div>
          </div>

          <div className="cha-horizontal-line-in-submit-modal"></div>
          <p>
            餐點預計於<span>{JSON.stringify(takeDate).slice(1, 11)}</span>
            <span> </span>
            <span>{takeTime}</span>前送達
          </p>

          <p> 款項及發票將於「取餐核銷完成」後請款與開立 </p>
          <div onClick={closeModal}>
            <ChaCartButton
              text="確認"
              className="cha-submit-modal-btn cha-submit-modal-button-btn"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cha-submit-claudia-overlay">
        <div className="cha-submit-claudia-modal-bg">
          <div
            className="cha-submit-claudia-modal-cross-img"
            alt=""
            // src={Cross}
          />
          {/* 光箱內容頂部 */}
          <div className="cha-submit-wrap-coupon-container">
            <div className="cha-submit-iris-coupon-container">
              <SubmitDisplay takeDate={takeDate} takeTime={takeTime} />
            </div>
          </div>
          {/* 光箱內容底部 */}
        </div>
      </div>
    </>
  );
};

export default ChaSubmitModal;
