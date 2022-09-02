import React from 'react';
import 'components/footer/footer.scss';
import Facebook from 'assets/svg/facebook.svg';
import Instagram from 'assets/svg/instagram.svg';

const thisYear = new Date().getFullYear();

function Footer() {
  return (
    <>
      <section id="footer-container">
        <div id="footer-wrap">
          {/* <div id="footer-text-box">
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
          </div> */}
          {/* <div id="footer-icons">
            <a>
              <img src={Facebook} />
            </a>
            <a>
              <img src={Instagram} />
            </a>
          </div> */}
          <div id="footer-copyright">
            <p>Copyright © {thisYear} 拾餐便當. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
