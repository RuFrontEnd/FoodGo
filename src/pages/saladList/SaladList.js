import React, { useState, useEffect, useCallback } from 'react';
import { endpoint } from 'variable/variable';
import 'pages/productList/productList.scss';
import OptionButton from 'components/optionButton/OptionButton';
import CommodityList from 'components/commodityList/CommodityList';
import ProductFeatureBar from 'components/productFeatureBar/ProductFeatureBar';
import SearchBar from 'components/searchBar/SearchBar';
import axios from 'axios';
import productListBanner from 'assets/jpg/proudctList-banner.jpg';

// 引用共用元件
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';

function SaladList(props) {
  const { handleCartNumber, amount, setAmount } = props;
  const [commodities, setCommodities] = useState([]);
  const [favorites, setFavorites] = useState('');
  const [count, setCount] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const buttonAttributes = [
    {
      text: '低GI便當',
      isSelected: true,
      type: 'origin',
      routes: '/productList',
    },
    {
      text: '鮮蔬沙拉',
      isSelected: false,
      type: 'origin',
      routes: '/productListSalad',
    },
    {
      text: '客製化便當',
      isSelected: false,
      type: 'origin',
      routes: '/productListCustom',
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
        (dataItem) => dataItem.categories === '2.蔬食沙拉'
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
      <ProductFeatureBar
        title={'享受美食 不需要理由'}
        imgUrl={productListBanner}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={filterData}
        buttonAttributes={buttonAttributes}
      />
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

export default SaladList;
