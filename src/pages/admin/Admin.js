import React from 'react';
import { useEffect, useState } from 'react';
import './admin.scss';
import Table from 'react-bootstrap/Table';

function Admin(props) {
  const { ws } = props;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ws.onmessage = (event) => {
      console.log('event', event);

      const evt = JSON.parse(event.data);
      const pathname = evt.pathname;
      const message = evt.message;

      if (pathname !== window.location.pathname) return;
      setOrders(message);
      console.log('hi');
    };

    fetch('http://localhost:5000/product/order_list') // 非同步
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        const _orders = [...res];
        console.log('_orders', _orders);
        setOrders(_orders);
      });
  }, []);

  useEffect(() => {
    console.log('orders', orders);
  }, [orders]);

  return (
    <>
      <div>後台</div>
      <ul>
        <Table striped="columns">
          <thead>
            <tr>
              <th>#</th>
              <th>id</th>
              <th>vice</th>
              <th>main</th>
              <th>vegA</th>
              <th>vegB</th>
              <th>vegC</th>
              <th>egg</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, orderI) => (
              <tr>
                <td>{orderI}</td>
                <td>{order.sid}</td>
                <td>{order.vice}</td>
                <td>{order.main}</td>
                <td>{order.side1}</td>
                <td>{order.side2}</td>
                <td>{order.side3}</td>
                <td>{order.egg}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ul>
    </>
  );
}

export default Admin;
