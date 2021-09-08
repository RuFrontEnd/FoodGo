import React from 'react';
import 'components/optionButton/optionButton.scss';
import { withRouter } from 'react-router';

function OptionButton(props) {
  const {
    className = '',
    id = '',
    onClick = () => {},
    text = '', // show btn content
    isSelected = false, // is button active
    type = 'origin', // orange or green
  } = props;

  let btnColor = '';
  let selectedBtnColor = '';
  if (type === 'origin') {
    btnColor = 'option-btn-orange';
    selectedBtnColor = 'option-btn-orange option-btn-orange-active';
  }
  if (type === 'green') {
    btnColor = 'option-btn-green';
    selectedBtnColor = 'option-btn-green option-btn-green-active';
  }
  if (type === 'yellow') {
    btnColor = 'option-btn-yellow';
    selectedBtnColor = 'option-btn-yellow option-btn-yellow-active';
  }

  return (
    <>
      <button
        onClick={onClick}
        id={id}
        className={`${
          isSelected ? selectedBtnColor : btnColor
        } ${className} option-btn`}
      >
        {text}
      </button>
    </>
  );
}

export default OptionButton;
