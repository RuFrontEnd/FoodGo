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
    linkTo = '/',
    date,
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
          <div id="discountCard-title">
            <h4>{title}</h4>
            <h5>{viceTitle}</h5>
          </div>
          <div
            id="discountCard-content"
            className="discountCard-information mt-3"
          >
            {children}
          </div>
          <div>
            <Link style={{ 'text-decoration': 'none' }} to={linkTo}>
              <h6 id="discountCard-call-to-action">馬上訂購</h6>
            </Link>
            <p id="homePage-event-date" className="discountCard-information">
              活動日期：{date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountCard;
