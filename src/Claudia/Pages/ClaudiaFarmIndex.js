import React from 'react';
import styled from 'styled-components/macro';
import { lightBeige } from 'variable/variable';
import ClaudiaIndexThemePic from '../../Claudia/Components/ClaudiaIndexThemePic/ClaudiaIndexThemePic';
import ClaudiaIndexInducText from '../../Claudia/Components/ClaudiaIndexInducText/ClaudiaIndexInducText';
import ClaudiaIndexContent from '../../Claudia/Components/ClaudiaIndexContent/ClaudiaIndexContent';
// import ScrollButtonGreen from '../../Share/Components/ToTopButton/ScrollButtonGreen'

const MainContent = styled.div`
  background-color: ${lightBeige};
  width: 100%;
`;

function ClaudiaFarmIndex() {
  return (
    <>
      <MainContent>
        <ClaudiaIndexThemePic />
        <ClaudiaIndexInducText />
        <ClaudiaIndexContent />
      </MainContent>
      {/* <ScrollButtonGreen /> */}
    </>
  );
}

export default ClaudiaFarmIndex;
