import React, { useState, useEffect } from 'react';
import './loginInput.scss';

const LoginInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    type,
    id,
    title,
    className,
    style,
    value,
    setValue,
    wrongText,
    setWrongText,
  } = props;

  return (
    <section id="loginInput-container" className={className} style={style}>
      <div id="loginInput-wrap">
        <div className="loginInput-text">{title}</div>
        <div id="loginInput-message">
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              wrongText && setWrongText('');
            }}
            ref={ref}
            className={wrongText ? 'loginInput-wrong' : 'loginInput'}
            type={type}
            placeholder={placeholder}
          />
          {wrongText && <div class="loginInput-wrong-text">*{wrongText}</div>}
        </div>
      </div>
    </section>
  );
});

export default LoginInput;
