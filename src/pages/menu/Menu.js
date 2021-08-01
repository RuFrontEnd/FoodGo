import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import JessMenuA from 'components/JessMenuA/JessMenuA';
import JessMenuB from 'components/JessMenuB/JessMenuB';
import JessMenuC from 'components/JessMenuC/JessMenuC';
import JessMenuD from 'components/JessMenuD/JessMenuD';
import ToTop from 'Share/Components/ToTopButton/ScrollButton';


function Menu(props) {

  const {setShowBar } = props;
  
  useEffect(() => {
    setShowBar(true);
  }, []);

  let { id } = useParams();

  return (
    <>
      {/* <VNavbar {...props} /> */}
      <JessMenuA />
      <JessMenuB id={id} />
      <JessMenuC id={id} />
      <JessMenuD />
      <ToTop />
    </>
  );
}

export default withRouter(Menu);
