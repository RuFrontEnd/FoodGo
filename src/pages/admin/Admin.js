import React from 'react';
import './admin.scss';

function Admin(props) {
  const { ws } = props;

  ws.onmessage = (event) => {
    if (JSON.parse(event.data).pathname !== '/admin') return;
    console.log('hi');
  };

  return (
    <>
      <div>後台</div>
      123
    </>
  );
}

export default Admin;
