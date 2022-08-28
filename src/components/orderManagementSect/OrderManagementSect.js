import React, { useRef, useState, useEffect } from 'react';
import './ChaOrderManagement.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import ChaOrderItem from 'Cha/Components/Cha-Order-Management/Cha-Order-Item/ChaOrderItem';
// 光箱
import ChaRefundModal from './Cha-Order-Item/Cha-Refund-Modal/ChaRefundModal';
import QueueAnim from 'rc-queue-anim';
import { endpoint } from 'variable/variable';

function handleClassifyState(orderData, orderState1, orderState2) {
  return orderData.filter(
    (item, index) =>
      item.order_state === orderState1 || item.order_state === orderState2
  );
} // 分類訂單內容的函式

// 未送達
const NotDeliveredMerchandise = (props) => {
  const { data } = props;
  return (
    <>
      {handleClassifyState(data, '未送達', '火速運送中')
        .reverse()
        .map((item, value) => (
          <QueueAnim delay={50} className="queue-simple">
            <ChaOrderItem
              key={item.sid}
              orderItem={item}
              // setForceKey={setForceKey}
              // setTabindexKey={setTabindexKey}
              // setChangeOrderState={setChangeOrderState}
            />
          </QueueAnim>
        ))}
    </>
  );
};

// 已送達
const DeliveredMerchandise = (props) => {
  const { data } = props;
  return (
    <>
      {handleClassifyState(data, '已送達')
        .reverse()
        .map((item, value) => (
          <QueueAnim delay={50} className="queue-simple">
            <ChaOrderItem
              key={item.sid}
              orderItem={item}
              // setChangeOrderState={setChangeOrderState}
              // handleCartNumber={handleCartNumber}
            />
          </QueueAnim>
        ))}
    </>
  );
};

// 已退費/已取消
const HadRefundMerchandise = (props) => {
  const { data, setRefundModalController } = props;
  return (
    <>
      {handleClassifyState(data, '已退費')
        .reverse()
        .map((item, value) => (
          <QueueAnim delay={50} className="queue-simple">
            <ChaOrderItem
              key={item.sid}
              orderItem={item}
              // setForceKey={setForceKey}
              // setTabindexKey={setTabindexKey}
              // setChangeOrderState={setChangeOrderState}
              // handleCartNumber={handleCartNumber}
              // 光箱用
              // closeModal={() => setRefundModalController(false)}
              setRefundModalController={setRefundModalController}
            />
          </QueueAnim>
        ))}
    </>
  );
};

function OrderManagementSect(props) {
  const [forceKey, setForceKey] = useState(false);
  const [tabindexKey, setTabindexKey] = useState('A');
  const [error, setError] = useState(null);
  const [currentMemberSid, setCurrentMemberSid] = useState(1); // 當前登入的會員id
  const [orderData, setOrderData] = useState([]);
  const [changeOrderState, setChangeOrderState] = useState(0);
  const { setShowBar, handleCartNumber } = props;

  // ---------------讀入訂單資料--------------//
  async function getMyOrderData(paramsMemberId) {
    const url = `${endpoint}/cart-api/my-order-my-order-detail/${paramsMemberId}`;
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    const response = await fetch(request);
    const _orderData = await response.json();
    setOrderData(_orderData);
  }
  console.log(orderData)

  // 切換用函式
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('cha-active');
    });

    addElem.classList.add('cha-active');
  };

  const TabMenu = (props) => {
    const [orderComponent, setOrderComponent] = useState(
      <NotDeliveredMerchandise data={orderData} />
    );

    // 點選取消/退費後，會觸發的切換用函式
    // force bool, index = A, B, C...
    const {
      force,
      index,
      // setRefundModalController,
      // refundModalController,
    } = props;
    const elA = useRef(null);
    const elC = useRef(null);

    const pressNotDeliveredButton = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<NotDeliveredMerchandise data={orderData} />);
    };

    const pressDeliveredButton = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<DeliveredMerchandise data={orderData} />);
    };
    const pressHadRefundButton = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderComponent(<HadRefundMerchandise data={orderData} />);
    };

    useEffect(() => {
      // -----------恢復Navbar--------------//
      // setShowBar(true);
      // console.log('useEffect，設定navbar出現');

      // --------------掛載就篩選掉order_detail為空陣列的order-----------------//
      // setOrderData(orderData.map((item) => item.order_detail === !['']));
      // console.log('useEffect，篩選掉order_detail為空陣列的order');

      // --------------掛載就讀入當前會員的訂單-----------------//
      if (orderData.length !== 0) return;
      getMyOrderData(currentMemberSid);
    }, []);

    //  --------------點選取消/退費，重新載入資料，切換到退費頁面-------------//
    useEffect(() => {
      if (!(changeOrderState === 0)) {
        getMyOrderData(currentMemberSid);
        console.log(
          'useEffect，[changeOrderState]，getMyOrderData(currentMemberSid)'
        );
        console.log(
          'useEffect，[changeOrderState]，切換到退費訂單頁面',
          changeOrderState
        );
        setForceKey(true);
        setTabindexKey('C');
      }
    }, [changeOrderState]);

    useEffect(() => {
      if (force && index) {
        switch (index) {
          case 'A':
            setTabActive(elA.current, '.cha-order-mana-title-switch');
            setOrderComponent(<NotDeliveredMerchandise data={orderData} />);
            break;
          case 'C':
            console.log(elC.current);
            setTabActive(elC.current, '.cha-order-mana-title-switch');
            setOrderComponent(<hadRefundMerchandise data={orderData} />);
            break;
          default:
            break;
        }
      }
    }, [force, index]);

    return (
      <>
        {/* {refundModalController && (
          <ChaRefundModal
            setRefundModalController={setRefundModalController}
            refundModalController={refundModalController}
            closeModal={() => setRefundModalController(false)}
          ></ChaRefundModal>
        )} */}
        <div>
          <div className="cha-order-mana-content-row1">
            <div
              className="cha-order-mana-title-switch cha-active"
              ref={elA}
              onClick={pressNotDeliveredButton}
            >
              未送達
            </div>
            <div
              className="cha-order-mana-title-switch"
              onClick={pressDeliveredButton}
            >
              已送達
            </div>
            <div
              className="cha-order-mana-title-switch"
              onClick={pressHadRefundButton}
              ref={elC}
            >
              已退費
            </div>
          </div>
          <div className="cha-order-mana-content-row2">
            <WaveLine />
          </div>
          <div>{orderComponent}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <TabMenu
        force={forceKey}
        index={tabindexKey}
        //   setRefundModalController={setRefundModalController}
        //   refundModalController={refundModalController}
      />
    </>
  );
}

export default OrderManagementSect;
