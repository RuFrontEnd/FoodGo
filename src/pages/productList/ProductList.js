import React, { useState } from 'react';
import OptionButton from 'components/optionButton/OptionButton';
import BentoList from 'components/bentoList/BentoList';
import RuSalad from 'Ru/Components/RuCards/RuSalad/RuSalad';
import RuCustom from 'Ru/Components/RuCards/RuCustom/RuCustom';
import SearchBar from 'components/searchBar/SearchBar';
import 'pages/productList/productList.scss';

// 引用共用元件
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
// 引用圖片
import line from './Images/line.png';

function ProductList(props) {
  const { handleCartNumber, currentUser, count, setCount } = props;
  const [searchInput, setSearchInput] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([
    true,
    false,
    false,
    false,
  ]);
  const buttonAttributes = [
    {
      text: '低GI便當',
      isSelected: selectedTypes[0],
      index: 0,
      type: 'origin',
    },
    {
      text: '鮮蔬沙拉',
      isSelected: selectedTypes[1],
      index: 1,
      type: 'origin',
    },
    {
      text: '客製化便當',
      isSelected: selectedTypes[2],
      index: 2,
      type: 'origin',
    },
    {
      text: '蔬菜箱',
      isSelected: selectedTypes[3],
      index: 3,
      type: 'green',
      routes: '/vegBox',
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
          <div className="buttonWarp">
            {buttonAttributes.map((buttonAttribute) => (
              <OptionButton
                text={buttonAttribute.text}
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
                isSelected={buttonAttribute.isSelected}
                index={buttonAttribute.index}
                type={buttonAttribute.type}
                routes={buttonAttribute.routes}
                onSearch={onSearch}
              />
            ))}
          </div>
        </div>
        <div className="line">
          <img src={line}></img>
        </div>
      </section>
      {selectedTypes[0] && (
        <BentoList
          searchInput={searchInput}
          handleCartNumber={handleCartNumber} // localStorage method
          currentUser={currentUser}
          count={count}
          setCount={setCount}
        />
      )}
      {/* {selectedTypes[0] && (
        <RuBento
          searchInput={searchInput}
          handleCartNumber={handleCartNumber} // localStorage method
          currentUser={currentUser}
          count={count}
          setCount={setCount}
        />
      )} */}
      <ScrollButton />
    </>
  );
}

export default ProductList;
