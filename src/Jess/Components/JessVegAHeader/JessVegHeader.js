import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './JessVegHeader.scss';
import AddCart from 'Share/Components/AddCart/AddCart';
import BreadCrumb from '../JessBreadCrumb/BreadCrumb';
import AddFavorite from 'Share/Components/AddFavorite/AddFavorite';
import cart from '../../../Share/Components/AddCart/Images/cart.svg';
import vegPic from './Images/vegetableBox_slick_pic2.png';
import vegPic2 from './Images/VegBox2.jpg';

function JessVegHeader(props) {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(350);
  const [veg, setVeg] = useState([]);
  const { handleCartNumber } = props;

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
    // data會是一個array
    // console.log(data)
    // console.log(data[0].productname)

    // setTotal(total.push(data))
    // setTotal(data)
    setVeg(data[22]);
    console.log(data[22]);
  }
  const handleClick = (type) => {
    if (type === 'increment') {
      setCount(count + 1);
    }
    if (type === 'decrement' && count > 1) {
      setCount(count - 1);
    }
  };
  const handleTotal = (type) => {
    if (total - 350 >= 0 && count > 0 && type === 'decrement') {
      setTotal(total - 350);
    }
    if (type === 'increment') {
      setTotal(total + 350);
    }
  };

  useEffect(() => {
    bentoData();
  }, []);

  const calA = (e) => {
    setTabActive(e.target, '.jess-a');
  };
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
      console.log(target);
    });

    addElem.classList.add('active');
  };
  const sizeA = (e) => {
    setSizeActive(e.target, '.jess-b');
  };
  const setSizeActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
      console.log(target);
    });

    addElem.classList.add('active');
  };

  const favA = (e) => {
    setfavActive(e.target, '.fav');
  };
  const setfavActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.toggle('active');
    });
  };
  // function CreateCartToLocalStorage(value) {
  //   const currentCart = JSON.parse(localStorage.getItem('cart')) || []

  //   const newCart = [...currentCart, value]
  //   localStorage.setItem('cart', JSON.stringify(newCart))
  // }
  const CreateCartToLocalStorage = (item, amount = 1, isAdded) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = currentCart.findIndex((v) => v.id === item.id);
    if (index > -1) {
      if (isAdded) {
        currentCart[index].productAmount += amount;
      } else if (!isAdded && currentCart[index].productAmount > 1) {
        currentCart[index].productAmount--;
      }
    } else {
      currentCart.push(item);
      console.log('currentCart', currentCart);
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <>
      <div className="jess-fluidBg">
        <div className="container jess-breadCrumb">{/* <BreadCrumb /> */}</div>
        <div className="jess-productList-VegPic">
          <img className="jess-veg" alt="" src={vegPic2}></img>
          <img className="jess-veg" alt="" src={vegPic}></img>
        </div>
        <div className="jess-menuList ">
          <div className="jess-fav ">
            <button
              className="addFavorite-btn addFavorite-btn-n fav"
              onClick={favA}
            ></button>
          </div>

          <h1 className="jess-tittle">{veg.productname}</h1>
          <p className="jess-text20Green mt-2">11月盛產季節限定</p>
          <p className="jess-contentVeg">{veg.introduction}</p>
          <p className="jess-text20GreenTc">
            ・出貨日期： <span className="jess-text-15Gray">預計 4 天到貨</span>
          </p>
          <div className="row mt-3 ">
            <div className="col-2">
              <button className="jess-calendar jess-a active" onClick={calA}>
                11/21 星期六
              </button>
            </div>
            <div className="col-2">
              <button className="jess-calendar jess-a" onClick={calA}>
                11/22 星期日
              </button>
            </div>
            <div className="col-2">
              <button className="jess-calendar jess-a" onClick={calA}>
                11/23 星期一
              </button>
            </div>
            <div className="col-2">
              <button className="jess-calendar jess-a" onClick={calA}>
                11/24 星期二
              </button>
            </div>
            <div className="col-2">
              <button className="jess-calendar jess-a" onClick={calA}>
                11/25 星期三
              </button>
            </div>
          </div>
          <p className="jess-text20GreenTc mt-3">・尺寸</p>
          <div className="row mt-3 jess-VegSize ">
            <div className="col-2">
              <button className="jess-size jess-b active" onClick={sizeA}>
                S
              </button>
            </div>
            <div className="col-2">
              <button className="jess-size jess-b" onClick={sizeA}>
                M
              </button>
            </div>
            <div className="col-2">
              <button className="jess-size jess-b" onClick={sizeA}>
                L
              </button>
            </div>
          </div>
          <hr />
          <div className="jess-productPrice mt-1">
            <p className="jess-salePrice">${total}</p>
            <p className="jess-saleTotal">剩餘2箱</p>
          </div>
          <hr />
          <div className=" mt-5 d-flex justify-content-center">
            <div className="counter-box">
              <div
                onClick={() => {
                  handleClick('decrement');
                  handleTotal('decrement');
                }}
                className={
                  count === 1
                    ? 'counter-decrement cursor-default'
                    : 'counter-decrement counter-hover'
                }
              >
                <p>-</p>
              </div>
              <div className="counter-count">
                <p>{count}</p>
              </div>
              <div
                onClick={() => {
                  handleClick('increment');
                  handleTotal('increment');
                }}
                className="counter-increment"
              >
                <p>+</p>
              </div>
            </div>
          </div>
          <div className=" mt-5 d-flex justify-content-center">
            <button
              className="addCart-btn addCart-btn-n"
              onClick={() => {
                handleCartNumber('add', count);
                CreateCartToLocalStorage({
                  id: 23,
                  productName: '在地小農蔬菜箱',
                  productImage: '22_vegBox',
                  productPrice: 350,
                  productAmount: count,
                });
              }}
            >
              <img className="addCart-cart addCart-cart-n" src={cart} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JessVegHeader;
