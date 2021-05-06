import React from 'react'
import './Style.scss' // 單獨
import '../Style.scss' // 共用
import rice from './Images/rice.svg'
import grainRice from './Images/grainRice.svg'
import redQuinoa from './Images/redQuinoa.svg'

// 網頁版 白飯 選項
function RuRiceA(props) {
  const { data } = props
  return (
    <>
      {/* 品項1 s*/}
      <li className="ru-species-item ru-species-item1" id="">
        <div className="ru-species-img" id="ru-item1">
          <img
            src={rice}
            className="ru-items ru-rice"
            id="ru-rice-1"
            draggable="true"
          ></img>
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[0].productName} <span>${data[0].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[0].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[0].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[0].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[0].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項1 e*/}
      {/* 品項2 s*/}
      <li className="ru-species-item ru-species-item2" id="">
        <div className="ru-species-img" id="ru-item2">
          <img
            src={grainRice}
            className="ru-items ru-rice"
            id="ru-rice-2"
            draggable="true"
          ></img>
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[1].productName} <span>${data[1].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[1].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[1].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[1].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[1].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項2 e*/}
      {/* 品項3 s*/}
      <li className="ru-species-item ru-species-item3" id="">
        <div className="ru-species-img" id="ru-item3">
          <img
            src={redQuinoa}
            className="ru-items ru-rice"
            id="ru-rice-3"
            draggable="true"
          ></img>
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[2].productName} <span>${data[2].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[2].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[2].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[2].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[2].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項3 e*/}
    </>
  )
}

export default RuRiceA
