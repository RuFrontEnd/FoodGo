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

const Title = styled.div`
  display: block;
`;

const Price = styled.div`
  display: block;
`;

const Mask = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;
  position: absolute;
  bottom: 28rem;
  width: 23rem;
  height: 7rem;
  overflow: hidden;

  &:hover {
    opacity: 1;
    transform: translateY(10px);
    background-color: rgba(255, 255, 255, 0.5);
    height: 6rem;
  }
`;

function MenuSubItemCard(props) {
  const { style, path, title, price } = props;
  return (
    <Container>
      <Link to={path}>
        <div className="jess-menuB-pic2"></div>
      </Link>
      <Mask>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Mask>
    </Container>
  );
}

export default MenuSubItemCard;
