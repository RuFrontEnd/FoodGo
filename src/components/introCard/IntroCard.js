import React from 'react';
import 'components/introCard/introCard.scss';
import { Link } from 'react-router-dom';
function IntroCard(props) {
  const {
    className,
    style,
    photo,
    title = 'IntroCard-Title',
    content = 'IntroCard-Content',
    linkTo = '/',
  } = props;

  return (
    <>
      <section id="introCard-container" className={className} style={style}>
        <div id="introCard-wrap">
          <div id="introCard-photo-fake"></div>
          <div id="introCard-content">
            <p id="introCard-title">{title}</p>
            <p id="introCard-text">{content}</p>
            <Link to={linkTo}>
              <div id="introCard-arrow"></div>
              <br />
              <br />
              <p id="introCard-viewMore">view more</p>
            </Link>
          </div>
          <img id="introCard-photo" src={photo}></img>
        </div>
      </section>
    </>
  );
}

export default IntroCard;
