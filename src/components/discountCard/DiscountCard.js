import React, { useState, useEffect, useRef } from 'react';
import 'components/discountCard/discountCard.scss';
import Radium from 'radium';
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
    responsivePaddings = [],
    StraightMode = {},
  } = props;

  // #discountCard-text's padding in each width
  const paddings = responsivePaddings.map((responsivePadding) => {
    const values = Object.values(responsivePadding.breakpoint);
    const maxValue = values[0];
    const minValue = values[1];
    const key = `@media(max-width:${maxValue}px) and (min-width: ${minValue}px)`;
    const paddingVertical = responsivePadding.paddingVertical
      ? responsivePadding.paddingVertical
      : 50;
    const paddingHorizental = responsivePadding.paddingHorizental
      ? responsivePadding.paddingHorizental
      : 50;
    return {
      [key]: {
        padding: `${paddingVertical}px ${paddingHorizental}px`,
      },
    };
  });
  
  // bellow which width shows straight mode
  const StraightModeWidth = Object.values(StraightMode)[0];
  let StraightStyles = {};
  if (StraightModeWidth !== undefined) {
    const StraightModeKey = `@media(max-width: ${StraightModeWidth}px)`;
    StraightStyles = {
      discountCardWrap: { [StraightModeKey]: { flexDirection: 'column' } },
      discountCardImg: { [StraightModeKey]: { width: '100%' } },
      discountCardText: { [StraightModeKey]: { width: '100%' } },
    };
  }

  return (
    <section id="discountCard-container" className={className} style={style}>
      <div
        id="discountCard-wrap"
        className="d-flex"
        style={StraightStyles.discountCardWrap}
      >
        <img
          id="discountCard-img"
          style={StraightStyles.discountCardImg}
          src={image}
        ></img>
        <div
          id="discountCard-text"
          style={[paddings, StraightStyles.discountCardImg]}
          className={`discountCard-text-padding text-center m-auto d-flex flex-column justify-content-between`}
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

export default Radium(DiscountCard);
