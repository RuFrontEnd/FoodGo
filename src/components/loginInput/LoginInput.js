import React, { useState, useEffect } from 'react';
import './loginInput.scss';

const LoginInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    type,
    id,
    className,
    style,
    value,
    setValue,
    isShowWrongText,
    wrongText,
  } = props;
  return (
    <section id="loginInput-container" className={className} style={style}>
      <div id="loginInput-wrap">
        <div className="loginInput-text">帳號</div>
        <div id="loginInput-message">
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            ref={ref}
            className={isShowWrongText ? 'loginInput-wrong' : 'loginInput'}
            type={type}
            placeholder={placeholder}
          />
          {isShowWrongText && (
            <div class="loginInput-wrong-text">*{wrongText}</div>
          )}
        </div>
      </div>
    </section>
  );
});

export default LoginInput;
