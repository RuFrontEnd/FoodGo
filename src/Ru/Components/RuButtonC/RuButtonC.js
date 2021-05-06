import React from 'react';
import './Style.scss';

function RuButtonC(props) {
  // text 按鈕文字
  const { text } = props;
  return (
    <>
      <button className="ru-buttonC">{text}</button>
    </>
  );
}

export default RuButtonC;
