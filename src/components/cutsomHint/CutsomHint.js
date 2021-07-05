import React from 'react';
import 'components/cutsomHint/cutsomHint.scss';
import littleQ from 'assets/svg/littleQ.svg';

function CutsomHint(props) {
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

export default CutsomHint;
