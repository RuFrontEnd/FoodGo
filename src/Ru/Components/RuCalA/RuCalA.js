import React, { useEffect, useState } from 'react';
import './Style.scss';
import RuDetailedInfo from 'Ru/Components/RuDetailedInfo/RuDetailedInfo';
import RuDetailedInfoTotal from 'Ru/Components/RuDetailedInfoTotal/RuDetailedInfoTotal';

function RuCalA(props) {
  const {
    data,
    riceName,
    riceCal,
    meetName,
    meetCal,
    eggName,
    eggCal,
    vegNameA,
    vegCalA,
    vegNameB,
    vegCalB,
    vegNameC,
    vegCalC,
  } = props;
  const [isShowTotal, setIsShowTotal] = useState(false); // 沒有品項時不出現總熱量
  const [isShowDetailedInfo1, setIsShowDetailedInfo1] = useState(false);
  const [isShowDetailedInfo2, setIsShowDetailedInfo2] = useState(false);
  const [isShowDetailedInfo3, setIsShowDetailedInfo3] = useState(false);
  const [isShowDetailedInfo4, setIsShowDetailedInfo4] = useState(false);
  const [isShowDetailedInfo5, setIsShowDetailedInfo5] = useState(false);
  const [isShowDetailedInfo6, setIsShowDetailedInfo6] = useState(false);
  const [isShowDetailedInfoTotal, setIsShowDetailedInfoTotal] = useState(false);

  useEffect(() => {
    // console.log('執行useEffect')
    return () => {
      setIsShowTotal(true); // 價格state變動後才渲染總價
    };
  }, [
    isShowTotal,
    riceName,
    riceCal,
    meetName,
    meetCal,
    eggName,
    eggCal,
    vegNameA,
    vegCalA,
    vegNameB,
    vegCalB,
    vegNameC,
    vegCalC,
  ]);

  // hover後顯示詳細資料邏輯
  function showDetailedInfo(e) {
    // console.log(e.currentTarget.id)
    switch (e.currentTarget.id) {
      case 'ru-info-item1':
        setIsShowDetailedInfo1(true);
        break;

      case 'ru-info-item2':
        setIsShowDetailedInfo2(true);
        break;

      case 'ru-info-item3':
        setIsShowDetailedInfo3(true);
        break;
      case 'ru-info-item4':
        setIsShowDetailedInfo4(true);
        break;
      case 'ru-info-item5':
        setIsShowDetailedInfo5(true);
        break;
      case 'ru-info-item6':
        setIsShowDetailedInfo6(true);
        break;
      case 'ru-info-itemTotal':
        setIsShowDetailedInfoTotal(true);
        break;
    }
  }

  // mouseLeave後顯示詳細資料邏輯
  function hideDetailedInfo(e) {
    switch (e.currentTarget.id) {
      case 'ru-info-item1':
        setIsShowDetailedInfo1(false);
        break;

      case 'ru-info-item2':
        setIsShowDetailedInfo2(false);
        break;

      case 'ru-info-item3':
        setIsShowDetailedInfo3(false);
        break;
      case 'ru-info-item4':
        setIsShowDetailedInfo4(false);
        break;
      case 'ru-info-item5':
        setIsShowDetailedInfo5(false);
        break;
      case 'ru-info-item6':
        setIsShowDetailedInfo6(false);
        break;
      case 'ru-info-itemTotal':
        setIsShowDetailedInfoTotal(false);
        break;
    }
  }

  if (!data) {
    return;
  }
  return (
    <>
      <div className="ru-info-item-container">
        {/* 詳細資料品項1 s */}
        <ul className="ru-info-item-warp">
          <li
            className="ru-info-item"
            id="ru-info-item1"
            onMouseOver={showDetailedInfo}
            onMouseLeave={hideDetailedInfo}
          >
            <div className="ru-category-container">
              <p className="ru-category">副食</p>
            </div>
            <p className="ru-selectionName">{riceName}</p>
            <p className="ru-number">{riceCal}kcal</p>
            {isShowDetailedInfo1 && (
              <RuDetailedInfo data={data} riceName={riceName} />
            )}
          </li>
          {/* 詳細資料品項1 e */}

          {/* 詳細資料品項2 s */}
          <li
            className="ru-info-item"
            id="ru-info-item2"
            onMouseOver={showDetailedInfo}
            onMouseLeave={hideDetailedInfo}
          >
            <div className="ru-category-container">
              <p className="ru-category">主食</p>
            </div>
            <p className="ru-selectionName">{meetName}</p>
            <p className="ru-number">{meetCal}kcal</p>
            {isShowDetailedInfo2 && (
              <RuDetailedInfo data={data} meetName={meetName} />
            )}
          </li>
          {/* 詳細資料品項2 e */}

          {/* 詳細資料品項3 s */}
          <li
            className="ru-info-item"
            id="ru-info-item3"
            onMouseOver={showDetailedInfo}
            onMouseLeave={hideDetailedInfo}
          >
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">{vegNameA}</p>
            <p className="ru-number">{vegCalA}kcal</p>
            {isShowDetailedInfo3 && (
              <RuDetailedInfo data={data} vegNameA={vegNameA} />
            )}
          </li>
          {/* 詳細資料品項3 e */}

          {/* 詳細資料品項4 s */}
          <li
            className="ru-info-item"
            id="ru-info-item4"
            onMouseOver={showDetailedInfo}
            onMouseLeave={hideDetailedInfo}
          >
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">{vegNameB}</p>
            <p className="ru-number">{vegCalB}kcal</p>
            {isShowDetailedInfo4 && (
              <RuDetailedInfo data={data} vegNameB={vegNameB} />
            )}
          </li>
          {/* 詳細資料品項4 e */}

          {/* 詳細資料品項5 s */}
          <li
            className="ru-info-item"
            id="ru-info-item5"
            onMouseOver={showDetailedInfo}
            onMouseLeave={hideDetailedInfo}
          >
            <div className="ru-category-container">
              <p className="ru-category">配菜</p>
            </div>
            <p className="ru-selectionName">{vegNameC}</p>
            <p className="ru-number">{vegCalC}kcal</p>
            {isShowDetailedInfo5 && (
              <RuDetailedInfo data={data} vegNameC={vegNameC} />
            )}
          </li>
          {/* 詳細資料品項5 e */}

          {/* 詳細資料品項6 s */}
          <li
            className="ru-info-item"
            id="ru-info-item6"
            onMouseOver={showDetailedInfo}
            onMouseLeave={hideDetailedInfo}
          >
            <div className="ru-category-container">
              <p className="ru-category">蛋</p>
            </div>
            <p className="ru-selectionName">{eggName}</p>
            <p className="ru-number">{eggCal}kcal</p>
            {isShowDetailedInfo6 && (
              <RuDetailedInfo data={data} eggName={eggName} />
            )}
          </li>
          {/* 詳細資料品項 e */}
        </ul>
      </div>
      <div className="ru-info-total-container">
        <div
          className="ru-info-total-warp"
          id="ru-info-itemTotal"
          onMouseOver={showDetailedInfo}
          onMouseLeave={hideDetailedInfo}
        >
          <div className="ru-category-container ru-hold">
            <p className="ru-category">佔寬</p>
          </div>
          <h3>總熱量</h3>
          <p>{riceCal + meetCal + vegCalA + vegCalB + vegCalC + eggCal}kcal</p>
          {isShowDetailedInfoTotal && (
            <RuDetailedInfoTotal
              data={data}
              riceName={riceName}
              meetName={meetName}
              vegNameA={vegNameA}
              vegNameB={vegNameB}
              vegNameC={vegNameC}
              eggName={eggName}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default RuCalA;
