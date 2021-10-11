import React from 'react';
import './farmIntroDetailQuote.scss';
import QLeft from 'assets/svg/farm-intro-quote-left.svg';
import QRight from 'assets/svg/farm-intro-quote-right.svg';
import Avatar from 'assets/jpg/farm-intro-avatar.jpg';

function FarmIntroDetailQuote() {
  return (
    <>
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
    </>
  );
}

export default FarmIntroDetailQuote;
