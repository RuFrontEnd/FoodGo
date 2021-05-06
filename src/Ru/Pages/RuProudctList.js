import React, { useState, useEffect } from 'react';
import RuCompBento from 'Ru/Components/RuComps/RuCompBento/RuCompBento';
import VNavBar from 'Share/Components/VNavbar/VNavbar';

function RuProudctList(props) {
  const { handleCartNumber, currentUser, setShowBar } = props;
  const [count, setCount] = useState(1);
  useEffect(() => {
    setShowBar(true);
  }, []);
  return (
    <>
      {/* <VNavBar {...props} /> */}
      <RuCompBento
        handleCartNumber={handleCartNumber} // localStorage函式
        currentUser={currentUser}
        count={count}
        setCount={setCount}
      />
    </>
  );
}

export default RuProudctList;
