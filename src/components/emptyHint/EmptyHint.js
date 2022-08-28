import React from 'react';
import 'components/emptyHint/emptyHint.scss';
import littleQ from 'assets/svg/littleQ.svg';

function EmptyHint(props) {
  return (
    <>
      <div className="ru-nothing-container">
        <section className="ru-nothing-warp">
          <h3>無符合結果</h3>
          <img src={littleQ}></img>
        </section>
      </div>
    </>
  );
}

export default EmptyHint;
