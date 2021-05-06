import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './JessVegC.scss';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Jesssvg from './JessSvg';

function JessVegC() {
  // A
  const ColorA = (props) => {
    return (
      <>
        <p className="jess-Veg-24red">紅色蔬菜</p>
        <p className="jess-Veg-20gray">雲林 紅蘿蔔</p>
        <div className="jess-Veg-20gray2">彰化 雞蛋</div>
        <Jump>
          <div className="jess-ColorA-01"></div>
          <div className="jess-ColorA-02"></div>
        </Jump>
        <div className="jess-monsterRed"></div>
      </>
    );
  };
  // B
  const ColorB = (props) => {
    return (
      <>
        <p className="jess-Veg-24yellow">黃色蔬菜</p>
        <p className="jess-Veg-20gray">台南 玉米</p>
        <div className="jess-Veg-20gray2">南投 南瓜</div>
        <Jump>
          <div className="jess-ColorB-01"></div>
          <div className="jess-ColorB-02"></div>
        </Jump>
        <div className="jess-monsterYellow"></div>
      </>
    );
  };
  // C
  const ColorC = (props) => {
    return (
      <>
        <p className="jess-Veg-24green">綠色蔬菜</p>
        <p className="jess-Veg-20gray">宜蘭 萵苣</p>
        <div className="jess-Veg-20gray2">台東 檸檬</div>
        <Jump>
          <div className="jess-ColorC-01"></div>
          <div className="jess-ColorC-02"></div>
        </Jump>
        <div className="jess-monster"></div>
      </>
    );
  };
  // D
  const ColorD = (props) => {
    return (
      <>
        <p className="jess-Veg-24purple">紫色蔬菜</p>
        <p className="jess-Veg-20gray">彰化 茄子</p>
        <div className="jess-Veg-20gray2">屏東 洋蔥</div>
        <Jump>
          <div className="jess-ColorD-01"></div>
          <div className="jess-ColorD-02"></div>
        </Jump>
        <div className="jess-monsterPurple"></div>
      </>
    );
  };
  // E
  const ColorE = (props) => {
    return (
      <>
        <p className="jess-Veg-24white">白色蔬菜</p>
        <p className="jess-Veg-20gray">新竹 白蘿蔔</p>
        <div className="jess-Veg-20gray2">新社 杏鮑菇</div>
        <Jump>
          <div className="jess-ColorE-01"></div>
          <div className="jess-ColorE-02"></div>
        </Jump>
        <div className="jess-monsterWhite"></div>
      </>
    );
  };
  //
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
      console.log(target);
    });

    addElem.classList.add('active');
  };

  const ColorMenu = () => {
    const [component, setComponent] = React.useState(<ColorC />);

    const vegColorA = (e) => {
      setTabActive(e.target, '.jess-color');
      setComponent(<ColorA />);
    };
    const vegColorB = (e) => {
      setTabActive(e.target, '.jess-color');
      setComponent(<ColorB />);
    };
    const vegColorC = (e) => {
      setTabActive(e.target, '.jess-color');
      setComponent(<ColorC />);
    };
    const vegColorD = (e) => {
      setTabActive(e.target, '.jess-color');
      setComponent(<ColorD />);
    };
    const vegColorE = (e) => {
      setTabActive(e.target, '.jess-color');
      setComponent(<ColorE />);
    };

    return (
      <>
        <div className="container-fluid jess-VegC-container-fluid mx-auto">
          <div className="container jess-VegB-container mt-5">
            <div className="row mt-5 d-flex align-items-center justify-content-center">
              <div className="col col-sm-3 jess-vegC-border"></div>
              <div className="col col-sm-4 jess-text-30orange">
                <p className="text-center">本週蔬菜主打星</p>
              </div>
              <div className="col col-sm-3 jess-vegC-border"></div>
            </div>
            <div className="row d-flex mt-3">
              <div className="col-12 col-sm-3 align-self-end jess-VegC-text">
                <Fade left cascade>
                  <p className="jess-text-24Green ">這是冬季蔬菜的季節”</p>
                  <p className="jess-text-15Gray align-self-end offset-3">
                    我們開始提供各種顏色 形狀 口味 週週更換菜色 天天皆可到貨
                    想把新鮮食材用簡單純粹的方式呈現給你
                  </p>
                </Fade>
              </div>
              <div className="col-12 col-sm-9 d-flex justify-content-start">
                {component}
                <div className="jess-svg">{/* <Jesssvg /> */}</div>
              </div>
            </div>
            <div className="row jess-VegC-colorRow">
              <div className="col-12 d-flex justify-content-center mt-5 jess-VegC-colors">
                <div
                  className="jess-vegC-red jess-color mx-5"
                  onClick={vegColorA}
                ></div>
                <div
                  className="jess-vegC-yellow jess-color mx-5 "
                  onClick={vegColorB}
                ></div>
                <div
                  className="jess-vegC-green jess-color mx-5 active"
                  onClick={vegColorC}
                ></div>
                <div
                  className="jess-vegC-purple jess-color mx-5"
                  onClick={vegColorD}
                ></div>
                <div
                  className="jess-vegC-white jess-color mx-5"
                  onClick={vegColorE}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <ColorMenu />
    </>
  );
}

export default JessVegC;
