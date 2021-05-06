import React, { useState, useEffect } from 'react'
import './JessMenuD.scss'

function JessMenuD() {
  return (
    <>
      <div className="container-fluid jess-MenuD-container-fluid mt-5">
        <div className="container">
          <p className="jess-text-30orange text-center  ">好康優惠</p>
          <div className="row mt-5 d-flex justify-content-between jess-MenuD-RWD">
            <div class="col-12 col-sm-3">
              <div class="jess-view jess-view-first">
                <div className="jess-menuD-groupon1 "></div>
                <div class="jess-mask text-center">
                  <div className="jess-line"></div>
                  <h2 className="text-center">現在訂購</h2>
                  <p className="text-center">
                    就 送 <br />
                    Blender Bottle 搖搖杯
                  </p>
                  <div className="jess-line2"></div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-3">
              <div class="jess-view jess-view-first">
                <div className="jess-menuD-groupon2"></div>
                <div class="jess-mask text-center">
                  <div className="jess-line"></div>
                  <h2 className="text-center">開始訂購</h2>
                  <p className="text-center">
                    立 即 <br />
                    享受美食
                  </p>
                  <div className="jess-line2"></div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-3">
              <div class="jess-view jess-view-first">
                <div className="jess-menuD-groupon3"></div>
                <div class="jess-mask text-center">
                  <div className="jess-line"></div>
                  <h2 className="text-center">APP點餐</h2>
                  <p className="text-center">
                    揪 團 <br />
                    大家一起來
                  </p>
                  <div className="jess-line2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="jess-border"></div> */}
      </div>
    </>
  )
}

export default JessMenuD
