import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import './ChaOrderItem.scss';

//加上這三個 路徑要注意------------
import JessModal from '../JessModal/JessModal';
import JessCommentOrder from '../JessCommentMsg/JessCommentOrder';
import JessCommentInput from '../JessCommentMsg/JessCommentInput';
///-----------------------------
// import UpdateCartAToLocalStorage from 'Share/Components/Tools/UpdateCartToLocalStorage'

// import { Button, Collapse } from 'react-bootstrap';
function ChaOrderItem(props) {
  const { orderItem, handleCartNumber } = props;
  const [status, setStatus] = useState(false);
  const [comments, setComments] = useState([]);

  //fetch member
  async function messageData() {
    const url = 'http://localhost:5000/product/member1msg';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();

    setComments(data);
    // console.log(data)
  }
  useEffect(() => {
    messageData();
  }, [status]);

  // 訂單明細的內容JSX
  const ComponentOrderDetail = (props) => {
    const { orderItem } = props;
    return (
      <>
        <div className="cha-order-detail-container container">
          <div class="cha-order-detail-header row">
            <span class="col-5">商品名稱</span>
            <span class="col-2">商品單價</span>
            <span class="col-3">商品數量</span>
          </div>
          <div className="cha-horizontal-line-in-order row"></div>

          <div className="cha-detail-hover row">
            <span className="col-5">商品名稱</span>
            <span className="col-2">$商品單價</span>
            <span className="col-3">X 商品數量</span>
          </div>

          <div className="cha-horizontal-line-in-order row"></div>
          <div className="cha-detail-hover row">
            <span className="col-7">小計</span>
            <span className="col-3">X AAA</span>
            <span className="col-2 cha-text-left">$AAA</span>
          </div>
          <div className="cha-detail-hover row justify-content-between">
            <span>運費</span>
            <span>$AAA</span>
          </div>
          <div className="cha-detail-hover row justify-content-between">
            <span>怪獸幣</span>
            <span>-$AAA</span>
          </div>
          <div className="cha-detail-hover row  justify-content-between">
            <span>餐具</span>
            <span>AAA</span>
          </div>
          <div className="cha-horizontal-line-in-order row"></div>
          <div className="cha-detail-hover row justify-content-between">
            <span>訂單總額</span>
            <span> $AAA</span>
          </div>
        </div>
      </>
    );
  };
  // 餐點評價的內容JSX
  const ComponentMealComment = (props) => {
    // const { orderItem } = props;
    return (
      <>
        <div className="cha-order-detail-container container">
          <div class="row cha-order-detail-header">
            <span class="col-5">商品名稱</span>
            <span class="col-2">商品單價</span>
            <span class="col-3">商品數量</span>
          </div>
          <div className="cha-horizontal-line-in-order row"></div>

          <div className="row">
            <a href="/bento/0#1">
              <span className="col-5">AAA</span>
            </a>
            <span className="col-2">$AAA</span>
            <span className="col-3">XAAA</span>
            <span className="col-2">
              <input
                type="button"
                value="我要評價"
                className="cha-detail-btn"
                // Jess光箱的onClick事件
                onClick={() => setStatus(true)}
              />
            </span>
          </div>
          {/* 留言完要呈現的畫面component */}
          <JessCommentOrder comments={comments} setComments={setComments} />
        </div>
      </>
    );
  };
  // 餐點評價的內容JSX
  const ComponentReceipt = (props) => {
    // const { orderItem } = props;
    return (
      <>
        <div className="cha-order-detail-container container d-flex justify-content-center">
          <div className="cha-receipt-demo"></div>
        </div>
      </>
    );
  };
  // 切換用函式
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('cha-active-detail');
    });

    addElem.classList.add('cha-active-detail');
  };
  const TabMenu = (props) => {
    const { orderItem } = props;
    const [orderDetailComponent, setOrderDetailComponent] = useState();
    // const [open, setOpen] = useState(false);
    const tabContentA = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderDetailComponent(<ComponentOrderDetail orderItem={orderItem} />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderDetailComponent(<ComponentMealComment orderItem={orderItem} />);
    };
    const tabContentC = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderDetailComponent(<ComponentReceipt orderItem={orderItem} />);
    };

    return (
      <>
        {/* 加上這個觸發光箱 */}
        {status && (
          <JessModal closeModal={() => setStatus(false)}>
            <JessCommentInput closeModal={() => setStatus(false)} />
            {/* <JessCommentMsg status={status} setStatus={setStatus} /> */}
          </JessModal>
        )}
        <div className="cha-order-item-container">
          <div className="cha-order-row">
            <div className="cha-order-column1-picture"></div>
            <div className="cha-order-column2">
              <div className="cha-order-column2-row1">
                <span>
                  <span> 訂單編號: </span>
                  <span> </span>
                  <span className="cha-order-orange"> AAABBB </span>
                </span>
                <span className="cha-order-divider"> | </span>
                <span>
                  <span> 訂單金額: </span>
                  <span> </span>
                  <span className="cha-order-orange">$AAA</span>
                </span>
                <span className="cha-order-divider"> | </span>
                <span>
                  <span> 訂單狀態: </span>
                  <span> </span>
                  <span className="cha-order-orange">AAA</span>
                </span>
              </div>
              <div className="cha-order-column2-row2">
                <span> 取餐聯絡人: </span>
                <span>AAA</span>
              </div>
              <div className="cha-order-column2-row3">
                <span> 取餐時間: </span>
                <span>AAA</span>
                <span> </span>
                <span>AAA </span>
                <span className="cha-order-divider"> | </span>
                <span> 取餐方式: </span>
                <span>AAA</span>
              </div>

              <div className="cha-order-column2-row4">
                <span>
                  A<span> 取餐地址: </span>
                  <span>AAA</span>
                </span>
              </div>
              <div className="cha-order-column2-row5">
                <span onClick={tabContentA}>
                  {/* <span className="cha-reset-display">
                  <Button
                  onClick={() => setOpen(true)}
                  // onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text" aria-expanded={open}> */}
                  訂單明細
                  {/* </Button>
                  </span> */}
                </span>
                <span
                  className="cha-order-mana-title-switch"
                  onClick={tabContentB}
                >
                  用餐評價
                </span>
                <span
                  className="cha-order-mana-title-switch"
                  onClick={tabContentC}
                >
                  查閱發票
                </span>
                {/* <!-- <span> 怪獸對決 </span> --> */}
              </div>
            </div>

            <div className="cha-order-column3-btn">
              <div className="cha-order-in-column3-control-height">
                <Link to="/cart">
                  <input
                    type="button"
                    value="再次訂購"
                    // onClick={() => {
                    //   orderItem.order_detail.forEach((item) =>
                    //     UpdateCartToLocalStorage({
                    //       id: item.sid,
                    //       productName: item.product_name,
                    //       productPrice: item.product_price,
                    //       productAmount: item.product_amount,
                    //     })
                    //   )
                    //   // props.history.push('/cart');
                    //   orderItem.order_detail.forEach((item) =>
                    //     handleCartNumber('minus', item.product_amount)
                    //   )
                    // }}
                  />
                </Link>

                <input
                  type="button"
                  value="取消/退費"
                  className="cha-order-btn-858585"
                />

                <input type="button" value="加入點餐" />

                <input type="button" value="分享連結" />

                <input type="button" value="收單" />
              </div>
            </div>
          </div>
          {/* <Collapse in={open}> */}
          <div>{orderDetailComponent}</div>
          {/* </Collapse> */}
        </div>
      </>
    );
  };
  return (
    <>
      <TabMenu orderItem={orderItem} />
    </>
  );
}
export default withRouter(ChaOrderItem);
