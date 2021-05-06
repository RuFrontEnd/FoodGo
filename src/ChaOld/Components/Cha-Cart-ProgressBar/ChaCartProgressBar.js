import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import './ChaCartProgressBar.scss';

window.addEventListener('scroll', () => {
  moveBar('#f6bd60');
});

// main code
function moveBar(color = '#fff') {
  let bar = document.querySelector('.cha-progress-bar-yellow');
  let w = Math.ceil(
    (Math.round(window.pageYOffset) /
      (document.body.scrollHeight - window.innerHeight)) *
      100
  );
  if (bar) {
    bar.style.width = w + '%';
    bar.style.background = color;
    // console.log('bar.style.width', bar.style.width);
  }
}
function ChaCartProgressBar(props) {
  return (
    <>
      <div className="cha-progress-bar"></div>

      <div className="cha-progress-bar-arrow-header">
        <div
          className="cha-right-arrow"
          onClick={() => {
            props.history.push('/');
          }}
        ></div>
        <div className="cha-progress-bar-header">建立訂單</div>
      </div>
      <div className="cha-progress-bar-yellow">
        <div className="cha-progress-bar-arrow-header-white">
          <div
            className="cha-right-arrow-fff"
            onClick={() => {
              props.history.push('/');
            }}
          ></div>
          <div className="cha-progress-bar-header-fff">建立訂單</div>
        </div>
      </div>
    </>
  );
}
export default withRouter(ChaCartProgressBar);
