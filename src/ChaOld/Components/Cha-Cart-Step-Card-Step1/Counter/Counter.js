import React from 'react';
import './Counter.scss';

function Counter(props) {
  const {
    handleCount,
    mealsItem,
    updateCartToLocalStorage,
    handleCartNumber,
  } = props;
  return (
    <>
      <div className="cha-counter-box">
        <div
          onClick={() => {
            handleCount(mealsItem.id, 'decrement');
            // if (mealsItem.productAmount < 1) return;
            updateCartToLocalStorage(mealsItem, 1, false);
            if (mealsItem.productAmount > 1) {
              handleCartNumber('minus', 1);
            } else {
              handleCartNumber('minus', 0);
            }
          }}
          className={
            mealsItem.productAmount === 1
              ? 'cha-counter-decrement cha-cursor-default'
              : 'cha-counter-decrement cha-counter-hover'
          }
        >
          <p>-</p>
        </div>
        <div className="cha-counter-count">
          <p>{mealsItem.productAmount}</p>
        </div>
        <div
          onClick={() => {
            handleCount(mealsItem.id, 'increment');
            updateCartToLocalStorage(mealsItem, 1, true);
            handleCartNumber('add', 1);
          }}
          className="cha-counter-increment"
        >
          <p>+</p>
        </div>
      </div>
    </>
  );
}

export default Counter;
