import React, { useState, useEffect } from 'react';
import './JessModal.scss';
import Cross from './Images/cross.svg';
function JessModal(props) {
  const { closeModal, nowUser, currentUser } = props;

  return (
    <>
      <div className="jess-overlay">
        <div className="jess-modal-bg">
          <img
            onClick={closeModal}
            className="jess-modal-cross-img"
            alt=""
            src={Cross}
          />
          {props.children}
        </div>
      </div>
    </>
  );
}

export default JessModal;
