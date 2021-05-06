import React from 'react'
import './ClaudiaModalFrame.scss'
import Cross from './Images/cross.svg'

const ClaudiaModalFrame = (props) => {
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

export default ClaudiaModalFrame
