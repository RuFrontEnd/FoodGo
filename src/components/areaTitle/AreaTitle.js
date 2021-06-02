import React from 'react';
import 'components/areaTitle/areaTitle.scss';
import titleLeft from 'assets/svg/titleLeft.svg';
import titleRight from 'assets/svg/titleRight.svg';
import titleLeftLight from 'assets/svg/titleLeft-light.svg';
import titleRightLight from 'assets/svg/titleRight-light.svg';

function AreaTitle(props) {
  const { className, style, title = 'Area Title', isLightMode = false } = props;

  return (
    <section id="areaTitle-container" className={className} style={style}>
      <div id="areaTitle-wrap" className="d-flex align-items-center">
        <img alt="" src={isLightMode ? titleLeftLight : titleLeft} />
        <p id="areaTitle-title" style={isLightMode ? { color: '#F7EDE2' } : {}}>
          {title}
        </p>
        <img alt="" src={isLightMode ? titleRightLight : titleRight} />
      </div>
    </section>
  );
}

export default AreaTitle;
