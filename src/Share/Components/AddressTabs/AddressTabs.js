import React, { useState, useEffect } from 'react';
import { Tabs, Sonnet, Tab, Container } from 'react-bootstrap';
import './AddressTabs.scss';
import {
  datacountries,
  datatownships,
  dataprice,
} from '../../../Janice/Components/JanIndexx/data.js';

function AddressTabs(props) {
  const {
    // takeOrNot,
    currentUser,
    setTakeOrNot,
    closeModal,
    county,
    setCounty,
    township,
    setTownship,
    address,
    setAddress,
  } = props;

  const updateAddress = () => {
    // const address = document.querySelector('#iris-member-address').value
    const newcounty = document.querySelector('#exampleFormControlSelect1')
      .options[county].value;
    const newdistrict = document.querySelector('#exampleFormControlSelect2')
      .options[township].value;
    const newaddress = document.querySelector('#exampleFormControlSelect3')
      .value;
    const newAddressData = {
      member_id: currentUser,
      county: newcounty,
      district: newdistrict,
      address: newaddress,
    };
    // console.log(newProfile)

    fetch('http://localhost:5000/index/updateAddress', {
      method: 'POST',
      body: JSON.stringify(newAddressData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((r) => r.json())
      .then((o) => {
        console.log(o);
      });
  };

  // Acomponent
  const ComponentA = (props) => {
    //地址輸入部分，預設值式資料庫地址欄位
    const [tabInput, setTabInput] = useState(address);

    useEffect(() => {
      setAddress(tabInput);
    }, [tabInput]);

    const hideInfo = () => {
      document.querySelector('.jan-map-results').style = 'visibility: hidden';
    };
    const showInfo = () => {
      document.querySelector('.jan-map-results').style = 'visibility: visible';
    };

    return (
      <div className="component d-flex justify-content-between align-items-center ">
        <div className="jan-tab-address-form-wrap">
          <div className="p-5">
            <form name="jan-address-form" id="jan-address-form">
              <p className="jan-form-announce">只需請填寫完整地址</p>
              <p className="jan-form-announce">美味方便到手</p>

              <div className="jan-address-select">
                <div className="iris-mainpage-select-wrapper d-flex">
                  <div className="iris-selectbar-wrapper">
                    <select
                      onClick={hideInfo}
                      style={{ fontSize: '1.5rem' }}
                      className="form-control iris-mainpage-select"
                      id="exampleFormControlSelect1"
                      value={county}
                      onChange={(e) => {
                        //將字串轉成數字
                        setCounty(+e.target.value);
                        //重置township的值
                        setTownship(0);
                        setTownship(-1);
                        console.log('county onchange');
                      }}
                    >
                      <option value={-1}>請選擇城市</option>
                      {datacountries.map((v, i) => (
                        <option key={i} value={i}>
                          {v}
                        </option>
                      ))}
                    </select>
                    <div className="iris-mainpage-whitebox"></div>
                    <div className="iris-mainpage-trianglearrow" />
                  </div>
                </div>
              </div>

              <br />
              <div className="jan-address-select">
                <div className="iris-mainpage-select-wrapper d-flex">
                  <div className="iris-selectbar-wrapper">
                    <select
                      onClick={hideInfo}
                      value={township}
                      onChange={(e) => {
                        // 將字串轉成數字
                        setTownship(+e.target.value);
                      }}
                      style={{ fontSize: '1.5rem' }}
                      className="form-control iris-mainpage-select"
                      id="exampleFormControlSelect2"
                    >
                      <option value={-1}>點我選擇區域</option>
                      {county > -1 &&
                        datatownships[county].map((v, i) => (
                          <option key={i} value={i}>
                            {v}
                          </option>
                        ))}
                    </select>
                    <div className="iris-mainpage-whitebox"></div>
                    <div className="iris-mainpage-trianglearrow" />
                  </div>
                </div>
              </div>

              <br />
              <div className="jan-address-input">
                <input
                  id="exampleFormControlSelect3"
                  style={{ fontSize: '1.5rem' }}
                  className="form-control iris-inputH50"
                  type="text"
                  placeholder="點我輸入地址"
                  value={tabInput}
                  onChange={(e) => setTabInput(e.target.value)}
                  autoFocus
                />
              </div>

              <br />
              <div className="jan-address-button float-right">
                <div className="d-flex flex-column float-left">
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      cursor: 'pointer',
                      color: '#fafafa',
                    }}
                    className="jan-index-hide-demo float-left"
                    onClick={(e) => setAddress('堤頂大道二段207號2樓')}
                  >
                    demo
                  </div>
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      cursor: 'pointer',
                      color: '#fafafa',
                    }}
                    className="jan-index-hide-demo float-left"
                    onClick={(e) => setAddress('重新路三段115巷6號')}
                  >
                    demo2
                  </div>
                </div>
                <button
                  onClick={showInfo}
                  type="button"
                  className="button-btn-y "
                  text="查詢結果"
                >
                  確認地址
                </button>
              </div>
              <br />
              <br />
              <div className="jan-map-results p-2 mt-4 ">
                <p>
                  所在地點，符合滿
                  <span className="jan-tabs-highlight">
                    {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
                    {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}
                    {county > -1 &&
                      township > -1 &&
                      dataprice[county][township]}
                  </span>
                  <span className="jan-tabs-highlight">元</span>免運費
                </p>
              </div>

              <div
                style={{ display: 'none' }}
                className="jan-put-button float-right float-bottom"
              >
                <button
                  onClick={updateAddress}
                  type="button"
                  className="button-btn-y "
                  text="設為預設地址"
                >
                  設為預設地址
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* 滿額免運地圖 */}
        <div className="jan-tab-address-map">
          <iframe
            title="tabsDataMap"
            src="https://plotdb.io/v/chart/27933"
            width="600px"
            height="565px"
            allowfullscreen="true"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    );
  };

  // B
  const shopAddress = () => {
    var radios = document.getElementsByName('shop');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        // do whatever you want with the checked radio
        console.log('radios', radios[i].value);
        if (radios[i].value == 1) {
          setCounty(1);
          setTownship(1);
          setAddress('新台五路一段96號1樓-東科店');
        }
        if (radios[i].value == 2) {
          setCounty(0);
          setTownship(4);
          setAddress('安和路一段111號-安永鮮物_安和店');
        }
        if (radios[i].value == 3) {
          setCounty(0);
          setTownship(3);
          setAddress('八德路二段371號-歐克法咖啡_八德店');
        }
        if (radios[i].value == 4) {
          setCounty(0);
          setTownship(10);
          setAddress('重陽路263巷1號B1-南港店');
        }
        if (radios[i].value == 5) {
          setCounty(0);
          setTownship(4);
          setAddress('和平東路二段223號-大安店');
        }
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  };
  const ComponentB = (props) => {
    return (
      <div className="component d-flex justify-content-between ">
        <div className="jan-tab-shops-list-wrap">
          <div className="p-5">
            <p className="jan-form-announce">選擇到店自取</p>
            <div className="jan-shops-radio">
              <input
                type="radio"
                name="shop"
                id="shop1"
                value="1"
                defaultChecked={true}
              />
              <label for="shop1">東科店:</label>
              <p>新北市汐止區新台五路一段96號1樓</p>
              <input type="radio" name="shop" id="shop2" value="2" />
              <label for="shop2">安永鮮物_安和店:</label>
              <p>台北市大安區安和路一段111號</p>
              <input type="radio" name="shop" id="shop3" value="3" />
              <label for="shop3">歐克法咖啡_八德店:</label>
              <p>台北市松山區八德路二段371號</p>
              <input type="radio" name="shop" id="shop4" value="4" />
              <label for="shop4">南港店:</label>
              <p>台北市南港區重陽路263巷1號B1</p>
              <input type="radio" name="shop" id="shop5" value="5" />
              <label for="shop5">大安店:</label>
              <p>台北市大安區和平東路二段223號</p>
              <div
                onClick={closeModal}
                className="jan-shops-button float-right"
              >
                <button
                  onClick={() => {
                    shopAddress();
                    setTakeOrNot('自取');
                    // console.log(takeOrNot)
                  }}
                  className="button-btn-y "
                  text="確認自取地點"
                >
                  確認自取地點
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 門市地圖 */}
        <div className="jan-tab-shops-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1dbpBBf0U6YHIYOs45R-S9WgBp8wBSola"
            width="600"
            height="540"
          ></iframe>
        </div>
      </div>
    );
  };

  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
    });

    addElem.classList.add('active');
  };

  const TabMenu = () => {
    const [component, setComponent] = React.useState(<ComponentA />);

    const tabContentA = (e) => {
      setTabActive(e.target, '.jan-address-tab-menu__item');
      setComponent(<ComponentA />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.jan-address-tab-menu__item');
      setComponent(<ComponentB name="B" />);
    };

    return (
      <div className="position-absolute position-fixed jan-tabs-bcc">
        <div className="jan-tabs">
          <div
            onClick={() => {
              closeModal();
              setTakeOrNot('外送');
              // console.log(takeOrNot)
            }}
            className="jan-tabs-close"
          ></div>
          <div className="jan-address-tab">
            <ul className="jan-address-tab-menu">
              <li
                className="jan-address-tab-menu__item active"
                onClick={tabContentA}
              >
                我要外送
              </li>
              <li className="jan-address-tab-menu__item" onClick={tabContentB}>
                我要自取
              </li>
            </ul>
            <div className=" d-flex">{component}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <TabMenu />
    </>
  );
}

export default AddressTabs;
