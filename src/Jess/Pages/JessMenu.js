import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import MenuBanner from 'components/menuBanner/MenuBanner';
import DailyMenu from 'components/dailyMenu/DailyMenu';
import JessMenuC from '../Components/JessMenuC/JessMenuC';
import JessMenuD from '../Components/JessMenuD/JessMenuD';
import ToTop from 'Share/Components/ToTopButton/ScrollButton';
import styled from 'styled-components/macro';
import dailyMenuMainImg from 'assets/jpg/dailyMenu-mainImg.jpg';
import bentoChickenBreast from 'assets/jpg/00_bento-chicken-breast.jpg';
import bentoChickenThigh from 'assets/jpg/01_bento-chicken-thigh.jpg';
import bentoTenderLoin from 'assets/jpg/06_bento-tenderloin.jpg';
import bentoShrimp from 'assets/jpg/03_bento-shrimp.jpg';

function JessMenu(props) {
  const { setShowBar } = props;

  useEffect(() => {
    setShowBar(true);
  }, []);

  let { id } = useParams();

  const MenuBannerStyle = `
  margin-bottom:50px;
  @media (max-width: 768px) {
    background-color: red;
  };
  `;

  return (
    <>
      <MenuBanner style={MenuBannerStyle} />
      <DailyMenu
        title={'日常經典'}
        mainText={'中央廚房當日新鮮現做，嚴選新鮮食材讓您吃得到食材原形'}
        viceText={'熱量完整揭露輕鬆計算、詳細的食材來源'}
        mainItem={{
          title: '客製化便當',
          photo: dailyMenuMainImg,
          linkTo: '/productList',
        }}
        firstSubItem={{
          title: '中歐香料嫩雞胸',
          price: 170,
          photo: bentoChickenBreast,
          linkTo: '/bento/0',
        }}
        secondSubItem={{
          title: '日式燒雞腿',
          price: 150,
          photo: bentoChickenThigh,
          linkTo: '/bento/1',
        }}
        thirdSubItem={{
          title: '頂級熟成菲力牛排',
          price: 230,
          photo: bentoTenderLoin,
          linkTo: '/bento/6',
        }}
        fourthSubItem={{
          title: '熱帶火烤萊姆蝦',
          price: 200,
          photo: bentoShrimp,
          linkTo: '/bento/3',
        }}
        bottomLink={{ linkTo: '/productList', text: '低GI便當' }}
      />
      <JessMenuC id={id} />
      <JessMenuD />
      <ToTop />
    </>
  );
}

export default withRouter(JessMenu);
