import React from 'react';
import './Style.scss';
import selectArrow from 'Share/Components/Selection/Images/selectArrow.svg';

function RuSelection(props) {
  // width值在 .selection-container 這個選擇器下
  return (
    <>
      <div className="selection-container">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        {/* 下拉按鈕 s */}
        <button>
          <img src={selectArrow}></img>
        </button>
        {/* 下拉按鈕 e */}
      </div>
    </>
  );
}

export default RuSelection;
