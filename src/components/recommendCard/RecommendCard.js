import React, { useState, useEffect } from 'react';
import 'components/recommendCard/recommendCard.scss';
import { Link } from 'react-router-dom';
import starO from 'assets/svg/star-o.svg';

function RecommendCard(props) {
  const {
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
      <div className="recommendCard-card-container">
        {/* item圖片 */}
        <Link style={{ 'text-decoration': 'none' }} to={linkTo}>
          <section className="recommendCard-card-img-warp">
            <div className="recommendCard-card-img1">
              <div className="recommendCard-ingredient">
                <div className="recommendCard-ingredient-content">
                  {instruction}
                </div>
              </div>
            </div>
          </section>
        </Link>

        <section className="recommendCard-card-info-warp d-flex justify-content-center">
          <div className="recommendCard-card-info d-flex flex-column">
            <h3>{productName}</h3>
            {/* 分隔線 */}
            <section>
              <div className="recommendCard-card-hr d-flex flex-column justify-content-center align-items-center">
                <div className="mt-3  mb-2 recommendCard-card-star-warp">
                  {stars.map((star) => (
                    <img
                      alt=""
                      className="recommendCard-card-star"
                      src={starO}
                    />
                  ))}
                </div>
                <span className="d-flex justify-content-center">
                  <p>{commentCounts} 則評論 </p>
                  <p>{buyCounts} 已購買</p>
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
