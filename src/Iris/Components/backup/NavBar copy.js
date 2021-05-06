// 11/02 改NAVBAR備份

// 導入其它的模組
import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import './Navbar.scss'
import 'antd/dist/antd.css'
import { Popover } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { ReactComponent as Logo } from '../../Images/SVG/navbar-logo.svg'
import { ReactComponent as BackArrow } from '../../Images/SVG/navbar-back arrow.svg'
import { ReactComponent as Monster } from '../../Images/SVG/navbar-monster.svg'
import { ReactComponent as ShoppingCart } from '../../Images/SVG/navbar-shopping-cart.svg'
import { ReactComponent as ShoppingAmount } from '../../Images/SVG/navbar-cartNumber.svg'
// 選單連結要使用NavLink取代Link
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  const [count, setCount] = useState(0)
  const [shoppingList, setShoppingList] = useState('0')
  const [showNav, setShowNav] = useState(true)
  const { isLogin, setShowLoginModal } = props

  function myFunction() {
    const x = document.getElementById('NavBar')
    if (x.className === 'nav') {
      x.className += ' responsive'
    } else {
      x.className = 'nav'
    }
  }
  return (
    <>
      <div className="nav" id="NavBar">
        <div className="navBar-jess-container">
          <div className="navBar-jess-navCollapse ">
            <ul className="navBar-jess-navigation">
              <li className="navBar-jess-navigation_item">
                <Nav.Link as={NavLink} to="/groupOrder">
                  作伙揪團
                </Nav.Link>
              </li>
              <li className="navBar-jess-navigation_item">
                <Nav.Link as={NavLink} to="/farmMap">
                  哈囉小農
                </Nav.Link>
              </li>
              <li className="navBar-jess-navigation_item">
                <Nav.Link as={NavLink} to="/menu">
                  尋找美味 <BackArrow className="backArrow" />{' '}
                </Nav.Link>
                <div className="navBar-jess-emptydiv">
                  <ul className="navBar-jess-dropdown">
                    <div className="navBar-jess-triangle"></div>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/productList">
                        低GI便當
                      </Nav.Link>
                    </li>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/productListSalad">
                        美味沙拉
                      </Nav.Link>
                    </li>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/vegBox">
                        蔬菜箱
                      </Nav.Link>
                    </li>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/productListCustom">
                        客製化便當
                      </Nav.Link>
                    </li>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/">
                        外送服務
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </li>
              <Nav.Link
                as={NavLink}
                to="/"
                exact
                className="navBar-jess-nav_brand"
              >
                <Logo />
              </Nav.Link>

              <li className="navBar-jess-navigation_item">
                <Nav.Link as={NavLink} to="/">
                  專屬優惠
                </Nav.Link>
              </li>
              <li className="navBar-jess-navigation_item">
                <Nav.Link as={NavLink} to="/">
                  關於我們
                </Nav.Link>
              </li>
              <li className="navBar-jess-navigation_item">
                <Nav.Link as={NavLink} to="/memberUserprofile">
                  會員中心 <BackArrow className="backArrow" />{' '}
                </Nav.Link>
                <div className="navBar-jess-emptydiv">
                  <ul className="navBar-jess-dropdown2">
                    <div className="navBar-jess-triangle2"></div>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/orderComment">
                        訂單管理
                      </Nav.Link>
                    </li>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/memberUserprofile">
                        修改會員資料
                      </Nav.Link>
                    </li>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/myFav">
                        我的最愛
                      </Nav.Link>
                    </li>
                    <li className="navBar-jess-dropdown_item">
                      <Nav.Link as={NavLink} to="/beastiePoint">
                        我的怪獸
                      </Nav.Link>
                      <Monster className="navBar-jess-monster4" />
                    </li>
                    {/* 10/31 iris修改(把route拿掉) */}
                    <li
                      className="navBar-jess-dropdown_item"
                      onClick={() => {
                        setShowLoginModal(true)
                      }}
                    >
                      {/* <Nav.Link as={NavLink} to="/login"> */}
                      登入/登出
                      {/* </Nav.Link> */}
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Popover
                  placement="bottomLeft"
                  content={shoppingList}
                  title="我的購買清單"
                  trigger="hover"
                  className="navbar-jess-popover"
                >
                  <ShoppingCart className="navbar-jess-ShopingCart" />
                  <ShoppingAmount className="jess-navbarCartAmount" />
                  <span className="jess-navbarCartNum" id="jess-navbarCartNum">
                    {count}
                  </span>
                </Popover>
              </li>
            </ul>
          </div>
        </div>
        <div className="icons-list nav_toggle" onClick={myFunction}>
          <MenuOutlined />
        </div>
      </div>
    </>
  )
}

// 輸出元件(函式)

export default NavBar
