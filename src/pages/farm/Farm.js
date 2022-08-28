import React, {useState} from 'react';
import styled from 'styled-components/macro';
import { lightBeige } from 'variable/variable';
import { useSelector } from 'react-redux';
import 'pages/farm/farm.scss';
import farmImg from 'assets/jpg/farm.jpg';
import FarmMap from 'components/farmMap/FarmMap';
import FarmCard from 'components/farmCard/FarmCard';
import FarmCardIntro from 'components/farmCardIntro/FarmCardIntro';
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

function Farm() {
  const [city, setCity] = useState('');
  const [imgNum, setImgNum] = useState('1');
  const [data, setData] = useState('');
  const [buttonNum, setButtonNum] = useState(0);
  const navBarHeight = useSelector((state) => state.navBar.height);
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
        <div className="claudia-index-content">
          <div className="claudia-index-content-fix-container">
            <div className="claudia-index-content-container">
              <div className="claudia-index-map">
                <FarmMap setCity={setCity} setData={setData} data={data} />
              </div>
              <FarmCard
                city={city}
                data={data}
                setButtonNum={setButtonNum}
                setImgNum={setImgNum}
              >
                <FarmCardIntro
                  city={city}
                  data={data}
                  imgNum={imgNum}
                  buttonNum={buttonNum}
                />
              </FarmCard>
            </div>
          </div>
        </div>
      </Container>
      {/* <ScrollButtonGreen /> */}
    </>
  );
}

export default Farm;
