import React from 'react';
import 'components/customHint/customHint.scss';

function CustomHint(props) {
  return (
    <>
      <div className="ru-hint-container">
        <section className="ru-hint-warp">
          <h3>請拖曳品項至指定區域</h3>
          {/* <img src={littleQ}></img> */}
        </section>
      </div>
    </>
  );
}

export default CustomHint;
