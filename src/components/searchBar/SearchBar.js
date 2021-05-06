import React, { useState, useEffect } from 'react';
import './SearchBar.scss';
import { ReactComponent as SearchIcon } from 'components/searchBar/Images/search_icon.svg';

function SearchBar(props) {
  const { searchInput, setSearchInput, searchId } = props;

  function lightenBorder() {
    // document.querySelector('.input-field').style['box-shadow'] =
    //   '0 0 0.5rem #f5a016';
    // document.querySelector('.input-field').style['border-color'] = '#fff';
    // document.querySelector('.search-svg').style.fill = '#F5CB87';
  }

  window.onclick = (e) => {
    // if (e.target.id !== 'search') {
    //   if (document.querySelector('.input-field')) {
    //     document.querySelector('.input-field').style['box-shadow'] = 'none';
    //     document.querySelector('.input-field').style['border-color'] =
    //       '#858585';
    //     document.querySelector('.search-svg').style.fill = '#c2c4ca';
    //   }
    // }
  };

  return (
    <>
      <div className="searchBar-container" id={searchId}>
        <form className="searchBar-wrapper" autocomplete="off">
          <SearchIcon className="searchBar-svg" />
          <input
            className="searchBar-input"
            id="search"
            type="text"
            placeholder="search"
            onClick={() => {
              lightenBorder();
            }}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          ></input>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
