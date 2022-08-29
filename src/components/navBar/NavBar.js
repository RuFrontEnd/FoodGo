// 導入其它的模組
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import './navbar.scss';
import 'antd/dist/antd.css';
// import { Popover } from 'antd';
import { FastForwardFilled, MenuOutlined } from '@ant-design/icons';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { ReactComponent as Member } from 'components/navBar/images/navBar-member.svg';
import { ReactComponent as DropArrow } from 'components/navBar/images/navbar-dropArrow.svg';
import { ReactComponent as Monster } from 'assets/svg/monster.svg';
import { ReactComponent as ShoppingCart } from 'assets/svg/shoppingCart.svg';
import { ReactComponent as ShoppingNumber } from 'assets/svg/shoppingNumber.svg';
import { ReactComponent as HamburgerMenu } from 'components/navBar/images/navBar-hamburger.svg';
import { ReactComponent as BackArrow } from 'components/navBar/images/navBar-backArrow.svg';
import { ReactComponent as Cancel } from 'components/navBar/images/navBar-cancel.svg';

// 選單連結要使用NavLink取代Link
import { NavLink, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from 'redux/member/memberActions';
import { logout } from 'redux/member/memberActions';

import SideBar from 'components/sideBar/SideBar';

function NavBar(props) {
  const {
    style = {},
    className = '',
    id = '',
    setShowLoginModal,
    showLoginModal,
    cartNumber,
  } = props;

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.member.isLogin);
  // 點擊登出
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
  };
  const [isMainSideBarOpen, setIsMainSideBarOpen] = useState(false);
  const [isMenuSideBarOpen, setIsMenuSideBarOpen] = useState(false);
  const [isMemberSideBarOpen, setIsMemberSideBarOpen] = useState(false);
  const mainSideBarItems = [
    { linkTo: '/groupOrder/groupOrderCreate', content: '作伙揪團' },
    { linkTo: '/farm', content: '哈囉小農' },
    {
      linkTo: '',
      content: '尋找美味',
      isDropArrow: true,
      handleItemEvent: () => {
        setIsMenuSideBarOpen(true);
      },
    },
    { linkTo: '/getcoupon', content: '專屬優惠' },
    { linkTo: '/', content: '關於我們' },
    {
      linkTo: '',
      content: '會員中心',
      isDropArrow: true,
      handleItemEvent: () => {
        setIsMemberSideBarOpen(true);
      },
    },
  ];
  const menuSideBarItems = [
    { linkTo: '/menu', content: '菜單介紹' },
    { linkTo: '/productList', content: '低GI便當' },
    { linkTo: '/productList', content: '美味沙拉' },
    { linkTo: '/vegBox', content: ' 蔬菜箱' },
    { linkTo: '/productList', content: '客製化便當' },
    // { linkTo: '/', content: '外送服務' },
  ];
  const memberSideBarItems = [
    { linkTo: '/orderManagement', content: '訂單管理' },
    { linkTo: '/memberUserprofile', content: '修改會員資料' },
    { linkTo: '/myFav', content: '我的最愛' },
    { linkTo: '/beastiePoint', content: ' 我的怪獸' },
    {
      linkTo: '/',
      content: '登出',
      handleItemEvent: () => {
        handleLogout();
      },
    },
  ];
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

  const toggleSideBarOpen = () => {
    if (!isMainSideBarOpen) {
      return setIsMainSideBarOpen(true);
    }
    setIsMainSideBarOpen(false);
    setIsMenuSideBarOpen(false);
    setIsMemberSideBarOpen(false);
  };

  return (
    <>
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
              {/* <ul className="navBar-navigation navBar-navigation-1"> */}
              {/* <li
                  id="navBar-hamburger-wrap"
                  className="navBar-navigation-item"
                  onClick={() => {
                    toggleSideBarOpen();
                  }}
                >
                  <Nav.Link style={{ padding: '0px' }}>
                    <HamburgerMenu className="navbar-icon navBar-hamburger" />
                  </Nav.Link>
                </li> */}
              {/* <li className="navBar-navigation-item navBar-navigation-item-txt">
                <Nav.Link
                  as={NavLink}
                  to="/groupOrder/groupOrderCreate"
                  onClick={(e) => {
                    disableLink(e);
                  }}
                >
                  作伙揪團
                </Nav.Link>
              </li> */}
              {/* <li className="navBar-navigation-item navBar-navigation-item-txt">
                  <Nav.Link as={NavLink} to="/farm">
                    哈囉小農
                  </Nav.Link>
                </li> */}
              {/* <li className="navBar-navigation-item navBar-navigation-item-txt"> */}
              {/* <Nav.Link as={NavLink} to="/menu">
                    尋找美味 <DropArrow className="navBar-dropArrow" />
                  </Nav.Link> */}
              {/* <div className="navBar-dropdown"> */}
              {/* <ul className="navBar-dropdown-item-wrap"> */}
              {/* <div className="navBar-triangle"></div> */}
              {/* <li className="navBar-dropdown-item">
                        <Nav.Link
                          as={NavLink}
                          to={{
                            pathname: '/productList',
                          }}
                        >
                          低GI便當
                        </Nav.Link>
                      </li>
                      <li className="navBar-dropdown-item">
                        <Nav.Link
                          as={NavLink}
                          to={{
                            pathname: '/productListSalad',
                          }}
                        >
                          美味沙拉
                        </Nav.Link>
                      </li>
                      <li className="navBar-dropdown-item">
                        <Nav.Link as={NavLink} to="/vegBox">
                          蔬菜箱
                        </Nav.Link>
                      </li>
                      <li className="navBar-dropdown-item">
                        <Nav.Link
                          as={NavLink}
                          to={{
                            pathname: '/productListCustom',
                          }}
                        >
                          客製化便當
                        </Nav.Link>
                      </li> */}
              {/* <li className="navBar-dropdown-item">
                      <Nav.Link as={NavLink} to="/">
                        外送服務
                      </Nav.Link>
                    </li> */}
              {/* </ul> */}
              {/* </div> */}
              {/* </li> */}
              {/* </ul> */}
              <div className="navBar-navigation navBar-navigation-2">
                <Nav.Link as={NavLink} to="/" exact className="navBar-navBrand">
                  <Logo className="navBar-logo" />
                </Nav.Link>
              </div>
              {/* <ul className="navBar-navigation navBar-navigation-3"> */}
              {/* <li className="navBar-navigation-item navBar-navigation-item-txt">
                <Nav.Link
                  as={NavLink}
                  to="/getcoupon"
                  onClick={(e) => {
                    disableLink(e);
                  }}
                >
                  專屬優惠
                </Nav.Link>
              </li> */}
              {/* <li className="navBar-navigation-item navBar-navigation-item-txt">
                  <Nav.Link as={NavLink} to="/">
                    關於我們
                  </Nav.Link>
                </li> */}
              {/* {!isLogin && (
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
                )} */}
              {/* {isLogin && (
                  <li className="navBar-navigation-item navBar-navigation-item-member"> */}
              {/* <Nav.Link
                      as={NavLink}
                      to="/memberUserprofile"
                      onClick={(e) => {
                        disableLink(e);
                      }}
                    >
                      <Member className="navbar-icon navBar-member" />
                    </Nav.Link> */}
              {/* <ul className="navBar-dropdown">
                      <div className="navBar-dropdown-item-wrap">
                        <div className="navBar-triangle"></div> */}
              {/* <li className="navBar-dropdown-item">
                          <Nav.Link
                            as={NavLink}
                            to="/orderManagement"
                            onClick={(e) => {
                              disableLink(e);
                            }}
                          >
                            訂單管理
                          </Nav.Link>
                        </li> */}
              {/* <li className="navBar-dropdown-item">
                          <Nav.Link
                            as={NavLink}
                            to="/memberUserprofile"
                            onClick={(e) => {
                              disableLink(e);
                            }}
                          >
                            修改會員資料
                          </Nav.Link>
                        </li> */}
              {/* <li className="navBar-dropdown-item">
                          <Nav.Link
                            as={NavLink}
                            to="/myFav"
                            onClick={(e) => {
                              disableLink(e);
                            }}
                          >
                            我的最愛
                          </Nav.Link>
                        </li> */}
              {/* <li className="navBar-dropdown-item">
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
                      </li> */}
              {/* TODO: 下拉選單暫時取消我的怪獸*/}
              {/* <li
                          className="navBar-dropdown-item navBar-login-option"
                          onClick={() => {
                            handleLogout();
                          }}
                        >
                          登出
                        </li> */}
              {/* </div>
                    </ul> */}
              {/* </li>
                )} */}
              {/* <li className="navBar-navigation-item navBar-shoppingCard-container">
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
                      <ShoppingNumber className="navBar-navbarCartAmount" />
                      <span
                        className="navBar-navbarCartNum"
                        id="navBar-navbarCartNum"
                      >
                        {cartNumber}
                      </span>
                    </div>
                  </div>
                </li> */}
              {/* </ul> */}
            </div>
          </div>
          <div
            className="navBar-icons-list navBar-navToggle"
            onClick={myFunction}
          >
            <MenuOutlined />
          </div>
        </section>
        <SideBar
          isOpen={isMainSideBarOpen}
          setIsOpen={setIsMainSideBarOpen}
          listNavigationItems={mainSideBarItems}
          id={'main-sideBar'}
        />
        <SideBar
          isOpen={isMenuSideBarOpen}
          setIsOpen={setIsMenuSideBarOpen}
          title={'尋找美味'}
          listNavigationItems={menuSideBarItems}
          id={'menu-sideBar'}
        />
        <SideBar
          isOpen={isMemberSideBarOpen}
          setIsOpen={setIsMemberSideBarOpen}
          title={'會員中心'}
          listNavigationItems={memberSideBarItems}
          id={'member-sideBar'}
        />
      </nav>
      <section style={{ height: '10rem' }}></section>
    </>
  );
}

// 輸出元件(函式)

export default NavBar;
