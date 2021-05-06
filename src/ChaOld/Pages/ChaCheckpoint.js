import React from 'react';
import { Link } from 'react-router-dom';
import InputAdd from 'Share/Components/Input/InputAdd';
import InputAddress from 'Share/Components/Input/InputAddress';
import InputAddressEdit from 'Share/Components/Input/InputAddressEdit';
import InputH40 from 'Share/Components/Input/InputH40';
import InputTest from 'Share/Components/Input/InputTest';
import MainPageSelectBox from 'Share/Components/Input/MainPageSelectBox';
import SelectBox from 'Share/Components/Input/SelectBox';
import IrisSuccessBox from 'Iris/Components/IrisSuccessBox/IrisSuccessBox';
import IrisBeastiePointSect from 'Iris/Components/IrisBeastiePointSect/IrisBeastiePointSect';
function ChaCheckpoint(props) {
  return (
    <>
      <div className="container">
        <div
          style={{ width: '100%', height: '15rem', backgroundColor: '#fff' }}
        ></div>
        <h1>中繼站</h1>
        <hr />
        <h3>購物車</h3>
        <Link to="/cart">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            餐點購物車
          </button>
        </Link>
        <Link to="/chaProductList">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            假商品列表
          </button>
        </Link>
        <Link to="/chaCartTest">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            假購物車
          </button>
        </Link>
        <hr />
        <h3>訂單管理</h3>
        <Link to="/orderManagement">
          <button
            type="button"
            class="btn btn-primary
           btn-lg mr-5"
          >
            訂單管理
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            class="btn btn-secondary
           btn-lg mr-5"
          >
            揪團小遊戲
          </button>
        </Link>

        <hr />
        <h3>作伙揪團</h3>
        <Link to="/groupOrder/groupOrderCreate">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            作伙揪團
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderSearch">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            呼朋引伴
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderSignIn">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            朋友註冊
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderConfirm">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            註冊確認
          </button>
        </Link>
        <Link to="/groupOrder/groupOrderMenu">
          <button type="button" class="btn btn-primary btn-lg mr-5">
            開始點餐
          </button>
        </Link>
        <hr />
        <InputAdd />
        <InputAddress />
        <InputAddressEdit />
        <InputH40 />
        <InputTest />
        <MainPageSelectBox />
        <SelectBox />
        <IrisSuccessBox />
        <IrisBeastiePointSect />
        <div
          style={{ width: '100%', height: '15rem', backgroundColor: '#fff' }}
        ></div>
      </div>
    </>
  );
}
export default ChaCheckpoint;
