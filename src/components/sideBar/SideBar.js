// 導入其它的模組
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import 'components/sideBar/sideBar.scss';
import 'antd/dist/antd.css';
import { ReactComponent as BackArrow } from 'assets/svg/backArrow.svg';
import { ReactComponent as DropArrow } from 'assets/svg/dropArrow.svg';

// 選單連結要使用NavLink取代Link
import { NavLink, Redirect } from 'react-router-dom';

function NavBar(props) {
  const {
    style = {},
    className = '',
    id = '',
    title = '',
    listNavigationItems = [
      { linkTo: '/', content: '項目', isDropArrow: false },
    ],
    handleGoBack = () => {},
  } = props;

  return (
    <aside style={style} id={id} className={`${className} sideBar-container`}>
      <ul id="sideBar-warp">
        <li id="sideBar-backArrow-wrap">
          <BackArrow
            className="sideBar-backArrow"
            onClick={() => {
              handleGoBack();
            }}
          />
        </li>
        {title && (
          <li className="sideBar-listNavigation-item">
            <h3>{title}</h3>
          </li>
        )}
        {listNavigationItems.map((listNavigationItem) => (
          <li className="listNavigation-item">
            <Nav.Link as={NavLink} to={listNavigationItem.linkTo}>
              {listNavigationItem.content}
              {listNavigationItem.isDropArrow && (
                <DropArrow className="navBar-dropArrow" />
              )}
            </Nav.Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// 輸出元件(函式)

export default NavBar;
