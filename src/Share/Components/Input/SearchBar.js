// height:50px   font-size:20px   圓角搜尋框
// ru
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';
import './SearchBar.scss';
import { ReactComponent as SearchIcon } from './../../image/search_icon.svg';

function SearchBar(props) {
  // 先再母元件加上 const [ searchInput, setSearchInput ] = useState('') => 這樣母元件可以拿到input的value值
  // 然後搜尋邏輯自己寫
  const { searchInput, setSearchInput } = props;

  function lightenBorder() {
    document.querySelector('.iris-input-field').style['box-shadow'] =
      '0 0 0.5rem #f5a016';
    document.querySelector('.iris-input-field').style['border-color'] = '#fff';
    document.querySelector('.iris-img').style.fill = '#F5CB87';
  }
  window.onclick = (e) => {
    // console.log('input', document.querySelector('.iris-input-field'));
    if (e.target.id !== 'iris-search') {
      if (document.querySelector('.iris-input-field')) {
        document.querySelector('.iris-input-field').style['box-shadow'] =
          'none';
        document.querySelector('.iris-input-field').style['border-color'] =
          '#858585';
        document.querySelector('.iris-img').style.fill = '#c2c4ca';
      }
    }
  };
  return (
    <>
      <div className="iris-input-field first-wrap">
        <div className="svg-wrapper">
          <SearchIcon className="iris-img" />
        </div>
        <input
          className="iris-searchbar"
          id="iris-search"
          type="text"
          placeholder="search"
          onClick={() => {
            lightenBorder();
          }}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      {/* </div> */}
    </>
  );
}

export default SearchBar;
