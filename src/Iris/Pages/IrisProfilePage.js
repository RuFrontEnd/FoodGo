import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IrisMemberMenu from '../Components/IrisMemberMenuSect/IrisMemberMenuSect'
import IrisDataEdit from '../Components/IrisDataEdit/IrisDataEdit'
import './IrisMemberPage.scss'
import { Redirect } from 'react-router-dom'

function IrisProfilePage(props) {
  const { isLogin } = props
  if (isLogin === false) return <Redirect to="/" />
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect />
        <IrisDataEditSect />
      </div>
    </>
  )
}

export default IrisProfilePage
