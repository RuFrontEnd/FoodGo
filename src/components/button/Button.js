import React from 'react';
import './button.scss';
import { ReactComponent as Cart } from 'assets/svg/cart.svg';

function Button(props) {
  const { id, parentId, onClick, disabled } = props;

  return (
    <div
      className={`addCart-btn-warp ${disabled && 'addCart-btn-disabled'}`}
      id={parentId}
    >
      <button className="addCart-btn" id={id} onClick={onClick}>
        <Cart className="addCart-cart" />
      </button>
    </div>
  );
}

export default Button;
