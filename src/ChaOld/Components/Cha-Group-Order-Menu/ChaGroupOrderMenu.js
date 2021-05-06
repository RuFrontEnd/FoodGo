import React from 'react';

import './ChaGroupOrderMenu.scss';

function ChaGroupOrderMenu(props) {
  return (
    <>
      <div className="cha-group-menu-fake-navbar"></div>

      <div className="cha-group-menu-container">
        <div className="cha-group-menu-prompt-row">
          <div className="cha-group-menu-search-icon">
            <div>開始揪團</div>
            <span>煞氣C小隊</span>
          </div>

          <div className="cha-group-menu-arrow-one"></div>
          <div className="cha-group-menu-lack-prompt">
            <div>尚缺一份</div>
          </div>
          <div className="cha-group-menu-arrow-two"></div>
          <div className="cha-group-menu-group-success">
            <div>揪團成功</div>
          </div>
        </div>

        <div className="cha-group-menu-border"></div>
        <div className="cha-group-menu-text-under-border">
          建立揪團資料，請至「訂單管理」查看訂購明細
        </div>
        {/* 提交按鈕 */}
        <div className="cha-group-menu-btn-div">
          <input
            type="button"
            value="揪朋友來訂餐"
            className="cha-group-menu-btn"
          />
          <input
            type="button"
            value="前往訂單管理"
            className="cha-group-menu-btn"
          />
        </div>
      </div>
      <div className="cha-fake-menu">假菜單</div>
    </>
  );
}
export default ChaGroupOrderMenu;
