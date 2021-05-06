import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
// import UpdateCartToLocalStorage from 'Share/Components/Tools/UpdateCartToLocalStorage';

function ChaProductList(props) {
  const [mycart1, setMycart1] = useState([]);
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState('');
  const { handleCartNumber } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const UpdateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('cart1')) || [];

    const newCart = [...currentCart, value];
    localStorage.setItem('cart1', JSON.stringify(newCart));

    // 設定資料
    setMycart1(newCart);
    setProductName(value.productName);
    handleShow();
  };

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>產品：{productName} 已成功加入購物車</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.history.push('/cart');
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );

  const display = (
    <>
      <div className="card-deck">
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">九九特餐-彩椒雞丁</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text text-danger">NTD 100元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                handleCartNumber('add', 1);
                UpdateCartToLocalStorage({
                  id: 7,
                  productName: '九九特餐-彩椒雞丁',
                  productPrice: 100,
                  productAmount: 1,
                });
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">哈妮BBQ烤雞腿</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text text-danger">NTD 130元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                handleCartNumber('add', 1);
                UpdateCartToLocalStorage({
                  id: 8,
                  productName: '哈妮BBQ烤雞腿',
                  productPrice: 130,
                  productAmount: 1,
                });
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">蕃茄慢燉牛腩</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text text-danger">NTD 140元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                handleCartNumber('add', 1);
                UpdateCartToLocalStorage({
                  id: 9,
                  productName: '蕃茄慢燉牛腩',
                  productPrice: 140,
                  productAmount: 1,
                });
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div style={{ width: '100%', height: '15rem' }}></div>
      <main className="flex-shrink-0">
        {/* props.children代表嵌入在其中的元件或資料內容 */}
        <div className="container">
          {messageModal}
          {display}
        </div>
      </main>
    </>
  );
}

export default withRouter(ChaProductList);
