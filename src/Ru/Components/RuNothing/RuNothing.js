import React from 'react'
import './Style.scss'
import littleQ from './Images/littleQ.svg'

function RuNothing(props) {
  return (
    <>
      <div className="ru-nothing-container">
        <section className="ru-nothing-warp">
          <h3>無符合結果</h3>
          <img src={littleQ}></img>
        </section>
      </div>
    </>
  )
}

export default RuNothing
