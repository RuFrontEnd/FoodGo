import React, { useState, useEffect } from 'react';
import './Style.scss';
import ArrowR from './Images/ArrowRight.svg';

function RuArrowRight(props) {
  const { moveX, setMoveX, limitX, setLimitX } = props;
  const [isMoving, setIstMoving] = useState(false);

  function start() {
    setIstMoving(true);
  }

  function stop() {
    setIstMoving(false);
  }

  // useEffect(() => {
  //   const A = document.querySelector('.ru-species-warp');
  //   const B = document.querySelectorAll('.ru-species-item');
  //   const C = [...B];
  //   console.log('A值', A.offsetWidth);
  //   // console.log(C);
  //   let D = 0;
  //   C.forEach((i) => {
  //     D += i.offsetWidth;
  //   });
  //   console.log('D值', D);
  //   let E = D - A.offsetWidth;
  //   console.log('E值', E);
  //   setLimitX(-E);
  //   console.log('limitX值', limitX);
  //   return () => {};
  // }, [limitX]);

  useEffect(() => {

    // console.log(isMoving)
    let movement = moveX;
    let moving;
    if (isMoving === true) {
      moving = setInterval(() => {
        // 右邊到底就停下
        if (movement !== limitX) {
          movement -= 10;
          setMoveX(movement);
        }
      }, 20);
    }
    return () => {
      clearInterval(moving);
    };
  }, [isMoving, limitX]);

  return (
    <>
      <button
        className="ru-arrowRight-warp"
        onMouseDown={start}
        onMouseUp={stop}
        onMouseLeave={stop}
      >
        <img src={ArrowR} draggable="false" />
      </button>
    </>
  );
}

export default RuArrowRight;

// import React, { useState, useEffect } from 'react'
// import './Style.scss'
// import ArrowR from './Images/ArrowRight.svg'

// function RuArrowRight(props) {
//   const { moveX, setMoveX, limitX, setLimitX } = props
//   const [isMoving, setIstMoving] = useState(false)

//   function start() {
//     setIstMoving(true)
//     doAni()
//   }

//   function stop() {
//     setIstMoving(false)
//   }

//   function doAni(){
//     console.log('isMoving:', isMoving);
//     setTimeout(doAni, 1000);
//     if(!isMoving) return;

//     let movement = moveX

//     if (movement !== limitX) {
//       movement -= 10
//       setMoveX(movement)
//     }

//   }

//   useEffect(() => {
//     doAni();
//     /*
//     // console.log(isMoving)
//     let movement = moveX
//     let moving
//     if (isMoving === true) {
//       moving = setInterval(() => {
//         // 右邊到底就停下
//         if (movement !== limitX) {
//           movement -= 10
//           setMoveX(movement)
//         }
//       }, 20)
//     }
//     return () => {
//       clearInterval(moving)
//     }
//     */
//   }, [])

//   return (
//     <>
//       <button className="arrowRight-warp" onMouseDown={start} onMouseUp={stop}>
//         <img src={ArrowR} draggable="false" />
//       </button>
//     </>
//   )
// }

// export default RuArrowRight
