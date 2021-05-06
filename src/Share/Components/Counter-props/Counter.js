import React, { useState, useEffect } from 'react'
import './Counter.scss'

function Counter(props) {
  const { handleCount, mealsItem } = props
  // 計數器加減功能
  // const handleCount = (id, type) => {
  //   const newCartMeals = [...cartMeals]
  //   const todoItemIndex = newCartMeals.findIndex((item) => item.id === id)
  //   if (todoItemIndex !== -1) {
  //     if (type === 'increment') {
  //       newCartMeals[todoItemIndex].productAmount += 1
  //     }
  //     if (
  //       type === 'decrement' &&
  //       newCartMeals[todoItemIndex].productAmount > 1
  //     ) {
  //       newCartMeals[todoItemIndex].productAmount -= 1
  //     }
  //     setCartMeals(newCartMeals)
  //   }
  // }
  return (
    <>
      <div className="counter-box">
        <div
          onClick={() => {
            handleCount(mealsItem.id, 'decrement')
          }}
          className={
            mealsItem.productAmount === 1
              ? 'counter-decrement cursor-default'
              : 'counter-decrement counter-hover'
          }
        >
          <p>-</p>
        </div>
        <div className="counter-count">
          <p>{mealsItem.productAmount}</p>
        </div>
        <div
          onClick={() => handleCount(mealsItem.id, 'increment')}
          className="counter-increment"
        >
          <p>+</p>
        </div>
      </div>
    </>
  )
}

export default Counter
