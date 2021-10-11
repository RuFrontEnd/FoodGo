import React from 'react';
import Farm1 from 'assets/jpg/farm-intro-recommend-1.jpg';
import Farm2 from 'assets/jpg/farm-intro-farm-2.jpg';
import Farm3 from 'assets/jpg/farm-intro-farm-3.jpg';
import './farmIntroRecommendCard.scss';


function FarmIntroRecommendCard({name, src, date, price, place, address}) {
  return (
    <>
      <div className="claudia-detailed-recommanded-card">
        <h2>{name}</h2>
        <img alt="farm_recommanded" src={require(`assets/jpg/${src}.jpg`)} />
        <h3>日期：{date}</h3>
        <h3>價錢：{price}</h3>
        <h3>集合地點：{place}</h3>
        <h3>地址：{address}</h3>
      </div>
    </>
  );
}

export default FarmIntroRecommendCard;
