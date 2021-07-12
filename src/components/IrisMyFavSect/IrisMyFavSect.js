// correct

import React, { useState, useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { ReactComponent as WaveLine } from './Images/wave_line.svg'
import { ReactComponent as StarOrange } from './Images/star_orange.svg'
import { ReactComponent as StarGrey } from './Images/star_grey.svg'
import './IrisMyFavSect.scss'
import IrisCard from './IrisCard/IrisCard'
// import Star123 from './Images/star_orange.svg';
import {useSelector } from 'react-redux';

function IrisMyFavSect(props) {
  const {
    userFavDelete,
    // 設定userFavDelete的狀態，傳到memberMenu，若有改變數字會減一
    setUserFavDelete,
  } = props
  const currentUser = useSelector((state) => state.member.currentUser);
  const [myFav, setMyFav] = useState([])
  const [showFavArr, setShowFavArr] = useState([])
  const [hideCard, setHideCard] = useState(false)

  // 得到目前所有的最愛資料
  async function getMyFavFromServer() {
    const url = 'http://localhost:5000/member/myFavList'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    setMyFav(data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getMyFavFromServer()
  }, [])

  // 過濾出現在使用者的最愛
  const currentUserFav = myFav.filter(
    (myFav) => myFav.member_sid === currentUser
  )
  console.log(currentUserFav)

  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">我的最愛</h2>
          <WaveLine />
        </div>
        <div className="iris-cards-container row">
          {currentUserFav.map((item, index) => {
            // const imageId = 'card-img-' + item.product_sid
            return (
              <div class="col-4">
                <IrisCard
                  key={item.product_sid}
                  title={item.productname}
                  comment={item.contentNum}
                  price={item.price}
                  imgId={item.img_id}
                  showFavArr={showFavArr}
                  currentUserFav={currentUserFav}
                  stars={item.starRating}
                  proudctId={item.product_sid}
                  setUserFavDelete={setUserFavDelete}
                  hideCard={hideCard}
                  setHideCard={setHideCard}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default IrisMyFavSect
