import React from 'react';
// import RightArrowWhite from 'Cha/Components/Cha-Group-ProgressBar/Images/right-arrow-white.svg'
import './ChaGroupProgressBar.scss';
import { Link } from 'react-router-dom';

function ChaGroupProgressBar(props) {
  return (
    <>
      <div className="cha-navbar-group-order d-flex align-content-center">
        <Link to="/">
          <div className="cha-group-right-arrow"></div>
        </Link>
        <div className="cha-progress-bar-header">
          <div className="cha-logo"></div>
        </div>
      </div>
    </>
  );
}
export default ChaGroupProgressBar;
