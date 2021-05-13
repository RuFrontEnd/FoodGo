// 導入其它的模組
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import './Navbar.scss';
import 'antd/dist/antd.css';
// import { Popover } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ReactComponent as Logo } from '../../Images/SVG/navbar-logo.svg';
import { ReactComponent as BackArrow } from '../../Images/SVG/navbar-back arrow.svg';
import { ReactComponent as Monster } from '../../Images/SVG/navbar-monster.svg';
import { ReactComponent as ShoppingCart } from '../../Images/SVG/navbar-shopping-cart.svg';
import { ReactComponent as ShoppingAmount } from '../../Images/SVG/navbar-cartNumber.svg';
// 選單連結要使用NavLink取代Link
import { NavLink, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from 'redux/member/memberActions';
import { logout } from 'redux/member/memberActions';

function NavBar(props) {
  const {
    style = {},
    className = '',
    id = '',
    setShowLoginModal,
    showLoginModal,
    cartNumber,
    SetShowLoginCard,
    setShowSuccessBox,
  } = props;

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.member.isLogin);
  const [count, setCount] = useState(0);
  const [shoppingList, setShoppingList] = useState('0');
  const [showNav, setShowNav] = useState(true);

  function myFunction() {
    const x = document.getElementById('NavBar');
    if (x.className === 'nav') {
      x.className += ' responsive';
    } else {
      x.className = 'nav';
    }
  }

  // // 在登入狀態
  // if (isLogin === true) {
  //   // 登入選項消失
  //   document.querySelector('.iris-login-option').style.display = 'none';
  //   // 顯示登出選項
  //   document.querySelector('.iris-logout-option').style.display = 'block';
  // }

  // 在未登入的狀態點擊會員相關選項
  const disableLink = async (e) => {
    if (isLogin === false) {
      e.preventDefault(); // 不跳轉頁面
      setShowLoginModal(true); // 秀登入光箱
    }
  };

  // 點擊登出
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
  };

  return (
    <div style={style} className={className} id={id}>
      <div className="nav" id="NavBar">
        <div
          className="navBar-jess-container"
          onClick={() => {
            if (showLoginModal === true) {
              setShowLoginModal(false);
            }
          }}
        >
          <div className="navBar-jess-navCollapse ">
            <ul className="navBar-jess-navigation">
              <li className="navBar-jess-navigation_item">
                <Nav.Link
                  as={NavLink}
                  to="/groupOrder/groupOrderCreate"
                  onClick={(e) => {
                    disableLink(e);
                  }}
                >
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
                <Nav.Link
                  as={NavLink}
                  to="/getcoupon"
                  onClick={(e) => {
                    disableLink(e);
                  }}
                >
                  專屬優惠
                </Nav.Link>
              </li>
              <li className="navBar-jess-navigation_item">
                <Nav.Link as={NavLink} to="/">
                  關於我們
                </Nav.Link>
              </li>
              {!isLogin && (
                <li className="navBar-jess-navigation_item">
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    onClick={(e) => {
                      disableLink(e);
                    }}
                  >
                    登入會員
                  </Nav.Link>
                </li>
              )}
              {isLogin && (
                <li className="navBar-jess-navigation_item">
                  <Nav.Link
                    as={NavLink}
                    to="/memberUserprofile"
                    onClick={(e) => {
                      disableLink(e);
                    }}
                  >
                    會員中心 <BackArrow className="backArrow" />
                  </Nav.Link>
                  <div className="navBar-jess-emptydiv">
                    <ul className="navBar-jess-dropdown2">
                      <div className="navBar-jess-triangle2"></div>
                      <li className="navBar-jess-dropdown_item">
                        <Nav.Link
                          as={NavLink}
                          to="/orderManagement"
                          onClick={(e) => {
                            disableLink(e);
                          }}
                        >
                          訂單管理
                        </Nav.Link>
                      </li>
                      <li className="navBar-jess-dropdown_item">
                        <Nav.Link
                          as={NavLink}
                          to="/memberUserprofile"
                          onClick={(e) => {
                            disableLink(e);
                          }}
                        >
                          修改會員資料
                        </Nav.Link>
                      </li>
                      <li className="navBar-jess-dropdown_item">
                        <Nav.Link
                          as={NavLink}
                          to="/myFav"
                          onClick={(e) => {
                            disableLink(e);
                          }}
                        >
                          我的最愛
                        </Nav.Link>
                      </li>
                      <li className="navBar-jess-dropdown_item">
                        <Nav.Link
                          as={NavLink}
                          to="/beastiePoint"
                          onClick={(e) => {
                            disableLink(e);
                          }}
                        >
                          我的怪獸
                        </Nav.Link>
                        <Monster className="navBar-jess-monster4" />
                      </li>

                      <li
                        className="navBar-jess-dropdown_item iris-login-option"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        登出
                      </li>
                    </ul>
                  </div>
                </li>
              )}
              <li id="ru-target">
                <span className="jess-navbarCartNum" id="jess-navbarCartNum">
                  {cartNumber}
                </span>
                {/* <Popover
                  placement="bottomLeft"
                  content={shoppingList}
                  title="我的購買清單"
                  trigger="hover"
                  className="navbar-jess-popover"
                > */}
                <Nav.Link
                  as={NavLink}
                  to="/cart"
                  onClick={(e) => {
                    disableLink(e);
                  }}
                >
                  <ShoppingCart className="navbar-jess-ShopingCart" />
                </Nav.Link>
                <div className="navbar-tag-wrap">
                  <div className="navbar-tag">
                    <ShoppingAmount className="jess-navbarCartAmount" />
                    <span
                      className="jess-navbarCartNum"
                      id="jess-navbarCartNum"
                    >
                      {cartNumber}
                    </span>
                  </div>
                </div>
                {/* </Popover> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="icons-list nav_toggle" onClick={myFunction}>
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
}

// 輸出元件(函式)

export default NavBar;
