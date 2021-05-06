import React, { useState, useEffect } from 'react'
// import VNavbar from './Share/Components/VNavbar/VNavbar.js';
import JanIndexx from './Janice/Components/JanIndexx/JanIndexx'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import NavBar from './Share/Components/NavBar/NavBar'
import Footer from './Share/Components/Footer/Footer'

function JanAppTest() {
  return (
    <Router>
      <>
        <NavBar />
        <JanIndexx />
        <Footer />
      </>
    </Router>
  )
}

export default JanAppTest
