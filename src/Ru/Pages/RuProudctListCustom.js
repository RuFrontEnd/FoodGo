import React, { useState, useEffect } from 'react';
import RuCompCustom from 'Ru/Components/RuComps/RuCompCustom/RuCompCustom';
import VNavBar from 'Share/Components/VNavbar/VNavbar';

function RuProudctListCustom(props) {
  const { handleCartNumber, setAmount, amount, setShowBar } = props;
  const [count, setCount] = useState(1);
  useEffect(() => {
    setShowBar(true);
  }, []);
  return (
    <>
      {/* <VNavBar {...props} /> */}
      <RuCompCustom
        handleCartNumber={handleCartNumber}
        amount={amount}
        setAmount={setAmount}
        count={count}
        setCount={setCount}
      />
    </>
  );
}

export default RuProudctListCustom;
