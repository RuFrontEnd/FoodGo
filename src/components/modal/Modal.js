import React from 'react'
import './modal.scss'
import Cross from 'assets/svg/cross.svg'

const Modal = (props) => {
  const { closeModal } = props

  return (
    <div className="claudia-overlay">
      <div className="claudia-modal-bg">
        <img
          onClick={closeModal}
          className="claudia-modal-cross-img"
          alt=""
          src={Cross}
        />
        {props.children}
      </div>
    </div>
  )
}

export default Modal
