import React from 'react';
import 'pages/farmIntro/farmIntro.scss';
import styled from 'styled-components/macro';
import { lightBeige } from 'variable/variable';
import farmIntro01 from 'assets/jpg/farmIntro01.jpg';
import farmIntro02 from 'assets/jpg/farmIntro02.jpg';
import farmIntro03 from 'assets/jpg//farmIntro03.jpg';
import farmIntro04 from 'assets/jpg/farmIntro04.jpg';
import ImageSlider from 'components/imageSlider/ImageSlider';
import ClaudiaDetailedSchedule from '../Components/ClaudiaDetailedSchedule/ClaudiaDetailedSchedule';
import ClaudiaDetailedFarmIntro from '../Components/ClaudiaDetailedFarmIntro/ClaudiaDetailedFarmIntro';
import ClaudiaDetailedFarmAdr from '../Components/ClaudiaDetailedFarmAdr/ClaudiaDetailedFarmAdr';
import ClaudiaDetailedNavButtons from '../Components/ClaudiaDetailedNavButtons/ClaudiaDetailedNavButtons';
import ClaudiaDetailedRecommended from '../Components/ClaudiaDetailedRecommended/ClaudiaDetailedRecommended';
import ScrollButtonGreen from '../../Share/Components/ToTopButton/ScrollButtonGreen';
import FromIntroText from 'components/farmIntroText/FarmIntroText';
import FarmDetailedCard from 'components/farmDetailCard/FarmDetailCard';

const MainContent = styled.div`
  background-color: ${lightBeige};
  width: 100%;
`;

function ClaudiaFarmIntroPage(props) {
  const { handleCartNumber } = props;

  return (
    <>
      <MainContent>
        <div className="claudia-detailed-background">
          <div className="claudia-detailed-background-image">
            <div className="claudia-detailed-text">
              <h1 className="claudia-detailed-text-1">
                <b>小小城市農夫</b>
              </h1>
              <h1 className="claudia-detailed-text-2">
                <b>內湖農驛有機農園</b>
              </h1>
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
        <ImageSlider pic1={farmIntro01} pic2={farmIntro02} pic3={farmIntro03} pic4={farmIntro04}/>
        <ClaudiaDetailedSchedule />
        <ClaudiaDetailedFarmIntro />
        <ClaudiaDetailedFarmAdr />
        <ClaudiaDetailedNavButtons />
        <ClaudiaDetailedRecommended />
      </MainContent>
      <ScrollButtonGreen />
    </>
  );
}

export default ClaudiaFarmIntroPage;
