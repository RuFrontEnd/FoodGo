// height:50px   font-size:20px   圓角搜尋框
// ru
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Style.scss';
import { ReactComponent as SearchIcon } from 'Ru/Components/RuSearchBar/Images/search_icon.svg';

function RuSearchBar(props) {
  // 先再母元件加上 const [ searchInput, setSearchInput ] = useState('') => 這樣母元件可以拿到input的value值
  // 然後搜尋邏輯自己寫
  const { searchInput, setSearchInput, searchId } = props;

  function lightenBorder() {
    document.querySelector('.ru-input-field').style['box-shadow'] =
      '0 0 0.5rem #f5a016';
    document.querySelector('.ru-input-field').style['border-color'] = '#fff';
    document.querySelector('.ru-img').style.fill = '#F5CB87';
  }
  window.onclick = (e) => {
    // console.log('input', document.querySelector('.ru-input-field'));
    if (e.target.id !== 'ru-search') {
      if (document.querySelector('.ru-input-field')) {
        document.querySelector('.ru-input-field').style['box-shadow'] = 'none';
        document.querySelector('.ru-input-field').style['border-color'] =
          '#858585';
        document.querySelector('.ru-img').style.fill = '#c2c4ca';
      }
    }
  };
  return (
    <>
      <div className="ru-input-field first-wrap" id={searchId}>
        <div className="svg-wrapper">
          <SearchIcon className="ru-img" />
        </div>
        <form autocomplete="off">
          <input
            className="ru-searchbar"
            id="ru-search"
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
        </form>
      </div>
      {/* </div> */}
    </>
  );
}

export default RuSearchBar;
