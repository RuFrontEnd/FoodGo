import React from 'react';
import 'components/foodItem/foodItem.scss';

// 網頁版 配菜 選項
function FoodItem(props) {
  const {
    foodItem = {},
    isAvailable = true,
    id = 'foodItem-container',
    className,
    style,
    dragTargetId = '',
  } = props;

  console.log('foodItem', foodItem);

  return (
    <section id={id} className={className} style={style}>
      <ul id="foodItem-wrap">
        <li>
          <div id="foodItem-img">
            {/* 可否選擇邏輯 s */}
            {isAvailable ? (
              <img
                src={`http://localhost:5000/svg/${foodItem.image}`}
                id={`${dragTargetId}`}
              ></img>
            ) : (
              <img
                src={`http://localhost:5000/svg/${foodItem.image}`}
                id={`${dragTargetId}`}
                style={{ pointerEvents: 'none', filter: 'grayscale(100%)' }}
              ></img>
            )}
            {/* 可否選擇邏輯 e */}
          </div>
          <div id="foodItem-info">
            <ul>
              <li>
                <h4>
                  {foodItem.productName} <span>${foodItem.price}</span>
                </h4>
              </li>
              <li id="foodItem-calories">熱量: {foodItem.calories}大卡</li>
              <li id="foodItem-carbohydrates">
                碳水化合物:{foodItem.cabohydrate}g
              </li>
              <li id="foodItem-protein">蛋白質: {foodItem.protein}g</li>
              <li id="foodItem-fat">脂肪: {foodItem.fat}g</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FoodItem;
