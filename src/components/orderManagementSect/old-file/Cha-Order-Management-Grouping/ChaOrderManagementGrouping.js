import React from 'react'
import './ChaOrderManagementGrouping.scss'
function ChaOrderManagementGrouping(props) {
  return (
    <>
      <div className="cha-order-mana-grouping-content-row3">
        <div className="cha-order-mana-grouping-row3-picture"></div>
        <div className="cha-order-mana-grouping-content-row3-1">
          <div className="cha-order-mana-grouping-content-row3-1-1">
            {/* <div className="cha-order-mana-grouping-content-row3-1-1-1"> */}
            <span>
              <span> 訂單編號: </span>
              <span> </span>
              <span> A11111 </span>
            </span>
            <span className="cha-order-mana-divider"> | </span>
            <span>
              <span> 訂單金額: </span>
              <span> </span>
              <span> $999 </span>
            </span>
            <span className="cha-order-mana-divider"> | </span>
            <span>
              <span> 訂單狀態: </span>
              <span> </span>
              <span>揪團中</span>
            </span>
          </div>
          <div className="cha-order-mana-grouping-content-row3-1-2">
            <span> 訂購時間: </span>
            <span> 2020/07/16 </span>
            <span> 11:23:40 </span>
            <span className="cha-order-mana-divider"> | </span>
            <span> 取餐時間: </span>
            <span> 2020/07/16 </span>
            <span> 11:23:40 </span>
          </div>

          <div className="cha-order-mana-grouping-content-row3-1-3">
            <span> 取餐地址: </span>
            <span> 台北市大安區復興南路一段390號2樓 </span>
          </div>
          <div className="cha-order-mana-grouping-content-row3-1-4">
            <span> 訂單明細 </span>
            <span> 怪獸對決 </span>
            {/* <span> 查閱發票 </span> */}
          </div>
        </div>
        <div className="cha-order-mana-grouping-content-row3-2">
          <input type="button" value="加入點餐" />
          <input type="button" value="分享連結" />
          <input type="button" value="收單" />
          <input
            type="button"
            value="取消/退費"
            className="cha-order-mana-grouping-btn-a59583"
          />
        </div>
      </div>
    </>
  )
}
export default ChaOrderManagementGrouping
