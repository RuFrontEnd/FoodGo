import React from 'react';
import 'components/productFeatureBar/productFeatureBar.scss';
import OptionButton from 'components/optionButton/OptionButton';
import SearchBar from 'components/searchBar/SearchBar';
import line from 'assets/png/line.png';
import { withRouter } from 'react-router';
import { useLocation } from 'react-router-dom';

function ProductFeatureBar(props) {
  const {
    className,
    style,
    title,
    imgUrl,
    searchInput,
    setSearchInput,
    onSearch,
    history,
  } = props;
  const currentURL = useLocation();

  const buttonAttributes = [
    {
      text: '低GI便當',
      isSelected: currentURL.pathname === '/productList',
      type: 'origin',
      routes: '/productList',
    },
    {
      text: '鮮蔬沙拉',
      isSelected: currentURL.pathname === '/productListSalad',
      type: 'origin',
      routes: '/productListSalad',
    },
    {
      text: '客製化便當',
      isSelected: currentURL.pathname === '/productListCustom',
      type: 'origin',
      routes: '/productListCustom',
    },
    {
      text: '蔬菜箱',
      isSelected: currentURL.pathname === '/vegBox',
      type: 'green',
      routes: '/vegBox',
    },
  ];
  
  return (
    <section
      id="productFeatureBar-container"
      className={className}
      style={style}
    >
      <div id="productFeatureBar-wrap">
        <div className="productFeatureBar-header">
          <h3>{title}</h3>
          <img src={imgUrl}></img>
        </div>
        <div className="productFeatureBar-feature-container">
          <div className="productFeatureBar-feature-wrap">
            <SearchBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              onSearch={onSearch}
            />
            <div className="productFeatureBar-optionButtons">
              {buttonAttributes.map((buttonAttribute) => (
                <OptionButton
                  type={buttonAttribute.type}
                  className={'productFeatureBar-option-button'}
                  text={buttonAttribute.text}
                  isSelected={buttonAttribute.isSelected}
                  onClick={() => {
                    history.push(buttonAttribute.routes);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="productFeatureBar-line">
          <img src={line}></img>
        </div>
      </div>
    </section>
  );
}

export default withRouter(ProductFeatureBar);
