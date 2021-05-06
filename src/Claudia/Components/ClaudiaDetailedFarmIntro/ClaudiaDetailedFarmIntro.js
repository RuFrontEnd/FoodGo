import React from 'react';
import './ClaudiaDetailedFarmIntro.scss';
import Avatar from './Images/JPG/avatar.jpg';
import Farm1 from './Images/JPG/farm1.jpg';
import Farm2 from './Images/JPG/farm2.jpg';
import Farm3 from './Images/JPG/farm3.jpg';
import GRice from './Images/SVG/green_rice.svg'
import QLeft from './Images/SVG/quote_left.svg';
import QRight from './Images/SVG/quote_right.svg';

function ClaudiaDetailedFarmIntro() {



    const changeImage = (e) => {

        //change color to green
        const selectedSliderBar = e.target
        console.log('slider-bar', e.target);
        e.target.style.backgroundColor = '#66AB8C';
        console.log('container', document.getElementsByClassName('claudia-detailed-farm-silder-img-container')[0])

        //find siblings

        const getSiblings = function (e) {
            let siblings = [];

            if (!e.parentNode) {
                return siblings;
            }

            let sibling = e.parentNode.firstChild;

            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== e) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
            return siblings;

        }

        let siblings = getSiblings(selectedSliderBar);
        console.log('siblings', siblings);

        siblings.forEach(el => {
            console.log('element', el);
            el.style.backgroundColor = '#fff';
        });

        //find index

        const child = e.target;
        const parent = child.parentNode;
        console.log('child', child);
        console.log('parent', parent);
        //0, 1, 2
        const index = Array.prototype.indexOf.call(parent.children, child);
        console.log('index', index);

        //change image
        document.getElementsByClassName('claudia-detailed-farm-silder-img-container')[0].style.right = `${index * 425}px`;
    }


    return (
        <>
            <div className="claudia-detailed-farm-intro">
                <div className="claudia-detailed-farm-intro-fixed-container">
                    <img className="claudia-detailed-farm-intro-grice" alt="" src={GRice} />
                    <div className="claudia-detailed-farm-intro-container">
                        <h1><b>認識農場</b></h1>
                        <div className="claudia-detailed-farm-video">
                            <iframe title="youtubevid" width="920" height="545" src="https://www.youtube.com/embed/5Jpbe1v1nJk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="claudia-detailed-farm-middle">
                            <div className="claudia-detailed-farm-text">
                                <p>農驛有機農園園長游素精，種植草莓近30年，曾經獲得「十大傑出農­村青年」。游素精表示，農園內採用高架種植草莓的方式，比較通風，病蟲害比較少，相對農藥使用也會減量。此外，高架種植的草莓，也比較不怕雨水，下過雨後壞掉的果實比例會比較少。</p>
                                <p>游素精堅持自己農場的作物，一定要有生產履歷，消費者可以針對履歷上的QR code，得知草莓栽培過程，何時採收，何時包裝，讓消費者吃的安心。</p>
                            </div>
                            <div className="claudia-detailed-farm-silder">
                                <div className="claudia-detailed-farm-silder-container">
                                    <div onClick={changeImage} style={{ backgroundColor: '#66AB8C' }} className="claudia-detailed-farm-silder-bar"></div>
                                    <div onClick={changeImage} className="claudia-detailed-farm-silder-bar"></div>
                                    <div onClick={changeImage} className="claudia-detailed-farm-silder-bar"></div>
                                </div>
                                <div className="claudia-detailed-farm-silder-img-container">
                                    <img alt="" src={Farm1} />
                                    <img alt="" src={Farm2} />
                                    <img alt="" src={Farm3} />
                                </div>

                            </div>
                        </div>
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
                    </div>
                </div>
            </div>

        </>
    )
}

export default ClaudiaDetailedFarmIntro;