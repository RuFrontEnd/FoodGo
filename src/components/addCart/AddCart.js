import React, { useEffect } from 'react';
import 'components/addCart/addCart.scss';
import { TimelineMax, TimelineLite } from 'gsap'; // npm install gsap react-gsap 安裝 tween套件
import cart from 'assets/svg/cart.svg';
import littleQ from 'assets/svg/littleQ.svg'
function AddCart(props) {
  // 目標的id一律用target
  // id 不同元件id
  // parentId 不同元件父母id
  const {
    id,
    imgId,
    proudctId,
    parentId,
    price,
    title,
    amount,
    count,
    handleCartNumber,
    setIsShowHintA,
    setIsShowHintB,
    setIsShowHintC,
    setIsShowHintD,
    setIsShowHintE,
    setIsShowHintF,
  } = props;
  // console.log(id, parentId);

  const addToCart = (e) => {
    // 給第五組 動畫開始 s
    // 執行加入購物車動畫
    const $addBtn = document.getElementById(`${id}`); // 觸發按鈕
    const $target = document.getElementById('ru-target'); // 目標
    // getBoundingClientRect() 取得元素相對於瀏覽器視窗的位置
    let addBtnX = $addBtn.getBoundingClientRect().left + 75; // +75(button寬度的一半) 才會在正中心
    let addBtnY = $addBtn.getBoundingClientRect().top + 22.5;
    let targetX = $target.offsetLeft + 15;
    let targetY = $target.offsetTop + 15;
    let distanceX = Math.abs(targetX - addBtnX);
    let distanceY = Math.abs(targetY - addBtnY);
    let finalX = addBtnX + distanceX;
    let finalY = targetY;
    // console.log(
    //   "按鈕X座標",
    //   addBtnX,
    //   "按鈕Y座標",
    //   addBtnY,
    //   "目標X座標",
    //   targetX,
    //   "目標Y座標",
    //   targetY,
    //   "距離X",
    //   distanceX,
    //   "距離Y",
    //   distanceY,
    //   "最終距離X",
    //   finalX,
    //   "最終距離Y",
    //   finalY
    // );

    const newEl = document.createElement('img');
    // let url = require('./Images/littleQ.svg'); // require() => 在react內 img的src可以用這個函式引入
    newEl.setAttribute('src', littleQ);
    // const newContent = document.createTextNode("Hi there and greetings!");
    // newEl.appendChild(newContent);
    newEl.setAttribute(
      'style',
      `width:50px; position: fixed; z-index:9999; left:${addBtnX}; top: ${addBtnY}px; transform:translate(-50%,-50%);`
    );
    newEl.setAttribute('id', `obj`);
    const $currentEl = document.getElementById(`${id}`);
    const $currentElParent = document.getElementById(`${parentId}`);
    $currentElParent.insertBefore(newEl, $currentEl.nextSibling); // 已存在元素的父層.insertBefoe('新元素', 已存在元素) => 在已存在元素之前加入新元素
    // 這邊加入nextSibling => 相當於將新元素加到已存在元素之後
    new TimelineLite({ onComplete: removeNewEl }).to('#obj', 1, {
      // onComplete: callback => 當當動畫結束時執行
      left: finalX,
      top: finalY,
      width: '10px',
    });
    function removeNewEl() {
      document.querySelector('#obj').remove();
    }
    // 給第五組 動畫開始 e

    // 執行加入localStorage
    handleCartNumber('add', count);
    updateCartToLocalStorage(
      {
        // 設定要加入的資料
        id: proudctId,
        productName: title,
        productAmount: count,
        productImage: imgId,
        productPrice: price,
      },
      count,
      true
    );

    // 按下加入購物車按鈕 關閉顯示區
    //如果從客製化按按鈕
    if (id === 'addCart-btn-custom') {
      // 關閉全部的hint區塊
      setIsShowHintA(false);
      setIsShowHintB(false);
      setIsShowHintC(false);
      setIsShowHintD(false);
      setIsShowHintE(false);
      setIsShowHintF(false);
    }
  };

  const updateCartToLocalStorage = (item, amount = 1, isAdded) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = currentCart.findIndex((v) => v.id === item.id); // 如果localStorage裡面的id
    if (index > -1) {
      // 如果localStorage裡面已經有一樣的id
      if (isAdded) {
        currentCart[index].productAmount += amount;
      } else if (!isAdded && currentCart[index].productAmount > 1) {
        currentCart[index].productAmount--;
      }
    } else {
      currentCart.push(item);
      // console.log('currentCart', currentCart);
    }
    localStorage.setItem('cart', JSON.stringify(currentCart));
    // setMeals(currentCart)
  };

  return (
    <>
      <div className="addCart-btn-warp" id={parentId}>
        <button
          className="addCart-btn addCart-btn-n"
          id={id}
          onClick={addToCart}
        >
          <img className="addCart-cart addCart-cart-n" src={cart} />
        </button>
      </div>
    </>
  );
}

export default AddCart;
