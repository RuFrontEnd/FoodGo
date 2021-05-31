import React, { useState, useEffect } from 'react';
import OptionButton from 'components/optionButton/OptionButton';
import CommodityList from 'components/commodityList/CommodityList';
import CustomBento from 'components/customBento/CustomBento';
import SearchBar from 'components/searchBar/SearchBar';
import axios from 'axios';
import 'pages/productList/productList.scss';
import { useLocation } from 'react-router-dom';

// 引用共用元件
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
// 引用圖片
import line from './Images/line.png';

function ProductList(props) {


  const { handleCartNumber, currentUser, amount, setAmount } = props;
  let location = useLocation(); // react-bootStrap-hook => get Nav.link state
  const { currentOption } = location.state;
  const [commodities, setCommodities] = useState([]);
  const [favorites, setFavorites] = useState('');
  const [count, setCount] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([
    false,
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

  const getBentoData = (categories) => {
    axios.get('http://localhost:5000/product/bento').then((res) => {
      const _commodities = res.data.filter(
        (dataItem) => dataItem.categories === categories
      );
      setCommodities(_commodities);
    });
    axios.get('http://localhost:5000/member/myFavList').then((res) => {
      setFavorites(res.data);
    });
  };

  const filterData = () => {
    if (selectedTypes[0] === true) {
      axios.get('http://localhost:5000/product/bento').then((res) => {
        const _commodities = res.data.filter(
          (dataItem) =>
            dataItem.categories === '1.低GI便當' &&
            dataItem.productname.includes(searchInput)
        );
        setCommodities(_commodities);
      });
    }
    if (selectedTypes[1] === true) {
      axios.get('http://localhost:5000/product/bento').then((res) => {
        const _commodities = res.data.filter(
          (dataItem) =>
            dataItem.categories === '2.蔬食沙拉' &&
            dataItem.productname.includes(searchInput)
        );
        setCommodities(_commodities);
      });
    }
  };

  useEffect(() => {
    if (currentOption === undefined) {
      return;
    }
    if (currentOption === 'bento') {
      return setSelectedTypes([true, false, false, false]);
    }
    if (currentOption === 'salad') {
      return setSelectedTypes([false, true, false, false]);
    }
    if (currentOption === 'custom') {
      return setSelectedTypes([false, false, true, false]);
    }
  }, []);

  useEffect(() => {
    if (selectedTypes[0] === true) {
      return getBentoData('1.低GI便當');
    }
    if (selectedTypes[1] === true) {
      return getBentoData('2.蔬食沙拉');
    }
  }, [selectedTypes]); // get backend data

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
            onSearch={filterData}
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
              />
            ))}
          </div>
        </div>
        <div className="line">
          <img src={line}></img>
        </div>
      </section>
      {(selectedTypes[0] || selectedTypes[1]) && (
        <CommodityList
          commodities={commodities}
          favorites={favorites}
          searchInput={searchInput}
          handleCartNumber={handleCartNumber} // localStorage method
          currentUser={currentUser}
          count={count}
          setCount={setCount}
        />
      )}
      {selectedTypes[2] && (
        <CustomBento
          handleCartNumber={handleCartNumber}
          setAmount={setAmount}
          amount={amount}
          count={count}
          setCount={setCount}
        />
      )}
      <ScrollButton />
    </>
  );
}

export default ProductList;
