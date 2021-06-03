import React from 'react';
import './ArrowLeft.scss';

function ArrowLeft(props) {
  const { onClick } = props;
  return (
    <>
      <div className="arrowLeft-warp mt-4 " onClick={onClick}>
        <div className="jan-arrow-circleL " draggable="true">
          <div className="jan-arrow-left"></div>
        </div>
      </div>
    </>
  );
}

export default ArrowLeft;
