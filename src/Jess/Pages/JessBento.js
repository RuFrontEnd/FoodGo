import React, { useState, useEffect } from 'react';
import { Link, withRouter, useParams } from 'react-router-dom';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import JessHeader from '../Components/JessHeader/JessHeader';
import JessListA from '../Components/JessListA/JessListA';
import JessListB from '../Components/JessListB/JessListB';
import JessListC from '../Components/JessListC/JessListC';
import JessListD from '../Components/JessListD/JessListD';
import JessListE from '../Components/JessListE/JessListE';
import ToTop from 'Share/Components/ToTopButton/ScrollButton';

function JessBento(props) {
  const { handleCartNumber, handleCarList, currentUser, setShowBar } = props;
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setShowBar(true);
  }, []);
  //useParams 設定id
  let { id } = useParams();
  async function bentoData() {
    const url = 'http://localhost:5000/product/bento';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    // console.log('data', data);
    // console.log('menu.price', data[id].price);

    // console.log('data[id]', data[id]); //整包資料
    //這邊id值可以設定分頁
    setMenu(data[id]); //設定不進去
    setTotal(data[id].price);
  }

  // -------- 取得目前user的資料 ---------- //
  async function getUserInfoFromServer() {
    const url = 'http://localhost:5000/member/allUserProfile';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const userdata = await response.json();
    // console.log('userdata', userdata);
  }

  useEffect(() => {
    getUserInfoFromServer();
    bentoData();
  }, [id]);

  return (
    <>
      <VNavbar {...props} />
      <JessHeader
        handleCartNumber={handleCartNumber}
        handleCarList={handleCarList}
        count={count}
        setCount={setCount}
        total={total}
        setTotal={setTotal}
        menu={menu}
        setMenu={setMenu}
        getUserInfoFromServer={getUserInfoFromServer}
        {...props}
      />
      <JessListA />
      <JessListB />
      <JessListC />
      <JessListD {...props} />
      <JessListE menu={menu} setMenu={setMenu} />
      <ToTop />
    </>
  );
}

export default withRouter(JessBento);
