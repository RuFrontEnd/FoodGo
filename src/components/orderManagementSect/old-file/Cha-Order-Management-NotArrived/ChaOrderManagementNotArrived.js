import React from 'react'
import './ChaOrderManagementNotArrived.scss'
function ChaOrderManagementNotArrived(props) {
  return (
    <>
      <div className="cha-order-row">
        <div className="cha-order-mana-not-arrived-row3-picture"></div>
        <div className="cha-order-row-1">
          <div className="cha-order-row-1-1">
            {/* <div className="cha-order-row-1-1-1"> */}
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
              <span>火速運送中</span>
            </span>
          </div>
          <div className="cha-order-row-1-2">
            <span> 取餐方式: </span>
            <span> 自取 </span>
            <span className="cha-order-mana-divider"> | </span>
            <span> 取餐時間: </span>
            <span> 2020/07/16 </span>
            <span> 11:23:40 </span>
          </div>

          <div className="cha-order-row-1-3">
            <span>
              <span> 取餐地址: </span>
              <span> 台北市大安區復興南路一段390號2樓 </span>
            </span>
          </div>
          <div className="cha-order-row-1-4">
            <span> 訂單明細 </span>
            {/* <span> 用餐評價 </span>
            <span> 查閱發票 </span> */}
          </div>
        </div>

        <div className="cha-order-row-2">
          <input type="button" value="取消/退費" />
        </div>
      </div>
    </>
  )
}
export default ChaOrderManagementNotArrived
