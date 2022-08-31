import React, { useState, useEffect } from 'react';
import 'pages/customBentoList/customBentoList.scss';
import OptionButton from 'components/optionButton/OptionButton';
import CommodityList from 'components/commodityList/CommodityList';
import ProductFeatureBar from 'components/productFeatureBar/ProductFeatureBar';
import CustomBento from 'components/customBento/CustomBento';
import SearchBar from 'components/searchBar/SearchBar';
import axios from 'axios';
import productListBanner from 'assets/jpg/proudctList-banner.jpg';

// 引用共用元件
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';
// 引用圖片
import line from './Images/line.png';

function CustomBentoList(props) {
  const { handleCartNumber, amount, setAmount, ws } = props;
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
    if (selectedTypes[0] === true) {
      return getBentoData('1.低GI便當');
    }
    if (selectedTypes[1] === true) {
      return getBentoData('2.蔬食沙拉');
    }
  }, [selectedTypes]); // get backend data

  useEffect(() => {
    ws.onmessage = (event) => {
      if (event.pathName !== '/') return;
      console.log(event);
    };
  }, []);

  return (
    <>
      {/* <ProductFeatureBar
        title={'享受美食 不需要理由'}
        imgUrl={productListBanner}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={filterData}
        buttonAttributes={buttonAttributes}
      /> */}
      <CustomBento
        handleCartNumber={handleCartNumber}
        setAmount={setAmount}
        amount={amount}
        count={count}
        setCount={setCount}
        ws={ws}
      />
      {/* <ScrollButton /> */}
    </>
  );
}

export default CustomBentoList;
