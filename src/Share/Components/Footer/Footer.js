import React from 'react';
import './Footer.scss';
import Facebook from '../Images/SVG/facebook.svg';
import Instagram from '../Images/SVG/instagram.svg';

function Footer() {
  return (
    <>
      <div style={{paddingTop:"150px"}}></div>
      <section id="footer-container">
        <div id="footer-wrap">
          <div id="footer-text-box">
            <div id="footer-text">
              <a href="#">
                <p>常見問題</p>
              </a>
              <a href="#">
                <p>服務條款</p>
              </a>
              <a href="#">
                <p>關於我們</p>
              </a>
              <a href="#">
                <p>隱私權政策</p>
              </a>
            </div>
          </div>
          <div id="footer-icons">
            <a>
              <img src={Facebook} />
            </a>
            <a>
              <img src={Instagram} />
            </a>
          </div>
          <div id="footer-copyright">
            <p>Copyright © 2021 拾餐便當. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
