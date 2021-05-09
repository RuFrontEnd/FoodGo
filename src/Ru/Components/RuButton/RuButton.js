// moved
import React, { useEffect } from 'react';
import 'Ru/Components/RuButton/Style.scss';
import { withRouter } from 'react-router';

function RuButton(props) {
  // text 按鈕文字
  // className 橘色樣式為button-btn 綠色樣式為button-btn-g
  const {
    text, // show btn content
    selectedTypes, // all button active types
    setSelectedTypes, // set all button active types state
    isSelected, // is button active
    index, // all button active types index
    type, // orange or green
    routes, // link address
  } = props;

  function handleCardArea(e) {
    let _selectedTypes = [];
    for (let i = 0; i < selectedTypes.length; i++) {
      if (index === i) {
        _selectedTypes.push(true);
      } else {
        _selectedTypes.push(false);
      }
    }
    setSelectedTypes(_selectedTypes);

    // // console.log(props)
    // if (id === 'ru-button-btn-1') {
    //   props.history.push('/productList')
    // } else if (id === 'ru-button-btn-2') {
    //   props.history.push('/productListSalad')
    // } else if (id === 'ru-button-btn-3') {
    //   props.history.push('/productListCustom')
    // } else if (id === 'ru-button-btn-4') {
    //   props.history.push('/vegBox')
    // }
  }

  return (
    <>
      {type === 'origin' && (
        <>
          {isSelected ? (
            <button
              className={
                'selection-btn selection-btn-orange selection-btn-orange-active'
              }
              onClick={() => {
                handleCardArea();
              }}
            >
              {text}
            </button>
          ) : (
            <button
              className={'selection-btn selection-btn-orange'}
              onClick={() => {
                handleCardArea();
              }}
            >
              {text}
            </button>
          )}
        </>
      )}
      {type === 'green' && (
        <>
          {isSelected ? (
            <button
              className={
                'selection-btn selection-btn-green selection-btn-green-active'
              }
              onClick={() => {
                handleCardArea();
              }}
            >
              {text}
            </button>
          ) : (
            <button
              className={'selection-btn selection-btn-green'}
              onClick={() => {
                handleCardArea();
              }}
            >
              {text}
            </button>
          )}
        </>
      )}
    </>
  );
}

export default withRouter(RuButton);
