import React, { useState } from 'react';
import Pic1 from 'assets/jpg/farm-intro-farm-1.jpg';
import Pic2 from 'assets/jpg/farm-intro-farm-2.jpg';
import Pic3 from 'assets/jpg/farm-intro-farm-3.jpg';
import './farmIntroDetailSlider.scss';

function FarmIntroDetailSlider() {
  const [selectedBar, setSelectedBar] = useState(1);
  const changeImage = (index) => {
    setSelectedBar(index);
  }
  return (
    <>
      <div className="claudia-detailed-farm-silder">
        <div className="claudia-detailed-farm-silder-container">
            <div onClick={() => changeImage(1)} 
                style={{ backgroundColor: selectedBar === 1 ? '#66AB8C' : '#FFFFFF'}} 
                className="claudia-detailed-farm-silder-bar">
            </div>
            <div onClick={() => changeImage(2)} 
                style={{ backgroundColor: selectedBar === 2 ? '#66AB8C' : '#FFFFFF'}} 
                className="claudia-detailed-farm-silder-bar"></div>
            <div onClick={() => changeImage(3)} 
                style={{ backgroundColor: selectedBar === 3 ? '#66AB8C' : '#FFFFFF'}}
                className="claudia-detailed-farm-silder-bar"></div>
        </div>
        <div className="claudia-detailed-farm-silder-img-container"
            style={{right: `${(selectedBar-1) * 425}px`}}>
            <img alt="" src={Pic1} />
            <img alt="" src={Pic2} />
            <img alt="" src={Pic3} />
        </div>
      </div>
    </>
  );
}

export default FarmIntroDetailSlider;
