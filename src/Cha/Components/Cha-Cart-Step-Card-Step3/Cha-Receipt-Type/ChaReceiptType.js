import React, { useState } from 'react';
import './ChaReceiptType.scss';
import TWZipCode from './../Cha-Address-Select/TWZipCode';
import InputH40 from '../InputH40/InputH40';
function ChaReceiptType(props) {
  // 未達成
  const ComponentA = (props) => {
    return (
      <>
        {/* 發票捐贈 */}
        <div className="cha-group-receipt-type-2">
          <div className="form-group">
            <label htmlFor="cha-step3-5-1-charitable">愛心碼</label>
            <InputH40
              type="text"
              className="form-control cha-step3-5-1-charitable"
              id="cha-step3-5-1-charitable"
              name="cha-step3-5-1-charitable"
              placeholder="請填寫愛心碼"
            />
          </div>
        </div>
      </>
    );
  };
  // 已達成
  const ComponentB = (props) => {
    const [receiptNumber, setReceiptNumber] = useState('');
    const [receiptAddress, setReceiptAddress] = useState('');
    const [receiptEmail, setReceiptEmail] = useState('');
    return (
      <>
        {/* 二聯式電子發票 */}
        <div className="cha-group-receipt-type-2">
          <div className="form-group">
            <label htmlFor="cha-step3-5-2-1-vehicle">載具類型</label>
            <select
              type="text"
              className="form-control cha-step3-5-2-1-vehicle"
              id="cha-step3-5-2-1-vehicle"
              name="cha-step3-5-2-1-vehicle"
            >
              <option value="會員載具">會員載具</option>
              <option value="手機載具">手機載具</option>
              <option value="自然人憑證">自然人憑證</option>
            </select>
          </div>
          <div className="form-group">
            <label
              htmlFor="cha-step3-5-2-2-vehicle"
              onClick={() => {
                setReceiptNumber('/GLRS74Q');
                setReceiptAddress('復興南路一段390號2樓');
                setReceiptEmail('1234567890@gmail.com.tw');
              }}
            >
              載具號碼
            </label>
            <InputH40
              type="email"
              className="form-control cha-step3-5-2-2-vehicle"
              id="cha-step3-5-2-2-vehicle"
              name="cha-step3-5-2-2-vehicle"
              placeholder="請填寫載具號碼"
              value={receiptNumber}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cha-step3-5-2-2-vehicle">Email</label>
            <InputH40
              type="email"
              className="form-control cha-step3-5-2-2-vehicle"
              id="cha-step3-5-2-2-vehicle"
              name="cha-step3-5-2-2-vehicle"
              placeholder="請填寫Email"
              value={receiptEmail}
            />
          </div>
          <div className="form-group cha-TWZipCode-display">
            <label>發票寄送地址</label>
            <TWZipCode />
            <InputH40
              type="text"
              className="form-control cha-step3-5-2-5-vehicle"
              id="cha-step3-5-2-5-vehicle"
              name="cha-step3-5-2-5-vehicle"
              placeholder="發票寄送地址"
              value={receiptAddress}
            />
            <p className="cha-step3-receipt-alert">
              (由拾餐為您兌獎，中獎後將會寄送紙本發票給您)
            </p>
          </div>
        </div>
      </>
    );
  };
  // 已退費
  const ComponentC = (props) => {
    return (
      <>
        {/* 三聯式電子發票 */}
        <div className="cha-group-receipt-type-3">
          <div className="form-group">
            <label htmlFor="cha-step3-5-3-1-vehicle">公司抬頭</label>
            <InputH40
              type="text"
              className="form-control cha-step3-5-3-1-vehicle"
              id="cha-step3-5-3-1-vehicle"
              name="cha-step3-5-3-1-vehicle"
              placeholder="請填寫公司抬頭"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cha-step3-5-3-2-vehicle">統一編號</label>
            <InputH40
              type="text"
              className="form-control cha-step3-5-3-2-vehicle"
              id="cha-step3-5-3-2-vehicle"
              name="cha-step3-5-3-2-vehicle"
              placeholder="請填寫統一編號"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cha-step3-5-3-3-vehicle">Email</label>
            <InputH40
              type="email"
              className="form-control cha-step3-5-3-3-vehicle"
              id="cha-step3-5-3-3-vehicle"
              name="cha-step3-5-3-3-vehicle"
              placeholder="請填寫Email"
            />
          </div>
        </div>
      </>
    );
  };

  // ---------------切換用函式---------------//
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('cha-active');
    });

    addElem.classList.add('cha-active');
  };
  const TabMenu = () => {
    const [receiptComponent, setReceiptComponent] = useState();

    const tabContentA = (e) => {
      setTabActive(e.target, '.cha-receipt-title-switch');
      setReceiptComponent(<ComponentA />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.cha-receipt-title-switch');
      setReceiptComponent(<ComponentB />);
    };
    const tabContentC = (e) => {
      setTabActive(e.target, '.cha-receipt-title-switch');
      setReceiptComponent(<ComponentC />);
    };
    return (
      <>
        <div className="cha-receipt-content-container">
          {/* 發票開立 */}
          <div className="cha-step3-5-receipt-choose">
            <span ori="發票開立" err="請選擇發票類型">
              發票開立
            </span>

            <div className="cha-step3-5-receipt-div">
              <div className="cha-receipt-title-switch" onClick={tabContentA}>
                <input
                  className="cha-receipt-title-switch"
                  id="cha-receipt-type-1"
                  name="cha-receipt-type"
                  type="radio"
                  value="1"
                />
                <label
                  className="cha-receipt-title-switch"
                  htmlFor="cha-receipt-type-1"
                >
                  發票捐贈
                </label>
              </div>
              <div className="cha-receipt-title-switch" onClick={tabContentB}>
                <input
                  className=""
                  id="cha-receipt-type-2"
                  name="cha-receipt-type"
                  type="radio"
                  value="2"
                />
                <label className="" htmlFor="cha-receipt-type-2">
                  二聯式電子發票
                </label>
              </div>
              <div className="cha-receipt-title-switch" onClick={tabContentC}>
                <input
                  className=""
                  id="cha-receipt-type-3"
                  name="cha-receipt-type"
                  type="radio"
                  value="3"
                />
                <label className="" htmlFor="cha-receipt-type-3">
                  三聯式電子發票
                </label>
              </div>
            </div>
          </div>
          <p className="cha-step3-receipt-alert">
            (依統一發票使用辦法規定：發票一經開立不得任意更改或改開發票。)
          </p>
          <div>{receiptComponent}</div>
        </div>
      </>
    );
  };
  return (
    <>
      <TabMenu />
    </>
  );
}

export default ChaReceiptType;
