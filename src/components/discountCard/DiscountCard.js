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
    responsivePaddings,
  } = props;

  const styles = {
    backgroundColor: 'red',
    '@media(min-width: 1800px)': { backgroundColor: 'yellow' },
  };

  // console.log(responsivePaddings);

  // const styles = responsivePaddings.map((responsivePadding) => {
  //   const keys = Object.values(responsivePadding.breakpoint);
  //   const max = keys[0];
  //   const min = keys[1];
  //   const maxKey = `@media(max-width:500px)`;
  //   let resopnsive = {
  //     [maxKey]: { padding: `${responsivePadding.padding}px` },
  //   };
  //   return resopnsive;
  // });

  // console.log('styles', styles);

  return (
    <section id="discountCard-container" className={className} style={style}>
      <div style={styles}>123</div>
      <div id="discountCard-wrap" className="d-flex">
        <img id="discountCard-img" src={image}></img>
        <div
          id="discountCard-text"
          style={{ padding: '50px' }}
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
