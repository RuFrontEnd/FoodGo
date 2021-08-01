import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import MenuBanner from 'components/menuBanner/MenuBanner';
import DailyMenu from 'components/dailyMenu/DailyMenu';
import JessMenuC from '../Components/JessMenuC/JessMenuC';
import JessMenuD from '../Components/JessMenuD/JessMenuD';
import ToTop from 'Share/Components/ToTopButton/ScrollButton';

function JessMenu(props) {
  const { setShowBar } = props;

  useEffect(() => {
    setShowBar(true);
  }, []);

  let { id } = useParams();

  return (
    <>
      <MenuBanner />
      <DailyMenu id={id} />
      <JessMenuC id={id} />
      <JessMenuD />
      <ToTop />
    </>
  );
}

export default withRouter(JessMenu);
