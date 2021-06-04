import React from 'react';
import 'components/stepCircle/stepCircle.scss';
import Radium from 'radium';

const StepCircle = (props) => {
  const { className, style, img, title = 'Title', responsives = [] } = props;

  const svgSize = responsives.map((responsive) => {
    const values = Object.values(responsive.breakpoint);
    const maxValue = values[0];
    const minValue = values[1];
    const key = `@media(max-width:${maxValue}px) and (min-width: ${minValue}px)`;
    const size = responsive.svgSize ? responsive.svgSize : 12;
    return {
      [key]: {
        width: `${size}px`,
        height: `${size}px`,
      },
    };
  });

  const fontSize = responsives.map((responsive) => {
    const values = Object.values(responsive.breakpoint);
    const maxValue = values[0];
    const minValue = values[1];
    const key = `@media(max-width:${maxValue}px) and (min-width: ${minValue}px)`;
    const size = responsive.fontSize ? responsive.fontSize : 12;
    return {
      [key]: {
        fontSize: `${size}px`,
      },
    };
  });

  return (
    <section id="stepCircle-container" className={className} style={style}>
      <div id="stepCircle-wrap">
        <img src={img} style={svgSize}></img>
        <p style={fontSize}>{title}</p>
      </div>
    </section>
  );
};

export default Radium(StepCircle);
