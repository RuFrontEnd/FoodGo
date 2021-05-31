import React, { useState, useEffect } from 'react';
import 'components/recommendCard/recommendCard.scss';
import { Link } from 'react-router-dom';
import starO from 'assets/svg/star-o.svg';

function RecommendCard(props) {
  const {
    className = '',
    linkTo = '',
    instruction = '',
    productName = '產品名稱',
    starCounts = 5,
    commentCounts = 0,
    buyCounts = 0,
  } = props;
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const _stars = [];
    for (let i = 0; i < starCounts; i++) {
      _stars.push(i);
    }
    setStars(_stars);
  }, []);

  return (
    <>
      <div id="recommendCard-card-container" className={className}>
        {/* item圖片 */}
        <Link style={{ 'text-decoration': 'none' }} to={linkTo}>
          <section id="recommendCard-card-img-warp">
            <div id="recommendCard-card-img">
              <div id="recommendCard-ingredient">
                <div id="recommendCard-ingredient-content">{instruction}</div>
              </div>
            </div>
          </section>
        </Link>
        <section
          id="recommendCard-card-info-warp"
          className="d-flex justify-content-center"
        >
          <div id="recommendCard-card-info" className="d-flex flex-column">
            <h3>{productName}</h3>
            <section>
              <div
                id="recommendCard-card-hr"
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <div id="recommendCard-card-star-warp" className="mt-3  mb-2">
                  {stars.map((star) => (
                    <img alt="" id="recommendCard-card-star" src={starO} />
                  ))}
                </div>
                <span className="d-flex justify-content-center">
                  <p>{commentCounts} 則評論 </p>
                  <p>{250} 已購買</p>
                </span>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default RecommendCard;
