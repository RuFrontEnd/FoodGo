import React, { useState } from 'react';
import './ClaudiaDetailedSilder.scss';
import Pic1 from './Images/JPG/strawberry.jpg';
import Pic2 from './Images/JPG/strawberry1.jpg';
import Pic3 from './Images/JPG/strawberry2.jpg';
import Pic4 from './Images/JPG/strawberry3.jpg';
import Rice from './Images/SVG/rice.svg';

function ClaudiaDetailedSilder() {

    const [imgSrc, setImgSrc] = useState(Pic2);

    const imageSlider = (e) => {

        //change image
        let selectImg = e.target.src;
        console.log('img', e.target.src);
        setImgSrc(selectImg);

        //change triangle display - step 1: find index - make triangle appears

        const child = e.target;
        const parent = child.parentNode;
        console.log('child', child);
        console.log('parent', parent);
        const index = Array.prototype.indexOf.call(parent.children, child);
        console.log('index', index);

        const triangleIcon = e.target.parentNode.nextElementSibling.children[index].children[0]
        console.log('triangleIcon', e.target.parentNode.nextElementSibling.children[index].children[0]);
        triangleIcon.style.visibility = 'visible';

        //change triangle display - step 2: find .siblings - make triangles disappear

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

        let siblings = getSiblings(triangleIcon.parentNode)

        siblings.forEach(el => {
            const siblingsTriangles = el.children[0]
            // console.log('loop', el.children[0]);
            console.log('siblingsTriangles', siblingsTriangles)
            siblingsTriangles.style.visibility = 'hidden';

        });


    };


    return (
        <>
            <div className="claudia-detailed-slider">
                <div className="claudia-detailed-slider-fixed-container">
                    <img className="claudia-detailed-slider-ricebg" alt="" src={Rice} />
                    <div className="claudia-detailed-slider-container">
                        <div className="claudia-image-select">
                            <img onClick={imageSlider} alt="" src={Pic2} />
                            <img onClick={imageSlider} alt="" src={Pic1} />
                            <img onClick={imageSlider} alt="" src={Pic3} />
                            <img onClick={imageSlider} alt="" src={Pic4} />
                        </div>
                        <div className="claudia-image-triangle-area">
                            <div className="claudia-image-triangle-box"><div className="claudia-image-triangle"></div></div>
                            <div className="claudia-image-triangle-box"><div style={{ visibility: 'hidden' }} className="claudia-image-triangle"></div></div>
                            <div className="claudia-image-triangle-box"><div style={{ visibility: 'hidden' }} className="claudia-image-triangle"></div></div>
                            <div className="claudia-image-triangle-box"><div style={{ visibility: 'hidden' }} className="claudia-image-triangle"></div></div>
                        </div>
                        <div className="claudia-image-large">
                            <img alt="" src={imgSrc} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ClaudiaDetailedSilder;