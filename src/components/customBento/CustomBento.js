import React, { useState, useEffect, useRef } from 'react';
import 'components/customBento/customBento.scss';
import RuArrowLeft from 'Ru/Components/RuArrowLeft/RuArrowLeft';
import RuArrowRight from 'Ru/Components/RuArrowRight/RuArrowRight';
import RuButtonB from 'Ru/Components/RuButtonB/RuButtonB';
import RuCounter from 'Ru/Components/RuCounter/RuCounter';
import RuAddCart from 'Ru/Components/RuAddCart/RuAddCart';
import RuPriceA from 'Ru/Components/RuPriceA/RuPriceA'; // 資訊區價格 網頁版
import RuCalA from 'Ru/Components/RuCalA/RuCalA'; // 資訊區熱量 網頁版
import RuRiceA from 'Ru/Components/RuFoodItems/RuRiceA/RuRiceA';
import RuMeetA from 'Ru/Components/RuFoodItems/RuMeetA/RuMeetA';
import RuVegetableA from 'Ru/Components/RuFoodItems/RuVegetableA/RuVegetableA';
import RuEggA from 'Ru/Components/RuFoodItems/RuEggA/RuEggA';
import RuCutsomHint from 'Ru/Components/RuCutsomHint/RuCutsomHint';
import Carousel from 'components/carousel/Carousel';
import FoodItem from 'components/foodItem/FoodItem';

// 引用共用元件
import cauliflower from './Images/cauliflower.svg'; // rwd暫放(待刪)
// 品項放置後s
import cauliflowerAfter from './Images/cauliflowerAfter.svg';
import cabageAfter from './Images/cabageAfter.svg';
import cornAfter from './Images/cornAfter.svg';
import qingjiangAfter from './Images/qingjiangAfter.svg';
import eggplantAfter from './Images/eggplantAfter.svg';
import eggAfter from './Images/eggAfter.svg';
import poachedEggAfter from './Images/poachedEggAfter.svg';
import riceAfter from './Images/riceAfter.svg';
import grainRiceAfter from './Images/grainRiceAfter.svg';
import redQuinoaAfter from './Images/redQuinoaAfter.svg';
import chickenBreastAfter from './Images/chickenBreastAfter.svg';
import chickenLegAfter from './Images/chickenLegAfter.svg';
import shrimpAfter from './Images/shrimpAfter.svg';

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

function CustomBento(props) {
  const { handleCartNumber, amount, setAmount, count, setCount } = props;
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

  // 設定 今日菜色(價格) 資訊
  const [riceName, setRiceName] = useState('');
  const [ricePrice, setRicePrice] = useState(0);
  const [riceCal, setRiceCal] = useState(0);
  const [meetName, setMeetName] = useState('');
  const [meetPrice, setMeetPrice] = useState(0);
  const [meetCal, setMeetCal] = useState(0);
  const [eggName, setEggName] = useState('');
  const [eggPrice, setEggPrice] = useState(0);
  const [eggCal, setEggCal] = useState(0);
  const [vegNameA, setVegNameA] = useState('');
  const [vegPriceA, setVegPriceA] = useState(0);
  const [vegCalA, setVegCalA] = useState(0);
  const [vegNameB, setVegNameB] = useState('');
  const [vegPriceB, setVegPriceB] = useState(0);
  const [vegCalB, setVegCalB] = useState(0);
  const [vegNameC, setVegNameC] = useState('');
  const [vegPriceC, setVegPriceC] = useState(0);
  const [vegCalC, setVegCalC] = useState(0);

  // 配菜區還可否被選擇
  const [veg1available, setVeg1available] = useState(true);
  const [veg2available, setVeg2available] = useState(true);
  const [veg3available, setVeg3available] = useState(true);
  const [veg4available, setVeg4available] = useState(true);
  const [veg5available, setVeg5available] = useState(true);

  // 標記入box內的是哪種蔬菜
  const [putAclass, setPutAclass] = useState('ru-put');
  const [putBclass, setPutBclass] = useState('ru-put');
  const [putCclass, setPutCclass] = useState('ru-put');

  // 是否可以購買
  const [isCanBuy, setIsCanBuy] = useState(false);

  // 包後端資料的state
  const [data, setData] = useState('');
  const [foods, setFoods] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

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

  // 品項放到目標容器
  const handleDropFoodItem = (e) => {
    setPriority('0'); // 白飯容器優先結束
    setIsShowHint(false); // 東西放完就關閉示字樣
    let datasetSid = Number(
      e.dataTransfer.getData('text/plain', e.target.dataset.sid)
    );

    let _foods = [...foods];
    if (e.target.id === $vegBoxLeft.current.id) {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setVegBoxLeftImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setVegNameA(_food.productName);
          setVegPriceA(_food.price);
          setVegCalA(_food.calories);
          _food.isAvailable = false;
        }
      });
    } // 左邊蔬菜區

    if (e.target.id === $vegBoxMiddle.current.id) {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setVegBoxMiddleImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setVegNameB(_food.productName);
          setVegPriceB(_food.price);
          setVegCalB(_food.calories);
        }
      });
    } // 中間蔬菜區

    if (e.target.id === $vegBoxRight.current.id) {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setvegBoxRightImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setVegNameC(_food.productName);
          setVegPriceC(_food.price);
          setVegCalC(_food.calories);
        }
      });
    } // 右邊蔬菜區

    if (e.target.id === $riceBox.current.id) {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setRiceImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setRiceName(_food.productName);
          setRicePrice(_food.price);
          setRiceCal(_food.calories);
        }
      });
    } // 白飯區

    if (e.target.id === $meetBox.current.id) {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setMeetImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
          setMeetName(_food.productName);
          setMeetPrice(_food.price);
          setMeetCal(_food.calories);
        }
      });
    } // 主食區

    if (e.target.id === $eggBox.current.id) {
      _foods.forEach((_food) => {
        if (datasetSid === _food.sid) {
          setEggImg(`http://localhost:5000/svg/${_food.unfoldImage}`);
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

  const handleDropBoxItem = (e) => {
    // console.log(e.target.id !== $vegBoxLeft.current.id);
    const targetId = e.dataTransfer.getData('text/plain', e.target.id);
    if (targetId === 'customBento-foodItem-vegBoxLeft') {
      setVegBoxLeftImg();
      setVegNameA();
      setVegPriceA();
      setVegCalA();
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
    if (selection === 'rice') {
      setPriority('100');
      filterFoods = data.filter((dataItem) => dataItem.categories === 'rice');
    }
    if (selection === 'vegetable') {
      setPriority('0');
      filterFoods = data.filter(
        (dataItem) => dataItem.categories === 'vegetable'
      );
    }
    if (selection === 'meet') {
      setPriority('0');
      filterFoods = data.filter((dataItem) => dataItem.categories === 'meet');
    }
    if (selection === 'egg') {
      setPriority('0');
      filterFoods = data.filter((dataItem) => dataItem.categories === 'egg');
    }
    const _foods = filterFoods.map((filterFood) => ({
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
    setFoods(_foods);
  }, [data, selection]);

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

  useEffect(() => {
    // 品項置入便當盒 邏輯
    if (!data && !foodItems) {
      return;
    }
    const items = document.querySelectorAll('.ru-items');
    // console.log(items);
    const puts = document.querySelectorAll('.ru-put');
    // console.log(puts)
    const $dropTarget = document.getElementById('ru-dropArea');

    items.forEach((i) => {
      i.addEventListener('dragstart', dragStart); // drag
    });
    puts.forEach((i) => {
      i.addEventListener('dragstart', dragStart); // drag
    });
    // $dragSource.addEventListener('drag', drag) // drag
    // $dragSource.addEventListener('dragend', dragend) // drag
    $dropTarget.addEventListener('dragenter', dragenter); // drop
    $dropTarget.addEventListener('dragover', dragover); // drop
    $dropTarget.addEventListener('dragleave', dragleave); // drag
    $dropTarget.addEventListener('drop', dropped); // drop

    // 來源 - 開始拖曳時
    function dragStart(e) {
      // console.log('e.target.id', e.target.id);
      if (e.target.classList.contains('ru-rice')) {
        // 如果是白飯選區內的選項
        setPriority('100'); // 白飯容器就優先
      }
      e.dataTransfer.setData('text/plain', e.target.id); // 把 source 的id往drop事件傳遞
    }

    // 來源 - 拖曳中時
    function drag(e) {}

    // 來源 - 拖曳結束時
    function dragend(e) {}

    // 目的地 - 進到放置區時
    function dragenter(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // 目的地 - 進到放置區時拖動(反覆觸發)
    function dragover(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // 目的地 - 離開放置區時
    function dragleave(e) {}

    // 目的地 - 放下時
    function dropped(e) {}

    function dragleave(e) {
      // console.log('dragleave')
    }
  }, [
    vegBoxLeftImg,
    vegBoxMiddleImg,
    vegBoxRightImg,
    riceImg,
    meetImg,
    eggImg,
    selection,
    isCanBuy,
    data,
    foodItems,
  ]); // 要加入selection, 不然切換菜色選區後抓不到真實DOM

  // 購物車選購完畢開啟加入購物車按鈕邏輯
  useEffect(() => {
    // console.log(ricePrice !== 0)
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
      {/* <div>{data[3].sid}</div> */}
      {/* 商品區 - 網頁版 s */}
      <div
        className="ru-custom-container"
        id="ru-dropArea"
        onDrop={handleDropBoxItem}
      >
        <div className="ru-custom-warp" id="ru-dropOutAreaA">
          <div className="ru-drop-container" id="ru-dropOutAreaB">
            <div className="ru-drop-warp" id="ru-dropOutAreaC">
              <div className="ru-box-container">
                <div className="ru-box-warp">
                  {isShowHint && <RuCutsomHint />}
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
                      className="customBento-put-container"
                      id="customBento-foodItem-vegBoxLeft"
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
                      className="customBento-put-container"
                      id="customBento-foodItem-vegBoxMiddle"
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
                      className="customBento-put-container"
                      id="customBento-foodItem-vegBoxRight"
                      onDragStart={handleDragBoxItem}
                    ></img>
                  </div>
                  {/* 放置菜色C區vegC e*/}
                  {/* 放置菜色D區rice s*/}
                  <div id="ru-hintD">
                    {isShowHintD && <img src={hintD}></img>}
                  </div>
                  <div
                    id="ru-areaD"
                    ref={$riceBox}
                    style={{ zIndex: priority }}
                    onDrop={handleDropFoodItem}
                  >
                    <img
                      src={riceImg}
                      draggable="true"
                      className="customBento-put-container"
                      id="customBento-foodItem-rice"
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
                      className="customBento-put-container"
                      id="customBento-foodItem-egg"
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
                      className="customBento-put-container"
                      id="customBento-foodItem-meet"
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
                    <RuPriceA
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
                    <RuCalA
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
                    <RuCounter
                      setAmount={setAmount}
                      count={count}
                      setCount={setCount}
                    />
                    {isCanBuy ? (
                      <RuAddCart
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
                        <RuAddCart
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
                    )}
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
                  <RuButtonB
                    text={'副食'}
                    id={'ru-buttonB-rice'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                    isShowHintA={isShowHintA}
                    setIsShowHintA={setIsShowHintA}
                    isShowHintB={isShowHintB}
                    setIsShowHintB={setIsShowHintB}
                    isShowHintC={isShowHintC}
                    setIsShowHintC={setIsShowHintC}
                    isShowHintD={isShowHintD}
                    setIsShowHintD={setIsShowHintD}
                    isShowHintE={isShowHintE}
                    setIsShowHintE={setIsShowHintE}
                    isShowHintF={isShowHintF}
                    setIsShowHintF={setIsShowHintF}
                  />
                  <RuButtonB
                    text={'主食'}
                    id={'ru-buttonB-meet'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                    isShowHintA={isShowHintA}
                    setIsShowHintA={setIsShowHintA}
                    isShowHintB={isShowHintB}
                    setIsShowHintB={setIsShowHintB}
                    isShowHintC={isShowHintC}
                    setIsShowHintC={setIsShowHintC}
                    isShowHintD={isShowHintD}
                    setIsShowHintD={setIsShowHintD}
                    isShowHintE={isShowHintE}
                    setIsShowHintE={setIsShowHintE}
                    isShowHintF={isShowHintF}
                    setIsShowHintF={setIsShowHintF}
                  />
                  <RuButtonB
                    text={'配菜'}
                    id={'ru-buttonB-vegetable'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                    isShowHintA={isShowHintA}
                    setIsShowHintA={setIsShowHintA}
                    isShowHintB={isShowHintB}
                    setIsShowHintB={setIsShowHintB}
                    isShowHintC={isShowHintC}
                    setIsShowHintC={setIsShowHintC}
                    isShowHintD={isShowHintD}
                    setIsShowHintD={setIsShowHintD}
                    isShowHintE={isShowHintE}
                    setIsShowHintE={setIsShowHintE}
                    isShowHintF={isShowHintF}
                    setIsShowHintF={setIsShowHintF}
                  />
                  <RuButtonB
                    text={'蛋'}
                    id={'ru-buttonB-egg'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                    isShowHintA={isShowHintA}
                    setIsShowHintA={setIsShowHintA}
                    isShowHintB={isShowHintB}
                    setIsShowHintB={setIsShowHintB}
                    isShowHintC={isShowHintC}
                    setIsShowHintC={setIsShowHintC}
                    isShowHintD={isShowHintD}
                    setIsShowHintD={setIsShowHintD}
                    isShowHintE={isShowHintE}
                    setIsShowHintE={setIsShowHintE}
                    isShowHintF={isShowHintF}
                    setIsShowHintF={setIsShowHintF}
                  />
                </div>
              </div>
              <Carousel
                id={'customBento-carousel'}
                CarouselItems={foodItems}
                width={1170}
                buttonSize={100}
                breakpoints={{
                  s: { point: 576, width: 400, btnsize: 100 },
                  m: { point: 768, width: 800, btnsize: 100 },
                  l: { point: 1024, width: 960, btnsize: 100 },
                  xl: { point: 1200, width: 1170, btnsize: 100 },
                  xxl: { point: 1440, width: 1170, btnsize: 100 },
                }}
              />
            </div>
          </div>
          {/* rwd 詳細資訊 s */}
          <div
            className="ru-detail-container ru-detail-container-rwd"
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
                <RuPriceA
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
                <RuCalA
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
                <RuCounter
                  setAmount={setAmount}
                  count={count}
                  setCount={setCount}
                />
                {isCanBuy ? (
                  <RuAddCart
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
                    <RuAddCart
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
                )}
              </div>
            </div>
          </div>
        </div>
        {/* rwd 詳細資訊 e */}

        {/* 背景米圖 s */}
        <img id="customBento-background" src={background}></img>
        {/* 背景米圖 e */}
      </div>
      {/* 商品區 - 網頁版 e */}
    </>
  );
}

export default CustomBento;
