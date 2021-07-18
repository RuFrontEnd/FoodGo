import React, { useState, useEffect, useCallback } from 'react';
import { endpoint } from 'variable/variable';
import 'pages/productList/productList.scss';
import OptionButton from 'components/optionButton/OptionButton';
import CommodityList from 'components/commodityList/CommodityList';
import ProductFeatureBar from 'components/productFeatureBar/ProductFeatureBar';
import SearchBar from 'components/searchBar/SearchBar';
import axios from 'axios';
import productListBanner from 'assets/jpg/proudctList-banner.jpg';
import { useSelector } from 'react-redux';

// 引用共用元件
import ScrollButton from 'Share/Components/ToTopButton/ScrollButton';

function ProductList(props) {
  const currentUser = useSelector((state) => state.member.currentUser);
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

  const getData = useCallback(async () => {
    const _allProducts = await axios.get(`${endpoint}/product/bento`);
    const _allmyFavProducts = await axios.get(`${endpoint}/member/myFavList`, {
      params: {
        member_sid: currentUser,
      },
    });
    const allProducts = _allProducts.data;
    const allmyFavProducts = _allmyFavProducts.data;

    const productStatus = allProducts.map((product) => {
      const isFav = allmyFavProducts.findIndex(
        (myFavProduct) => myFavProduct.product_sid === product.sid
      );
      return {
        sid: product.sid,
        img_id: product.img_id,
        productname: product.productname,
        price: product.price,
        purchased: product.purchased,
        contentNum: product.contentNum,
        introduction: product.introduction,
        startRating: product.startRating,
        fat: product.Fat,
        protein: product.Protein,
        calories: product.calories,
        carbohydrate: product.carbohydrate,
        categories: product.categories,
        isFavorite: isFav > -1 ? true : false,
      };
    }); // 將products和myFavs結合

    const _commodities = productStatus.filter(
      (status) => status.categories === '1.低GI便當'
    );
    setCommodities(_commodities);
  }, []);

  useEffect(() => {
    console.log('commodities', commodities);
  }, [commodities]);

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

export default ProductList;
