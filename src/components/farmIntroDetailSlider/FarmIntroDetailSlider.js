import React from 'react';
import Farm1 from 'assets/jpg/farm-intro-farm-1.jpg';
import Farm2 from 'assets/jpg/farm-intro-farm-2.jpg';
import Farm3 from 'assets/jpg/farm-intro-farm-3.jpg';
import './farmIntroDetailSlider.scss';

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

function FarmIntroDetailSlider() {
  return (
    <>
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
    </>
  );
}

export default FarmIntroDetailSlider;
