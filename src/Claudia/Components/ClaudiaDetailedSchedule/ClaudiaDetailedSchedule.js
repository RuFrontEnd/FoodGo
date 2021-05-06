import React from 'react';
import './ClaudiaDetailedSchedule.scss';
import Schedule1 from './Images/JPG/schedule1.jpg';
import Schedule2 from './Images/JPG/schedule2.jpg';
import Schedule3 from './Images/JPG/schedule3.jpg';
import Schedule4 from './Images/JPG/schedule4.jpg';
import Home from './Images/SVG/home.svg';
import { Parallax } from 'rc-scroll-anim';

function ClaudiaDetailedSchedule() {
  return (
    <>
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
    </>
  );
}

export default ClaudiaDetailedSchedule;
