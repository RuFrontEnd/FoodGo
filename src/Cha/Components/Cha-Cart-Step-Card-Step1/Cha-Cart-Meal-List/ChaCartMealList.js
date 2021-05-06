import React from 'react';
import Counter from 'Cha/Components/Cha-Cart-Step-Card-Step1/Counter/Counter';
import './ChaCartMealList.scss';

function ChaCartMealList(props) {
  const {
    mealsItem,
    handleCount,
    deleteItemToLocalStorage,
    handleCartNumber,
  } = props;
  return (
    <>
      <div className="cha-order">
        <div className="cha-order-right">
          <div className="cha-product-pic">
            <img
              className="cha-HeadPic"
              src={'/productImages/Bento/' + mealsItem.productImage + '.jpg'}
              alt="美味盡在拾餐"
            ></img>
          </div>

          <div className="cha-step1-content">
            <div className="cha-step1-product-name">
              {mealsItem.productName}
            </div>
            <div className="cha-step1-product-price">
              ${mealsItem.productPrice}
            </div>
          </div>
        </div>
        <div className="cha-order-left">
          <Counter {...props} />
          <div
            className="cha-trash-can"
            onClick={() => {
              deleteItemToLocalStorage(mealsItem);
              handleCount(mealsItem);
              handleCartNumber('minus', mealsItem.productAmount);
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
export default ChaCartMealList;
