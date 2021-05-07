import React, { useState } from 'react';
import RuBento from 'Ru/Components/RuCards/RuBento/RuBento';
import RuButton from 'Ru/Components/RuButton/RuButton';
import SearchBar from 'components/searchBar/SearchBar';
import 'pages/productList/productList.scss';

// 引用共用元件
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
// 引用圖片
import line from './Images/line.png';

function ProductList(props) {
  const { handleCartNumber, currentUser, count, setCount } = props;
  const [searchInput, setSearchInput] = useState('');
  const [openBento, setOpenBento] = useState(false); // 判斷便當按鈕是否要亮
  const [openSalad, setOpenSalad] = useState(false); // 判斷沙拉按鈕是否要亮
  const [openCustom, setOpenCustom] = useState(false); // 判斷客製化按鈕是否要亮
  const buttonAttributes = [
    {
      text: '低GI便當',
      className: 'ru-button-btn',
      id: 'ru-button-btn-1',
    },
    {
      text: '鮮蔬沙拉',
      className: 'ru-button-btn',
      id: 'ru-button-btn-2',
    },
    {
      text: '客製化便當',
      className: 'ru-button-btn',
      id: 'ru-button-btn-3',
    },
    {
      text: '蔬菜箱',
      className: 'ru-button-btn-g',
      id: 'ru-button-btn-4',
    },
  ];
  const onSearch = () => {
    console.log('A');
  };

  return (
    <>
      <section className="top-space"></section>
      <section className="mainImg-warp">
        <h1>享受美食 不需要理由</h1>
        <div className="mainImg"></div>
      </section>
      <section className="productList-container">
        <div className="optionWarp">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onSearch={onSearch}
          />
          <div className="ru-buttonWarp">
            {buttonAttributes.map((buttonAttribute) => (
              <RuButton
                text={buttonAttribute.text}
                className={buttonAttribute.className}
                id={buttonAttribute.id}
                openBento={openBento}
                setOpenBento={setOpenBento}
                openSalad={openSalad}
                setOpenSalad={setOpenSalad}
                openCustom={openCustom}
                setOpenCustom={setOpenCustom}
                onSearch={onSearch}
              />
            ))}
          </div>
        </div>
        <div className="line">
          <img src={line}></img>
        </div>
      </section>
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

export default ProductList;
