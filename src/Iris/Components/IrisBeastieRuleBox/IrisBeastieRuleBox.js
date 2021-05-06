import React, { useState, useEffect } from 'react'
import './IrisBeastieRuleBox.scss'

function IrisBeastieRuleBox(props) {
  const { showRuleBox, setShowRuleBox } = props

  if (showRuleBox === true) {
    document.querySelector('.iris-rule-box-mask').style.display = 'flex'
    document.querySelector('.iris-rule-box-container').style.display = 'block'
  } else {
    if (
      document.querySelector('.iris-rule-box-mask') &&
      document.querySelector('.iris-rule-box-container')
    ) {
      document.querySelector('.iris-rule-box-mask').style.display = 'none'
      document.querySelector('.iris-rule-box-container').style.display = 'none'
    }
  }

  return (
    <>
      <div
        class="iris-rule-box-mask"
        onClick={() => {
          setShowRuleBox(false)
        }}
      ></div>
      <div class="iris-rule-box-container">
        <h2 className="iris-title">【遊戲規則】</h2>
        <div class="iris-rule-content-wrapper">
          <div className="iris-question">如何得到怪獸幣？</div>
          <ul type="none">
            <li>1. 每次消費，可獲得怪獸幣5元。</li>
            <li type="none">
              {' '}
              2. 揪團訂餐，會觸發怪獸之間的pk機制，勝出者再享怪獸幣10元
            </li>
            <li type="none">
              3. 另外，拾餐不定期推出怪獸幣放送活動，請密切關注拾餐官方網站唷～
            </li>
          </ul>

          <div className="iris-question">如何使用怪獸幣？</div>
          <ul>
            <li type="none">
              1. 怪獸幣等同於現金，怪獸幣 1 點價值等同於現金 1 元。
            </li>
            <li type="none">
              2. 網頁版或app版訂購，皆可選擇當筆訂單是否使用怪獸幣抵扣金額。
            </li>
            <li type="none">3. 每次消費，勾選之怪獸幣不能超過消費金額。</li>
            <li type="none">
              4. 怪獸幣抵扣完，不足抵扣之金額再以信用卡完成付費。
            </li>
          </ul>

          <div className="iris-question">怪獸幣有使用期限嗎？</div>
          <ul>
            <li type="none">1. 每次消費，可獲得怪獸幣5元。</li>
            <li type="none">
              2.
              會員登入後，至會員中心點選「怪獸幣」查看到期日，如超過使用期限未使用，則自動失效。
            </li>
            <li type="none">
              3. 使用怪獸幣時，建議優先將快到期的怪獸幣折抵掉。
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default IrisBeastieRuleBox
