import React from 'react';
import './farmCard.scss';

function FarmCard(props) {
  const { city, data, setButtonNum, setImgNum, children } = props;

  //add buttons
  if (data) {
    document.getElementsByClassName(
      'claudia-index-card-list-box-buttons'
    )[0].innerHTML = '';

    for (let i = 0; i < data.length; i++) {
      const temp = `
            <button>
                    ${data[i].farm}
            </button>
            `;
      document.getElementsByClassName(
        'claudia-index-card-list-box-buttons'
      )[0].innerHTML += temp;

      //addClassName
      document.getElementsByClassName(
        'claudia-index-card-list-box-buttons'
      )[0].children[i].className += 'claudia-index-card-list-box-button';
      // document.getElementsByClassName('claudia-index-card-list-box-buttons')[0].children[i].children[0].className += "claudia-index-card-list-box-name-text";

      //add data-id
      document
        .getElementsByClassName('claudia-index-card-list-box-buttons')[0]
        .children[i].setAttribute('data-id', i);

      //add data-item
      document
        .getElementsByClassName('claudia-index-card-list-box-buttons')[0]
        .children[i].setAttribute('data-item', data[i].hash);
    }

    //addEventListener
    const buttons = document.getElementsByClassName(
      'claudia-index-card-list-box-buttons'
    )[0].children;

    for (let item of buttons) {
      item.addEventListener('click', (e) => showFarmIntro(e));
    }
  }

  //show farm intro

  const showFarmIntro = (e) => {
    document.getElementsByClassName(
      'claudia-index-card-list-box'
    )[0].style.display = 'none';
    document.getElementsByClassName(
      'claudia-index-card-list-box'
    )[0].style.opacity = 0;
    document.getElementsByClassName(
      'claudia-index-card-intro-box'
    )[0].style.display = 'block';
    document.getElementsByClassName(
      'claudia-index-card-intro-box'
    )[0].style.opacity = 1;

    console.log('target', +e.target.dataset.id);
    console.log('item', +e.target.dataset.item);
    let buttonId = +e.target.dataset.id;
    let imgId = +e.target.dataset.item;
    setButtonNum(buttonId);
    setImgNum(imgId);
  };

  return (
    <>
      <div className="claudia-index-card">
        <div className="claudia-index-card-list-box">
          <h1 id="claudia-index-card-list-city">
            <b>{city}</b>
          </h1>
          <h2 id="claudia-index-card-list-text">點選農場名稱，看更多資訊～</h2>
          <div className="claudia-index-card-list-box-buttons"></div>
        </div>
        {children}
      </div>
    </>
  );
}

export default FarmCard;
