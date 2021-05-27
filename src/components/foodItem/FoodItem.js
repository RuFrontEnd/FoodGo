import React from 'react';
import 'components/foodItem/foodItem.scss'; // 單獨

// 網頁版 配菜 選項
function FoodItem(props) {
  const {
    foodItems,
    isAvailable,
    id = 'foodItem-container',
    className,
    style,
    dragTargetId = '',
  } = props;
  return (
    <section id={id} className={className} style={style}>
      <div id="foodItem-wrap">
        {foodItems.map((foodItem, foodItemIndex) => (
          <>
            <div id="foodItem-img">
              {/* 可否選擇邏輯 s */}
              {isAvailable ? (
                <img
                  src={foodItem.image}
                  id={`${dragTargetId}-${foodItemIndex}`}
                ></img>
              ) : (
                <img
                  src={foodItem.image}
                  id={`${dragTargetId}-${foodItemIndex}`}
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
          </>
        ))}
      </div>
    </section>
  );
}

export default FoodItem;
