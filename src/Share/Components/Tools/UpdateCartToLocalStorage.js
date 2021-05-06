// 更新購物車中的商品數量
const UpdateCartToLocalStorage = (item, isAdded = true) => {
  // console.log(item, isAdded);
  const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  // find if the product in the localstorage with its id
  const index = currentCart.findIndex((v) => v.id === item.id);
  // console.log('index', index);
  // found: index! == -1
  if (index > -1) {
    if (isAdded) {
      currentCart[index].productAmount++;
    } else if (!isAdded && currentCart[index].productAmount > 1) {
      currentCart[index].productAmount--;
    }
    // isAdded &&
    //   ? currentCart[index].productAmount++
    //   : currentCart[index].productAmount--;
  } else {
    currentCart.push(item);
    console.log('currentCart', currentCart);
  }
  localStorage.setItem('cart', JSON.stringify(currentCart));
  // 設定資料
  // setMeals(currentCart);
};

export default UpdateCartToLocalStorage;
