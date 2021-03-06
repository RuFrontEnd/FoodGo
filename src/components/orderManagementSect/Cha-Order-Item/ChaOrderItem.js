import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import './ChaOrderItem.scss';
import ChaGrayButton from './Cha-Gray-Button/ChaGrayButton';
import ChaOrangeButton from './Cha-Orange-Button/ChaOrangeButton';
import ChaOrangeButtonPlus from './Cha-Orange-Button-Plus/ChaOrangeButtonPlus';
import UpdateCartToLocalStorage from 'Share/Components/Tools/UpdateCartToLocalStorage';
import ChaRefundModal from './Cha-Refund-Modal/ChaRefundModal';
import ChaGoCartModal from './Cha-GoCart-Modal/ChaGoCartModal';

//加上這三個 路徑要注意------------
import JessModal from '../../../../Jess/Components/JessModal/JessModal';
import JessCommentOrder from '../../../../Jess/Components/JessCommentMsg/JessCommentOrder';
import JessCommentInput from '../../../../Jess/Components/JessCommentMsg/JessCommentInput';
import { Collapse } from 'antd';

// import { Button, Collapse } from 'react-bootstrap';
function ChaOrderItem(props) {
  const [error, setError] = useState(null);

  //Jess 光箱需要的state
  const [status, setStatus] = useState(false);
  const [comments, setComments] = useState([]);
  const { Panel } = Collapse;

  const {
    orderItem,
    handleCartNumber,
    setChangeOrderState,
    changeOrderState,
    // setRefundModalController,
  } = props;

  //--------------光箱控制器，refund---------------//
  const [refundModalController, setRefundModalController] = useState(false);
  const [goCartModalController, setGoCartModalController] = useState(false);

  //fetch member
  async function messageData() {
    const url = 'http://localhost:5000/product/member1msg2';

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
          <div class="cha-order-detail-header">
            <span class="col-5">商品名稱</span>
            <span class="col-2">商品單價</span>
            <span class="col-3">商品數量</span>
          </div>
          <div className="cha-horizontal-line-in-order"></div>
          {orderItem.order_detail.map((item, value) => (
            <div className="cha-detail-hover" key={value}>
              <span className="col-5">{item.product_name}</span>
              <span className="col-2">${item.product_price}</span>
              <span className="col-3">X {item.product_amount}</span>
            </div>
          ))}
          <div className="cha-horizontal-line-in-order"></div>
          <div className="cha-detail-hover">
            <span className="col-7">小計</span>
            <span className="col-3">X {orderItem.total_amount}</span>
            <span className="col-2 cha-text-left">
              ${orderItem.subtotal_price}
            </span>
          </div>
          <div className="cha-detail-hover justify-content-between">
            <span>運費</span>
            <span>${orderItem.shipping}</span>
          </div>
          <div className="cha-detail-hover  justify-content-between">
            <span>怪獸幣</span>
            <span>-${orderItem.beastie_coin}</span>
          </div>
          <div className="cha-detail-hover  justify-content-between">
            <span>餐具</span>
            <span>{orderItem.tableware === 'yes' ? '是' : '否'}</span>
          </div>
          <div className="cha-horizontal-line-in-order"></div>
          <div className="cha-detail-hover justify-content-between">
            <span>訂單總額</span>
            <span> ${orderItem.total_price}</span>
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
          <div className="cha-horizontal-line-in-order"></div>
          {orderItem.order_detail.map((item, value) => (
            <div className="row">
              <span className="col-5">{item.product_name}</span>
              <span className="col-2">${item.product_price}</span>
              <span className="col-3">X {item.product_amount}</span>
              <span className="col-2" onClick={() => setStatus(true)}>
                <ChaOrangeButtonPlus
                  type="button"
                  value="我要評價"
                  text="我要評價"
                  className="cha-detail-btn cha-order-orange-plus-btn"
                />
              </span>
            </div>
          ))}
        </div>
        <div className="jess-container mx-auto">
          <div className="jess-Collapse ">
            <Collapse defaultActiveKey={[]} ghost>
              <Panel header="我的留言" key="1" className="jess-Panel pl-5">
                <JessCommentOrder
                  comments={comments}
                  setComments={setComments}
                  orderItem={orderItem}
                />
              </Panel>
            </Collapse>
          </div>
        </div>
      </>
    );
  };
  // 餐點評價的內容JSX
  const ComponentReceipt = (props) => {
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
    // , setRefundModalController
    const { setChangeOrderState, changeOrderState } = props;
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

    // 退費的功能
    const idForChangeState = {
      sid: orderItem.sid,
      order_state: '已退費',
    };
    async function updateTotalToServer() {
      // const newOrderState = { order_state: '已退費' };

      const url = 'http://localhost:5000/cart-api/my-order-chang-state';
      console.log('訂單退費，改寫my-order', idForChangeState);
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(idForChangeState),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
      try {
        const response = await fetch(request);
        const data = await response.json();
        setChangeOrderState(+changeOrderState + 1);

        console.log('changeOrderState + 1', changeOrderState + 1);
        console.log('改寫my-order退費成功', data);
        console.log(
          '變更changeOrderState，呼叫GETfetch，再次讀取my-order&...',
          changeOrderState
        );
        // props.setForceKey(true);
        // props.setTabindexKey('C');
      } catch (error) {
        setError(error);
      }
    }
    return (
      <>
        {refundModalController && (
          <ChaRefundModal
            // setRefundModalController={setRefundModalController}
            // refundModalController={refundModalController}
            handleOrderState={() => {
              updateTotalToServer();
              setRefundModalController(false);
              console.log('呼叫POST、關閉光箱');
            }}
            closeModal={() => setRefundModalController(false)}
          ></ChaRefundModal>
        )}
        {goCartModalController && (
          <ChaGoCartModal
            closeModal={() => setGoCartModalController(false)}
            orderItem={orderItem}
            handleCartNumber={handleCartNumber}
          ></ChaGoCartModal>
        )}
        {/* 加上這個觸發光箱 */}
        {status && (
          <JessModal closeModal={() => setStatus(false)}>
            <JessCommentInput
              closeModal={() => setStatus(false)}
              orderItem={orderItem}
            />
            {/* <JessCommentMsg status={status} setStatus={setStatus} /> */}
          </JessModal>
        )}

        <div className="cha-order-item-container">
          <div className="cha-order-row">
            <div className="cha-order-column1-picture">
              {orderItem.order_detail && (
                <img
                  className="cha-order-HeadPic"
                  src={
                    '/productImages/Bento/' +
                    orderItem.order_detail[0].product_image +
                    '.jpg'
                  }
                  alt=""
                ></img>
              )}
            </div>
            <div className="cha-order-column2">
              <div className="cha-order-column2-row1">
                <span>
                  <span>訂單編號:</span>
                  <span> </span>
                  <span className="cha-order-orange"> AAA{orderItem.sid} </span>
                </span>
                <span className="cha-order-divider"> | </span>
                <span>
                  <span> 訂單金額: </span>
                  <span> </span>
                  <span className="cha-order-orange">
                    ${orderItem.total_price}
                  </span>
                </span>
                <span className="cha-order-divider"> | </span>
                <span>
                  <span> 訂單狀態: </span>
                  <span> </span>
                  <span className="cha-order-orange">
                    {orderItem.order_state}
                  </span>
                </span>
              </div>
              {orderItem.order_state === '揪團中' && (
                <div className="cha-order-column2-row1">
                  <span>
                    <span> 揪團名稱: </span>
                    <span> </span>
                    <span className="cha-order-orange">
                      {orderItem.order_name}
                    </span>
                  </span>
                </div>
              )}
              <div className="cha-order-column2-row2">
              <a href="/bento/0#1">
                <span className="jess-alink"> 取餐聯絡人: </span></a>
                <span>{orderItem.take_person}</span>
              </div>
              <div className="cha-order-column2-row3">
                <span> 取餐時間: </span>
                <span>{orderItem.take_date.slice(0, 10)}</span>
                <span> </span>
                <span>{orderItem.take_time} </span>
                <span className="cha-order-divider"> | </span>
                <span> 取餐方式: </span>
                <span>{orderItem.take_way === '外送' ? '外送' : '自取'}</span>
              </div>

              <div className="cha-order-column2-row4">
                <span>
                  <span> 取餐地址: </span>
                  <span>
                    {orderItem.take_county +
                      orderItem.take_district +
                      orderItem.take_address}
                  </span>
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
                {orderItem.order_state === '已送達' && (
                  <span
                    className="cha-order-mana-title-switch"
                    onClick={tabContentB}
                  >
                    用餐評價
                  </span>
                )}
                {orderItem.order_state === '已送達' && (
                  <span
                    className="cha-order-mana-title-switch"
                    onClick={tabContentC}
                  >
                    查閱發票
                  </span>
                )}
                {/* {orderItem.order_state === '揪團中' && <span> 怪獸對決 </span>} */}
              </div>
            </div>

            <div className="cha-order-column3-btn">
              <div className="cha-order-in-column3-control-height">
                {(orderItem.order_state === '已送達' ||
                  orderItem.order_state === '已退費') && (
                  <div
                    onClick={() => {
                      setGoCartModalController(true);
                      // orderItem.order_detail.forEach((item) =>
                      //   UpdateCartToLocalStorage({
                      //     id: item.sid,
                      //     productName: item.product_name,
                      //     productPrice: item.product_price,
                      //     productAmount: item.product_amount,
                      //     productImage: item.product_image,
                      //   })
                      // );
                      // // props.history.push('/cart');
                      // orderItem.order_detail.forEach((item) =>
                      //   handleCartNumber('add', item.product_amount)
                      // );
                    }}
                  >
                    <ChaOrangeButton
                      type="button"
                      value="再次訂購"
                      text="再次訂購"
                      className="cha-order-orange-btn"
                    />
                  </div>
                )}
                {(orderItem.order_state === '未送達' ||
                  orderItem.order_state === '火速運送中') && (
                  <div
                    onClick={() => {
                      // updateTotalToServer();
                      // console.log(props);
                      // props.setForceKey(true);
                      // props.setTabindexKey('C');
                      console.log('點擊取消/退費，觸發光箱');
                      setRefundModalController(true);
                    }}
                  >
                    <ChaGrayButton
                      type="button"
                      value="取消/退費"
                      text="取消/退費"
                      className="cha-order-btn-858585 cha-order-refund-btn"
                    />
                  </div>
                )}
                {orderItem.order_state === '揪團中' && (
                  <div>
                    <ChaOrangeButton
                      type="button"
                      value="加入點餐"
                      text="加入點餐"
                      className="cha-order-orange-btn"
                    />
                  </div>
                )}
                {orderItem.order_state === '揪團中' && (
                  <div>
                    <ChaOrangeButton
                      type="button"
                      value="分享連結"
                      text="分享連結"
                      className="cha-order-orange-btn"
                    />
                  </div>
                )}
                {orderItem.order_state === '揪團中' && (
                  <div>
                    <ChaOrangeButton
                      type="button"
                      value="收單"
                      text="收單"
                      className="cha-order-orange-btn"
                    />
                  </div>
                )}
                {orderItem.order_state === '揪團中' && (
                  <div>
                    <ChaGrayButton
                      type="button"
                      value="取消/退費"
                      text="取消/退費"
                      className="cha-order-btn-858585 cha-order-refund-btn"
                    />
                  </div>
                )}
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
      <TabMenu
        orderItem={orderItem}
        {...props}
        changeOrderState={changeOrderState}
        setChangeOrderState={setChangeOrderState}
      />
    </>
  );
}
export default withRouter(ChaOrderItem);
