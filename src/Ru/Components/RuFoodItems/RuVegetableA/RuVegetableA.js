import React from 'react'
import './Style.scss' // 單獨
import '../Style.scss' // 共用
import cauliflower from './Images/cauliflower.svg'
import cabage from './Images/cabage.svg'
import corn from './Images/corn.svg'
import qingjiang from './Images/qingjiang.svg'
import eggplant from './Images/eggplant.svg'

// 網頁版 配菜 選項
function RuVegetableA(props) {
  const {
    data,
    veg1available,
    veg2available,
    veg3available,
    veg4available,
    veg5available,
  } = props
  return (
    <>
      {/* 品項1 s*/}
      <li className="ru-species-item ru-species-item1">
        <div className="ru-species-img">
          {/* 可否選擇邏輯 s */}
          {veg1available ? (
            <img
              src={cauliflower}
              className="ru-items ru-veg"
              id="ru-veg-1"
            ></img>
          ) : (
            <img
              src={cauliflower}
              className="ru-items ru-veg"
              id="ru-veg-1"
              style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
            ></img>
          )}
          {/* 可否選擇邏輯 e */}
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[8].productName} <span>${data[8].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[8].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[8].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[8].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[8].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項1 e*/}
      {/* 品項2 s*/}
      <li className="ru-species-item ru-species-item2">
        <div className="ru-species-img">
          {veg2available ? (
            <img src={cabage} className="ru-items ru-veg" id="ru-veg-2"></img>
          ) : (
            <img
              src={cabage}
              className="ru-items ru-veg"
              id="ru-veg-2"
              style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
            ></img>
          )}
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[9].productName} <span>${data[9].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[9].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[9].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[9].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[9].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項2 e*/}
      {/* 品項3 s*/}
      <li className="ru-species-item ru-species-item3">
        <div className="ru-species-img">
          {veg3available ? (
            <img src={corn} className="ru-items ru-veg" id="ru-veg-3"></img>
          ) : (
            <img
              src={corn}
              className="ru-items ru-veg"
              id="ru-veg-3"
              style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
            ></img>
          )}
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[10].productName} <span>${data[10].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[10].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[10].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[10].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[10].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項3 e*/}
      {/* 品項4 s*/}
      <li className="ru-species-item ru-species-item4">
        <div className="ru-species-img">
          {veg4available ? (
            <img
              src={qingjiang}
              className="ru-items ru-veg"
              id="ru-veg-4"
            ></img>
          ) : (
            <img
              src={qingjiang}
              className="ru-items ru-veg"
              id="ru-veg-4"
              style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
            ></img>
          )}
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[11].productName} <span>${data[11].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[11].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[11].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[11].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[11].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項4 e*/}
      {/* 品項5 s*/}
      <li className="ru-species-item ru-species-item5">
        <div className="ru-species-img">
          {veg5available ? (
            <img
              src={eggplant}
              className="ru-items ru-veg"
              id="ru-veg-5"
            ></img>
          ) : (
            <img
              src={eggplant}
              className="ru-items ru-veg"
              id="ru-veg-5"
              style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
            ></img>
          )}
        </div>
        <div className="ru-species-info">
          <ul>
            <li>
              <h4>
                {data[12].productName} <span>${data[12].price}</span>
              </h4>
            </li>
            <li className="ru-species-calories">
              熱量: {data[12].calories}大卡
            </li>
            <li className="ru-species-carbohydrates">
              碳水化合物:{data[12].cabohydrate}g
            </li>
            <li className="ru-species-protein">蛋白質: {data[12].protein}g</li>
            <li className="ru-species-fat">脂肪: {data[12].fat}g</li>
          </ul>
        </div>
      </li>
      {/* 品項5 e*/}
    </>
  )
}

export default RuVegetableA
