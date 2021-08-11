import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import MenuBanner from 'components/menuBanner/MenuBanner';
import DailyMenu from 'components/dailyMenu/DailyMenu';
import JessMenuC from '../Components/JessMenuC/JessMenuC';
import JessMenuD from '../Components/JessMenuD/JessMenuD';
import ToTop from 'Share/Components/ToTopButton/ScrollButton';
import styled from 'styled-components/macro';

function JessMenu(props) {
  const { setShowBar } = props;

  useEffect(() => {
    setShowBar(true);
  }, []);

  let { id } = useParams();

  const MenuBannerStyle = `
  margin-bottom:50px;
  @media (max-width: 768px) {
    background-color: red;
  };
  `;

  return (
    <>
      <MenuBanner style={MenuBannerStyle} />
      <DailyMenu />
      <JessMenuC id={id} />
      <JessMenuD />
      <ToTop />
    </>
  );
}

export default withRouter(JessMenu);
