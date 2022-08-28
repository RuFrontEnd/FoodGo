import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styled from 'styled-components/macro';
import MenuBannerImg from 'assets/jpg/menuBanner.jpg';

const BgElementInstance = Element.BgElement;

const MenuContainer = styled.div`
  width: 100%;
  height: 55rem;
  padding: 0;
  ${(props) => props.pattern && props.pattern}
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

const BgElement = styled(BgElementInstance)`
  .banner-anim-elem & {
    width: 100%;
    height: 55rem;
    overflow: hidden;
    background: url(${MenuBannerImg}) repeat;
    background-size: cover;
  }
`;

const TweenOneTitle = styled(TweenOne)`
  color: rgb(46, 46, 46);
  font-size: 3.6rem;
  font-family: 'Noto Serif TC', serif;
  font-weight: 600;
  position: absolute;
  top: 52.5%;
  left: 10%;
`;

const TweenOneText = styled(TweenOne)`
  color: $darkGary;
  font-size: 3rem;
  font-family: 'Noto Serif TC', serif;
  font-weight: 500;
  letter-spacing: 0.7rem;
  line-height: 7rem;
  position: absolute;
  top: 60%;
  left: 10%;
  color: #858585;
`;

function MenuBanner(props) {
  const { style } = props;

  return (
    <>
      <MenuContainer pattern={style}>
        <BannerAnimtion autoPlay>
          <ElementContainer key="0">
            <BgElement key="bg" Bgurl={MenuBannerImg}>
              <TweenOneTitle animation={{ x: -30, opacity: 0, type: 'from' }}>
                生活不將就
              </TweenOneTitle>
              <TweenOneText
                animation={{ y: 40, opacity: 0, type: 'from', delay: 700 }}
              >
                吃飯就該 好好講究
              </TweenOneText>
            </BgElement>
          </ElementContainer>
        </BannerAnimtion>
      </MenuContainer>
    </>
  );
}

export default MenuBanner;
