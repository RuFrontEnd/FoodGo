import React, { useState, useEffect } from 'react'
import './Style.scss'
import ArrowL from './Images/ArrowLeft.svg'

function RuArrowLeft(props) {
  const { moveX, setMoveX } = props
  const [isMoving, setIstMoving] = useState(false)

  function start() {
    setIstMoving(true)
  }

  function stop() {
    setIstMoving(false)
  }

  useEffect(() => {
    // console.log(isMoving)
    let movement = moveX
    let moving
    if (isMoving === true) {
      moving = setInterval(() => {
        // 左邊到底就停下
        if (movement !== 0) {
          movement += 10
        }
        setMoveX(movement)
      }, 20)
    }
    return () => {
      // console.log('停止moving')
      clearInterval(moving) // 滑鼠放開停止
    }
  }, [isMoving])

  return (
    <>
      <button className="ru-arrowLeft-warp" onMouseDown={start} onMouseUp={stop} onMouseLeave={stop}>
        <img src={ArrowL} draggable="false" />
      </button>
    </>
  )
}

export default RuArrowLeft
