import React from 'react'
import './Selection.scss'
import selectArrow from 'Share/Components/Selection/Images/selectArrow.svg'

function Selection(props) {
  // width值在 .selection-container 這個選擇器下
  return (
    <>
      <div className="selection-container">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        {/* 下拉按鈕 s */}
        <button>
          <img src={selectArrow}></img>
        </button>
        {/* 下拉按鈕 e */}
      </div>
    </>
  )
}

export default Selection
