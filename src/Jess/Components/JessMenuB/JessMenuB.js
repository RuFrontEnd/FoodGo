import React, { useState, useEffect } from 'react';
import './JessMenuB.scss';
import { Link } from 'react-router-dom';
import brownBorder from 'Jess/Components/images/SVG/brownBorder.svg';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import ArrowRight from 'Share/Components/ArrowRight/ArrowRight';

function JessMenuB(props) {
  const BgElement = Element.BgElement;
  return (
    <>
      <div className="container-fluid jess-MenuB-container-fluid ">
        <div className="container   mb-5">
          <p className="jess-text-30orange text-center">日常經典</p>
          <p className="jess-text-15Gray text-center">
            中央廚房當日新鮮現做，嚴選新鮮食材讓您吃得到食材原形
            <br />
            熱量完整揭露輕鬆計算、詳細的食材來源
          </p>

          <div className="row mt-5 ">
            <div class="col-12 col-sm-6 jess-banner-anim ">
              <Link to="/productListCustom">
                <BannerAnim prefixCls="banner-user">
                  <Element
                    key="aaa"
                    prefixCls="banner-user-elem"
                    followParallax={{
                      delay: 1000,
                      data: [
                        { id: 'title', value: 50, type: 'x' },
                        { id: 'content', value: -30, type: 'x' },
                      ],
                    }}
                  >
                    <BgElement
                      className="jess-menuB-pic1"
                      // key="bg"
                      // id="bg"
                    ></BgElement>
                    <TweenOne
                      className="jess-menuB-BentoText"
                      animation={{ y: 20, opacity: 0, type: 'from' }}
                      id="title"
                    >
                      客製化便當
                    </TweenOne>
                  </Element>
                </BannerAnim>
              </Link>
            </div>

            <div className="col-12 col-sm-6 d-flex jess-MenuB-RWD">
              <div className="row d-flex  align-content-between">
                <div className="jess-view-menuBpic2">
                  <Link to="/bento/0">
                    <div className="jess-menuB-pic2"></div>
                  </Link>
                  <div class="mask">
                    <h2>中歐香料嫩雞胸</h2>
                    <p>$170</p>
                  </div>
                </div>
                <div className="jess-view-menuBpic3">
                  <Link to="/bento/1">
                    <div className="jess-menuB-pic3"></div>
                  </Link>
                  <div class="mask">
                    <h2>日式燒雞腿</h2>
                    <p>$150</p>
                  </div>
                </div>
              </div>
              <div className="row d-flex  align-content-between">
                <div className="jess-view-menuBpic4">
                  <Link to="/bento/6">
                    <div className="jess-menuB-pic4"></div>
                  </Link>
                  <div class="mask">
                    <h2>頂級熟成菲力牛排</h2>
                    <p>$230</p>
                  </div>
                </div>
                <div className="jess-view-menuBpic5">
                  <Link to="/bento/3">
                    <div className="jess-menuB-pic5"></div>
                  </Link>
                  <div class="mask">
                    <h2>熱帶火烤萊姆蝦</h2>
                    <p>$200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/productList">
            <div className="jess-menuBtn float-right mt-5">
              <p className="jess-p">低GI便當</p>
              <ArrowRight />
            </div>
          </Link>
          <div className="jess-Menu-bottomBorder">
            <img alt="" src={brownBorder}></img>
          </div>
        </div>
        {/* <div className="jess-menuBtn">
          <button className="addCart-btn addCart-btn-n" text="商品列表">
            商品列表
          </button>
        </div> */}
      </div>
    </>
  );
}

export default JessMenuB;
