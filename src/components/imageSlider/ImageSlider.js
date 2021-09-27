import React, { useState } from 'react';
import './imageSlider.scss';
import Rice from 'assets/svg/rice.svg';

function ImageSlider(props) {
  const { pic1, pic2, pic3, pic4 } = props;
  const [imgSrc, setImgSrc] = useState(pic1);

  const imageSlider = (e) => {
    let selectImg = e.target.src;
    setImgSrc(selectImg);

    //change triangle display - step 1: find index - make triangle appears
    const child = e.target;
    const parent = child.parentNode;
    const index = Array.prototype.indexOf.call(parent.children, child);
    const triangleIcon =
      e.target.parentNode.nextElementSibling.children[index].children[0];
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
    };

    let siblings = getSiblings(triangleIcon.parentNode);

    siblings.forEach((el) => {
      const siblingsTriangles = el.children[0];
      // console.log('loop', el.children[0]);
      console.log('siblingsTriangles', siblingsTriangles);
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
              <img onClick={imageSlider} alt="" src={pic1} />
              <img onClick={imageSlider} alt="" src={pic2} />
              <img onClick={imageSlider} alt="" src={pic3} />
              <img onClick={imageSlider} alt="" src={pic4} />
            </div>
            <div className="claudia-image-triangle-area">
              <div className="claudia-image-triangle-box">
                <div className="claudia-image-triangle"></div>
              </div>
              <div className="claudia-image-triangle-box">
                <div
                  style={{ visibility: 'hidden' }}
                  className="claudia-image-triangle"
                ></div>
              </div>
              <div className="claudia-image-triangle-box">
                <div
                  style={{ visibility: 'hidden' }}
                  className="claudia-image-triangle"
                ></div>
              </div>
              <div className="claudia-image-triangle-box">
                <div
                  style={{ visibility: 'hidden' }}
                  className="claudia-image-triangle"
                ></div>
              </div>
            </div>
            <div className="claudia-image-large">
              <img alt="" src={imgSrc} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
