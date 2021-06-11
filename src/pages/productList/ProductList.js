import React, { useState, useEffect, useCallback } from 'react';
import { endpoint } from 'variable/variable';
import 'pages/productList/productList.scss';
import OptionButton from 'components/optionButton/OptionButton';
import CommodityList from 'components/commodityList/CommodityList';
import CustomBento from 'components/customBento/CustomBento';
import SearchBar from 'components/searchBar/SearchBar';
import axios from 'axios';

// 引用共用元件
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
// 引用圖片
import line from './Images/line.png';

function ProductList(props) {
  const { handleCartNumber, amount, setAmount } = props;
  const [commodities, setCommodities] = useState([]);
  const [favorites, setFavorites] = useState('');
  const [count, setCount] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const buttonAttributes = [
    {
      text: '低GI便當',
      isSelected: true,
      type: '/productList',
    },
    {
      text: '鮮蔬沙拉',
      isSelected: false,
      type: '/productListSalad',
    },
    {
      text: '客製化便當',
      isSelected: false,
      type: '/productListCustom',
    },
    {
      text: '蔬菜箱',
      isSelected: false,
      type: 'green',
      routes: '/vegBox',
    },
  ];

  const getData = useCallback(() => {
    axios.get(`${endpoint}/product/bento`).then((res) => {
      console.log('res', res);
      const _commodities = res.data.filter(
        (dataItem) => dataItem.categories === '1.低GI便當'
      );
      console.log('_commodities', _commodities);
      setCommodities(_commodities);
    });
    axios.get(`${endpoint}/member/myFavList`).then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const filterData = () => {
    const filterCommodities = [...commodities];
    const _commodities = filterCommodities.filter((filterCommodity) =>
      filterCommodity.productname.includes(searchInput)
    );
    setCommodities(_commodities);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <section className="mainImg-warp">
        <h1>享受美食 不需要理由</h1>
        <div className="mainImg"></div>
      </section>
      <section className="productList-container">
        <div className="optionWarp">
          <div className="productList-option-area">
            <SearchBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              onSearch={filterData}
            />
            <div className="buttonWarp">
              {buttonAttributes.map((buttonAttribute) => (
                <OptionButton
                  className={'productList-option-button'}
                  text={buttonAttribute.text}
                  isSelected={buttonAttribute.isSelected}
                  routes={buttonAttribute.routes}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="line">
          <img src={line}></img>
        </div>
      </section>
      <CommodityList
        commodities={commodities}
        favorites={favorites}
        searchInput={searchInput}
        handleCartNumber={handleCartNumber} // localStorage method
        count={count}
        setCount={setCount}
      />
      <ScrollButton />
    </>
  );
}

export default ProductList;
