import React from 'react';
import './Button.scss';

function Button(props) {
  // text 按鈕文字
  // className 橘色樣式為button-btn 綠色樣式為button-btn-g
  const { text, className } = props;
  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
}

export default Button;
