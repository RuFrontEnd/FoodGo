import React from 'react';
import './Footer.scss';
import Facebook from '../Images/SVG/facebook.svg';
import Instagram from '../Images/SVG/instagram.svg';

function Footer() {
    return (
        <>
            <div className="footer-background">
                <div className="footer-card">
                    <div className="footer-text-box">
                        <div className="footer-text">
                            <a href="#"><p>常見問題</p></a>
                            <a href="#"><p>服務條款</p></a>
                            <a href="#"><p>關於我們</p></a>
                            <a href="#"><p>隱私權政策</p></a>
                        </div>
                    </div>
                    <div className="footer-icons">
                        <a>
                            <img src={Facebook} />
                        </a>
                        <a>
                            <img src={Instagram} />
                        </a>
                    </div>
                    <div className="footer-copyright">
                        <p>Copyright © 2020 拾餐便當. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer;