import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import 'antd/dist/antd.css';
import './JessVegB.scss';
import { Parallax } from 'rc-scroll-anim';

function JessVegB() {
  return (
    <>
      <div className="container-fluid jess-VegB-container-fluid mx-auto">
        <div className="container jess-VegB-container">
          <div className="row">
            <div className="jess-VegB-farm col-12 col-sm-12 text-center text-sm-center mt-5">
              <Fade top>
                <h1>有愛大地理念</h1>
                <p>
                  選用契作農作物 永續觀念 <br />
                  未來期許與小農合作更多可能
                  <br /> 用料理回饋社會
                </p>
              </Fade>
              <div className="jess-VegTittle text-left">
                <Fade>
                  <p>傳遞在地故事</p>
                  <p>屬於這塊土地的脈絡與感動</p>
                </Fade>
              </div>

              <div className="jess-VegBox col-12 ">
                <Parallax
                  animation={{ x: 0, opacity: 1, playScale: [0.3, 0.8] }}
                  style={{ opacity: 0 }}
                  className="jess-VegBox2 col-12"
                />
                {/* <div className="jess-VegBox2 col-12 "></div> */}
                {/* <div className="jess-VegBox3 col-12 "></div> */}
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-between">
            <div className="col-12 col-sm-7">
              <div className="row">
                <Fade>
                  <p className="jess-text-18Green col-12 col-sm-10">
                    由農場主人精心栽種，挑選當令食材，
                    動手烹調出風味餐點。伴隨著自然美景，
                    吃一口，感受人情溫度，季節的美味。
                  </p>
                </Fade>
              </div>
              <div className="row align-items-center mt-5">
                <div className="col-12 col-sm-5">
                  <div className="jess-farmPic2 justify-content-center "></div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="jess-greenBorder"></div>
                  <Fade right>
                    <p className="jess-text-15Gray text-left text-sm-center mt-5">
                      農藥殘留經SGS檢驗310種合格。 等級和純度(DNA)委託工會檢驗。
                      取得生產履歷認證， 可讓消費者進行產品生產過程追朔。
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 jess-farmPic align-self-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JessVegB;
