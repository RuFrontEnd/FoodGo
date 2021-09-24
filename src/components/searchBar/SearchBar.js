import React, { useState } from 'react';
import 'components/searchBar/searchBar.scss';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import { ReactComponent as CrossIcon } from 'assets/svg/cross.svg';

function SearchBar(props) {
  const { searchInput, setSearchInput, searchId, onSearch } = props;
  const [containerClassName, setContainerClassName] = useState(
    'searchBar-container'
  );
  const [searchIconClassName, setSearchIconClassName] = useState('search-svg');

  function lightenBorder(e) {
    e.stopPropagation();
    setContainerClassName('searchBar-container search-container-active');
    setSearchIconClassName('search-svg search-svg-active');
  }

  window.onclick = (e) => {
    setContainerClassName('searchBar-container');
    setSearchIconClassName('search-svg');
  };

  return (
    <>
      <div className={containerClassName} id={searchId}>
        <form className="searchBar-wrapper" autocomplete="off">
          <SearchIcon
            className={searchIconClassName}
            onClick={() => {
              onSearch();
            }}
          />
          <input
            className="searchBar-input"
            id="search"
            type="text"
            placeholder="search"
            onClick={(e) => {
              lightenBorder(e);
            }}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          {searchInput !== '' && (
            <CrossIcon
              className="cross-svg"
              onClick={() => {
                setSearchInput('');
              }}
            />
          )}
        </form>
      </div>
    </>
  );
}

export default SearchBar;
