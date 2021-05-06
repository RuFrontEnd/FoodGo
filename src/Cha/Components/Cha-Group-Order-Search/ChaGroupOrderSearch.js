import React from 'react';

import './ChaGroupOrderSearch.scss';

function ChaGroupOrderSearch(props) {
  return (
    <>
      <div className="cha-group-search-wrap">
        <div className="cha-group-breadcrumbs-container">
          <div className="cha-group-breadcrumbs-row">
            <div className="cha-group-breadcrumbs-text">
              <div className="cha-group-breadcrumbs-icon">
                <div className="cha-group-create-icon"></div>
              </div>
              <span className="cha-group-create-text-yellow">建立揪團</span>
            </div>
            <div className="cha-group-arrow-icon"></div>
            <div className="cha-group-breadcrumbs-text">
              <div className="cha-group-breadcrumbs-icon">
                <div className="cha-group-search-icon"></div>
              </div>
              <span className="cha-group-search-text">呼朋引伴</span>
            </div>
            <div className="cha-group-arrow-icon"></div>
            <div className="cha-group-breadcrumbs-text">
              <div className="cha-group-breadcrumbs-icon">
                <div className="cha-group-menu-icon"></div>
              </div>
              <span className="cha-group-menu-text">作伙點餐</span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="cha-group-create-card">
          <div className="cha-group-create-header">呼朋引伴來訂餐</div>
          {/* 怪獸 */}
          <div className="cha-group-monster-row">
            <div className="cha-group-left-monster"></div>
            <div className="cha-group-right-monster"></div>
          </div>
          <p className="cha-group-search-text">
            當主揪還要跟朋友收款，真的好麻煩！
          </p>
          <p className="cha-group-search-text">
            拾餐幫你合併配送、各自付費，便利又省時
          </p>
          {/* 連結 */}
          <div className="cha-horizontal-line-group"></div>
          <div className="cha-group-icon-row">
            <div className="cha-group-icon-all">
              <div className="cha-group-fb-icon"></div>
              <div>分享到臉書</div>
            </div>
            <div className="cha-group-icon-all">
              <div className="cha-group-link-icon"></div>
              <div>複製訂單連結</div>
            </div>
          </div>

          {/* 提交按鈕 */}
          <div className="cha-shopping-cart-btn-div">
            <input
              type="button"
              value="送出"
              className="cha-shopping-cart-btn"
            />
          </div>
        </div>
        <div className="cha-group-create-alert">
          <div>如已建立揪團資料，請至「訂單管理」查看明細</div>
          <div className="cha-group-create-alert-to-order-management">
            前往訂單管理
          </div>
        </div>
      </div>
    </>
  );
}
export default ChaGroupOrderSearch;
