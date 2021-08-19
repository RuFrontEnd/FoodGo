// textarea   font-size:15px

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisTextArea.scss';

function IrisTextArea(props) {
  const { id, rows } = props;
  return (
    <>
      <div className="form-group">
        <textarea
          className="form-control iris-textarea"
          id={id}
          rows={rows}
          // value={value}
        ></textarea>
      </div>
    </>
  );
}

export default IrisTextArea;
