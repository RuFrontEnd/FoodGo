import React from 'react'
import './Style.scss' // 單獨
import '../Style.scss' // 共用
import egg from './Images/egg.svg'
import poachedEgg from './Images/poachedEgg.svg'

// 網頁版 蛋 選項
function RuEggA(props) {
  const { data } = props
  return (
    <>
      {/* 品項1 s*/}
      <li className="ru-species-item ru-species-item1">
        <div className="ru-species-img">
          <img src={egg} className="ru-items ru-egg" id="ru-egg-1"></img>
        </div>
        <div className="ru-species-info">
        <ul>
            <li>
              <h4>
                {data[6].productName} <span>${data[6].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[6].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[6].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[6].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[6].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項1 e*/}
      {/* 品項2 s*/}
      <li className="ru-species-item ru-species-item2">
        <div className="ru-species-img">
          <img src={poachedEgg} className="ru-items ru-egg" id="ru-egg-2"></img>
        </div>
        <div className="ru-species-info">
        <ul>
            <li>
              <h4>
                {data[7].productName} <span>${data[7].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[7].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[7].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[7].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[7].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項2 e*/}
    </>
  )
}

export default RuEggA
