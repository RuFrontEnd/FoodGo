// 導入其它的模組
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import 'components/sideBar/sideBar.scss';
import 'antd/dist/antd.css';
import { ReactComponent as BackArrow } from 'assets/svg/backArrow.svg';
import { ReactComponent as DropArrow } from 'assets/svg/dropArrow.svg';
import { ReactComponent as Cancel } from 'assets/svg/cancel.svg';

// 選單連結要使用NavLink取代Link
import { NavLink, Redirect } from 'react-router-dom';

function NavBar(props) {
  const {
    isOpen = true,
    setIsOpen = () => {},
    style = {},
    className = '',
    id = 'sideBar-container',
    title = '',
    listNavigationItems = [
      { linkTo: '/', content: '項目', isDropArrow: false },
    ],
    handleGoBack,
  } = props;

  return (
    <aside
      style={style}
      id={id}
      className={
        (className,
        isOpen ? 'sideBar-container-active' : 'sideBar-container-disActive')
      }
    >
      <ul id="sideBar-wrap">
        <li id="sideBar-leftIcon-wrap">
          {!handleGoBack && (
            <Cancel
              className="sideBar-leftIcon"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          )}
          {handleGoBack && (
            <li id="sideBar-leftIcon-wrap">
              <BackArrow
                className="sideBar-leftIcon"
                onClick={() => {
                  handleGoBack();
                }}
              />
            </li>
          )}
        </li>
        {title && (
          <li id="sideBar-title" className="sideBar-item">
            <h3>{title}</h3>
          </li>
        )}
        {listNavigationItems.map((listNavigationItem) => (
          <li
            className="sideBar-item"
            onClick={
              listNavigationItem.handleItemEvent &&
              (() => {
                listNavigationItem.handleItemEvent();
              })
            }
          >
            <Nav.Link as={NavLink} to={listNavigationItem.linkTo}>
              {listNavigationItem.content}
              {listNavigationItem.isDropArrow && (
                <span id="sidBar-dropArrow-wrap">
                  <DropArrow className="sidBar-dropArrow" />
                </span>
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
