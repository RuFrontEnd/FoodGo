import React, { useState, useEffect } from 'react'
import './JessMenuA.scss'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import 'rc-banner-anim/assets/index.css'

function JessMenuA() {
  const BgElement = Element.BgElement
  const Demo = () => {
    return (
      <>
        <div className="container-fluid jess-MenuA-container-fluid">
          <div className="container-fluid jess-container">
            <BannerAnim prefixCls="jess-MenuBanner" autoPlay>
              <Element prefixCls="jess-MenuBanner-elem" key="0">
                <BgElement key="bg" className="bg" />
                <TweenOne
                  className="jess-MenuBanner-title"
                  animation={{ x: -30, opacity: 0, type: 'from' }}
                >
                  生活不將就
                </TweenOne>
                <TweenOne
                  className="jess-MenuBanner-text"
                  animation={{ y: 40, opacity: 0, type: 'from', delay: 700 }}
                >
                  吃飯就該 好好講究
                </TweenOne>
              </Element>
            </BannerAnim>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <Demo />
    </>
  )
}

export default JessMenuA
