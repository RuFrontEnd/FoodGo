import React, { useState, useEffect } from 'react'
import { Link, withRouter, useParams } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import 'antd/dist/antd.css'

function BreadCrumb(props) {
  const style = {
    font: 'Noto Sans TC',
    color: '#f48145',
    //   background-color: #f48145;
  }
  let { id } = useParams()
  // console.log(props.menu)
  let path = ''
  const pathname = props.location.pathname

  switch (pathname) {
    case '/menu':
      path = '商品總表'
      break
    case '/productList':
      path = '商品列表'
      break
    case '/bento' + id:
      path = ''
      break
    default:
      path = ''
  }
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/menu">商品總表</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/productList">產品列表</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/bento" style={style}>
            {props.menu.productname}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{path}</Breadcrumb.Item>
        <Breadcrumb.Item>{path}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default withRouter(BreadCrumb)
