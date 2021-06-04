import React from 'react';
import 'components/stepCircle/stepCircle.scss';

const StepCircle = (props) => {
  const { img, title = 'Title' } = props;

  return (
    <section id="stepCircle-container">
      <div id="stepCircle-wrap">
        <img src={img}></img>
        <p>{title}</p>
      </div>
    </section>
  );
};

export default StepCircle;
