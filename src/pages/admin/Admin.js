import React from 'react';
import './admin.scss';

function Admin(props) {
  const { ws } = props;

  ws.onmessage = (event) => {
    console.log(event);
  };

  return (
    <>
      <div>後台</div>
      123
    </>
  );
}

export default Admin;
