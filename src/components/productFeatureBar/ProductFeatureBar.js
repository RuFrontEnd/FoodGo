import React from 'react';
import 'components/productFeatureBar/productFeatureBar.scss';
import OptionButton from 'components/optionButton/OptionButton';
import SearchBar from 'components/searchBar/SearchBar';
import line from 'assets/png/line.png';

function productFeatureBar(props) {
  const {
    className,
    style,
    title,
    imgUrl,
    searchInput,
    setSearchInput,
    onSearch,
    buttonAttributes,
  } = props;

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
                  routes={buttonAttribute.routes}
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

export default productFeatureBar;
