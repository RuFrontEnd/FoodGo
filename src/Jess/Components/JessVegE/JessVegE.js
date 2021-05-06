import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import 'antd/dist/antd.css'
import './JessVegE.scss'

import Button from '../../../Share/Components/Button/Button'

function JessVegE() {
  return (
    <>
      <div className="container-fluid jess-VegE-container-fluid mx-auto">
        <div className="container jess-VegD-container mt-5 mb-5">
          <div className="row mt-5 d-flex align-items-center justify-content-center">
            <div className="col col-sm-3 jess-vegE-border"></div>
            <div className="col col-sm-4 jess-text-30orange">
              <p className="text-center">認識小農</p>
            </div>
            <div className="col col-sm-3 jess-vegE-border"></div>
          </div>
          <div className="row mt-5 d-flex justify-content-between">
            <div className="jess-vegE-card justify-content-center">
              <div className="jess-vegE-farm1"></div>
              <div className="text-center">
                <div className="justify-content-center mt-5">
                  <p className="jess-text-24GreenSe">朝敏果菜行</p>
                </div>
                <p className="jess-text-15Gray text-center">
                  美麗田農園位於白石湖往石崁方向處，群山環繞有如一座小山谷，我們將這美麗的梯田改變成觀光農園。
                </p>
                <div className="jess-VegE-button mt-5">
                  <Button className="button-btn-g" text="體驗更多" />
                </div>
              </div>
            </div>
            <div className="jess-vegE-card justify-content-center">
              <div className="jess-vegE-farm2"></div>
              <div className="text-center">
                <div className="justify-content-center mt-5">
                  <p className="jess-text-24GreenSe">農驛棧有機農園</p>
                </div>
                <div className="jess-text-tooMany ">
                  <p className="jess-text-15Gray text-center">
                    除了山林田野美景環繞，自然生態景觀也極其豐富。農場主人林翠娥一家八口世居在此已有近三百年的歷史，因為享受山居生活，所以在自家土地上栽植上百種有機蔬菜，並結合休閒農遊、食農體驗、田園餐點等服務，致力分享「山中菜農」的美好生活。
                  </p>
                </div>
                <div className="jess-VegE-button mt-5">
                  <Button className="button-btn-g" text="體驗更多" />
                </div>
              </div>
            </div>
            <div className="jess-vegE-card justify-content-center ">
              <div className="jess-vegE-farm3"></div>
              <div className="text-center ">
                <div className="d-flex justify-content-center mt-5">
                  <p className="jess-text-24GreenSe">北新有機休閒農場</p>
                </div>
                <div className="jess-text-tooMany ">
                  <p className="jess-text-15Gray text-center">
                    主要以有機蔬果栽培以及有機農業推廣為主。農場細心規劃一系列的有機蔬果生產導覽，帶領大家參觀農場，說明有機蔬果生產過程，並分享自己的種植經驗。
                  </p>
                </div>
                <div className="jess-VegE-button mt-5">
                  <Button className="button-btn-g" text="體驗更多" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jess-vegE-bottomBorder"></div>
      </div>
    </>
  )
}

export default JessVegE
