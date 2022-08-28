import React, { useState, useEffect } from 'react';
import 'components/priceArea/priceArea.scss';

function PriceArea(props) {
  const {
    riceName,
    ricePrice,
    meetName,
    meetPrice,
    eggName,
    eggPrice,
    vegNameA,
    vegPriceA,
    vegNameB,
    vegPriceB,
    vegNameC,
    vegPriceC,
  } = props;
  const [isShowTotal, setIsShowTotal] = useState(false); // 沒有品項時不出現總價

  useEffect(() => {
    // console.log('執行useEffect')
    return () => {
      setIsShowTotal(true); // 價格state變動後才渲染總價
    };
  }, [
    isShowTotal,
    riceName,
    ricePrice,
    meetName,
    meetPrice,
    eggName,
    eggPrice,
    vegNameA,
    vegPriceA,
    vegNameB,
    vegPriceB,
    vegNameC,
    vegPriceC,
  ]);

  return (
    <>
      <div className="ru-info-item-container">
        {/* 詳細資料品項1 s */}
        <ul className="ru-info-item-warp">
          <li className="ru-info-item ru-info-item1">
            <div className="ru-category-container">
              <p className="ru-category">副食</p>
            </div>
            <p className="ru-selectionName">{riceName}</p>
            <p className="ru-number">${ricePrice}</p>
          </li>
          {/* 詳細資料品項1 e */}

          {/* 詳細資料品項2 s */}
          <li className="ru-info-item ru-info-item2">
            <div className="ru-category-container">
              <p className="ru-category">主食</p>
            </div>
            <p className="ru-selectionName">{meetName}</p>
            <p className="ru-number">${meetPrice}</p>
          </li>
          {/* 詳細資料品項2 e */}

          {/* 詳細資料品項3 s */}
          <li className="ru-info-item ru-info-item3">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">{vegNameA}</p>
            <p className="ru-number">${vegPriceA}</p>
          </li>
          {/* 詳細資料品項3 e */}

          {/* 詳細資料品項4 s */}
          <li className="ru-info-item ru-info-item4">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">{vegNameB}</p>
            <p className="ru-number">${vegPriceB}</p>
          </li>
          {/* 詳細資料品項4 e */}

          {/* 詳細資料品項5 s */}
          <li className="ru-info-item ru-info-item5">
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">{vegNameC}</p>
            <p className="ru-number">${vegPriceC}</p>
          </li>
          {/* 詳細資料品項5 e */}

          {/* 詳細資料品項6 s */}
          <li className="ru-info-item ru-info-item6">
            <div className="ru-category-container">
              <p className="ru-category">蛋</p>
            </div>
            <p className="ru-selectionName">{eggName}</p>
            <p className="ru-number">${eggPrice}</p>
          </li>
          {/* 詳細資料品項 e */}
        </ul>
      </div>
      <div className="ru-info-total-container">
        <div className="ru-info-total-warp">
          <div className="ru-category-container ru-hold">
            <p className="ru-category">佔寬</p>
          </div>
          <h3>總金額</h3>
          <p>
            $
            {ricePrice +
              meetPrice +
              eggPrice +
              vegPriceA +
              vegPriceB +
              vegPriceC}
          </p>
        </div>
      </div>
    </>
  );
}

export default PriceArea;
