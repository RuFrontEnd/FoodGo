import React, { useState } from 'react';
import './ClaudiaDetailedMainTextRight.scss';
import Location from './Images/location.svg';
import Button from '../../../Share/Components/Button/Button';
import ClaudiaModalFrame from '../ClaudiaModalFrame/ClaudiaModalFrame';
import ClaudiaModalContent from '../ClaudiaModalContent/ClaudiaModalContent';
import { Link, withRouter } from 'react-router-dom';

function ClaudiaDetailedMainTextRight(props) {
  const [status, setStatus] = useState(false);
  const { handleCartNumber } = props;

  return (
    <>
      {/* Modal */}
      {status && (
        <ClaudiaModalFrame closeModal={() => setStatus(false)}>
          <ClaudiaModalContent handleCartNumber={handleCartNumber} />
        </ClaudiaModalFrame>
      )}

      {/* Page Content */}
      <div className="claudia-detailed-maintext-signup">
        <div className="claudia-detailed-maintext-signup-box">
          <h1>
            <b>可選擇團體報名或自行前往</b>
          </h1>
          <div className="claudia-signup-text claudia-signup-box">
            <p>
              <b>團體報名</b>
            </p>
          </div>
          <div className="claudia-signup-text">
            <span>
              <b>集合時間：</b>
            </span>
            <span>9:00</span>
          </div>
          <div className="claudia-signup-text">
            <span>
              <b>集合地點：</b>
            </span>
            <span>台北車站</span>
          </div>
          <div className="claudia-signup-text claudia-signup-text-group">
            <b>5人以上成團</b>
          </div>
          <div className="claudia-signup-text claudia-signup-text-group">
            <span>
              <b>目前報名人數：7人</b>
            </span>
            <span className="claudia-yellow-confirm">
              <b>確定成團</b>
            </span>
          </div>
          <div className="claudia-signup-text claudia-signup-box">
            <p>
              <b>自行前往</b>
            </p>
          </div>
          <div className="claudia-signup-text">
            <span>
              <b>集合時間：</b>
            </span>
            <span>9:20</span>
          </div>
          <div className="claudia-signup-text">
            <span className="claudia-signup-text-group-adr">
              <b>集合地點：</b>
            </span>
            <span>台北市內湖區碧山路58-1號</span>
          </div>
          <div className="claudia-signup-text-map">
            <img alt="location-icon" src={Location} />
            <a href="#farm-adr">點我看地圖</a>
          </div>
          <div
            onClick={() => setStatus(true)}
            className="claudia-signup-date-button"
          >
            <Button className="button-btn-g" text="查看可預訂日期" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClaudiaDetailedMainTextRight;
