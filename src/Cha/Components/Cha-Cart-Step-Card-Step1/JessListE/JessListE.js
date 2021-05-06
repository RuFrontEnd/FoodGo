import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './JessListE.scss';
import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
import right from './Images/right.svg';
import left from './Images/left.svg';

function JessListE(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const {
    menu,
    setMenu,
    refreshPage,
    onClickPromotion1,
    onClickPromotion2,
    onClickPromotion3,
  } = props;
  return (
    <>
      <div className="container-fluid">
        <div className="container ">
          {/* <div className="cha-jess-productTabBorder"></div> */}
          <h2 className="cha-jess-text-30orange text-center">你可能還想來點</h2>
          <div className="mx-auto cha-jess-carousel">
            <ItemsCarousel
              infiniteLoop={true}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={setActiveItemIndex}
              gutter={30}
              activePosition={'center'}
              chevronWidth={90}
              disableSwipe={true}
              alwaysShowChevrons={true}
              numberOfCards={3}
              slidesToScroll={3}
              outsideChevron={true}
              showSlither={false}
              rightChevron={<img src={right} />}
              leftChevron={<img src={left} />}
            >
              {/* <div className="cha-jess-arrowR"></div> */}
              <div className="mt-5 cha-jessListE-view-first">
                <div
                  className="cha-jess-proE-pic1"
                  onClick={onClickPromotion1}
                ></div>
                <Link to="/bento/7">
                  <div className="mask">
                    <h2>蒜烤鮭魚沙拉</h2>
                    <p>$150</p>
                  </div>
                </Link>
              </div>

              <div className="mt-5 cha-jessListE-view-first">
                <div
                  className="cha-jess-proE-pic2"
                  onClick={onClickPromotion2}
                ></div>
                <Link to="/bento/1">
                  <div className="mask">
                    <h2>生酮沙拉</h2>
                    <p>$130</p>
                  </div>
                </Link>
              </div>
              <div className="mt-5 cha-jessListE-view-first">
                <div
                  className="cha-jess-proE-pic3"
                  onClick={onClickPromotion3}
                ></div>
                <Link to="/bento/6">
                  <div className="mask">
                    <h2 className="cha-jess-text-18white">激瘦下午茶沙拉</h2>
                    <p>$130</p>
                  </div>
                </Link>
              </div>
              <div className="mt-5 cha-jessListE-view-first">
                <Link to="/bento/3">
                  <div className="cha-jess-proE-pic4">
                    <img src="/productImages/Bento/04_bento-porkneck.jpg"></img>
                  </div>
                </Link>
                <div className="mask">
                  <h2 className="cha-jess-text-18white">麴塩五香松阪豬</h2>
                  <p>$235</p>
                </div>
              </div>
              <div className="mt-5 cha-jessListE-view-first">
                <Link to="/bento/3">
                  <div className="cha-jess-proE-pic4">
                    <img src="/productImages/Bento/11_bento-veg.jpg"></img>
                  </div>
                </Link>
                <div className="mask">
                  <h2 className="cha-jess-text-18white">蛋奶素</h2>
                  <p>$200</p>
                </div>
              </div>
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default JessListE;
