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

function DailyMenu(props) {
  const { style } = props;
  return (
    <>
      <Container className="container" pattern={style}>
        <Wrap>
          <Title className="text-center">日常經典</Title>
          <Content className="text-center">
            中央廚房當日新鮮現做，嚴選新鮮食材讓您吃得到食材原形
            <br />
            熱量完整揭露輕鬆計算、詳細的食材來源
          </Content>

          <ItemContainer className="row mt-5">
            <MainItem className="col-12 col-sm-6">
              <Link to="/productList">
                <BannerAnim>
                  <Element
                    key="dailyMenu-element"
                    followParallax={{
                      delay: 1000,
                      data: [
                        { id: 'title', value: 50, type: 'x' },
                        { id: 'content', value: -30, type: 'x' },
                      ],
                    }}
                  >
                    <MainItemBgElement
                      imgUrl={dailyMenuMainImg}
                    ></MainItemBgElement>
                    <MainItemTweenOne
                      animation={{ y: 20, opacity: 0, type: 'from' }}
                      id="title"
                    >
                      客製化便當
                    </MainItemTweenOne>
                  </Element>
                </BannerAnim>
              </Link>
            </MainItem>

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
          </ItemContainer>
          <Link to="/productList">
            <div className="jess-menuBtn float-right mt-5">
              <p className="jess-p">低GI便當</p>
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
