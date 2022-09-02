import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import 'components/customBento/customBento.scss';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OptionButtonRef from 'components/optionButton/OptionButton';
import Counter from 'components/counter/Counter';
import PriceArea from 'components/priceArea/PriceArea'; // 資訊區價格 網頁版
import CalorieArea from 'components/calorieArea/CalorieArea'; // 資訊區熱量 網頁版
import CustomHint from 'components/customHint/CustomHint';
import FoodItem from 'components/foodItem/FoodItem';
import Button from 'components/button/Button';

// 品項放置後 e
import hintA from './Images/hintA.svg';
import hintB from './Images/hintB.svg';
import hintC from './Images/hintC.svg';
import hintD from './Images/hintD.svg';
import hintE from './Images/hintE.svg';
import hintF from './Images/hintF.svg';

// 引用圖片
import background from './Images/background.png';
import { ReactComponent as LunchBox } from 'assets/svg/lunchBox.svg'; // 將svg以元件方式引入

const OptionButton = styled(OptionButtonRef)`
  padding: 5px 25px;
  margin: 0px 20px;
`;

function CustomBento(props) {
  const { handleCartNumber, amount, setAmount, count, setCount, ws } = props;
  const $dragTarget = useRef();
  const $vegBoxLeft = useRef();
  const $vegBoxMiddle = useRef();
  const $vegBoxRight = useRef();
  const $riceBox = useRef();
  const $eggBox = useRef();
  const $meetBox = useRef();

  const [moveX, setMoveX] = useState(0); // 選項區滑動變亮(RuArrowRight / RuArrowLeft 調整)
  const [isPrice, setIsPrice] = useState(true); // 是否開啟價格標示
  const [isCal, setIsCal] = useState(false); // 是否開啟營養標示
  const [selection, setSelection] = useState('rice'); // 選擇開啟哪個菜色選區
  const [limitX, setLimitX] = useState(0); // 右滑極限值 => 白飯選區為初始值 (RuButtonB可以調不同選項區的極限值)
  const [vegBoxLeftImg, setVegBoxLeftImg] = useState();
  const [vegBoxMiddleImg, setVegBoxMiddleImg] = useState();
  const [vegBoxRightImg, setvegBoxRightImg] = useState();
  const [riceImg, setRiceImg] = useState();
  const [meetImg, setMeetImg] = useState();
  const [eggImg, setEggImg] = useState();
  // 設定飯類容器的優先權
  const [priority, setPriority] = useState('');

  // 開啟提示區
  const [isShowHint, setIsShowHint] = useState(true);
  const [isShowHintA, setIsShowHintA] = useState(false);
  const [isShowHintB, setIsShowHintB] = useState(false);
  const [isShowHintC, setIsShowHintC] = useState(false);
  const [isShowHintD, setIsShowHintD] = useState(true);
  const [isShowHintE, setIsShowHintE] = useState(false);
  const [isShowHintF, setIsShowHintF] = useState(false);

  // 標記蔬菜區sid 以及 設定今日菜色(價格)資訊
  const [vegSidA, setVegSidA] = useState(null);
  const [vegNameA, setVegNameA] = useState('');
  const [vegPriceA, setVegPriceA] = useState(0);
  const [vegCalA, setVegCalA] = useState(0);
  const [vegSidB, setVegSidB] = useState(null);
  const [vegNameB, setVegNameB] = useState('');
  const [vegPriceB, setVegPriceB] = useState(0);
  const [vegCalB, setVegCalB] = useState(0);
  const [vegSidC, setVegSidC] = useState(null);
  const [vegNameC, setVegNameC] = useState('');
  const [vegPriceC, setVegPriceC] = useState(0);
  const [vegCalC, setVegCalC] = useState(0);
  const [riceSid, setRiceSid] = useState(null);
  const [riceName, setRiceName] = useState('');
  const [ricePrice, setRicePrice] = useState(0);
  const [riceCal, setRiceCal] = useState(0);
  const [eggSid, setEggSid] = useState(null);
  const [eggName, setEggName] = useState('');
  const [eggPrice, setEggPrice] = useState(0);
  const [eggCal, setEggCal] = useState(0);
  const [meetSid, setMeetSid] = useState(null);
  const [meetName, setMeetName] = useState('');
  const [meetPrice, setMeetPrice] = useState(0);
  const [meetCal, setMeetCal] = useState(0);

  // 是否可以購買
  const [isCanBuy, setIsCanBuy] = useState(false);

  // 包後端資料的state
  const [data, setData] = useState('');
  const [foods, setFoods] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const optionButtonSettings = [
    {
      text: '副食',
      id: 'rice-items',
      selected: selection === 'rice',
    },
    {
      text: '主食',
      id: 'meet-items',
      selected: selection === 'meet',
    },
    {
      text: '配菜',
      id: 'vegetable-items',
      selected: selection === 'vegetable',
    },
    {
      text: '蛋',
      id: 'egg-items',
      selected: selection === 'egg',
    },
  ];

  // 給localStorage的id
  let today = +new Date();
  const [todayId, setTodayId] = useState(today);

  // 切換售價與營養標示
  function switchPrice() {
    setIsPrice(true);
    setIsCal(false);
  }

  function switchCal() {
    setIsPrice(false);
    setIsCal(true);
  }

  // 開始拖曳品項
  const handleDragFoodItem = (e) => {
    e.dataTransfer.setData('text/plain', e.target.dataset.sid);
  };

  const MultiCarouselResponsive = {
    desktop: {
      breakpoint: { max: 8192, min: 0 },
      items: 4,
    },
    // desktop: {
    //   breakpoint: { max: 1920, min: 1199.99 },
    //   items: 4,
    // },
    // tablet: {
    //   breakpoint: { max: 1199.98, min: 991.99 },
    //   items: 3,
    // },
    // tabletMini: {
    //   breakpoint: { max: 991.98, min: 575.99 },
    //   items: 2,
    // },
    // mobile: {
    //   breakpoint: { max: 575.98, min: 0 },
    //   items: 1,
    // },
  };

  // 品項放到目標容器
  const handleDropFoodItem = (e) => {
    setPriority('0'); // 白飯容器優先結束
    setIsShowHint(false); // 東西放完就關閉示字樣
    let datasetSid = Number(
      e.dataTransfer.getData('text/plain', e.target.dataset.sid)
    );

    let _foods = [...foods];
    if (e.target.id === $vegBoxLeft.current.id && selection === 'vegetable') {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setVegBoxLeftImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setVegSidA(_food.sid);
          setVegNameA(_food.productName);
          setVegPriceA(_food.price);
          setVegCalA(_food.calories);
        }
      });
    } // 左邊蔬菜區

    if (e.target.id === $vegBoxMiddle.current.id && selection === 'vegetable') {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setVegBoxMiddleImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setVegSidB(_food.sid);
          setVegNameB(_food.productName);
          setVegPriceB(_food.price);
          setVegCalB(_food.calories);
        }
      });
    } // 中間蔬菜區

    if (e.target.id === $vegBoxRight.current.id && selection === 'vegetable') {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setvegBoxRightImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setVegSidC(_food.sid);
          setVegNameC(_food.productName);
          setVegPriceC(_food.price);
          setVegCalC(_food.calories);
        }
      });
    } // 右邊蔬菜區

    if (selection === 'rice') {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setRiceImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setRiceSid(_food.sid);
          setRiceName(_food.productName);
          setRicePrice(_food.price);
          setRiceCal(_food.calories);
        }
      });
    } // 白飯區

    if (selection === 'meet') {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setMeetImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setMeetSid(_food.sid);
          setMeetName(_food.productName);
          setMeetPrice(_food.price);
          setMeetCal(_food.calories);
        }
      });
    } // 主食區

    if (selection === 'egg') {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setEggImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setEggSid(_food.sid);
          setEggName(_food.productName);
          setEggPrice(_food.price);
          setEggCal(_food.calories);
        }
      });
    } // 蛋區

    setFoods(_foods);
  };

  const handleDragBoxItem = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleDropBoxItem = (e) => {
    const targetId = e.dataTransfer.getData('text/plain', e.target.id);

    if (targetId === 'customBento-boxItem-vegBoxLeft') {
      setVegBoxLeftImg();
      setVegSidA(0);
      setVegNameA('');
      setVegPriceA(0);
      setVegCalA(0);
      setVegSidA(null);
    } // 左邊蔬菜區

    if (targetId === 'customBento-boxItem-vegBoxMiddle') {
      setVegBoxMiddleImg();
      setVegSidB(0);
      setVegNameB('');
      setVegPriceB(0);
      setVegCalB(0);
      setVegSidB(null);
    } // 中間蔬菜區

    if (targetId === 'customBento-boxItem-vegBoxRight') {
      setvegBoxRightImg();
      setVegSidC(0);
      setVegNameC('');
      setVegPriceC(0);
      setVegCalC(0);
      setVegSidC(null);
    } // 右邊蔬菜區

    if (targetId === 'customBento-boxItem-rice') {
      setRiceImg();
      setRiceName('');
      setRicePrice(0);
      setRiceCal(0);
      setRiceSid(null);
    } // 白飯區

    if (targetId === 'customBento-boxItem-meet') {
      setMeetImg();
      setMeetName('');
      setMeetPrice(0);
      setMeetCal(0);
      setMeetSid(null);
    } // 蛋區

    if (targetId === 'customBento-boxItem-egg') {
      setEggImg();
      setEggName('');
      setEggPrice(0);
      setEggCal(0);
      setEggSid(null);
    } // 主食區
  };

  const switchItems = (id) => {
    setIsShowHintA(false);
    setIsShowHintB(false);
    setIsShowHintC(false);
    setIsShowHintD(false);
    setIsShowHintE(false);
    setIsShowHintF(false);
    switch (id) {
      case 'rice-items':
        setSelection('rice'); // 開啟白飯選區
        setIsShowHintD(true);
        break;
      case 'meet-items':
        setSelection('meet'); // 開啟主菜選區
        setIsShowHintF(true);
        break;
      case 'vegetable-items':
        setSelection('vegetable'); // 開啟配菜選區
        setIsShowHintA(true);
        setIsShowHintB(true);
        setIsShowHintC(true);
        break;
      case 'egg-items':
        setSelection('egg'); // 開啟蛋選區
        setIsShowHintE(true);
        break;
    }
  };

  // 向後端請求資料
  useEffect(() => {
    fetch('http://localhost:5000/product/custom_list') // 非同步
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        const _data = [...res];
        setData(_data);
      });
  }, []);

  useEffect(() => {
    if (!data) {
      return;
    }
    let filterFoods = [];
    let _foods = [];

    if (selection === 'rice') {
      setPriority('100');
      filterFoods = data.filter((dataItem) => dataItem.categories === 'rice');
    }

    if (selection === 'meet') {
      setPriority('0');
      filterFoods = data.filter((dataItem) => dataItem.categories === 'meet');
    }

    if (selection === 'egg') {
      setPriority('0');
      filterFoods = data.filter((dataItem) => dataItem.categories === 'egg');
    }

    _foods = filterFoods.map((filterFood) => ({
      sid: filterFood.sid,
      productName: filterFood.productName,
      categories: filterFood.categories,
      price: filterFood.price,
      protein: filterFood.protein,
      fat: filterFood.fat,
      cabohydrate: filterFood.cabohydrate,
      calories: filterFood.calories,
      image: filterFood.image,
      unfoldImage: filterFood.unfoldImage,
      isAvailable: true,
    }));

    if (selection === 'vegetable') {
      setPriority('0');
      filterFoods = data.filter(
        (dataItem) => dataItem.categories === 'vegetable'
      );
      _foods = filterFoods.map((filterFood) => {
        let _isAvailable = true;
        if (
          filterFood.sid === vegSidA ||
          filterFood.sid === vegSidB ||
          filterFood.sid === vegSidC
        ) {
          _isAvailable = false;
        }
        return {
          sid: filterFood.sid,
          productName: filterFood.productName,
          categories: filterFood.categories,
          price: filterFood.price,
          protein: filterFood.protein,
          fat: filterFood.fat,
          cabohydrate: filterFood.cabohydrate,
          calories: filterFood.calories,
          image: filterFood.image,
          unfoldImage: filterFood.unfoldImage,
          isAvailable: _isAvailable,
        };
      });
    }

    setFoods(_foods);
  }, [data, selection, vegSidA, vegSidB, vegSidC]);

  const createOrder = () => {
    const postData = {
      path: '/custom_list',
      body: {
        vice: riceSid,
        main: meetSid,
        side1: vegSidA,
        side2: vegSidB,
        side3: vegSidC,
        egg: eggSid,
        count: count,
      },
    };

    ws.send(JSON.stringify(postData));
  };

  useEffect(() => {
    const _foodItems = foods.map((food, foodsIndex) => (
      <FoodItem
        foodItem={food}
        ref={$dragTarget}
        dragTargetId={`${selection}-${foodsIndex + 1}`}
        dragTargetClassName={'ru-items'}
        onDragStart={handleDragFoodItem}
        dragDataSid={food.sid}
        isAvailable={food.isAvailable}
      />
    ));
    setFoodItems(_foodItems);
  }, [foods]);

  // 購物車選購完畢開啟加入購物車按鈕邏輯
  useEffect(() => {
    if (
      // 開啟邏輯
      ricePrice !== 0 &&
      meetPrice !== 0 &&
      eggPrice !== 0 &&
      vegPriceA !== 0 &&
      vegPriceB !== 0 &&
      vegPriceC !== 0
    ) {
      setIsCanBuy(true);
    } else if (
      // 關閉邏輯
      ricePrice === 0 ||
      meetPrice === 0 ||
      eggPrice === 0 ||
      vegPriceA === 0 ||
      vegPriceB === 0 ||
      vegPriceC === 0
    ) {
      setIsCanBuy(false);
    }
  }, [ricePrice, meetPrice, eggPrice, vegPriceA, vegPriceB, vegPriceC]);

  if (!data && !foodItems) {
    // 以下都等抓完fetch才執行
    return <></>;
  }
  return (
    <>
      {/* 商品區 - 網頁版 s */}
      <div
        className="ru-custom-container"
        id="ru-dropArea"
        onDrop={handleDropBoxItem}
        onDragOver={allowDrop}
      >
        <div className="ru-custom-warp" id="ru-dropOutAreaA">
          <div className="ru-drop-container" id="ru-dropOutAreaB">
            <div className="ru-drop-warp" id="ru-dropOutAreaC">
              <div className="ru-box-container">
                <div className="ru-box-warp">
                  {isShowHint && <CustomHint />}
                  {/* 放置菜色A區vegA s*/}
                  <div id="ru-hintA">
                    {isShowHintA && <img src={hintA}></img>}
                  </div>
                  <div
                    id="custom-bento-vegBox-left"
                    ref={$vegBoxLeft}
                    onDrop={handleDropFoodItem}
                  >
                    <img
                      src={vegBoxLeftImg}
                      draggable="true"
                      className="customBento-box-container"
                      id="customBento-boxItem-vegBoxLeft"
                      onDragStart={handleDragBoxItem}
                    ></img>
                  </div>
                  {/* 放置菜色A區vegA e*/}
                  {/* 放置菜色B區vegB s*/}
                  <div id="ru-hintB">
                    {isShowHintB && <img src={hintB}></img>}
                  </div>

                  <div
                    id="ru-areaB"
                    ref={$vegBoxMiddle}
                    onDrop={handleDropFoodItem}
                  >
                    <img
                      src={vegBoxMiddleImg}
                      draggable="true"
                      className="customBento-box-container"
                      id="customBento-boxItem-vegBoxMiddle"
                      onDragStart={handleDragBoxItem}
                    ></img>
                  </div>
                  {/* 放置菜色B區vegB e*/}
                  {/* 放置菜色C區vegC s*/}
                  <div id="ru-hintC">
                    {isShowHintC && <img src={hintC}></img>}
                  </div>

                  <div
                    id="ru-areaC"
                    ref={$vegBoxRight}
                    onDrop={handleDropFoodItem}
                  >
                    <img
                      src={vegBoxRightImg}
                      draggable="true"
                      className="customBento-box-container"
                      id="customBento-boxItem-vegBoxRight"
                      onDragStart={handleDragBoxItem}
                    ></img>
                  </div>
                  {/* 放置菜色C區vegC e*/}
                  {/* 放置菜色D區rice s*/}
                  <div id="ru-hintD">
                    {isShowHintD && <img src={hintD}></img>}
                  </div>
                  <div id="ru-areaD" ref={$riceBox} onDrop={handleDropFoodItem}>
                    <img
                      src={riceImg}
                      draggable="true"
                      className="customBento-box-container"
                      id="customBento-boxItem-rice"
                      onDragStart={handleDragBoxItem}
                    ></img>
                  </div>
                  {/* 放置菜色D區rice e*/}
                  {/* 放置菜色E區egg s*/}
                  <div id="ru-hintE">
                    {isShowHintE && <img src={hintE}></img>}
                  </div>

                  <div id="ru-areaE" ref={$eggBox} onDrop={handleDropFoodItem}>
                    <img
                      src={eggImg}
                      draggable="true"
                      className="customBento-box-container"
                      id="customBento-boxItem-egg"
                      onDragStart={handleDragBoxItem}
                    ></img>
                  </div>
                  {/* 放置菜色E區egg e*/}
                  {/* 放置菜色F區meet s*/}
                  <div id="ru-hintF">
                    {isShowHintF && <img src={hintF}></img>}
                  </div>

                  <div id="ru-areaF" ref={$meetBox} onDrop={handleDropFoodItem}>
                    <img
                      src={meetImg}
                      draggable="true"
                      className="customBento-box-container"
                      id="customBento-boxItem-meet"
                      onDragStart={handleDragBoxItem}
                    ></img>
                  </div>
                  {/* 放置菜色F區meet e*/}
                  <LunchBox />
                </div>
              </div>
              {/*  詳細資訊 s */}
              <div
                className="ru-detail-container ru-detail-container-web"
                id="ru-dropOutAreaD"
              >
                <div className="ru-switchBtn-container">
                  {/* 是否開啟價格標示 */}
                  <button id={isPrice && 'ru-active'} onClick={switchPrice}>
                    今日菜色
                  </button>
                  {/* 是否開啟營養標示 */}
                  <button id={isCal && 'ru-active'} onClick={switchCal}>
                    營養標示
                  </button>
                </div>
                <div className="ru-info-container">
                  {isPrice && (
                    <PriceArea
                      riceName={riceName}
                      ricePrice={ricePrice}
                      meetName={meetName}
                      meetPrice={meetPrice}
                      eggName={eggName}
                      eggPrice={eggPrice}
                      vegNameA={vegNameA}
                      vegPriceA={vegPriceA}
                      vegNameB={vegNameB}
                      vegPriceB={vegPriceB}
                      vegNameC={vegNameC}
                      vegPriceC={vegPriceC}
                    />
                  )}
                  {isCal && (
                    <CalorieArea
                      data={data}
                      riceName={riceName}
                      riceCal={riceCal}
                      meetName={meetName}
                      meetCal={meetCal}
                      eggName={eggName}
                      eggCal={eggCal}
                      vegNameA={vegNameA}
                      vegCalA={vegCalA}
                      vegNameB={vegNameB}
                      vegCalB={vegCalB}
                      vegNameC={vegNameC}
                      vegCalC={vegCalC}
                    />
                  )}
                </div>
                <div className="ru-checkout-container">
                  <div className="ru-checkout-warp">
                    <Counter
                      setAmount={setAmount}
                      count={count}
                      setCount={setCount}
                    />
                    <Button
                      onClick={createOrder}
                      disabled={
                        vegSidA === null ||
                        vegSidB === null ||
                        vegSidC === null ||
                        riceSid === null ||
                        eggSid === null ||
                        meetSid === null
                      }
                    />
                    {/* {isCanBuy ? (
                      <AddCart
                        id={'addCart-btn-custom'}
                        parentId={'addCart-btn-warp-custom'}
                        handleCartNumber={handleCartNumber}
                        proudctId={todayId}
                        imgId={'23_custom'}
                        price={
                          ricePrice +
                          meetPrice +
                          eggPrice +
                          vegPriceA +
                          vegPriceB +
                          vegPriceC
                        }
                        title={'客製化便當'}
                        amount={amount}
                        setIsShowHintA={setIsShowHintA}
                        setIsShowHintB={setIsShowHintB}
                        setIsShowHintC={setIsShowHintC}
                        setIsShowHintD={setIsShowHintD}
                        setIsShowHintE={setIsShowHintE}
                        setIsShowHintF={setIsShowHintF}
                        count={count}
                      />
                    ) : (
                      <div
                        class="ru-isCanBuy"
                        style={{
                          width: '100%',
                          pointerEvents: 'none',
                          filter: 'grayscale(100%)',
                        }}
                      >
                        <AddCart
                          id={'addCart-btn-custom'}
                          parentId={'addCart-btn-warp-custom'}
                          handleCartNumber={handleCartNumber}
                          proudctId={todayId}
                          imgId={'23_custom'}
                          price={
                            ricePrice +
                            meetPrice +
                            eggPrice +
                            vegPriceA +
                            vegPriceB +
                            vegPriceC
                          }
                          title={'客製化便當'}
                          amount={amount}
                          setIsShowHintA={setIsShowHintA}
                          setIsShowHintB={setIsShowHintB}
                          setIsShowHintC={setIsShowHintC}
                          setIsShowHintD={setIsShowHintD}
                          setIsShowHintE={setIsShowHintE}
                          setIsShowHintF={setIsShowHintF}
                        />
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
              {/*  詳細資訊 e */}
            </div>
          </div>
          <div className="ru-drag-container">
            <div className="ru-drag-warp">
              <div className="ru-selection-container">
                <div className="ru-selection-warp">
                  {optionButtonSettings.map((optionButtonSetting) => (
                    <OptionButton
                      text={optionButtonSetting.text}
                      id={optionButtonSetting.id}
                      onClick={() => {
                        switchItems(optionButtonSetting.id);
                      }}
                      isSelected={optionButtonSetting.selected}
                    />
                  ))}
                </div>
              </div>
              <MultiCarousel
                infinite
                responsive={MultiCarouselResponsive}
                className="ru-multi-carousel"
              >
                {foodItems.map((foodItem) => foodItem)}
              </MultiCarousel>
            </div>
          </div>
        </div>

        {/* <div> */}
        {/* <img id="customBento-background" src={background} /> */}
        {/* </div> */}
      </div>
      {/* 商品區 - 網頁版 e */}
    </>
  );
}

export default CustomBento;
