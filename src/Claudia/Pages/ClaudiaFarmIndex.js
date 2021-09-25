import React from 'react';
import styled from 'styled-components/macro';
import { lightBeige } from 'variable/variable';
import { useSelector } from 'react-redux';
import 'pages/farm/farm.scss';
import farmImg from 'assets/jpg/farm.jpg';
import ClaudiaIndexContent from '../../Claudia/Components/ClaudiaIndexContent/ClaudiaIndexContent';
// import ScrollButtonGreen from '../../Share/Components/ToTopButton/ScrollButtonGreen'

const Container = styled.section`
  background-color: ${lightBeige};
  width: 100%;
`;

const Background = styled.div`
  background-image: url(${farmImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: ${(props) => `calc(100vh - ${props.navBarHeight}px)`};
  width: 100%;
  margin: 0px auto;
  position: relative;
`;

function ClaudiaFarmIndex() {
  const navBarHeight = useSelector((state) => state.navBar.height);
  console.log('navBarHeight', navBarHeight);
  return (
    <>
      <Container>
        <Background navBarHeight={navBarHeight}>
          <div className="claudia-index-text">
            <h1 className="claudia-index-text-1">
              <b>哈囉小農！</b>
            </h1>
            <h1 className="claudia-index-text-2">
              <b>一日農夫活動體驗</b>
            </h1>
          </div>
        </Background>
        <div className="claudia-induc-text">
          <div className="claudia-induc-text-container">
            <h3>
              <b>
                <span>點選想去的縣市，</span>開始探索你想造訪的農場吧！
              </b>
            </h3>
          </div>
        </div>
        <ClaudiaIndexContent />
      </Container>
      {/* <ScrollButtonGreen /> */}
    </>
  );
}

export default ClaudiaFarmIndex;
