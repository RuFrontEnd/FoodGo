import React from 'react'
import './ClaudiaDetailedRecommended.scss'
import Farm from './Images/JPG/farm_recommanded.jpg'
import Farm27 from './Images/JPG/27.jpg'
import Farm21 from './Images/JPG/21.jpg'
import Wave from './Images/SVG/wave.svg'

function ClaudiaDetailedRecommended() {
  return (
    <>
      <div className="claudia-detailed-recommanded">
        <div className="claudia-detailed-recommanded-container">
          <h1>
            <b>更多推薦</b>
          </h1>
          <div className="claudia-detailed-recommanded-card-container">
            <div className="claudia-detailed-recommanded-card">
              <h2>荖阡坑教育實習農園</h2>
              <h2>一日遊</h2>
              <img alt="farm_recommanded" src={Farm27} />
              <h3>日期：2021/01/17（日）</h3>
              <h3>價錢：900元/1人</h3>
              <h3>集合地點：台北車站</h3>
              <h3>地址：台北市內湖區碧山路58-1號</h3>
            </div>
            <div className="claudia-detailed-recommanded-card">
              <h2>北新有機休閒農場</h2>
              <h2>半日體驗</h2>
              <img alt="farm_recommanded" src={Farm} />
              <h3>日期：2021/02/20（六）</h3>
              <h3>價錢：500元/1人</h3>
              <h3>集合地點：捷運淡水站</h3>
              <h3>地址：新北市淡水區忠寮里3-2號</h3>
            </div>
            <div className="claudia-detailed-recommanded-card">
              <h2>泰源幽谷農場</h2>
              <h2>——養生五色米</h2>
              <img alt="farm_recommanded" src={Farm21} />
              <h3>日期：2021/01/23（六）</h3>
              <h3>價錢：800元/1人</h3>
              <h3>集合地點：台東火車站</h3>
              <h3>地址：台東縣東河鄉台23省道入口</h3>
            </div>
          </div>
        </div>
        <div className="claudia-detailed-recommanded-wave-bg">
          <img
            className="claudia-detailed-recommanded-wave"
            alt=""
            src={Wave}
          />
        </div>
        {/* <div className="claudia-fake-footer"></div> */}
      </div>
    </>
  )
}

export default ClaudiaDetailedRecommended
