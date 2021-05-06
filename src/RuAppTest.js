import React from 'react'
import RuApp from './Ru/RuApp'
import Button from 'Share/Components/Button/Button'
import AddFavorite from 'Share/Components/AddFavorite/AddFavorite'
import AddCart from 'Share/Components/AddCart/AddCart'
import Card from 'Share/Components/Card/Card'
import ArrowLeft from 'Share/Components/ArrowLeft/ArrowLeft'
import ArrowRight from 'Share/Components/ArrowRight/ArrowRight'
import './App.css'
import { Router, Route } from 'react-router-dom'

function RuAppTest() {
  return (
      <>
        <RuApp />
        {/* <ArrowLeft /> */}
        {/* <ArrowRight /> */}
      </>
  )
}

export default RuAppTest
