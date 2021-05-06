import React, { useState, useEffect } from 'react';
import './VNavbar.scss';
import { Navbar, Button } from 'react-bootstrap';
import calendar from './calendar.svg';
import clock from './clock.svg';
import mapLocator from './mapLocator.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, setHours, setMinutes } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import { zhTW } from 'date-fns/esm/locale';
import AddressTabs from '../AddressTabs/AddressTabs';
import {
  datacountries,
  datatownships,
  dataprice,
} from '../../../Janice/Components/JanIndexx/data.js';
registerLocale('zh-TW', zhTW);

function VNavbar(props) {
  const {
    isLogin,
    currentUser,
    // selectDate,
    setSelectDate,
    slecteTime,
    setSelectTime,
    county,
    setCounty,
    township,
    setTownship,
    address,
    setAddress,
  } = props;
  // console.log('currentUser:', currentUser)
  const [userInfoJan, setUserInfoJan] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  setSelectDate(startDate);

  const [status, setStatus] = useState(false);

  //原本fetch的方法
  const addressData = (e) => {
    if (isLogin === true) {
      fetch('http://localhost:5000/index/member_list', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
        .then((r) => r.json())
        .then((obj) => {
          // const newAddress = [...obj, ...adress]無法印出結果
          // setAddress(newAddress)無法印出結果
          // console.log(address[0])無法印出結果
          // console.log(obj[0].address)無法印出結果
          // console.log(obj)無法印出結果
          // })無法印出結果
          // console.log(obj[0].county)  ->台北市
          // console.log(obj[0].district)  ->大安區
          // console.log(obj[0].address)  ->忠孝東路一段50號
          // console.log(datacountries.indexOf(obj[0].county))  ->0
          // console.log(
          //   datatownships[datacountries.indexOf(obj[0].county)].indexOf(
          //     obj[0].district
          //   )
          // )  -> 4
          //   console.log(currentUser - 1)

          if (address.length === 0) {
            setCounty(datacountries.indexOf(obj[0].county));
            setTownship(
              datatownships[datacountries.indexOf(obj[0].county)].indexOf(
                obj[0].district
              )
            );
            setAddress(obj[0].address);
          }
        });
    }
  };

  useEffect(() => {
    addressData();
  }, [isLogin]);

  //疑似無法再次更改資料 -------- 取得目前user的資料 ---------- //

  // const updateAddress = () => {
  //   // const address = document.querySelector('#iris-member-address').value
  //   const address = document.querySelector('.address-input-jan').innerHTML
  //   const newAddressData = {
  //     member_id: currentUser,
  //     address: address,
  //   }
  // console.log(newProfile)

  //   fetch('http://localhost:5000/index/updateAddress', {
  //     method: 'POST',
  //     body: JSON.stringify(newAddressData),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((o) => {
  //       console.log(o)
  //     })
  // }

  // async function getUserInfoFromServerJan() {
  //   // if (isLogin === true) {
  //   const url = 'http://localhost:5000/index/member_list'

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const dataJan = await response.json()

  // console.log(dataJan)
  // setUserInfoJan(dataJan)
  // setCounty(datacountries.indexOf(userInfoJan[1].county))
  // setTownship(
  //   datatownships[datacountries.indexOf(userInfoJan[1].county)].indexOf(
  //     userInfoJan[1].district
  //   )
  // )
  // setAddress(userInfoJan[1].address)
  // }

  // --------- 過濾出現在使用者的資料 --------- //
  // const currentUserInfoJan = userInfoJan.filter(
  //   (userInfoJan) => userInfoJan.member_sid === currentUser
  // )
  // console.log('hi', userInfoJan)
  // console.log(currentUserInfoJan[0])

  // currentUserInfoJan.map((item, index) => {
  //   const getcounty = item.county
  //   const gettownship = item.district
  //   const getaddress = item.address

  //   setCounty(datacountries.indexOf(getcounty))
  //   setTownship(
  //     datatownships[datacountries.indexOf(getcounty)].indexOf(gettownship)
  //   )
  //   setAddress(getaddress)
  // })

  // 如果登入的話，fetch會員的地址
  // useEffect(() => {
  //   getUserInfoFromServerJan()
  //   console.log('isLogin isLogin')
  // }, [isLogin])

  return (
    <>
      {status && (
        <AddressTabs
          {...props}
          currentUser={currentUser}
          address={address}
          setAddress={setAddress}
          closeModal={() => setStatus(false)}
          county={county}
          setCounty={setCounty}
          township={township}
          setTownship={setTownship}
        ></AddressTabs>
      )}
      <Navbar className="vnavbar-jan d-flex flex-wrap justify-content-around fixed-top">
        <div className="jan-vnav-container d-flex flex-wrap justify-content-around align-content-center">
          <div className="d-flex align-items-center calendar-jan">
            <img alt="" src={calendar} className="icons-jan " />
            <p className="titles-jan">取餐日期：</p>
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                // console.log(selectDate)
              }}
              minDate={Date.now()}
              maxDate={addDays(new Date(), 13)}
              locale="zh-TW"
            />
          </div>

          <div className="d-flex align-items-center time-jan">
            <img alt="" src={clock} className="icons-jan " />
            <p className="titles-jan">取餐時間：</p>
            <select
              value={slecteTime}
              onChange={(e) => {
                setSelectTime(e.target.value);
                console.log(e.target.value);
              }}
              className="form-control select-time-jan"
            >
              <option defaultValue>請選擇取餐時間</option>
              <option>11:00 ~ 11:30</option>
              <option>11:30 ~ 12:00</option>
              <option>12:00 ~ 12:30</option>
              <option>12:30 ~ 13:00</option>
            </select>
          </div>

          <div className="d-flex align-items-center">
            <img alt="" src={mapLocator} className="icons-jan" />
            <p className="titles-jan">取餐地址：</p>
            <p onClick={() => setStatus(true)} className="address-input-jan">
              {datacountries[county]}
              {county === -1 ? '' : datatownships[county][township]}
              {address}
            </p>
          </div>

          <div className="d-flex justify-content-end">
            <Button className="shop-btn-jan" onClick={() => setStatus(true)}>
              修改地址
            </Button>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default VNavbar;
