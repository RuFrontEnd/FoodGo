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
import Avatar from 'assets/jpg/farm-intro-avatar.jpg';
import Farm1 from 'assets/jpg/farm-intro-farm-1.jpg';
import Farm2 from 'assets/jpg/farm-intro-farm-2.jpg';
import Farm3 from 'assets/jpg/farm-intro-farm-3.jpg';
import GRice from 'assets/svg/farm-intro-green-rice.svg'
import QLeft from 'assets/svg/farm-intro-quote-left.svg';
import QRight from 'assets/svg/farm-intro-quote-right.svg';
import Taiwan from 'assets/png/taiwan.png';
import Bento from 'assets/png/bento.png';
import Vegs from 'assets/png/vegs.png';
import { Link } from 'react-router-dom';
import RecommendFarm1 from 'assets/jpg/farm-intro-recommend-1.jpg';
import RecommendFarm2 from 'assets/jpg/farm-intro-recommend-2.jpg';
import RecommendFarm3 from 'assets/jpg/farm-intro-recommend-3.jpg';
import Wave from 'components/farmIntroRecommend/Images/SVG/wave.svg';

// Components
import ScrollButtonGreen from '../../Share/Components/ToTopButton/ScrollButtonGreen';
import FromIntroText from 'components/farmIntroText/FarmIntroText';
import FarmDetailedCard from 'components/farmDetailCard/FarmDetailCard';
import ImageSlider from 'components/imageSlider/ImageSlider';
import Button from 'components/optionButton/OptionButton';

const MainContent = styled.div`
  background-color: ${lightBeige};
  width: 100%;
`;

// Farm Detail
const changeImage = (e) => {

  //change color to green
  const selectedSliderBar = e.target
  console.log('slider-bar', e.target);
  e.target.style.backgroundColor = '#66AB8C';
  console.log('container', document.getElementsByClassName('claudia-detailed-farm-silder-img-container')[0])

  //find siblings

  const getSiblings = function (e) {
    let siblings = [];

    if (!e.parentNode) {
        return siblings;
    }

    let sibling = e.parentNode.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
  }

  let siblings = getSiblings(selectedSliderBar);
  console.log('siblings', siblings);

  siblings.forEach(el => {
      console.log('element', el);
      el.style.backgroundColor = '#fff';
  });

  //find index

  const child = e.target;
  const parent = child.parentNode;
  console.log('child', child);
  console.log('parent', parent);
  //0, 1, 2
  const index = Array.prototype.indexOf.call(parent.children, child);
  console.log('index', index);

  //change image
  document.getElementsByClassName('claudia-detailed-farm-silder-img-container')[0].style.right = `${index * 425}px`;
}

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
              <FromIntroText />
            </div>
            <div className="claudia-detailed-maintext-right">
              <FarmDetailedCard handleCartNumber={handleCartNumber} />
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
        {/* Farm Intro */}
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
                <div className="claudia-detailed-farm-silder">
                  <div className="claudia-detailed-farm-silder-container">
                      <div onClick={changeImage} style={{ backgroundColor: '#66AB8C' }} className="claudia-detailed-farm-silder-bar"></div>
                      <div onClick={changeImage} className="claudia-detailed-farm-silder-bar"></div>
                      <div onClick={changeImage} className="claudia-detailed-farm-silder-bar"></div>
                  </div>
                  <div className="claudia-detailed-farm-silder-img-container">
                      <img alt="" src={Farm1} />
                      <img alt="" src={Farm2} />
                      <img alt="" src={Farm3} />
                  </div>
                </div>
              </div>
              <div className="claudia-detailed-farm-card">
                <div className="claudia-detailed-farmer-avatar">
                  <img alt="" src={Avatar} />
                </div>
                <div className="claudia-detailed-farm-card-quote">
                  <img className="claudia-detailed-farm-card-quote-left" alt="" src={QLeft} />
                  <h1><b>吃出幸福，也傳達生活態度</b></h1>
                  <img className="claudia-detailed-farm-card-quote-right" alt="" src={QRight} />
                  <h2>—農驛有機農園園長  游素精</h2>
                </div>
              </div>
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
            <div className="claudia-detailed-recommanded-card">
              <h2>荖阡坑教育實習農園</h2>
              <h2>一日遊</h2>
              <img alt="farm_recommanded" src={RecommendFarm1} />
              <h3>日期：2021/01/17（日）</h3>
              <h3>價錢：900元/1人</h3>
              <h3>集合地點：台北車站</h3>
              <h3>地址：台北市內湖區碧山路58-1號</h3>
            </div>
            <div className="claudia-detailed-recommanded-card">
              <h2>北新有機休閒農場</h2>
              <h2>半日體驗</h2>
              <img alt="farm_recommanded" src={RecommendFarm2} />
              <h3>日期：2021/02/20（六）</h3>
              <h3>價錢：500元/1人</h3>
              <h3>集合地點：捷運淡水站</h3>
              <h3>地址：新北市淡水區忠寮里3-2號</h3>
            </div>
            <div className="claudia-detailed-recommanded-card">
              <h2>泰源幽谷農場</h2>
              <h2>——養生五色米</h2>
              <img alt="farm_recommanded" src={RecommendFarm3} />
              <h3>日期：2021/01/23（六）</h3>
              <h3>價錢：800元/1人</h3>
              <h3>集合地點：台東火車站</h3>
              <h3>地址：台東縣東河鄉台23省道入口</h3>
            </div>
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
