import React, { useState } from 'react';
import RuBento from 'Ru/Components/RuCards/RuBento/RuBento';
import RuButton from 'Ru/Components/RuButton/RuButton';
import RuSearchBar from 'Ru/Components/RuSearchBar/RuSearchBar';
import 'Ru/Components/RuComps/Style.scss';

// 引用共用元件
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
// 引用圖片
import line from './Images/line.png';

function RuCompBento(props) {
  // console.log(props);
  const { handleCartNumber, currentUser, count, setCount } = props;
  const [searchInput, setSearchInput] = useState('');
  const [openBento, setOpenBento] = useState(false); // 判斷便當按鈕是否要亮
  const [openSalad, setOpenSalad] = useState(false); // 判斷沙拉按鈕是否要亮
  const [openCustom, setOpenCustom] = useState(false); // 判斷客製化按鈕是否要亮
  // console.log(searchInput);

  // JSX
  return (
    <>
      <div className="top-space"></div>

      <div className="ru-mainImg-warp">
        <h1>享受美食 不需要理由</h1>
        <div className="ru-mainImg"></div>
      </div>

      <div className="ru-productList-container">
        <div className="ru-optionWarp">
          <RuSearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />

          <section className="ru-buttonWarp">
            <RuButton
              text={'低GI便當'}
              className={'ru-button-btn'}
              id={'ru-button-btn-1'}
              openBento={openBento}
              setOpenBento={setOpenBento}
              openSalad={openSalad}
              setOpenSalad={setOpenSalad}
              openCustom={openCustom}
              setOpenCustom={setOpenCustom}
            />
            <RuButton
              text={'鮮蔬沙拉'}
              className={'ru-button-btn'}
              id={'ru-button-btn-2'}
              openBento={openBento}
              setOpenBento={setOpenBento}
              openSalad={openSalad}
              setOpenSalad={setOpenSalad}
              openCustom={openCustom}
              setOpenCustom={setOpenCustom}
            />
            <RuButton
              text={'客製化便當'}
              className={'ru-button-btn'}
              id={'ru-button-btn-3'}
              openBento={openBento}
              setOpenBento={setOpenBento}
              openSalad={openSalad}
              setOpenSalad={setOpenSalad}
              openCustom={openCustom}
              setOpenCustom={setOpenCustom}
            />
            <RuButton
              text={'蔬菜箱'}
              className={'ru-button-btn-g'}
              id={'ru-button-btn-4'}
              openBento={openBento}
              setOpenBento={setOpenBento}
              openSalad={openSalad}
              setOpenSalad={setOpenSalad}
              openCustom={openCustom}
              setOpenCustom={setOpenCustom}
            />
          </section>
        </div>

        <div className="ru-line">
          <img src={line}></img>
        </div>
      </div>
      <RuBento
        searchInput={searchInput}
        handleCartNumber={handleCartNumber} // localStorage函式
        currentUser={currentUser}
        count={count}
        setCount={setCount}
      />
      <ScrollButton />
    </>
  );
}

export default RuCompBento;
