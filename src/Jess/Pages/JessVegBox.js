import React, { useState, useEffect } from 'react';
// import BreadCrumb from '../Components/JessBreadCrumb/BreadCrumb'
import JessVegHeader from '../Components/JessVegAHeader/JessVegHeader';
import JessVegB from '../Components/JessVegB/JessVegB';
import JessVegC from '../Components/JessVegC/JessVegC';
import JessVegD from '../Components/JessVegD/JessVegD';
import JessVegE from '../Components/JessVegE/JessVegE';
import ToTopGreen from '../Components/Scroll/ScrollButton-green';

function JessVegBox(props) {
  const { handleCartNumber, handleCarList, setShowBar } = props;
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(170);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setShowBar(true);
  }, []);
  return (
    <>
      <JessVegHeader
        handleCartNumber={handleCartNumber}
        handleCarList={handleCarList}
        count={count}
        setCount={setCount}
        total={total}
        setTotal={setTotal}
        menu={menu}
        setMenu={setMenu}
      />
      <JessVegB />
      <JessVegC />
      <JessVegD />
      <JessVegE />
      <ToTopGreen />
    </>
  );
}

export default JessVegBox;
