import { set } from 'date-fns';
import React, { useState, useEffect } from 'react';
import './Style.scss';

function RuButtonB(props) {
  // text 按鈕文字
  // className 橘色樣式為button-btn 綠色樣式為button-btn-g
  const {
    text,
    id,
    selection,
    setSelection,
    moveX,
    setMoveX,
    btnBClassName,
    setBtnBClassName,
    limitX,
    setLimitX,
    isShowHintA,
    setIsShowHintA,
    isShowHintB,
    setIsShowHintB,
    isShowHintC,
    setIsShowHintC,
    isShowHintD,
    setIsShowHintD,
    isShowHintE,
    setIsShowHintE,
    isShowHintF,
    setIsShowHintF,
  } = props;

  // 當瀏覽器resize時要變動state值
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', (e) => {
    setWindowWidth(e.target.innerWidth);
    setMoveX(0)
  });

  function handleSelection() {
    const $rice = document.getElementById('ru-buttonB-rice');
    const $meet = document.getElementById('ru-buttonB-meet');
    const $vegetable = document.getElementById('ru-buttonB-vegetable');
    const $egg = document.getElementById('ru-buttonB-egg');

    // 宣告預設值
    $rice.className = 'ru-buttonB';
    $meet.className = 'ru-buttonB';
    $vegetable.className = 'ru-buttonB';
    $egg.className = 'ru-buttonB';

    switch (id) {
      case 'ru-buttonB-rice':
        setSelection('rice'); // 開啟白飯選區
        setMoveX(0); // 選擇品項按鈕點擊時退回原位
        $rice.className = 'ru-buttonB ru-buttonB-active';
        setIsShowHintA(false);
        setIsShowHintB(false);
        setIsShowHintC(false);
        setIsShowHintD(true);
        setIsShowHintE(false);
        setIsShowHintF(false);
        // setLimitX(-100); // 這邊調配右滑極限值
        break;
      case 'ru-buttonB-meet':
        setSelection('meet'); // 開啟主菜選區
        setMoveX(0);
        $meet.className = 'ru-buttonB ru-buttonB-active';
        setIsShowHintA(false);
        setIsShowHintB(false);
        setIsShowHintC(false);
        setIsShowHintD(false);
        setIsShowHintE(false);
        setIsShowHintF(true);
        // setLimitX(-100); // 這邊調配右滑極限值
        break;
      case 'ru-buttonB-vegetable':
        setSelection('vegetable'); // 開啟配菜選區
        setMoveX(0);
        $vegetable.className = 'ru-buttonB ru-buttonB-active';
        setIsShowHintA(true);
        setIsShowHintB(true);
        setIsShowHintC(true);
        setIsShowHintD(false);
        setIsShowHintE(false);
        setIsShowHintF(false);
        // setLimitX(-750); // 這邊調配右滑極限值
        break;
      case 'ru-buttonB-egg':
        setSelection('egg'); // 開啟蛋選區
        setMoveX(0);
        $egg.className = 'ru-buttonB ru-buttonB-active';
        setIsShowHintA(false);
        setIsShowHintB(false);
        setIsShowHintC(false);
        setIsShowHintD(false);
        setIsShowHintE(true);
        setIsShowHintF(false);
        // setLimitX(0); // 這邊調配右滑極限值
        break;
    }
  }

  useEffect(() => {
    // 一開始就亮副食選區
    const $rice = document.getElementById('ru-buttonB-rice');
    $rice.className = 'ru-buttonB ru-buttonB-active';

    return () => {};
  }, []);

  useEffect(() => {
    // 當 selection 被改變時, 重抓一次右滑極限值
    // const outerContainer = document.querySelector('.ru-species-warp');
    // const outerContainerWidth = outerContainer.offsetWidth;
    // console.log('總容器寬度', outerContainerWidth);
    // // 轉換容器總寬度必為10的倍數
    // const formatInt = (num, prec = 1, ceil = true) => {
    //   const len = String(num).length;
    //   if (len <= prec) {
    //     return num;
    //   }
    //   const mult = Math.pow(10, prec);
    //   return ceil
    //     ? Math.ceil(num / mult) * mult
    //     : Math.floor(num / mult) * mult;
    // };
    // let baseWidth = -outerContainerWidth; //基數
    // let limitNum = 0;
    // console.log('基值', baseWidth);
    // console.log('基值乘數', baseWidth * 0.09);
    const B = document.querySelectorAll('.ru-species-item');
    const C = [...B];
    // console.log(windowWidth);

    if (windowWidth > 1365.99) {
      if (C.length < 3) {
        // limitNum = formatInt(baseWidth * 0);
        // console.log('limitNum值', limitNum);
        setLimitX(0);
      } else if (C.length === 3) {
        // limitNum = formatInt(baseWidth * 0.11);
        // console.log('limitNum值', limitNum);
        setLimitX(-80);
      } else if (C.length > 3) {
        // limitNum = formatInt(baseWidth * 0.81);
        // console.log('limitNum值', limitNum);
        setLimitX(-750);
      }
    }
    if (windowWidth < 1366 && windowWidth > 991.9) {
      if (C.length < 3) {
        setLimitX(0);
      } else if (C.length === 3) {
        setLimitX(-320);
      } else if (C.length > 3) {
        setLimitX(-980);
      }
    }
    if (windowWidth < 992 && windowWidth > 767.99) {
      if (C.length < 3) {
        setLimitX(-80);
      } else if (C.length === 3) {
        setLimitX(-480);
      } else if (C.length > 3) {
        setLimitX(-1150);
      }
    }
    if (windowWidth < 768 && windowWidth > 575.99) {
      if (C.length < 3) {
        setLimitX(-340);
      } else if (C.length === 3) {
        setLimitX(-700);
      } else if (C.length > 3) {
        setLimitX(-1400);
      }
    }
    if (windowWidth < 576) {
      if (C.length < 3) {
        setLimitX(-250);
      } else if (C.length === 3) {
        setLimitX(-500);
      } else if (C.length > 3) {
        setLimitX(-1000);
      }
    }
    // return () => {};
  }, [selection, windowWidth]);

  return (
    <>
      <button className="ru-buttonB" id={id} onClick={handleSelection}>
        {text}
      </button>
    </>
  );
}

export default RuButtonB;
