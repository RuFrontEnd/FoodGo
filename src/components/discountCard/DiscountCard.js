import React, { useState, useEffect, useRef } from 'react';
import 'components/discountCard/discountCard.scss';
import { Link } from 'react-router-dom';

function DiscountCard(props) {
  const {
    className,
    style,
    image,
    title = 'Title',
    viceTitle = 'ViceTitle',
    children,
  } = props;

  return (
    <section id="discountCard-container" className={className} style={style}>
      <div id="discountCard-wrap" className="d-flex">
        <img id="discountCard-img" src={image}></img>
        <div
          id="discountCard-text"
          className="text-center m-auto d-flex flex-column justify-content-between"
        >
          <div id="discountCard-title" className="mb-5">
            <h4>{title}</h4>
            <h5>{viceTitle}</h5>
          </div>
          <div
            id="discountCard-content"
            className="discountCard-information mt-3"
          >
            {children}
            <span>
              <Link style={{ 'text-decoration': 'none' }} to="/productList">
                <h6 id="discountCard-call-to-action">馬上訂購</h6>
              </Link>
              <p id="homePage-event-date" className="discountCard-information">
                活動日期：2020.11.1~2020.12.31
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountCard;
