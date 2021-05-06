import React, { useState, useEffect } from 'react';
import './ClaudiaIndexCardIntro.scss'
// import Pic1 from './Images/1.jpg';
// import Pic2 from './Images/2.jpg';
import Button from '../../../Share/Components/Button/Button';
import { Link } from 'react-router-dom';


function ClaudiaIndexCardIntro(props) {


    const { data, buttonNum, imgNum } = props;

    console.log('imgNum', imgNum);


    //goback button

    const goBackButton = () => {
        document.getElementsByClassName('claudia-index-card-list-box')[0].style.display = 'block';
        document.getElementsByClassName('claudia-index-card-list-box')[0].style.opacity = 1;
        document.getElementsByClassName('claudia-index-card-intro-box')[0].style.display = 'none';
        document.getElementsByClassName('claudia-index-card-intro-box')[0].style.opacity = 0;
    }

    if (data[buttonNum]) {

        //city
        document.getElementById('claudia-index-card-intro-city').innerHTML = `<b>${data[buttonNum].city}</b>`

        //title
        document.getElementById('claudia-index-card-intro-title').innerHTML = `<b>${data[buttonNum].farm}</b>`

        //img //need to fix path
        // console.log('result', document.getElementById('claudia-index-card-farm-intro-pic').src)

        //intro
        document.getElementById('claudia-index-card-intro-intro').innerHTML = `<b>${data[buttonNum].short_intro}</b>`

    }



    return (
        <>
            <div className="claudia-index-card-intro-outside">
                <div className="claudia-index-card-intro-box">
                    <div className="claudia-index-card-intro-box-first-line">
                        <h1 id="claudia-index-card-intro-city"><b>台北市</b></h1>
                        <a onClick={goBackButton} id="claudia-index-card-intro-goback">&#8592; 回列表</a>
                    </div>

                    <h2 id="claudia-index-card-intro-title"><b>小小城市農夫－台北內湖農驛棧有機農園</b></h2>
                    <hr />
                    <img id="claudia-index-card-farm-intro-pic" alt="farm_intro_pic" src={require('./Images/' + imgNum + '.jpg')} />
                    <h3 id="claudia-index-card-intro-intro">想體驗自然風光，採新鮮有機草莓、享用草莓特餐嗎？一起品嘗農園特製—草莓蔬果捲、草莓蜜雞，各種DIY任你玩！</h3>
                    <Link to="/farmIntro">
                        <div className="claudia-index-card-intro-button">
                            <Button className="button-btn-g" text="閱讀更多" />
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )

}

export default ClaudiaIndexCardIntro;