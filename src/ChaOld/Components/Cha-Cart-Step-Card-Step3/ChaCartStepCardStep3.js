import React, { useState, useEffect } from 'react';

import ChaCreditCardFront from 'Cha/Components/Cha-Cart-Step-Card-Step3/Images/Cha-Credit-Card-Front.svg';
import ChaCreditCardBack from 'Cha/Components/Cha-Cart-Step-Card-Step3/Images/Cha-Credit-Card-Back.svg';
import ChaReceiptType from 'Cha/Components/Cha-Cart-Step-Card-Step3/Cha-Receipt-Type/ChaReceiptType';
// import TWZipCode from './Cha-Address-Select/TWZipCode';
import './ChaCartStepCardStep3.scss';
import InputH40 from './InputH40/InputH40';
import $ from 'jquery';
function ChaCartStepCardStep3(props) {
  const {
    handleFormatCheck,
    creditNumber,
    setCreditNumber,
    credit3Number,
    setCredit3Number,
    creditMonth,
    setCreditMonth,
    creditYear,
    setCreditYear,
  } = props;
  // const [creditNumber, setCreditNumber] = useState('');
  const [numberPointText, setNumberPointText] = useState('●●●●●●●●●●●●●●●●');

  const [creditFlip, setCreditFlip] = useState(false);
  // const [credit3Number, setCredit3Number] = useState('');
  const [threeNumberPointText, setThreeNumberPointText] = useState('●●●');

  // 信用卡號呈現效果
  function ShowInCard() {
    if (creditNumber.length >= 0) {
      let point1 = '';
      let pointLength1 = 16 - creditNumber.length;
      for (let i = 0; i < pointLength1; i++) {
        point1 += '●';
      }
      let numberAddPoint = creditNumber + point1;
      let num1to4 = numberAddPoint.slice(0, 4);
      let num5to8 = numberAddPoint.slice(4, 8);
      let num9to12 = numberAddPoint.slice(8, 12);
      let num13to16 = numberAddPoint.slice(12, 16);

      setNumberPointText(
        num1to4 + ' ' + num5to8 + ' ' + num9to12 + ' ' + num13to16
      );
      // setNumberPointText(creditNumber + point1);
    }
    if (credit3Number.length >= 0) {
      let point2 = '';
      let pointLength2 = 3 - credit3Number.length;
      for (let i = 0; i < pointLength2; i++) {
        point2 += '●';
      }
      setThreeNumberPointText(credit3Number + point2);
    }
  }
  useEffect(() => {
    ShowInCard();
    console.log('useEffect， [creditNumber]，信用卡畫面實時更新');
  }, [creditNumber]);
  useEffect(() => {
    ShowInCard();
    console.log('useEffect， [creditNumber]，信用卡畫面實時更新');
  }, [credit3Number]);

  return (
    <>
      <div className="cha-main-card cha-main-card-step3">
        <div className="cha-step-header">步驟3：付費</div>
        {/* 信用卡圖片，開始 */}
        <div className="cha-Credit-Card-div">
          <div className="cha-Credit-Card-flip">
            <div
              className={
                !creditFlip
                  ? 'cha-Credit-Card-all cha-Credit-Card-all-b1'
                  : 'cha-Credit-Card-all cha-Credit-Card-all-a1'
              }
            >
              <img
                src={ChaCreditCardFront}
                // src={ChaCreditCardBack}
                className="cha-Credit-Card"
                alt="ChaCreditCart"
              ></img>
              <div className="cha-card-number-on-picture">
                {numberPointText}
              </div>
              <div className="cha-card-MONTH-YEAR-on-picture">
                <span>{creditMonth}</span>/<span>{creditYear}</span>
              </div>
            </div>
            <div
              className={
                !creditFlip
                  ? 'cha-Credit-Card-all cha-Credit-Card-all-b2'
                  : 'cha-Credit-Card-all cha-Credit-Card-all-a2'
              }
            >
              <img
                // src={ChaCreditCardFront}
                src={ChaCreditCardBack}
                className="cha-Credit-Card"
                alt="ChaCreditCart"
              ></img>
              <div className="cha-card-3number-on-picture">
                {threeNumberPointText}
              </div>
            </div>
          </div>
        </div>
        {/* 信用卡圖片，結束 */}
        {/* 信用卡號 */}
        <div className="form-group">
          <label htmlFor="cha-step3-1-card-number">信用卡號</label>
          <InputH40
            type="text"
            className="form-control cha-step3-1-card-number"
            id="cha-step3-1-card-number"
            maxLength="16"
            placeholder="XXXX XXXX XXXX XXXX"
            value={creditNumber}
            onChange={(e) => {
              setCreditNumber(e.target.value);
              // ShowInCard();
            }}
          />
          <div className="cha-wrong-creditNumber">**信用卡號碼長度不足</div>
        </div>
        {/* 月、年、後三碼 */}
        {/* MMM */}
        <div className="form-row">
          <div className="form-group col">
            <label>月</label>
            <select
              className="form-control cha-step3-2-MONTH"
              id="cha-step3-2-MONTH"
              name="cha-step3-2-MONTH"
              onChange={(e) => {
                setCreditMonth(e.target.value);
              }}
            >
              <option value="00" disabled selected hidden>
                請選擇月份
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <div className="cha-wrong-MONTH">**請選擇月份</div>
          </div>

          <div className="form-group">
            <label></label>
            <div className="cha-slash">/</div>
          </div>
          <div className="form-group col">
            <label>年</label>
            <select
              className="form-control cha-step3-3-YEAR"
              id="cha-step3-3-YEAR"
              name="cha-step3-3-YEAR"
              onChange={(e) => {
                setCreditYear(e.target.value);
              }}
            >
              <option value="00" disabled selected hidden>
                請選擇年份
              </option>
              <option value="20">2020</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
            </select>
            <div className="cha-wrong-YEAR">**請選擇年份</div>
          </div>

          <div className="form-group col">
            <label htmlFor="cha-step3-4-back-3number">後三碼</label>
            <InputH40
              type="text"
              value={credit3Number}
              className="form-control cha-step3-4-back-3number"
              id="cha-step3-4-back-3number"
              name="cha-step3-4-back-3number"
              placeholder="請填寫後三碼"
              maxLength="3"
              onChange={(e) => {
                setCredit3Number(e.target.value);
                // ShowInCard();
              }}
              onFocus={() => {
                setCreditFlip(true);
              }}
              onBlur={() => {
                setCreditFlip(false);
              }}
            />
            <div className="cha-wrong-credit3Number">
              **信用卡後三碼長度不足
            </div>
          </div>
        </div>
        <ChaReceiptType />
      </div>
    </>
  );
}
export default ChaCartStepCardStep3;
