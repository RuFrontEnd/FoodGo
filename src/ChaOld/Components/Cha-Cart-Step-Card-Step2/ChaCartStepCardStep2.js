import React, { useState, useEffect } from 'react';
import './ChaCartStepCardStep2.scss';
import InputH40 from './InputH40/InputH40';
import $ from 'jquery';

// -------------時間套件，start-------------------//
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import { zhTW } from 'date-fns/esm/locale';
registerLocale('zh-TW', zhTW);
// -------------時間套件，over-------------------//

function ChaCartStepCardStep2(props) {
  //-------------地址重構(縣市+區域+詳細地址)----------//
  const [showAddress, setShowAddress] = useState('');
  // county={county}
  // setCounty={setCounty}
  // district={district}
  // setDistrict={setDistrict}

  const {
    currentMemberSid,
    setCurrentMemberSid,
    setMemberSid,
    name,
    setName,
    mobile,
    setMobile,
    // county,
    setCounty,
    // district,
    setDistrict,
    setAddress,
    setBeastieCoin,
    takeDate,
    setTakeDate,
    takeTime,
    // takeWay,
    setTakeWay,
    setTakeTime,
  } = props;

  // GET會員資料
  async function getMemberDataFromServer(paramsMemberId) {
    const url = `http://localhost:5000/cart-api/member/${paramsMemberId}`;

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值
    // console.log(data);
    console.log('讀入會員資料', data);
    //data裡面只有一個會員的資料，後端過濾完了
    setName(data[0].name);
    setMobile(data[0].mobile);
    setTakeWay(data[0].take_way);
    setCounty(data[0].county);
    setDistrict(data[0].district);
    setAddress(data[0].address);
    setShowAddress(data[0].county + data[0].district + data[0].address);
    setMemberSid(data[0].member_sid);
    setBeastieCoin(data[0].beastie_coin);
  }

  // componentDidMount，一掛載就GET會員資料表
  useEffect(() => {
    getMemberDataFromServer(currentMemberSid);
    console.log('一掛載就讀取會員資料表');
  }, []);

  // // 重構手機顯示
  // function showMobilInput() {
  //   let phoneNumb0to3 = mobile.slice(0, 4);
  //   let phoneNumb4to6 = mobile.slice(4, 7);
  //   let phoneNumb7to9 = mobile.slice(7, 10);
  //   if (mobile.length < 5) {
  //     setShowMobile(phoneNumb0to3);
  //   } else if (mobile.length >= 5 && mobile.length <= 7) {
  //     setShowMobile(phoneNumb0to3 + '-' + phoneNumb4to6);
  //   } else {
  //     setShowMobile(phoneNumb0to3 + '-' + phoneNumb4to6 + '-' + phoneNumb7to9);
  //   }
  // }
  // useEffect(() => {
  //   showMobilInput();
  // }, [mobile]);

  // //------------格式檢查的函式-------//
  // const handleFormatCheckStep2 = () => {
  //   //  姓名不能為空值
  //   if (name === '') {
  //     $('.cha-wrong-name').slideDown('slow');
  //   }
  //   // 手機格式不符
  //   if (!mobile.match(/^09[0-9]{8}$/)) {
  //     $('.cha-wrong-mobile').slideDown('slow');
  //   }

  //   //   // 資料都ok才送出
  //   else {
  //     // 清空錯誤題示
  //     $('.cha-wrong-mobile').slideUp('slow');
  //     $('.cha-wrong-name').slideUp('slow');
  //   }
  // };

  // // 控制格式檢查
  // useEffect(() => {
  //   if (formatCheckStep2) {
  //     handleFormatCheckStep2();
  //   }
  //   console.log('Step2格式檢查遙控器', formatCheckStep2);
  // }, [formatCheckStep2]);

  return (
    <>
      <div className="cha-main-card cha-main-card-step2">
        <div className="cha-step-header">步驟2：訂單資料</div>
        {/* 聯絡人姓名 */}
        <div className="form-group">
          <label htmlFor="cha-step2-1-name">聯絡人姓名</label>
          <InputH40
            type="text"
            className="form-control cha-step2-1-name"
            id="cha-step2-1-name"
            placeholder="請填寫姓名"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="cha-wrong-name">**請填寫姓名</div>
        </div>
        {/* 手機號碼 */}
        <div className="form-group">
          <label htmlFor="cha-step2-2-phone">手機號碼</label>
          <InputH40
            type="text"
            className="form-control cha-step2-2-phone"
            id="cha-step2-2-phone"
            placeholder="請填寫手機"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />{' '}
          <div className="cha-wrong-mobile">**手機格式錯誤</div>
        </div>
        {/* 取餐日期、時間 */}

        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="cha-step2-3-take-date">取餐日期</label>
            <br />
            <div className="cha-DatePicker-display">
              <DatePicker
                // className="form-control cha-step2-3-take-date"
                // id="cha-step2-3-take-date"
                // placeholder="請填寫姓名"
                dateFormat="yyyy-MM-dd"
                selected={takeDate}
                onChange={(date) => {
                  setTakeDate(date);
                  console.log(takeDate);
                }}
                minDate={Date.now()}
                maxDate={addDays(new Date(), 13)}
                locale="zh-TW"
              />
              <div className="cha-wrong-takeDate">**取餐日期格式錯誤</div>
            </div>
          </div>
          <div className="form-group col-6">
            <label htmlFor="cha-step2-4-take-time">取餐時間</label>
            <select
              id="cha-step2-4-take-time"
              className="form-control cha-step2-4-take-time"
              // defaultValue=""
              value={takeTime}
              onChange={(e) => {
                setTakeTime(e.target.value);
              }}
            >
              {/* <option selected>請選擇時間</option> */}
              <option>11:00 ~ 11:30</option>
              <option>11:30 ~ 12:00</option>
              <option>12:00 ~ 12:30</option>
              <option>12:30 ~ 13:00</option>
            </select>
          </div>
        </div>

        {/* handleChange(event) {
         this.setState({value: event.target.value});} */}
        {/* 取餐地址1 */}
        <div className="form-group">
          <label htmlFor="cha-step2-5-take-address-3">取餐地址</label>
          <InputH40
            type="text"
            className="form-control cha-step2-5-take-address-1"
            id="cha-step2-5-take-address-1"
            placeholder="請填寫取餐地址"
            value={showAddress}
            // onChange={(e) => {
            //   setAddress(e.target.value);
            // }}
            disabled
          />
        </div>
        {/* 取餐地址2 */}
        {/* <div className="form-group">
        <label htmlFor="step2-5-take-address-2">取餐地址</label>
        <input
          type="text"
          className="form-control cha-step2-5-take-address-2"
          id="cha-step2-5-take-address-2"
          name="cha-step2-5-take-address-2"
          value="台北市大安區復興南路二段390號"
        />
      </div> */}
        {/* 取餐地址3 */}
        {/* <div className="form-group">
        <label htmlFor="step2-5-take-address-3">取餐地址</label>
        <input
          type="text"
          className="form-control cha-step2-5-take-address-3"
          id="cha-step2-5-take-address-3"
          name="cha-step2-5-take-address-3"
          placeholder="請填寫"
        />
      </div>
      <div className="cha-step-check-btn-div">
        <input type="button" value="確認" className="cha-step-check-btn" />
      </div>
    </form> */}
      </div>
    </>
  );
}
export default ChaCartStepCardStep2;
