import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import MenuBanner from 'components/menuBanner/MenuBanner';
import DailyMenu from 'components/dailyMenu/DailyMenu';
// import JessMenuC from '../Components/JessMenuC/JessMenuC';。
import JessMenuD from '../Components/JessMenuD/JessMenuD';
import ToTop from 'Share/Components/ToTopButton/ScrollButton';
import styled from 'styled-components/macro';
import dailyMenuMainImg from 'assets/jpg/dailyMenu-mainImg.jpg';
import bentoChickenBreast from 'assets/jpg/00_bento-chicken-breast.jpg';
import bentoChickenThigh from 'assets/jpg/01_bento-chicken-thigh.jpg';
import bentoTenderLoin from 'assets/jpg/06_bento-tenderloin.jpg';
import bentoShrimp from 'assets/jpg/03_bento-shrimp.jpg';
import menuVegetableBox from 'assets/jpg/menu-vegetableBox.jpg';
import ketogenicSalad from 'assets/jpg/13_salad.jpg';
import eggSalad from 'assets/jpg/16_egg.jpg';
import muscleSalad from 'assets/jpg/15_musleSalad.jpg';
import salmonSalad from 'assets/jpg/14_salmon.jpg';

function JessMenu(props) {
  const { setShowBar } = props;

  useEffect(() => {
    setShowBar(true);
  }, []);

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
      <DailyMenu
        title={'活力蔬菜'}
        isMainItemLeft={false}
        mainText={'從產地到餐桌，最新鮮、美味、安心的來源'}
        viceText={
          ' “當季、新鮮、農場直送”的好食材嚴選的品質和穩定的貨源，我們才能吃的放心、有保障。'
        }
        mainItem={{
          title: '活力蔬菜',
          photo: menuVegetableBox,
          linkTo: '/vegBox',
        }}
        firstSubItem={{
          title: '生酮沙拉',
          price: 130,
          photo: ketogenicSalad,
          linkTo: '/bento/13',
        }}
        secondSubItem={{
          title: '均衡蛋白質沙拉',
          price: 150,
          photo: eggSalad,
          linkTo: '/bento/16',
        }}
        thirdSubItem={{
          title: '肌肉UPUP(增肌)沙拉',
          price: 170,
          photo: muscleSalad,
          linkTo: '/bento/15',
        }}
        fourthSubItem={{
          title: '蒜烤鮭魚沙拉',
          price: 150,
          photo: salmonSalad,
          linkTo: '/bento/14',
        }}
        bottomLink={{ linkTo: '/productListSalad', text: '美味沙拉' }}
      />
      <JessMenuD />
      <ToTop />
    </>
  );
}

export default withRouter(JessMenu);
