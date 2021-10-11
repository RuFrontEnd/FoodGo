import React, { useState } from 'react';
import './imageSlider.scss';

function ImageSlider(props) {
  const { pic1, pic2, pic3, pic4 } = props;
  const [imgSrc, setImgSrc] = useState(pic1);

  const imageSlider = (e) => {
    let selectImg = e.target.src;
    setImgSrc(selectImg);
  };

  return (
    <>
      <div className="claudia-detailed-slider-container">
        <div className="claudia-image-select">
          <div>
            <img onClick={imageSlider} alt="" src={pic1} />
            <div className="claudia-image-triangle-box">
            { imgSrc.includes(pic1) && <div className="claudia-image-triangle"></div> }
            </div>
          </div>
          <div>
            <img onClick={imageSlider} alt="" src={pic2} />
            <div className="claudia-image-triangle-box">
            { imgSrc.includes(pic2) && <div className="claudia-image-triangle"></div> }
            </div>
          </div>
          <div>
            <img onClick={imageSlider} alt="" src={pic3} />
            <div className="claudia-image-triangle-box">
            { imgSrc.includes(pic3) && <div className="claudia-image-triangle"></div> }
            </div>
          </div>
          <div>
            <img onClick={imageSlider} alt="" src={pic4} />
            <div className="claudia-image-triangle-box">
            { imgSrc.includes(pic4) && <div className="claudia-image-triangle"></div> }
            </div>
          </div>
        </div>
        <div className="claudia-image-large">
          <img alt="" src={imgSrc} />
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
