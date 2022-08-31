import React from 'react';
import { useEffect, useState } from 'react';
import './admin.scss';

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
  }, []);

  useEffect(() => {
    console.log('orders', orders);
  }, [orders]);

  return (
    <>
      <div>後台</div>
      <ul>
        {orders.map((order) => (
          <li>
            <ul>
              <li>sid: {order.sid}</li>
              <li>vice: {order.vice}</li>
              <li>main: {order.main}</li>
              <li>side1: {order.side1}</li>
              <li>side2: {order.side2}</li>
              <li>side3: {order.side3}</li>
              <li>egg: {order.egg}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Admin;
