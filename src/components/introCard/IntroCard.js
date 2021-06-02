import React, { useState, useEffect, useRef } from 'react';
import 'components/introCard/introCard.scss';
import { Link } from 'react-router-dom';

function IntroCard(props) {
  const {} = props;

  return (
    <>
      <section id="introCard-container" className="p-5">
        <div id="introCard-wrap">
          <div id="introCard-photo"></div>
          <div id="introCard-content">
            <div id="introCard-fake-content-height"></div>
            <p id="introCard-title">青翠園有機農場・農友莊翠蘭</p>
            <p id="introCard-text">
              堅持至今的信念是個好： 「對自己身體好，對消費者的身體好，
              對土地好，對天地萬物好」。 她的心願是，「如果土地會說話，
              希望他們會說：『嗯，我很舒服』， 這樣就太好了！」
            </p>
            <Link to="/farmIntro">
              <div id="introCard-arrow" className="float-right"></div>
              <br />
              <br />
              <p id="introCard-viewmore" className="m-0 float-right">
                view more
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default IntroCard;
