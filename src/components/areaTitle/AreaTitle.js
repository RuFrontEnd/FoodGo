import React from 'react';
import 'components/areaTitle/areaTitle.scss';
import titleLeft from 'assets/svg/titleLeft.svg';
import titleRight from 'assets/svg/titleRight.svg';

function AreaTitle(props) {
  const { className, style, title = 'Area Title' } = props;

  return (
    <section id="areaTitle-container" className={className} style={style}>
      <div id="areaTitle-wrap" className="d-flex align-items-center">
        <img alt="" src={titleLeft} />
        <p id="areaTitle-title">{title}</p>
        <img alt="" src={titleRight} />
      </div>
    </section>
  );
}

export default AreaTitle;
