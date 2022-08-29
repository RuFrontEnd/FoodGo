import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showNavBar } from 'redux/navBar/navBarActions'; // 判斷是否 login 的狀態
import 'pages/homePage/homePage.scss';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
import { Container } from 'react-bootstrap';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import titleLeft from 'assets/svg/titleLeft.svg';
import titleRight from 'assets/svg/titleRight.svg';
import titleLeftLight from 'assets/svg/titleLeft-light.svg';
import titleRightLight from 'assets/svg/titleRight-light.svg';
import recommend from 'assets/svg/recommend.svg';
import recommend2 from 'assets/svg/recommend2.svg';
import map1 from 'assets/svg/map1.svg';
import map2 from 'assets/svg/map2.svg';
import stepArrow from 'assets/svg/stepArrow.svg';
import starO from 'assets/svg/star-o.svg';
import event1 from 'assets/png/event1.png';
import event7 from 'assets/png/event7.png';
import event2 from 'assets/jpg/event2.jpg';
import event3 from 'assets/jpg/event3.jpg';
import event4 from 'assets/jpg/event4.jpg';
import event5 from 'assets/jpg/event5.jpg';
import event6 from 'assets/jpg/event6.jpg';
import farmerPhoto1 from 'assets/jpg/farmer1.jpg';
import farmerPhoto2 from 'assets/jpg/farmer2.jpg';
import articlePhoto1 from 'assets/jpg/article-img1.jpg';
import articlePhoto2 from 'assets/jpg/article-img2.jpg';
import articlePhoto3 from 'assets/jpg/article-img3.jpg';
import discountImage1 from 'assets/png/event1.png';
import discountImage7 from 'assets/png/event7.png';
import discountImage2 from 'assets/jpg/event2.jpg';
import discountImage3 from 'assets/jpg/event3.jpg';
import discountImage4 from 'assets/jpg/event4.jpg';
import discountImage5 from 'assets/jpg/event5.jpg';
import discountImage6 from 'assets/jpg/event6.jpg';
import stepImage1 from 'assets/svg/step1.svg';
import stepImage2 from 'assets/svg/step2.svg';
import stepImage3 from 'assets/svg/step3.svg';
import stepImage4 from 'assets/svg/step4.svg';
import stepImage5 from 'assets/svg/step5.svg';

import customVideo from 'assets/mp4/customFinalVideo.mp4';

import OptionButton from 'components/optionButton/OptionButton';
import ToToop from 'Share/Components/ToTopButton/ScrollButton';
import AreaTitle from 'components/areaTitle/AreaTitle';
import RecommendCard from 'components/recommendCard/RecommendCard';
import IntroCard from 'components/introCard/IntroCard';
import ArticleCard from 'components/articleCard/ArticleCard';
import DiscountCard from 'components/discountCard/DiscountCard';
import StepCircle from 'components/stepCircle/StepCircle';

const data = {
  台北市: {
    中正區: '500',
    大同區: '1000',
    中山區: '800',
    松山區: '500',
    大安區: '500',
    萬華區: '1000',
    信義區: '500',
    士林區: '2000',
    北投區: '2500',
    內湖區: '800',
    南港區: '500',
    文山區: '1000',
  },
  新北市: {
    板橋區: '1000',
    汐止區: '500',
    永和區: '800',
    中和區: '1000',
    三重區: '1500',
  },
};

const MultiCarouselResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 1920, min: 1199.99 },
    items: 5,
  },
  largeDesktop: {
    breakpoint: { max: 1199.98, min: 991.99 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 991.98, min: 767.99 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 767.98, min: 575.99 },
    items: 2,
  },
  mobile: { breakpoint: { max: 575.98, min: 479.99 }, items: 2 },
  phone: { breakpoint: { max: 479.98, min: 0 }, items: 1 },
};

const DiscountCardPaddings = [
  { breakpoint: { max: 991.98, min: 767.99 }, paddingHorizental: 20 },
];

const stepCircleResponsive = [
  { breakpoint: { max: 991.98, min: 767.99 }, svgSize: 100, fontSize: 18 },
];

const datacountries = Object.getOwnPropertyNames(data);
// console.log('datacountries:', datacountries)
const datatownships = datacountries.map((v, i, array) =>
  Object.getOwnPropertyNames(data[array[i]])
);
// console.log('datacountries:', datatownships)
const dataprice = datacountries.map((v, i, array) =>
  Object.values(data[array[i]])
);

function HomePage(props) {
  const {
    county,
    setCounty,
    township,
    setTownship,
    address,
    setAddress,
  } = props;
  const $featureContainer = useRef();
  const $featureCircle = useRef();
  const $featureDot = useRef();
  const $homePageCircles = useRef();
  const $featureTriangle = useRef();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(-1);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isFarmerFeatureActive, setIsFarmerFeatureActive] = useState(true);
  const [isDietFeatureActive, setIsDietFeatureActive] = useState(false);
  const [isChoicesFeatureActive, setIsChoicesFeatureActive] = useState(false);
  const [isNetworkFeatureActive, setIsNetworkFeatureActive] = useState(false);
  const [isKcalFeatureActive, setIsKcalFeatureActive] = useState(false);
  const [featureTriangleClassName, setFeatureTriangleClassName] = useState(
    'homePage-index-feature-triangle-active-farmer'
  );
  const [showDiscountCard, setShowDiscountCard] = useState('discountCard-1');

  useEffect(() => {
    dispatch(showNavBar(true));
  }, []);

  // 品牌特色切換
  const switchFeatureArea = (e) => {
    console.log(e.target.id);
    setIsFarmerFeatureActive(false);
    setIsDietFeatureActive(false);
    setIsChoicesFeatureActive(false);
    setIsNetworkFeatureActive(false);
    setIsKcalFeatureActive(false);
    if (e.target.id === 'homePage-farmer-icon') {
      setIsFarmerFeatureActive(true);
      setFeatureTriangleClassName(
        'homePage-index-feature-triangle-active-farmer'
      );
      return;
    }
    if (e.target.id === 'homePage-diet-icon') {
      setIsDietFeatureActive(true);
      setFeatureTriangleClassName(
        'homePage-index-feature-triangle-active-diet'
      );
      return;
    }
    if (e.target.id === 'homePage-choices-icon') {
      setFeatureTriangleClassName(
        'homePage-index-feature-triangle-active-choices'
      );
      return setIsChoicesFeatureActive(true);
    }
    if (e.target.id === 'homePage-network-icon') {
      setFeatureTriangleClassName(
        'homePage-index-feature-triangle-active-network'
      );
      return setIsNetworkFeatureActive(true);
    }
    if (e.target.id === 'homePage-kcal-icon') {
      setFeatureTriangleClassName(
        'homePage-index-feature-triangle-active-kcal'
      );
      return setIsKcalFeatureActive(true);
    }
  };

  //監聽應用程式滾動
  function downloadIcon() {
    const downloadArea = document.querySelector('#homePage-download-wrap');
    const info = document.querySelector('#homePage-app-info');
    const downloadIcon = document.querySelector('#homePage-col-download');
    const janAppIcon = document.querySelector('#homePage-app-logo');
    if (window.scrollY > 0.1 && downloadArea && info && downloadIcon) {
      downloadArea.style = 'left:-6rem;transition:0.5s';
      info.style = 'display:none;transition:0.5s';
      downloadIcon.style = 'display:block;transition:0.5s';
      janAppIcon.style = 'visibility: hidden';
    }
    if (window.scrollY === 0 && downloadArea && info && downloadIcon) {
      downloadArea.style = 'left:5rem;transition:0.5s';
      info.style = 'display:block;transition:0.5s';
      downloadIcon.style = 'display:none;transition:0.5s';
      janAppIcon.style = 'visibility: visible;transition:0.5s';
    }
    if (downloadArea && info && downloadIcon) {
      downloadIcon.addEventListener('click', () => {
        downloadArea.style = 'left:5rem;transition:0.5s';
        info.style = 'display:block;transition:0.5s';
        downloadIcon.style = 'display:none;transition:0.5s';
        janAppIcon.style = 'visibility: visible;transition:0.5s';
      });
    }
  }
  window.addEventListener('scroll', downloadIcon);

  //活動牆
  const handleShowDiscountCard = (e) => {
    const clickId = e.target.id.replace('homePage-', '');
    setShowDiscountCard(clickId);
  };

  //地圖顯示外送金額及自取門市
  const hideInfo = () => {
    document.querySelector('.homePage-map-results').style =
      'visibility: hidden';
  };
  const showInfo = () => {
    document.querySelector('.homePage-map-results').style =
      'visibility: visible';
  };

  const scrollToFeature = () => {
    const navBarHeight = 100;
    window.scrollTo({
      top: $featureContainer.current.offsetTop - navBarHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  // window.addEventListener('scroll', (e) => {
  //   console.log(window.scrollY);
  // });

  return (
    <>
      {/* 輪播牆 */}
      <section
        id="homePage-carousel-container"
        className="container-fluid homePage-p0"
      >
        <div id="homePage-carousel-wrap" className="position-relative">
          <Carousel autoplay>
            <div>
              <div className="homepage-banner-wrap">
                <div
                  id="homePage-banner1"
                  className="homePage-banner d-flex flex-column align-items-center"
                >
                  <div id="homePage-fresh"></div>
                  <div id="homePage-health"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="homepage-banner-wrap">
                <div
                  id="homePage-banner2"
                  className="homePage-banner d-flex flex-column align-items-center"
                ></div>
              </div>
            </div>
            <div>
              <div className="homepage-banner-wrap">
                <div id="homePage-banner3" className="homePage-banner"></div>
              </div>
            </div>
            <div>
              <div className="homepage-banner-wrap">
                <div id="homePage-banner4" className="homePage-banner"></div>
              </div>
            </div>
          </Carousel>
          {/* 應用程式下載 */}
          {/* 橘底 */}
          <div
            id="homePage-download-wrap"
            className="position-fixed d-flex justify-content-center"
          >
            {/* AppLogo＋應用程式icon */}
            <div id="homePage-app-logo"></div>
            <div id="homePage-app-info">
              <p className="mt-1">點擊此處下載應用程式</p>
              <div className="homePage-download-buttonsm d-flex justify-content-center">
                <div id="homePage-ios" className="mr-3"></div>
                <div id="homePage-android"></div>
              </div>
            </div>
            <div id="homePage-col-download"></div>
          </div>
          {/* 滾動提示 */}
          <a
            onClick={scrollToFeature}
            id="homePage-mouse-wrap"
            className="position-absolute"
          >
            <button id="homePage-mouse"></button>
            <div id="homePage-mouse-arrow"></div>
          </a>
          {/* 切換鈕 */}
        </div>
      </section>
      {/* 品牌特色*/}
      <section
        id="homePage-feature-container"
        className="container position-relative"
        ref={$featureContainer}
      >
        <div
          id="homePage-feature-wrap"
          className="row d-flex flex-column align-items-center justify-content-space-between"
        >
          <AreaTitle
            title="品牌特色"
            className={'homePage-areaTitle'}
          ></AreaTitle>
          {/* circles */}
          <div
            id="homePage-feature-circles"
            className="d-flex justify-content-around align-items-center"
            ref={$homePageCircles}
          >
            {/* circle1 */}
            <div
              className="homePage-feature-circle d-flex flex-wrap justify-content-center align-items-center"
              ref={$featureCircle}
            >
              <div
                onClick={(e) => {
                  switchFeatureArea(e);
                }}
                id={
                  isFarmerFeatureActive
                    ? 'homePage-farmer-icon-active'
                    : 'homePage-farmer-icon'
                }
                className="homePage-feature-icon"
              ></div>
              <p className="homePage-circle-title">在地小農</p>
            </div>
            <div
              className="homePage-index-feature-smcircle"
              ref={$featureDot}
            ></div>
            {/* circle2 */}
            <div className="homePage-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div
                onClick={(e) => {
                  switchFeatureArea(e);
                }}
                id={
                  isDietFeatureActive
                    ? 'homePage-diet-icon-active'
                    : 'homePage-diet-icon'
                }
                className="homePage-feature-icon"
              ></div>
              <p className="homePage-circle-title">產銷履歷</p>
            </div>
            <div className="homePage-index-feature-smcircle"></div>
            {/* circle3 */}
            <div className="homePage-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div
                onClick={(e) => {
                  switchFeatureArea(e);
                }}
                id={
                  isChoicesFeatureActive
                    ? 'homePage-choices-icon-active'
                    : 'homePage-choices-icon'
                }
                className={'homePage-feature-icon'}
              ></div>
              <p
                id="homePage-circle-title-customize"
                className="homePage-circle-title"
              >
                客製化便當
              </p>
            </div>
            <div className="homePage-index-feature-smcircle"></div>
            {/* circle4 */}
            {/* <div className="homePage-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div
                onClick={(e) => {
                  switchFeatureArea(e);
                }}
                id={
                  isNetworkFeatureActive
                    ? 'homePage-network-icon-active'
                    : 'homePage-network-icon'
                }
                className={'homePage-feature-icon'}
              ></div>
              <p className="homePage-circle-title">揪團訂購</p>
            </div>
            <div className="homePage-index-feature-smcircle"></div> */}
            {/* circle5 */}
            <div className="homePage-feature-circle d-flex flex-wrap justify-content-center align-items-center">
              <div
                onClick={(e) => {
                  switchFeatureArea(e);
                }}
                id={
                  isKcalFeatureActive
                    ? 'homePage-kcal-icon-active'
                    : 'homePage-kcal-icon'
                }
                className={'homePage-feature-icon'}
              ></div>
              <p className="homePage-circle-title">營養標示</p>
            </div>
          </div>
        </div>
        {/* <div
          className={`homePage-index-feature-triangle position-absolute ${featureTriangleClassName}`}
          ref={$featureTriangle}
        ></div> */}
      </section>
      {/* intros */}
      <section
        id="homePage-intro-container"
        className="container-fluid homePage-p0"
      >
        {/* 在地小農 */}
        <div
          className={`container homePage-intro-wrap homePage-intro ${
            isFarmerFeatureActive && 'homePage-intro-active'
          }`}
        >
          {/* 介紹欄位 */}
          <div>
            <div
              id="homePage-intro-title-1"
              className="homePage-intro-title"
            ></div>
            <div className="homePage-intro-text mt-5">
              <p>嚴選在地農產品</p>
              <p>透過小農地圖</p>
              <p
                id="homePage-intro-large-text-green"
                className="homePage-intro-large-text"
              >
                "拾餐"帶你從餐桌看見台灣
              </p>
              <p>走訪這些在地小農</p>
              <p>打開感官體驗</p>
              <p>拾餐也提供蔬菜箱寄送</p>
              <p>給想自己料理的你</p>
              <p>不用出門也能品嘗到安心的美味</p>
            </div>
            <OptionButton
              className={'homePage-index-button  float-right mt-3'}
              type={'green'}
              text={'小農地圖'}
              routes={'/farm'}
            />
          </div>
          {/* 小農欄位 */}
          <div id="homePage-intro1-cards" className="p-5">
            <IntroCard
              className={'homePage-IntroCard-1'}
              photo={farmerPhoto1}
              title={'萱草園．農友張武增'}
              content={
                '張武增張大哥，生於花蓮赤柯山田地保育山羌，通過綠色保育標章「安心金針」甘甜風味受好評 友善耕種，堅持不使用農藥、化肥熱風烘乾，堅持提供無硫金針。'
              }
            />
            <IntroCard
              photo={farmerPhoto2}
              title={'青翠園有機農場・農友莊翠蘭'}
              content={
                '堅持至今的信念是個好：「對自己身體好，對消費者的身體好，對土地好，對天地萬物好」。 她的心願是，「如果土地會說話，希望他們會說：『嗯，我很舒服』， 這樣就太好了！」'
              }
            />
          </div>
        </div>
        {/* 產銷履歷 */}
        <div
          className={`container homePage-intro-wrap homePage-intro ${
            isDietFeatureActive && 'homePage-intro-active'
          }`}
        >
          <div>
            <div
              id="homePage-intro-title-2"
              className="homePage-intro-title"
            ></div>
            <div className="homePage-intro-text mt-5">
              <p>農產品產銷履歷制度</p>
              <p>是一種農產品從農場到餐桌</p>
              <p>在生產、加工、運輸、銷售過程</p>
              <p>完整記錄的安心保證制度</p>
              <p>具備可追溯生產者或加工者之資訊</p>
              <p className="homePage-intro-large-text">對於健康的把關</p>
              <p className="homePage-intro-large-text">"拾餐"總是比你更在意</p>
            </div>
            <OptionButton
              className={'homePage-index-button  float-right mt-3'}
              type={'origin'}
              text={'商品列表'}
              routes={'/productList'}
            />
          </div>
          <div id="homePage-intro-card-2" className="homePage-intro-card"></div>
        </div>
        {/* 客製化便當 */}
        <div
          className={`container homePage-intro homePage-intro-wrap homePage-intro3-container ${
            isChoicesFeatureActive && 'homePage-intro-active'
          }`}
        >
          <div>
            <div
              id="homePage-intro-title-3"
              className="homePage-intro-title"
            ></div>
            <div className="homePage-intro-text mt-5">
              <p>親愛的，是不是有那些日子，看著菜單卻覺得無從下手，</p>
              <p>想吃照燒雞肉配玉米炒蛋，</p>
              <p>可偏偏照燒雞肉的配菜卻是最討厭的菜色呢？</p>
              <p>照過來，照過來!</p>
              <p className="homePage-intro-large-text">"拾餐"客製化便當</p>
              <p>幫你實現午餐到晚餐的美味想法；</p>
              <p>自由組合，隨心搭配，</p>
              <p>別再讓你的想法受限於制式的菜單上了！</p>
            </div>
            <OptionButton
              className={'homePage-index-button float-right mt-3'}
              type={'origin'}
              text={'客製化便當'}
              routes={'/productList'}
            />
          </div>
          <div className="homePage-intro-card">
            <video
              id="homePage-intro-video"
              preload="auto"
              loop="true"
              autoplay="autoplay"
              muted="true"
            >
              <source src={customVideo} type="video/mp4"></source>
            </video>
          </div>
        </div>
        {/* 揪團訂購 */}
        {/* <div
          className={`container homePage-intro-wrap homePage-intro ${
            isNetworkFeatureActive && 'homePage-intro-active'
          }`}
        >
          <div>
            <div
              id="homePage-intro-title-4"
              className="homePage-intro-title"
            ></div>
            <div className="homePage-intro-text mt-5">
              <p>"拾餐"讓您和您的親朋好友更容易揪團</p>
              <p>您不需要為了訂哪一種口味的餐點</p>
              <p>而在費心的喬團友了</p>
              <p>有了點餐網址從此輕鬆選餐</p>
              <p>分開結帳功能</p>
              <p>團主不再為收錢煩惱</p>
              <p className="homePage-intro-large-text">
                快來享受ㄧ站購足的訂餐便利吧！
              </p>
            </div>
            <OptionButton
              className={'homePage-index-button float-right mt-3'}
              type={'origin'}
              text={'作伙揪團'}
              routes={'/groupOrder/groupOrderCreate'}
            />
          </div>
          <div id="homePage-intro-card-4" className="homePage-intro-card"></div>
        </div> */}
        {/* 營養標示 */}
        <div
          className={`container homePage-intro-wrap homePage-intro ${
            isKcalFeatureActive && 'homePage-intro-active'
          }`}
        >
          <div>
            <div
              id="homePage-intro-title-5"
              className="homePage-intro-title"
            ></div>
            <div className="homePage-intro-text mt-5">
              <p>以均衡飲食為設計基礎</p>
              <p>除了注重食材來源</p>
              <p>更考量餐點製備及供餐過程等多方面的衛生安全</p>
              <p className="homePage-intro-large-text">當日料理、供應</p>
              <p>以提供較多完整的營養素</p>
              <p>避免過多添加物以及鹽份的攝取</p>
              <p>希望吃出食物的原味及新鮮味</p>
              <p>更能夠吃進健康</p>
            </div>
            <OptionButton
              className={'homePage-index-button  float-right mt-3'}
              type={'origin'}
              text={'商品列表'}
              routes={'/productList'}
            />
          </div>
          <div id="homePage-intro-card-5" className="homePage-intro-card"></div>
        </div>
      </section>
      {/* 今日推薦 */}
      <section className="container-fluid homePage-p0 homePage-recommend-container">
        <div className="container homePage-recommend-wrap d-flex flex-column">
          <div className="flex-column homePage-p0">
            {/* 今日推薦 */}
            <div className="row col-10 col-sm-12 col-md-10 col-lg-8 m-auto">
              <img alt="" src={recommend} />
            </div>
          </div>
          {/* 商品卡片 */}
          <div
            id="homePage-recommend-card-container"
            className="mt-5 homePage-recommend-cards"
          >
            <div
              id="homePage-recommend-card-wrap"
              className="d-flex justify-content-between"
            >
              {/* <Card1 /> */}
              <RecommendCard
                className={'homePage-recommend-card'}
                linkTo={'/bento/1'}
                instruction={
                  '簡單卻迷人的迷迭香風味，經過真空舒肥的肉質軟嫩又Juicy，特別加入研磨風乾大蒜，濃郁香氣，清爽不膩。'
                }
                productName={'中歐香料嫩雞胸'}
                starCounts={5}
                commentCounts={232}
                buyCounts={250}
              ></RecommendCard>
              {/* <Card2 /> */}
              <RecommendCard
                className={'homePage-recommend-card'}
                linkTo={'/bento/3'}
                instruction={
                  '只用些許香料，黑胡椒昇華鮮蝦甜味，火烤逼出濃郁鮮味，淋上新鮮萊姆汁，不用剝殼，爽脆口感，忍不住一隻接一隻！'
                }
                productName={'熱帶火烤萊姆蝦'}
                starCounts={5}
                commentCounts={232}
                buyCounts={250}
              ></RecommendCard>
              <RecommendCard
                className={'homePage-recommend-card'}
                linkTo={'/bento/4'}
                instruction={
                  '均勻抹上日本發酵鹽麴醃製，軟化肉質並提出松阪豬本身鮮甜味，慢熟幾小時才噴火烤出香氣，又香又嫩，不同於一般松阪豬，柔嫩而彈牙，一吃上癮！'
                }
                productName={'麴塩五香松阪豬'}
                starCounts={5}
                commentCounts={232}
                buyCounts={250}
              ></RecommendCard>
              {/* Card3 */}
            </div>
          </div>
          {/* 商品列表按鈕 */}
          <OptionButton
            id={'homePage-recommend-button'}
            className="homePage-index-button"
            type={'origin'}
            text={'商品列表'}
            routes={'/productList'}
          />
        </div>
      </section>
      {/* 專屬優惠 */}
      <section
        id="homePage-discount-container"
        className="container-fluid homePage-p0"
      >
        <div id="homePage-discount-wrap" className="container">
          <div
            id="homePage-discount-area"
            className="homePage-p0  d-flex flex-column justify-content-center"
          >
            <AreaTitle
              title="專屬優惠"
              className={'homePage-areaTitle'}
            ></AreaTitle>
            <div
              id="homePage-DiscountCards"
              className="col-12 d-flex justify-content-center"
            >
              {showDiscountCard === 'discountCard-1' && (
                <DiscountCard
                  className={'homePage-DiscountCard'}
                  image={discountImage1}
                  title={'現在訂購'}
                  viceTitle={'就送 Blender Bottle 搖搖杯'}
                  date={'2020.11.1~2020.12.31'}
                  linkTo={'/productList'}
                  responsivePaddings={DiscountCardPaddings}
                  StraightMode={{ width: 767.99 }}
                >
                  <p>環保，才是歷久不衰的流行。</p>
                  <p>現在訂購，就送Blender Bottle搖搖杯</p>
                  <p>你可以這樣做，輕鬆拿到限量搖搖杯！</p>
                  <p>訂20個 期間限定百元餐盒</p>
                  <p>包兩週 外送宅配到公司</p>
                </DiscountCard>
              )}
              {showDiscountCard === 'discountCard-2' && (
                <DiscountCard
                  className={'homePage-DiscountCard'}
                  image={discountImage2}
                  title={'火熱上架！'}
                  viceTitle={'下週百元餐盒，三天、三種限定主菜！'}
                  date={'2020.11.1~2020.12.31'}
                  linkTo={'/productList'}
                  textClassName={'homePage-discountCard-text-padding'}
                  responsivePaddings={DiscountCardPaddings}
                  StraightMode={{ width: 767.99 }}
                >
                  <p>下週百元餐盒，三天、三種限定主菜！</p>
                  <p>蒜泥厲害豬五花、海灘慢烤味噌魚、海灘橄欖油蔥雞腿</p>
                  <p>
                    餐盒使用低GI糙米紫米飯、新鮮季節時蔬、超甜66號地瓜、輕滷蛋
                  </p>
                  <p>吃午餐再也不是負擔</p>
                  <p>血糖不會驟升陡降、下午不再昏昏欲睡</p>
                </DiscountCard>
              )}
              {showDiscountCard === 'discountCard-3' && (
                <DiscountCard
                  className={'homePage-DiscountCard'}
                  image={discountImage3}
                  title={'網購消費'}
                  viceTitle={'指定品項滿額享優惠'}
                  date={'2020.11.1~2020.12.31'}
                  linkTo={'/productList'}
                  textClassName={'homePage-discountCard-text-padding'}
                  responsivePaddings={DiscountCardPaddings}
                  StraightMode={{ width: 767.99 }}
                >
                  <p>12/31前，網購消費指定品項滿$500元，回饋$100！</p>
                  <p>活動辦法：</p>
                  <p className="homePage-discountCard-text">
                    7/1起，於拾餐網站單筆消費指定品項滿$500元(常溫/冷凍/冷藏訂單分開計算)，即可獲得乙張$100電子優惠券，消費滿$2,500(含)以上，獲貳張$250電子優惠券。
                  </p>
                  <p>* 以線上結帳付款之訂單，需完成付款，訂單才算成立。</p>
                  <p>* 已取消之訂單，將失去本活動之資格。</p>
                </DiscountCard>
              )}
              {showDiscountCard === 'discountCard-4' && (
                <DiscountCard
                  className={'homePage-DiscountCard'}
                  image={discountImage4}
                  title={'網購消費'}
                  viceTitle={'指定品項滿額享優惠'}
                  date={'2020.11.1~2020.12.31'}
                  linkTo={'/productList'}
                  textClassName={'homePage-discountCard-text-padding'}
                  responsivePaddings={DiscountCardPaddings}
                  StraightMode={{ width: 767.99 }}
                >
                  <p>12/31前，網購消費指定品項滿$500元，回饋$100！</p>
                  <p>活動辦法：</p>
                  <p className="homePage-discountCard-text">
                    7/1起，於拾餐網站單筆消費指定品項滿$500元(常溫/冷凍/冷藏訂單分開計算)，即可獲得乙張$100電子優惠券，消費滿$2,500(含)以上，獲貳張$250電子優惠券。
                  </p>
                  <p>* 以線上結帳付款之訂單，需完成付款，訂單才算成立。</p>
                  <p>* 已取消之訂單，將失去本活動之資格。</p>
                </DiscountCard>
              )}
              {showDiscountCard === 'discountCard-5' && (
                <DiscountCard
                  className={'homePage-DiscountCard'}
                  image={discountImage5}
                  title={'網購消費'}
                  viceTitle={'指定品項滿額享優惠'}
                  date={'2020.11.1~2020.12.31'}
                  linkTo={'/productList'}
                  textClassName={'homePage-discountCard-text-padding'}
                  responsivePaddings={DiscountCardPaddings}
                  StraightMode={{ width: 767.99 }}
                >
                  <p>12/31前，網購消費指定品項滿$500元，回饋$100！</p>
                  <p>活動辦法：</p>
                  <p className="homePage-discountCard-text">
                    7/1起，於拾餐網站單筆消費指定品項滿$500元(常溫/冷凍/冷藏訂單分開計算)，即可獲得乙張$100電子優惠券，消費滿$2,500(含)以上，獲貳張$250電子優惠券。
                  </p>
                  <p>* 以線上結帳付款之訂單，需完成付款，訂單才算成立。</p>
                  <p>* 已取消之訂單，將失去本活動之資格。</p>
                </DiscountCard>
              )}
              {showDiscountCard === 'discountCard-6' && (
                <DiscountCard
                  className={'homePage-DiscountCard'}
                  image={discountImage6}
                  title={'網購消費'}
                  viceTitle={'指定品項滿額享優惠'}
                  date={'2020.11.1~2020.12.31'}
                  linkTo={'/productList'}
                  textClassName={'homePage-discountCard-text-padding'}
                  responsivePaddings={DiscountCardPaddings}
                  StraightMode={{ width: 767.99 }}
                >
                  <p>12/31前，網購消費指定品項滿$500元，回饋$100！</p>
                  <p>活動辦法：</p>
                  <p className="homePage-discountCard-text">
                    7/1起，於拾餐網站單筆消費指定品項滿$500元(常溫/冷凍/冷藏訂單分開計算)，即可獲得乙張$100電子優惠券，消費滿$2,500(含)以上，獲貳張$250電子優惠券。
                  </p>
                  <p>* 以線上結帳付款之訂單，需完成付款，訂單才算成立。</p>
                  <p>* 已取消之訂單，將失去本活動之資格。</p>
                </DiscountCard>
              )}
              {showDiscountCard === 'discountCard-7' && (
                <DiscountCard
                  className={'homePage-DiscountCard'}
                  image={discountImage7}
                  title={'網購消費'}
                  viceTitle={'指定品項滿額享優惠'}
                  date={'2020.11.1~2020.12.31'}
                  linkTo={'/productList'}
                  textClassName={'homePage-discountCard-text-padding'}
                  responsivePaddings={DiscountCardPaddings}
                  StraightMode={{ width: 767.99 }}
                >
                  <p>12/31前，網購消費指定品項滿$500元，回饋$100！</p>
                  <p>活動辦法：</p>
                  <p className="homePage-discountCard-text">
                    7/1起，於拾餐網站單筆消費指定品項滿$500元(常溫/冷凍/冷藏訂單分開計算)，即可獲得乙張$100電子優惠券，消費滿$2,500(含)以上，獲貳張$250電子優惠券。
                  </p>
                  <p>* 以線上結帳付款之訂單，需完成付款，訂單才算成立。</p>
                  <p>* 已取消之訂單，將失去本活動之資格。</p>
                </DiscountCard>
              )}
            </div>
            <div id="homePage-discount-BrainCarousel" className="mt-5">
              <MultiCarousel
                infinite={true}
                responsive={MultiCarouselResponsive}
              >
                <div className="img-row">
                  <img
                    alt=""
                    src={discountImage1}
                    id="homePage-discountCard-1"
                    onClick={handleShowDiscountCard}
                  />
                </div>
                <div className="img-row">
                  <img
                    alt=""
                    src={discountImage2}
                    id="homePage-discountCard-2"
                    onClick={handleShowDiscountCard}
                  />
                </div>
                <div className="img-row">
                  <img
                    alt=""
                    src={discountImage3}
                    id="homePage-discountCard-3"
                    onClick={handleShowDiscountCard}
                  />
                </div>
                <div className="img-row">
                  <img
                    alt=""
                    src={discountImage4}
                    id="homePage-discountCard-4"
                    onClick={handleShowDiscountCard}
                  />
                </div>
                <div className="img-row">
                  <img
                    alt=""
                    src={discountImage5}
                    id="homePage-discountCard-5"
                    onClick={handleShowDiscountCard}
                  />
                </div>
                <div className="img-row">
                  <img
                    alt=""
                    src={discountImage6}
                    id="homePage-discountCard-6"
                    onClick={handleShowDiscountCard}
                  />
                </div>
                <div className="img-row">
                  <img
                    alt=""
                    src={discountImage7}
                    id="homePage-discountCard-7"
                    onClick={handleShowDiscountCard}
                  />
                </div>
              </MultiCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* 購物流程 */}
      {/* 背景圖 */}
      <section className="container-fluid homePage-p0 homePage-shopping-process m-0">
        {/* 模糊效果 */}
        <div id="homePage-blur" className="d-flex align-items-center">
          {/* 黑灰文字區塊 */}
          <div className="homePage-p0 homePage-black-blur">
            <div className="d-flex justify-content-center align-items-center flex-column">
              {/* 購物流程標題-淺色 */}
              <AreaTitle
                title="購物流程"
                className={'homePage-step-areaTitle'}
                isLightMode={true}
              ></AreaTitle>
              {/* 五個步驟 */}
              <div
                id="homePage-steps"
                className="container homePage-p0 homePage-step-circle d-flex justify-content-between"
              >
                <StepCircle
                  img={stepImage1}
                  title={'選購商品'}
                  responsives={stepCircleResponsive}
                />
                <img className="homePage-stepArrow" src={stepArrow} />
                <StepCircle
                  img={stepImage2}
                  title={'加入購物車'}
                  responsives={stepCircleResponsive}
                />
                <img className="homePage-stepArrow" src={stepArrow} />
                <StepCircle
                  img={stepImage3}
                  title={'會員登入'}
                  responsives={stepCircleResponsive}
                />
                <img className="homePage-stepArrow" src={stepArrow} />
                <StepCircle
                  img={stepImage4}
                  title={'確認結帳'}
                  responsives={stepCircleResponsive}
                />
                <img className="homePage-stepArrow" src={stepArrow} />
                <StepCircle
                  img={stepImage5}
                  title={'領取餐點'}
                  responsives={stepCircleResponsive}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 地圖 */}
      {/* <section
        id="hamePage-map-container"
        className="container-fluid homePage-p0 homePage-map d-flex justify-content-center"
      > */}
      {/* 橘色底色 */}
      {/* <div id="homePage-map-form-bcc" className="container d-flex">
          <div className="flex-column homePage-map-form-wrap"> */}
      {/* 標題 */}
      {/* <div className="homepage-map-title">
              <img alt="" src={map1} />
              <br />
              <img alt="" src={map2} />
            </div> */}
      {/* 表單 */}
      {/* <div
              id="homePage-adress-form-wrap"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="homePage-form-wrap2 d-flex flex-column m-0">
                <div className="mb-4">
                  <form name="homePage-adress-form" id="homePage-adress-form">
                    <p className="homePage-form-announce">
                      只需請填寫完整地址，美味方便到手
                    </p>
                    <div className="homePage-adress-select">
                      <div className="iris-mainpage-select-wrapper d-flex">
                        <div className="iris-selectbar-wrapper">
                          <select
                            style={{ fontSize: '1.5rem' }}
                            className="form-control iris-mainpage-select"
                            id="exampleFormControlSelect1"
                            value={county}
                            onChange={(e) => {
                              //將字串轉成數字
                              // setCounty(+e.target.value);
                              //重置township的值
                              // setTownship(0)
                              // setTownship(-1);
                            }}
                            onClick={hideInfo}
                          >
                            <option value={-1}>點我選擇城市</option>
                            {datacountries.map((v, i) => (
                              <option key={i} value={i}>
                                {v}
                              </option>
                            ))}
                          </select>
                          <div className="iris-mainpage-whitebox"></div>
                          <div className="iris-mainpage-trianglearrow" />
                        </div>
                      </div>
                    </div>
                    <div className="homePage-adress-select">
                      <div className="iris-mainpage-select-wrapper d-flex">
                        <div className="iris-selectbar-wrapper">
                          <select
                            onClick={hideInfo}
                            value={township}
                            onChange={(e) => {
                              // 將字串轉成數字
                              setTownship(+e.target.value);
                            }}
                            style={{ fontSize: '1.5rem' }}
                            className="form-control iris-mainpage-select"
                            id="exampleFormControlSelect2"
                          >
                            <option value={-1}>點我選擇區域</option>
                            {county > -1 &&
                              datatownships[county].map((v, i) => (
                                <option key={i} value={i}>
                                  {v}
                                </option>
                              ))}
                          </select>
                          <div className="iris-mainpage-whitebox"></div>
                          <div className="iris-mainpage-trianglearrow" />
                        </div>
                      </div>
                    </div>
                    <div className="homePage-adress-input">
                      <input
                        style={{ fontSize: '1.5rem' }}
                        className="form-control iris-inputH50"
                        type="text"
                        placeholder="請輸入地址"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </form>
                  <OptionButton
                    className={'homePage-index-button float-right'}
                    type={'yellow'}
                    text={'確認地址'}
                    onClick={showInfo}
                  />
                </div>
                <div className="homePage-map-results mt-4">
                  <p>
                    所在地點，符合滿
                    <span className="homePage-price homePage-tabs-highlight"> */}
      {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
      {/* {county > -1 &&
                        township > -1 &&
                        dataprice[county][township]}
                    </span>
                    <span className="homePage-tabs-highlight">元</span>免運費
                  </p>
                  <p>
                    最近的自取地點是大安門市<span>（查看其他門市）</span>
                  </p>
                </div>
                <div className="homePage-map-buttons d-flex justify-content-between mt-4">
                  <OptionButton
                    className={'homePage-index-button float-right mt-3'}
                    type={'origin'}
                    text={'商品列表'}
                    routes={'/productList'}
                  />
                  <OptionButton
                    className={'homePage-index-button float-right mt-3'}
                    type={'origin'}
                    text={'揪團訂購'}
                    routes={'/groupOrder/groupOrderCreate'}
                  />
                </div>
              </div>
            </div>
          </div> */}

      {/* 地圖 */}
      {/* <div className="homePage-map-view">
            <iframe
              title="indexDataMap"
              src="https://plotdb.io/v/chart/27933"
              // width="816px"
              // height="550px"
              allowfullscreen="true"
              frameborder="0"
            ></iframe>
          </div> */}
      {/* </div>
      </section> */}
      {/* 好文推薦 */}
      <section className="container">
        <div id="homePage-article-wrap">
          {/* 標題 */}
          <AreaTitle
            title="好文推薦"
            className={'homePage-areaTitle'}
          ></AreaTitle>
          {/* 推薦文章卡片 */}
          <div id="homepage-articles" className="d-flex justify-content-around">
            <ArticleCard
              className={'homepage-articleCard'}
              photo={articlePhoto1}
              author={'Alice Yong'}
              content={
                '以前勤勞的時候天天煮低卡便當，但是發覺實在很累。兩個人的食材份量很難拿捏，還要採買、準備、收拾清潔，後來乾脆直接放棄。你們的出現真的是一大救星~低卡方便又超好吃，偶爾想下廚也有菜箱寄送服務，而且還看得到產銷履歷，真的讓人很安心！'
              }
            />
            <ArticleCard
              className={'homepage-articleCard'}
              photo={articlePhoto2}
              author={'小傑'}
              content={
                '我一直都有健身的習慣，也有在喝高蛋白，對於飲食基本上我沒有甚麼克制。很感謝你們讓我可以吃到健康吃不膩的水煮餐，真的滿適合健身的人吃！現在人太常外食吃高熱量、高油脂的食物造成身體負擔。但有了這樣的餐盒產生，就可以減少這一些麻煩了！'
              }
            />
            <ArticleCard
              className={'homepage-articleCard'}
              photo={articlePhoto3}
              author={'佳惠'}
              content={
                '拾餐的便當口味多變、熱量又低，而且配菜也會隨著主餐不同而有調整。主餐及配料調味剛剛好，不油不膩還減鹽少糖。另外他們的沙拉，也是很用心的料理！蔬菜新鮮、醬料好吃、配菜豐富！給出門在外工作上班上課的人提供了一份很健康的午餐！覺得很感恩！'
              }
            />
          </div>
        </div>
      </section>
      <ToToop />
    </>
  );
}

export default HomePage;
