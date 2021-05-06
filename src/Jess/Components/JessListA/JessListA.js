import React, { useState, useEffect } from 'react';
import { Tabs, Sonnet, Tab, Container } from 'react-bootstrap';
import './JessListA.scss';

function JessListA() {
  // Acomponent
  const ComponentA = (props) => {
    return (
      <div className="container component mt-5 d-flex justify-content-around ">
        <table class="table table-striped jess-table mt-4 col-sm-3 ">
          <thead>
            <tr>
              <th>配 菜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>義式烘蛋</td>
            </tr>
            <tr>
              <td>蠔油高麗菜</td>
            </tr>
            <tr>
              <td>香烤時蔬</td>
            </tr>
            <tr>
              <td>蒜香空心菜</td>
            </tr>
            <tr>
              <td>點點藜麥飯(50%)</td>
            </tr>
          </tbody>
        </table>
        <table class="table table-striped jess-table col-sm-6 mt-4 ">
          <thead>
            <tr>
              <th>安心食材</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>黑胡椒香蒜舒肥雞</td>
              <td>原味時代股份有限公司</td>
            </tr>
            <tr>
              <td>高麗菜</td>
              <td>朝敏菓菜行</td>
            </tr>
            <tr>
              <td>芋香白米</td>
              <td>朝敏菓菜行</td>
            </tr>
            <tr>
              <td>雞蛋</td>
              <td>上田企業社</td>
            </tr>
            <tr>
              <td>冷凍綠花椰菜</td>
              <td>勤億蛋品</td>
            </tr>
            <tr>
              <td>黃地瓜</td>
              <td>朝敏菓菜行</td>
            </tr>
            <tr>
              <td>聖女小番茄</td>
              <td>南松山市場125號</td>
            </tr>
            <tr>
              <td>玉米筍</td>
              <td>南松山市場125號</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  // B
  const ComponentB = (props) => {
    return (
      <div className="container component  mt-5 row flex-row justify-content-around  px-5  ">
        <table class="table table-striped jess-table2 col-sm-6 my-5 ">
          <thead>
            <tr>
              <th colspan="2">每一份量含50公克 本包裝含11份</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th colspan="1"></th>
              <th></th>
              <th className="text-right">每份 每100克</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>熱量</td>
              <td>64大卡</td>
              <td className="text-right"> 128大卡</td>
            </tr>
            <tr>
              <td>蛋白質</td>
              <td>7公克</td>
              <td className="text-right">14公克</td>
            </tr>
            <tr>
              <td>脂肪</td>
              <td>3公克</td>
              <td className="text-right">6公克</td>
            </tr>
            <tr>
              <td>飽和脂肪</td>
              <td>0公克</td>
              <td className="text-right">0公克</td>
            </tr>
            <tr>
              <td>反式脂肪</td>
              <td>7公克</td>
              <td className="text-right">0公克</td>
            </tr>
            <tr>
              <td>碳水化合物</td>
              <td>7公克</td>
              <td className="text-right">14公克</td>
            </tr>
            <tr>
              <td>糖</td>
              <td>0公克</td>
              <td className="text-right">0公克</td>
            </tr>
            <tr>
              <td>鈉</td>
              <td>47毫克</td>
              <td className="text-right">94毫克</td>
            </tr>
          </tbody>
        </table>
        <div className="jess-prod-text mt-5 d-flex align-items-end col-sm-4">
          <p>
            製造日期：2020-09-26 09:00 <br />
            賞味期限：2020-09-26 14:30 前 <br />
            過敏原：本產品含蛋,大豆製品
            <br />
            【產品規格】
            <br /> 保存期限：建議常溫下1小時內食用完畢 <br />產 地：台北市
            <br />
            宅配方式：常溫配送到府 <br />
            【產品說明】
            <br />
            ※選材、清洗、料理、包裝皆注重衛生清潔，請安心食用。
            <br />
            配送過程中除損毀或產品規格不相符外，盒餐產品恕無法退換貨。
            <br />
            若商品有瑕疵，請維持產品狀態並立即聯繫我們（0968924999），我們會盡力協助您。
          </p>
        </div>
      </div>
    );
  };

  //
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
      setTabActive(e.target, '.jess-productTabMenu__item');
      setComponent(<ComponentA />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.jess-productTabMenu__item');
      setComponent(<ComponentB name="B" />);
    };
    return (
      <div className="container">
        <div className="jess-prductTabTittle">
          <div className="jess-productTab">
            <ul className="jess-productTabMenu d-flex justify-content-center">
              <li
                className="jess-productTabMenu__item active"
                onClick={tabContentA}
              >
                今日菜色
              </li>
              <li className="jess-productTabMenu__item" onClick={tabContentB}>
                營養標示
              </li>
            </ul>
            <div className="jess-productTabBorder mt-5"></div>
            <div className="jess-product-Tab1 d-flex">{component}</div>
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

export default JessListA;
