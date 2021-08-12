import React, { useState, useEffect } from 'react';
import './JessMenuB.scss';
import { Link } from 'react-router-dom';
import brownBorder from 'Jess/Components/images/SVG/brownBorder.svg';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import ArrowRight from 'Share/Components/ArrowRight/ArrowRight';
import styled from 'styled-components/macro';
import { orange } from 'variable/variable';
import MenuSubItemCard from 'components/menuSubItemCard/MenuSubItemCard';

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
  order: ${(props) => (props.isMainItemLeft ? 0 : 1)};
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

function DailyMenu(props) {
  const {
    style,
    key,
    isMainItemLeft = true,
    title = '標題',
    mainText = '主文案',
    viceText = '副文案',
    mainItem = { title: '主項目標題', photo: '', linkTo: '' },
    firstSubItem = { title: '第一子項目標題', price: 0, photo: '', linkTo: '' },
    secondSubItem = {
      title: '第二子項目標題',
      price: 0,
      photo: '',
      linkTo: '',
    },
    thirdSubItem = { title: '第三子項目標題', price: 0, photo: '', linkTo: '' },
    fourthSubItem = {
      title: '第四子項目標題',
      price: 0,
      photo: '',
      linkTo: '',
    },
    bottomLink = { text: '轉址提示', linkTo: '' },
  } = props;

  return (
    <>
      <Container className="container" pattern={style}>
        <Wrap>
          <Title className="text-center">{title}</Title>
          <Content className="text-center">
            {mainText}
            <br />
            {viceText}
          </Content>

          <ItemContainer className="row mt-5">
            <MainItem
              className="col-12 col-sm-6"
              isMainItemLeft={isMainItemLeft}
            >
              <Link to={mainItem.linkTo}>
                <BannerAnim>
                  <Element
                    key={key}
                    followParallax={{
                      delay: 1000,
                      data: [
                        { id: title, value: 50, type: 'x' },
                        { id: 'content', value: -30, type: 'x' },
                      ],
                    }}
                  >
                    <MainItemBgElement
                      imgUrl={mainItem.photo}
                    ></MainItemBgElement>
                    <MainItemTweenOne
                      animation={{ y: 20, opacity: 0, type: 'from' }}
                      id={title}
                    >
                      {mainItem.title}
                    </MainItemTweenOne>
                  </Element>
                </BannerAnim>
              </Link>
            </MainItem>

            <SubItem className="col-12 col-sm-6 d-flex justify-content-around">
              <SubItemRow className="d-flex flex-column justify-content-between">
                <MenuSubItemCard
                  path={firstSubItem.linkTo}
                  photo={firstSubItem.photo}
                  title={firstSubItem.title}
                  price={firstSubItem.price}
                />
                <MenuSubItemCard
                  path={secondSubItem.linkTo}
                  photo={secondSubItem.photo}
                  title={secondSubItem.title}
                  price={secondSubItem.price}
                />
              </SubItemRow>

              <SubItemRow className="d-flex flex-column justify-content-between">
                <MenuSubItemCard
                  path={thirdSubItem.linkTo}
                  photo={thirdSubItem.photo}
                  title={thirdSubItem.title}
                  price={thirdSubItem.price}
                />
                <MenuSubItemCard
                  path={fourthSubItem.linkTo}
                  photo={fourthSubItem.photo}
                  title={fourthSubItem.title}
                  price={fourthSubItem.price}
                />
              </SubItemRow>
            </SubItem>
          </ItemContainer>
          <Link
            to={bottomLink.linkTo}
          >
            <div className="jess-menuBtn float-right mt-5">
              <p className="jess-p">
                {bottomLink.text}
              </p>
              <ArrowRight />
            </div>
          </Link>
          <div className="jess-Menu-bottomBorder">
            <img alt="" src={brownBorder}></img>
          </div>
        </Wrap>
      </Container>
    </>
  );
}

export default DailyMenu;
