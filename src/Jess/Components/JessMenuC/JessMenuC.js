import React from 'react';
import './JessMenuC.scss';
import { Link } from 'react-router-dom';
import brownBorder from 'Jess/Components/images/SVG/brownBorder.svg';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import ArrowRight from 'Share/Components/ArrowRight/ArrowRight';

function JessMenuC() {
  const BgElement = Element.BgElement;
  return (
    <>
      <div className="container-fluid jess-MenuC-container-fluid">
        <div className="container  mt-5 mb-5">
          <p className="jess-text-30orange text-center  ">活力蔬菜</p>
          <p className="jess-text-15Gray text-center">
            從產地到餐桌，最新鮮、美味、安心的來源
            <br />
            “當季、新鮮、農場直送”的好食材
            嚴選的品質和穩定的貨源，我們才能吃的放心、有保障。
          </p>
          <div className="row mt-5">
            <div className="col-12 col-sm-6 d-flex ">
              <div className="row d-flex align-content-between jess-MenuC-RWD">
                <div className="jess-view-menuCpic1">
                  <Link to="/bento/13">
                    <div className="jess-menuC-pic1"></div>
                  </Link>
                  <div class="mask">
                    <h2>生酮沙拉</h2>
                    <p>$130</p>
                  </div>
                </div>
                <div className="jess-view-menuCpic2">
                  <Link to="/bento/16">
                    <div className="jess-menuC-pic2"></div>
                  </Link>
                  <div class="mask">
                    <h2>均衡蛋白質沙拉</h2>
                    <p>$150</p>
                  </div>
                </div>
              </div>
              <div className="row d-flex  align-content-between">
                <div className="jess-view-menuCpic3">
                  <Link to="/bento/15">
                    <div className="jess-menuC-pic3"></div>
                  </Link>
                  <div class="mask">
                    <h2>肌肉UPUP(增肌)沙拉</h2>
                    <p>$170</p>
                  </div>
                </div>
                <div className="jess-view-menuCpic4">
                  <Link to="/bento/14">
                    <div className="jess-menuC-pic4"></div>
                  </Link>
                  <div class="mask">
                    <h2>蒜烤鮭魚沙拉</h2>
                    <p>$150</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 ">
              <Link to="/vegBox">
                <BannerAnim prefixCls="banner-user">
                  <Element
                    key="aaa"
                    prefixCls="banner-user-elem"
                    followParallax={{
                      delay: 1000,
                      data: [
                        {
                          id: 'bg',
                          value: 20,
                          bgPosition: '50%',
                          type: ['backgroundPositionX'],
                        },
                        { id: 'title', value: 50, type: 'x' },
                        { id: 'content', value: -30, type: 'x' },
                      ],
                    }}
                  >
                    <BgElement
                      className="jess-menuC-box"
                      // key="bg"
                      // id="bg"
                    ></BgElement>

                    <TweenOne
                      className="jess-menuC-BentoText"
                      animation={{ y: 20, opacity: 0, type: 'from' }}
                      id="content"
                    >
                      在地小農蔬菜箱
                    </TweenOne>
                  </Element>
                </BannerAnim>
              </Link>
              {/* <div className="jess-menuC-box"></div> */}
            </div>
            {/* <div className="jess-menuBtn2 mt-5"> */}
            {/* <div className="arrowright-warp mt-3 ">
                <div className="jan-arrow-circleR" draggable="true">
                  <div className="jan-arrow-right"></div>
                </div>
              </div> */}
            {/* </div> */}
            <div className="jess-menuBtn2  mt-5">
              <div className="float-right">
                <p className="jess-p">美味沙拉</p>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="jess-Menu-bottomBorder">
            <img alt="" src={brownBorder}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default JessMenuC;
