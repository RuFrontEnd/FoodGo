import React, { useState } from 'react';
import './ClaudiaIndexContent.scss';
import FarmMap from 'components/farmMap/FarmMap';
import FarmCard from 'components/farmCard/FarmCard';
import FarmCardIntro from 'components/farmCardIntro/FarmCardIntro';

function ClaudiaIndexContent() {
  const [city, setCity] = useState('');
  const [imgNum, setImgNum] = useState('1');
  const [data, setData] = useState('');
  const [buttonNum, setButtonNum] = useState(0);

  return (
    <>
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
    </>
  );
}

export default ClaudiaIndexContent;
