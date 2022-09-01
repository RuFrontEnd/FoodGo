import React, { useState, useEffect } from 'react';
import 'components/counter/counter.scss';

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
          }}
          className={
            count === 1
              ? 'counter-decrement cursor-default'
              : 'counter-decrement counter-hover'
          }
        >
          <p className="counter-sign">-</p>
        </div>
        <div className="counter-count">
          <p>{count}</p>
        </div>
        <div
          onClick={() => handleClick('increment')}
          className="counter-increment"
        >
          <p className="counter-sign">+</p>
        </div>
      </div>
    </>
  );
}

export default Counter;
