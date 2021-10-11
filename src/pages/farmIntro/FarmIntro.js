// React
import React from 'react';

// Styles
import './styles/farmIntro.scss';
import './styles/farmIntroSchedule.scss';
import './styles/farmIntroDetail.scss';
import './styles/farmIntroAddress.scss';
import './styles/farmIntroNavBtn.scss';
import './styles/farmIntroRecommend.scss';
import styled from 'styled-components/macro';
import { lightBeige } from 'variable/variable';

// Images
import farmIntro01 from 'assets/jpg/farmIntro01.jpg';
import farmIntro02 from 'assets/jpg/farmIntro02.jpg';
import farmIntro03 from 'assets/jpg//farmIntro03.jpg';
import farmIntro04 from 'assets/jpg/farmIntro04.jpg';
import Schedule1 from 'assets/jpg/farm-intro-schedule-1.jpg';
import Schedule2 from 'assets/jpg/farm-intro-schedule-2.jpg';
import Schedule3 from 'assets/jpg/farm-intro-schedule-3.jpg';
import Schedule4 from 'assets/jpg/farm-intro-schedule-4.jpg';
import Rice from 'assets/svg/rice.svg';
import Home from 'assets/svg/home.svg';
import GRice from 'assets/svg/farm-intro-green-rice.svg'
import Taiwan from 'assets/png/taiwan.png';
import Bento from 'assets/png/bento.png';
import Vegs from 'assets/png/vegs.png';
import { Link } from 'react-router-dom';
import Wave from 'assets/svg/wave.svg';

// Components
import ScrollButtonGreen from '../../Share/Components/ToTopButton/ScrollButtonGreen';
import FarmIntroText from 'components/farmIntroText/FarmIntroText';
import FarmIntroCard from 'components/farmIntroCard/FarmIntroCard';
import ImageSlider from 'components/imageSlider/ImageSlider';
import FarmIntroDetailSlider from 'components/farmIntroDetailSlider/FarmIntroDetailSlider';
import FarmIntroDetailQuote from 'components/farmIntroDetailQuote/farmIntroDetailQuote';
import FarmIntroRecommendCard from 'components/farmIntroRecommendCard/FarmIntroRecommendCard';
import Button from 'components/optionButton/OptionButton';

const MainContent = styled.div`
  background-color: ${lightBeige};
  width: 100%;
`;

// Farm Address

const changeTextPublic = () => {
  document.getElementsByClassName('claudia-detailed-farm-adr-transport-text')[0].innerHTML =
    `<p>1. 捷運市政府站→轉小2路公車→白石湖社區同心池下車，即到農場。</p>
    <p>2. 捷運內湖站→下車步行至「成功路4段182巷口」（約160公尺）→轉小2路公車或小2路區間車→白石湖社區同心池下車，即抵農場。</p>`

}

const changeTextPrivate = () => {
  document.getElementsByClassName('claudia-detailed-farm-adr-transport-text')[0].innerHTML =
    `<p>1. 中山高速公路→成功交流道成功4段→金龍路→內湖路→碧山路</p>
    <p>2. 基隆路或市民大道→環東快速道路→舊宗路→民權東路 6段→成功路4段→金龍路→內湖路→碧山路</p>
    <p>3.中山北路→北安路→內湖路→碧山路</p>`
}

// Farm Recommend Card

const farmRecommendInfo = [
  {
    name: '荖阡坑教育實習農園',
    src: 'farm-intro-recommend-1',
    date: '2021/01/17（日）',
    price: '900元/1人',
    place: '台北車站',
    address: '台北市內湖區碧山路58-1號'
  },
  {
    name: '北新有機休閒農場',
    src: 'farm-intro-recommend-2',
    date: '2021/02/20（六）',
    price: '500元/1人',
    place: '捷運淡水站',
    address: '新北市淡水區忠寮里3-2號'
  },
  {
    name: '泰源幽谷農場',
    src: 'farm-intro-recommend-3',
    date: '2021/01/23（六）',
    price: '800元/1人',
    place: '台東火車站',
    address: '台東縣東河鄉台23省道入口'
  }
];

function ClaudiaFarmIntroPage(props) {
  const { handleCartNumber } = props;

  return (
    <>
      <MainContent>
        {/* Main Text */}
        <div className="claudia-detailed-background">
          <div className="claudia-detailed-background-image">
            <div className="claudia-detailed-text">
              <h1>
                <b>小小城市農夫</b>
              </h1>
              <h2>
                <b>內湖農驛有機農園</b>
              </h2>
            </div>
          </div>
        </div>
        <div className="claudia-detailed-maintext">
          <div className="claudia-detailed-maintext-container">
            <div className="claudia-detailed-maintext-left">
              <FarmIntroText />
            </div>
            <div className="claudia-detailed-maintext-right">
              <FarmIntroCard handleCartNumber={handleCartNumber} />
            </div>
          </div>
        </div>
        {/* Image Slider */}
        <div className="claudia-detailed-slider">
          <div className="claudia-detailed-slider-fixed-container">
            <img className="claudia-detailed-slider-ricebg" alt="" src={Rice} />
            <ImageSlider pic1={farmIntro01} pic2={farmIntro02} pic3={farmIntro03} pic4={farmIntro04}/>
          </div>
        </div>
        {/* Schedule */}
        <div className="claudia-detailed-schedule">
          <h1>
            <b>活動行程</b>
          </h1>
          <div className="claudia-detailed-schedule-container">
            <div className="claudia-detailed-schedule-timeline"></div>
            <div className="claudia-detailed-schedule-card1">
              <div className="claudia-detailed-schedule-card1-text">
                <h2>9:30</h2>
                <h3>有機農場五感體驗</h3>
              </div>
              <img className="claudia-img" alt="" src={Schedule1} />
            </div>
            <div className="claudia-detailed-schedule-card2">
              <div className="claudia-detailed-schedule-card2-text">
                <h2>11:00</h2>
                <h3>採有機草莓體驗</h3>
              </div>
              <img alt="" src={Schedule2} />
            </div>
            <div className="claudia-detailed-schedule-card3">
              <div className="claudia-detailed-schedule-card3-text">
                <h2>11:30</h2>
                <h3>草莓果醬/草莓湯圓/草莓鳳片福糕DIY</h3>
              </div>
              <img alt="" src={Schedule3} />
            </div>
            <div className="claudia-detailed-schedule-card4">
              <div className="claudia-detailed-schedule-card4-text">
                <h2>12:30</h2>
                <h3>草莓特色餐：蔬果捲</h3>
              </div>
              <img alt="" src={Schedule4} />
            </div>
            <div className="claudia-detailed-schedule-card5">
              <div className="claudia-detailed-schedule-card5-text">
                <h2>14:00 </h2>
                <h3>賦歸</h3>
              </div>
              <img alt="" src={Home} />
            </div>
          </div>
        </div>
        {/* Farm Detail */}
        <div className="claudia-detailed-farm-intro">
          <div className="claudia-detailed-farm-intro-fixed-container">
            <img className="claudia-detailed-farm-intro-grice" alt="" src={GRice} />
            <div className="claudia-detailed-farm-intro-container">
              <h1><b>認識農場</b></h1>
              <div className="claudia-detailed-farm-video">
                <iframe title="youtubevid" width="920" height="545" src="https://www.youtube.com/embed/5Jpbe1v1nJk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="claudia-detailed-farm-middle">
                <div className="claudia-detailed-farm-text">
                  <p>農驛有機農園園長游素精，種植草莓近30年，曾經獲得「十大傑出農­村青年」。游素精表示，農園內採用高架種植草莓的方式，比較通風，病蟲害比較少，相對農藥使用也會減量。此外，高架種植的草莓，也比較不怕雨水，下過雨後壞掉的果實比例會比較少。</p>
                  <p>游素精堅持自己農場的作物，一定要有生產履歷，消費者可以針對履歷上的QR code，得知草莓栽培過程，何時採收，何時包裝，讓消費者吃的安心。</p>
                </div>
                <FarmIntroDetailSlider />
              </div>
              <FarmIntroDetailQuote />
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="claudia-detailed-farm-adr" id="farm-adr">
          <h1><b>體驗地點</b></h1>
          <div className="claudia-detailed-farm-adr-container">
            <div className="claudia-detailed-farm-adr-info-container">
              <div className="claudia-detailed-farm-adr-info">
                <p>農場地址：台北市內湖區碧山路58-1號</p>
                <p>聯絡電話：0912-472-001</p>
                <iframe title="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.032376624603!2d121.58711061485543!3d25.100765341766156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442acfc16c4180b%3A0xac447d9596417f6a!2z6L6y6amb5qOn6L6y5aC0!5e0!3m2!1szh-TW!2stw!4v1603621745007!5m2!1szh-TW!2stw" width="560" height="460" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
          </div>
            <div className="claudia-detailed-farm-adr-transport">
              <div className="claudia-detailed-farm-adr-transport-container">
                <div className="claudia-detailed-farm-adr-transport-buttons">
                  <div className="claudia-detailed-farm-adr-transport-buttons-i"
                      onClick={changeTextPublic}>
                      <Button className="button-btn-g" text="大眾運輸" />
                  </div>
                  <div className="claudia-detailed-farm-adr-transport-buttons-i"
                      onClick={changeTextPrivate}>
                      <Button className="button-btn-g" text="開車前往" />
                  </div>
                </div>
                <div className="claudia-detailed-farm-adr-transport-text">
                  <p>1. 捷運市政府站→轉小2路公車→白石湖社區同心池下車，即到農場。</p>
                  <p>2. 捷運內湖站→下車步行至「成功路4段182巷口」（約160公尺）→轉小2路公車或小2路區間車→白石湖社區同心池下車，即抵農場。</p>
                  {/* <p>1. 中山高速公路→成功交流道成功4段→金龍路→內湖路→碧山路</p>
                  <p>2. 基隆路或市民大道→環東快速道路→舊宗路→民權東路 6段→成功路4段→金龍路→內湖路→碧山路</p>
                  <p>3.中山北路→北安路→內湖路→碧山路</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="claudia-detailed-nav-buttons-outside">
          <div className="claudia-detailed-nav-buttons">
            <div className="claudia-detailed-nav-buttons-container">
              <a href="#signup">
                <div className="claudia-detailed-nav-button1"><Button className="button-btn-g" text="點我報名" /></div>
              </a>
              <h1>沒有要參加這個活動嗎？</h1>
              <div className="claudia-detailed-nav-buttons-area">
                <div className="claudia-detailed-nav-buttons-box">
                  <div className="claudia-detailed-nav-buttons-icons"><img className="claudia-taiwan" alt="taiwan" src={Taiwan} /></div>
                  <Link to="/farm">
                      <div className="claudia-detailed-nav-button2"><Button className="button-btn-g" text="回小農地圖" /></div>
                  </Link>
                </div>
                <div className="claudia-detailed-nav-buttons-box">
                  <div className="claudia-detailed-nav-buttons-icons"><img alt="bento" src={Bento} /></div>
                  <Link to="/productList">
                      <div className="claudia-detailed-nav-button2"><Button className="button-btn-g" text="我想訂便當" /></div>
                  </Link>
                </div>
                <div className="claudia-detailed-nav-buttons-box">
                  <div className="claudia-detailed-nav-buttons-icons"><img alt="vegs" src={Vegs} /></div>
                  <Link to="/vegBox">
                      <div className="claudia-detailed-nav-button2"><Button className="button-btn-g" text="我想訂蔬菜箱" /></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Farm Recommend */}
        <div className="claudia-detailed-recommanded">
        <div className="claudia-detailed-recommanded-container">
          <h1>
            <b>更多推薦</b>
          </h1>
          <div className="claudia-detailed-recommanded-card-container">
            {farmRecommendInfo.map(farm => {
              return(
                <FarmIntroRecommendCard 
                  name={farm.name}
                  src={farm.src}
                  date={farm.date}
                  price={farm.price}
                  place={farm.place}
                  address={farm.address}/>
                )
              })
            }
          </div>
        </div>
        <div className="claudia-detailed-recommanded-wave-bg">
          <img
            className="claudia-detailed-recommanded-wave"
            alt=""
            src={Wave}
          />
        </div>
      </div>
      </MainContent>
      <ScrollButtonGreen />
    </>
  );
}

export default ClaudiaFarmIntroPage;
