import React from 'react';
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
