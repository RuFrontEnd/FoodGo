import React from 'react';
import styled from 'styled-components/macro';
import { lightBeige } from 'variable/variable';
import ClaudiaDetailedThemePic from '../Components/ClaudiaDetailedThemePic/ClaudiaDetailedThemePic';
import ClaudiaDetailedMainText from '../Components/ClaudiaDetailedMainText/ClaudiaDetailedMainText';
import ClaudiaDetailedSilder from '../Components/ClaudiaDetailedSilder/ClaudiaDetailedSilder';
import ClaudiaDetailedSchedule from '../Components/ClaudiaDetailedSchedule/ClaudiaDetailedSchedule';
import ClaudiaDetailedFarmIntro from '../Components/ClaudiaDetailedFarmIntro/ClaudiaDetailedFarmIntro';
import ClaudiaDetailedFarmAdr from '../Components/ClaudiaDetailedFarmAdr/ClaudiaDetailedFarmAdr';
import ClaudiaDetailedNavButtons from '../Components/ClaudiaDetailedNavButtons/ClaudiaDetailedNavButtons';
import ClaudiaDetailedRecommended from '../Components/ClaudiaDetailedRecommended/ClaudiaDetailedRecommended';
import ScrollButtonGreen from '../../Share/Components/ToTopButton/ScrollButtonGreen';

const MainContent = styled.div`
  background-color: ${lightBeige};
  width: 100%;
`;

function ClaudiaFarmIntroPage(props) {
  const { handleCartNumber } = props;

  return (
    <>
      <MainContent>
        <ClaudiaDetailedThemePic />
        <ClaudiaDetailedMainText handleCartNumber={handleCartNumber} />
        <ClaudiaDetailedSilder />
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
