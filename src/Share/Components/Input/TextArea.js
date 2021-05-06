// textarea   font-size:15px

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Input.scss';

function TextArea(props) {
  const { placeholder, id, rows } = props;
  return (
    <>
      <div className="form-group">
        <textarea
          className="form-control iris-textarea"
          id={id}
          rows={rows}
          placeholder={placeholder}
        ></textarea>
      </div>
    </>
  );
}

export default TextArea;
