import React, { useState, useEffect } from 'react';
import './Style.scss';

function Counter(props) {
  const { setAmount, count, setCount } = props;
  // const [hoverBackgroundColor, setHoverBackgroundColor] = useState('white')
  // const [hoverMinusColor, setHoverMinusColor] = useState('#858585')

  const handleClick = (type) => {
    if (type === 'increment') {
      setCount(count + 1);
      setAmount(count + 1);
    }
    if (type === 'decrement' && count > 1) {
      setCount(count - 1);
      setAmount(count - 1);
    }
  };

  return (
    <>
      <div className="counter-box">
        <div
          onClick={() => {
            handleClick('decrement');
            // if (count === 2) {
            //   setHoverBackgroundColor('white')
            //   setHoverMinusColor('#858585')
            // }
          }}
          className={
            count === 1
              ? 'counter-decrement cursor-default'
              : 'counter-decrement counter-hover'
          }

          // onMouseEnter={() => {
          //   if (count === 1) {
          //     return
          //   } else {
          //     setHoverBackgroundColor('#f6bd60')
          //     setHoverMinusColor('#FFF')
          //   }
          // }}
          // onMouseLeave={() => {
          //   setHoverBackgroundColor('white')
          //   setHoverMinusColor('#858585')
          // }}
          // style={{
          //   backgroundColor: hoverBackgroundColor,
          //   color: hoverMinusColor,
          // }}
        >
          <p>-</p>
        </div>
        <div className="counter-count">
          <p>{count}</p>
        </div>
        <div
          onClick={() => handleClick('increment')}
          className="counter-increment"
        >
          <p>+</p>
        </div>
      </div>
    </>
  );
}

export default Counter;
