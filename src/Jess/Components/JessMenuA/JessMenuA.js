import React, { useState, useEffect } from 'react';
import './JessMenuA.scss';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styled from 'styled-components';

function JessMenuA(props) {
  const {className, id, style} = props
  const MenuContainer = styled.div`
    background-color: $fff;
    width: 100%;
    height: 55rem;
    padding: 0;
    ${style && style}
  `;
  const BgElement = Element.BgElement;
  const Demo = () => {
    return (
      <>
        <MenuContainer>
          {/* <div className="jess-MenuA-container-fluid"> */}
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
          {/* </div> */}
        </MenuContainer>
      </>
    );
  };
  return (
    <>
      <Demo />
    </>
  );
}

export default JessMenuA;
