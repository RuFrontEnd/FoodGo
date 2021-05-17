// 導入其它的模組
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import './navbar.scss';
import 'antd/dist/antd.css';
// import { Popover } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ReactComponent as Logo } from 'components/navBar/images/navbar-logo.svg';
import { ReactComponent as Member } from 'components/navBar/images/navBar-member.svg';
import { ReactComponent as DropArrow } from 'components/navBar/images/navbar-dropArrow.svg';
import { ReactComponent as Monster } from 'components/navBar/images/navbar-monster.svg';
import { ReactComponent as ShoppingCart } from 'components/navBar/images/navbar-shopping-cart.svg';
import { ReactComponent as ShoppingAmount } from 'components/navBar/images/navbar-cartNumber.svg';
import { ReactComponent as HamburgerMenu } from 'components/navBar/images/navBar-hamburger.svg';
import { ReactComponent as BackArrow } from 'components/navBar/images/navBar-backArrow.svg';

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
    <nav style={style} className={className} id={id}>
      <section className="navBar-container" id="NavBar">
        <div
          className="navBar-wrap"
          onClick={() => {
            if (showLoginModal === true) {
              setShowLoginModal(false);
            }
          }}
        >
          <div className="navBar-collapse">
            <ul className="navBar-navigation navBar-navigation-1">
              <li
                className="navBar-navigation-item navBar-hamburger-wrap"
                onClick={() => {}}
              >
                <Nav.Link style={{ padding: '0px' }}>
                  <HamburgerMenu className="navbar-icon navBar-hamburger" />
                </Nav.Link>
              </li>
              <li className="navBar-navigation-item navBar-navigation-item-txt">
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
              <li className="navBar-navigation-item navBar-navigation-item-txt">
                <Nav.Link as={NavLink} to="/farmMap">
                  哈囉小農
                </Nav.Link>
              </li>
              <li className="navBar-navigation-item navBar-navigation-item-txt">
                <Nav.Link as={NavLink} to="/menu">
                  尋找美味 <DropArrow className="navBar-dropArrow" />
                </Nav.Link>
                <ul className="navBar-dropdown">
                  <div className="navBar-dropdown-item-wrap">
                    <div className="navBar-triangle"></div>
                    <li className="navBar-dropdown-item">
                      <Nav.Link as={NavLink} to="/productList">
                        低GI便當
                      </Nav.Link>
                    </li>
                    <li className="navBar-dropdown-item">
                      <Nav.Link as={NavLink} to="/productListSalad">
                        美味沙拉
                      </Nav.Link>
                    </li>
                    <li className="navBar-dropdown-item">
                      <Nav.Link as={NavLink} to="/vegBox">
                        蔬菜箱
                      </Nav.Link>
                    </li>
                    <li className="navBar-dropdown-item">
                      <Nav.Link as={NavLink} to="/productListCustom">
                        客製化便當
                      </Nav.Link>
                    </li>
                    <li className="navBar-dropdown-item">
                      <Nav.Link as={NavLink} to="/">
                        外送服務
                      </Nav.Link>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
            <div className="navBar-navigation navBar-navigation-2">
              <Nav.Link as={NavLink} to="/" exact className="navBar-navBrand">
                <Logo className="navBar-logo" />
              </Nav.Link>
            </div>
            <ul className="navBar-navigation navBar-navigation-3">
              <li className="navBar-navigation-item navBar-navigation-item-txt">
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
              <li className="navBar-navigation-item navBar-navigation-item-txt">
                <Nav.Link as={NavLink} to="/">
                  關於我們
                </Nav.Link>
              </li>
              {!isLogin && (
                <li className="navBar-navigation-item">
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    onClick={(e) => {
                      disableLink(e);
                    }}
                  >
                    登入
                  </Nav.Link>
                </li>
              )}
              {isLogin && (
                <li className="navBar-navigation-item">
                  <Nav.Link
                    as={NavLink}
                    to="/memberUserprofile"
                    onClick={(e) => {
                      disableLink(e);
                    }}
                  >
                    <Member className="navbar-icon navBar-member" />
                  </Nav.Link>
                  <ul className="navBar-dropdown">
                    <div className="navBar-dropdown-item-wrap">
                      <div className="navBar-triangle"></div>
                      <li className="navBar-dropdown-item">
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
                      <li className="navBar-dropdown-item">
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
                      <li className="navBar-dropdown-item">
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
                      <li className="navBar-dropdown-item">
                        <Nav.Link
                          as={NavLink}
                          to="/beastiePoint"
                          onClick={(e) => {
                            disableLink(e);
                          }}
                        >
                          我的怪獸
                        </Nav.Link>
                        <Monster className="navBar-monster4" />
                      </li>
                      <li
                        className="navBar-dropdown-item navBar-login-option"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        登出
                      </li>
                    </div>
                  </ul>
                </li>
              )}
              <li className="navBar-navigation-item navBar-shoppingCard-container">
                <Nav.Link
                  as={NavLink}
                  style={{ padding: '0px' }}
                  to="/cart"
                  onClick={(e) => {
                    disableLink(e);
                  }}
                >
                  <ShoppingCart className="navbar-icon navbar-shoppingCart" />
                </Nav.Link>
                <div className="navbar-tag-wrap">
                  <div className="navbar-tag">
                    <ShoppingAmount className="navBar-navbarCartAmount" />
                    <span
                      className="navBar-navbarCartNum"
                      id="navBar-navbarCartNum"
                    >
                      50
                      {/* {cartNumber} */}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="navBar-icons-list navBar-navToggle"
          onClick={myFunction}
        >
          <MenuOutlined />
        </div>
      </section>
      <aside className="navBar-sideBar">
        <li className="navBar-listNavigation-item">
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
        <li className="navBar-listNavigation-item">
          <Nav.Link as={NavLink} to="/farmMap">
            哈囉小農
          </Nav.Link>
        </li>
        <li
          id="navBar-listNavigation-menu"
          className="navBar-listNavigation-item"
        >
          <Nav.Link as={NavLink} to="/menu">
            尋找美味 <DropArrow className="navBar-dropArrow" />
          </Nav.Link>
        </li>
        <li className="navBar-listNavigation-item">
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
        <li className="navBar-listNavigation-item">
          <Nav.Link as={NavLink} to="/">
            關於我們
          </Nav.Link>
        </li>
        <li className="navBar-listNavigation-item">
          <Nav.Link
            as={NavLink}
            to="/"
            onClick={(e) => {
              disableLink(e);
            }}
          >
            會員中心 <DropArrow className="navBar-dropArrow" />
          </Nav.Link>
        </li>
      </aside>
      <aside id="navBar-sub-sideBar" className="navBar-sideBar">
        <li id="navBar-listNavigation-back">
          <BackArrow className="navBar-backArrow" />
        </li>
        <li className="navBar-listNavigation-item">
          <h3>尋找美味</h3>
        </li>
        <li className="navBar-listNavigation-item">
          <Nav.Link as={NavLink} to="/menu">
            菜單介紹
          </Nav.Link>
        </li>
        <li className="navBar-listNavigation-item">
          <Nav.Link as={NavLink} to="/productList">
            低GI便當
          </Nav.Link>
        </li>
        <li className="navBar-listNavigation-item">
          <Nav.Link as={NavLink} to="/productList">
            美味沙拉
          </Nav.Link>
        </li>
        <li className="navBar-listNavigation-item">
          <Nav.Link as={NavLink} to="/vegBox">
            蔬菜箱
          </Nav.Link>
        </li>
        <li className="navBar-listNavigation-item">
          <Nav.Link as={NavLink} to="/productListCustom">
            客製化便當
          </Nav.Link>
        </li>
        <li className="navBar-listNavigation-item">
          <Nav.Link as={NavLink} to="/">
            外送服務
          </Nav.Link>
        </li>
      </aside>
    </nav>
  );
}

// 輸出元件(函式)

export default NavBar;
