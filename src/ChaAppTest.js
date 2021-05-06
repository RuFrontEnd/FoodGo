import React, { useState, useEffect } from 'react'

// import MyNavbar from 'Cha/Components-demo/MyNavbar'
// import MainContent from 'Cha/Components-demo/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from 'Cha/Pages/ChaCheckpoint'
import About from 'Cha/pages-demo/About'
import Product from 'Cha/pages-demo/Product'
import Success from 'Cha/pages-demo/Success'

import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart'
import ChaGroupOrder from 'Cha/Pages/Cha-Group-Order/ChaGroupOrder'
import IrisProfilePageDemo from 'Cha/Pages/Iris-Profile-Page-Demo/IrisProfilePageDemo'

import ChaOrderManagement from 'Cha/Components/Cha-Order-Management/ChaOrderManagement'

function ChaAppTest() {
  return (
    <Router>
      <>
        <Switch>
          {/* <Route exact path="/cha/home">
            <Home />
          </Route>
          <Route path="/cart">
            <ChaCart />
          </Route>
          <Route path="/groupOrder/groupOrderCreate">
            <ChaGroupOrder />
          </Route>
          <Route path="/orderManagement">
            <ChaOrderManagement />
          </Route>
          <Route path="/irisProfilePageDemo">
            <IrisProfilePageDemo />
          </Route> */}
        </Switch>
      </>
    </Router>
  )
}

export default ChaAppTest
