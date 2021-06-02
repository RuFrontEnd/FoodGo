import React from 'react';
import 'components/introCard/introCard.scss';
import { Link } from 'react-router-dom';
function IntroCard(props) {
  const {
    photo,
    title = 'IntroCard-Title',
    content = 'IntroCard-Content',
    linkTo = '/',
  } = props;

  return (
    <>
      <section id="introCard-container">
        <div id="introCard-wrap">
          <img id="introCard-photo" src={photo}></img>
          <div id="introCard-content">
            <div id="introCard-fake-content-height"></div>
            <p id="introCard-title">{title}</p>
            <p id="introCard-text">{content}</p>
            <Link to={linkTo}>
              <div id="introCard-arrow"></div>
              <br />
              <br />
              <p id="introCard-viewMore">view more</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default IntroCard;
