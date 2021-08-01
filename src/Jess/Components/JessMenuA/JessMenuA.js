import React, { useState, useEffect } from 'react';
import './JessMenuA.scss';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styled from 'styled-components/macro';

const MenuContainer = styled.div`
  width: 100%;
  height: 55rem;
  padding: 0;
  ${(props) => props.style && props.style}
`;

const BannerAnimtion = styled(BannerAnim)`
  display: block;
`;

const ElementContainer = styled(Element)`
  width: 100%;
  height: 65rem;
  text-align: left;
  position: relative;
  overflow: hidden;
`;

const TweenOneTitle = styled(TweenOne)`
  color: rgb(46, 46, 46);
  font-size: 3.6rem;
  font-family: 'Noto Serif TC', serif;
  font-weight: 600;
  top: 60%;
  left: 9%;
`;

const TweenOneText = styled(TweenOne)`
  color: $darkGary;
  font-size: 3rem;
  font-family: 'Noto Serif TC', serif;
  font-weight: 500;
  letter-spacing: 0.7rem;
  line-height: 7rem;
  top: 60%;
  left: 9%;
`;

function JessMenuA(props) {
  const { className, id, style } = props;

  const BgElement = Element.BgElement;

  return (
    <>
      <MenuContainer style={style}>
        <BannerAnimtion autoPlay>
          <ElementContainer key="0">
            <BgElement key="bg" className="bg" />
            <TweenOneTitle animation={{ x: -30, opacity: 0, type: 'from' }}>
              生活不將就
            </TweenOneTitle>
            <TweenOneText
              animation={{ y: 40, opacity: 0, type: 'from', delay: 700 }}
            >
              吃飯就該 好好講究
            </TweenOneText>
          </ElementContainer>
        </BannerAnimtion>
      </MenuContainer>
    </>
  );
}

export default JessMenuA;
