import React from 'react';
import 'components/optionButton/optionButton.scss';
import { withRouter } from 'react-router';

function OptionButton(props) {
  const {
    className = '',
    id = '',
    onClick = () => {},
    text = '', // show btn content
    selectedTypes = [], // all button active types
    setSelectedTypes = () => {}, // set all button active types state
    isSelected = false, // is button active
    index = 0, // all button active types index
    type = 'origin', // orange or green
    routes = '', // link address
  } = props;

  function handleCardArea(e) {
    let _selectedTypes = [];
    for (let i = 0; i < selectedTypes.length; i++) {
      if (index === i) {
        _selectedTypes.push(true);
      } else {
        _selectedTypes.push(false);
      }
    }
    setSelectedTypes(_selectedTypes);
  }

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
      <div className={className} id={id} onClick={onClick}>
        {isSelected ? (
          <button
            className={`option-btn ${selectedBtnColor}`}
            onClick={() => {
              handleCardArea();
            }}
          >
            {text}
          </button>
        ) : (
          <button
            className={`option-btn ${btnColor}`}
            onClick={() => {
              routes !== '' && props.history.push(routes);
              handleCardArea();
            }}
          >
            {text}
          </button>
        )}
      </div>
    </>
  );
}

export default OptionButton;
