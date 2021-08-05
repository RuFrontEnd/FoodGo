import React, { useState, useEffect } from 'react';
import 'components/menuSubItemCard/menuSubItemCard.scss';
import { Link } from 'react-router-dom';
import brownBorder from 'Jess/Components/images/SVG/brownBorder.svg';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import ArrowRight from 'Share/Components/ArrowRight/ArrowRight';
import styled from 'styled-components/macro';
import { orange } from 'variable/variable';
import dailyMenuMainImg from 'assets/jpg/dailyMenu-mainImg.jpg';

const BgElement = Element.BgElement;

const Container = styled.div`
  background-color: $white;
  width: 100%;
  height: 85rem;
  padding: 0;
  ${(props) => props.pattern && props.pattern}
`;

const Wrap = styled.div`
  display: block;
`;

const Title = styled.p`
  font-size: 3rem;
  font-family: 'Noto Serif TC', serif;
  font-weight: bold;
  color: ${orange};
  letter-spacing: 1rem;
`;

const Content = styled.p`
  font-size: 1.5rem;
  font-family: 'Noto Sans TC';
  color: $darkGary;
  line-height: 2rem;
`;

const ItemContainer = styled.div`
  display: block;
`;

const MainItem = styled.div`
  display: block;
`;

const MainItemBgElement = styled(BgElement)`
  background: url('${(props) => props.imgUrl}') no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100%;
  height: 50rem;
  position: relative;
`;

const MainItemTweenOne = styled(TweenOne)`
  color: #ffffff;
  font-size: 3rem;
  font-family: 'Noto Serif TC';
  font-weight: 600;
  letter-spacing: 1rem;
  position: absolute !important;
  text-shadow: #000 1px 1px 5px;
  top: 40%;
  left: 35%;
  z-index: 20;
`;

const SubItem = styled.div`
  display: flex;
`;

const SubItemRow = styled.div`
  display: flex;
`;

const SubItemTitle = styled.div`
  display: block;
`;

const SubItemPrice = styled.div`
  display: block;
`;

function MenuSubItemCard(props) {
  const { style } = props;
  return (
    <>
      <div className="jess-view-menuBpic2">
        <Link to="/bento/0">
          <div className="jess-menuB-pic2"></div>
        </Link>
        <div class="mask">
          <SubItemTitle>中歐香料嫩雞胸</SubItemTitle>
          <SubItemPrice>$170</SubItemPrice>
        </div>
      </div>
    </>
  );
}

export default MenuSubItemCard;
