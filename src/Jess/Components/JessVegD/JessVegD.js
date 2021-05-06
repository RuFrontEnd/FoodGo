import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import 'antd/dist/antd.css';
import './JessVegD.scss';
import { Parallax } from 'rc-scroll-anim';

function JessVegD() {
  return (
    <>
      <div className="container-fluid jess-VegD-container-fluid mx-auto">
        <div className="container jess-VegD-container mt-5 d-flex">
          <div className="row mt-5 d-flex">
            <div className="col-12 col-sm-4  align-items-center ">
              <div className="col-12 col-sm-12 jess-vegDbox-s"></div>
              <div className="col-12 col-sm-12 jess-vegDbox mt-4">
                <div className="d-flex justify-content-center 5">
                  <p className="jess-text-24Green text-center ">個人號蔬菜箱</p>
                  <div className="col-2">
                    <button className="jess-size">S</button>
                  </div>
                </div>
                <ul className="jess-text-15Gray">
                  <li>無毒葉菜3~4份</li>
                  <li>無毒根莖2-3份</li>
                  <li>無毒蕈菇芽菜1~2份</li>
                  <li>無毒瓜果0~1份</li>
                  <li>雞蛋6顆</li>
                  <p>
                    商品易受天候因素影響，以實際採收狀況出貨，如有變動敬請見諒。
                  </p>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4  flex-column  align-items-center ">
              <div className="col-12 col-sm-12  jess-vegDbox-M"></div>
              <div className="col-12 col-sm-12 jess-vegDbox">
                <div className="d-flex justify-content-center mt-4">
                  <p className="jess-text-24Green text-center ">個人號蔬菜箱</p>
                  <div className="col-2">
                    <button className="jess-size ">M</button>
                  </div>
                </div>
                <ul className="jess-text-15Gray">
                  <li>無毒葉菜1~2份</li>
                  <li>無毒根莖1~2份</li>
                  <li>無毒蕈菇芽菜1~2份</li>
                  <li>無毒瓜果0~1份</li>
                  <li>雞蛋4顆</li>
                  <p>
                    商品易受天候因素影響，以實際採收狀況出貨，如有變動敬請見諒。
                  </p>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4  flex-column  align-items-center ">
              <div className="col-12 col-sm-12  jess-vegDbox-L"></div>
              <div className="col-12 col-sm-12 jess-vegDbox">
                <div className="d-flex justify-content-center mt-4">
                  <p className="jess-text-24Green text-center ">個人號蔬菜箱</p>
                  <div className="col-2">
                    <button className="jess-size">L</button>
                  </div>
                </div>
                <ul className="jess-text-15Gray">
                  <li>無毒葉菜4~5份</li>
                  <li>無毒根莖3~5份</li>
                  <li>無毒蕈菇芽菜2~3份</li>
                  <li>無毒瓜果1~3份</li>
                  <li>雞蛋10顆</li>
                  <p>
                    商品易受天候因素影響，以實際採收狀況出貨，如有變動敬請見諒。
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JessVegD;
