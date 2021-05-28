import React, { useState, useEffect, useRef } from 'react';
import 'components/carousel/carousel.scss';
import Radium from 'radium'; // 可以使inline-style有media-qurey功能
import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';

function Carousel(props) {
  const {
    id,
    className,
    style,
    CarouselItems,
    width,
    buttonSize,
    breakpoints,
  } = props;
  const $slider = useRef();
  const $carousel = useRef();

  const [direction, setDirection] = useState(-1);
  const [items, setItems] = useState(CarouselItems);
  const [carouselBWidth, setCarouselBWidth] = useState(width);
  const carouselItemWidth = carouselBWidth / 3;
  const [carouselBSliderWidth, setCarouselBSliderWidth] = useState(
    carouselItemWidth * items.length
  );
  const [carouselBSliderLeft, setCarouselBSliderLeft] = useState(
    carouselItemWidth * ((items.length - 3) / 2)
  );
  const [btnSize, setBtnSize] = useState(buttonSize);
  const [isLoading, setIsLoading] = useState(false);

  window.addEventListener('resize', () => {
    // 優化效能
    let count = 0;
    count++;
    if (count % 3 === 0) {
      return;
    }
    // 判斷響應式width
    if (window.innerWidth >= breakpoints.xxl.point) {
      setCarouselBWidth(breakpoints.xxl.width);
      // setBtnSize(breakpoints.xxl.btnSize);
    }
    if (
      window.innerWidth < breakpoints.xxl.point &&
      window.innerWidth >= breakpoints.xl.point
    ) {
      setCarouselBWidth(breakpoints.xl.width);
      // setBtnSize(breakpoints.xxl.btnSize);
    }
    if (
      window.innerWidth < breakpoints.xl.point &&
      window.innerWidth >= breakpoints.l.point
    ) {
      setCarouselBWidth(breakpoints.l.width);
      // setBtnSize(breakpoints.xxl.btnSize);
    }
    if (
      window.innerWidth < breakpoints.l.point &&
      window.innerWidth >= breakpoints.m.point
    ) {
      setCarouselBWidth(breakpoints.m.width);
      // setBtnSize(breakpoints.xxl.btnSize);
    }
    if (
      window.innerWidth < breakpoints.m.point &&
      window.innerWidth >= breakpoints.s.point
    ) {
      setCarouselBWidth(breakpoints.s.width);
      // setBtnSize(breakpoints.xxl.btnSize);
    }
  });

  useEffect(() => {
    setIsLoading(true);
    setItems(CarouselItems);
  }, [CarouselItems]);

  useEffect(() => {
    const _carouselBSliderLeft =
      carouselItemWidth * ((items.length - 3) / 2) > 0
        ? carouselItemWidth * ((items.length - 3) / 2)
        : 0;
    setCarouselBSliderWidth(carouselItemWidth * items.length);
    setCarouselBSliderLeft(_carouselBSliderLeft);
    setIsLoading(false);
  }, [carouselBWidth, items]);

  // inline style
  const carouselBContainerStyle = {
    width: `${carouselBWidth}px`,
  };
  const carouselBSliderStyle = {
    width: `${carouselBSliderWidth}px`,
    left: `-${carouselBSliderLeft}px`,
  };

  const handlePrev = (e) => {
    setDirection(1);
    $slider.current.style.transition = '0.3s';
    $slider.current.style.transform = `translate(${carouselItemWidth}px)`;
  };

  const handleNext = (e) => {
    setDirection(-1);
    $slider.current.style.transition = '0.3s';
    $slider.current.style.transform = `translate(-${carouselItemWidth}px)`;
  };

  const shiftItem = () => {
    const _items = [...items]; // 深拷貝(淺拷貝會影響到原陣列)
    if (direction === -1) {
      console.log(-1);
      const shiftItem = _items.shift();
      _items.push(shiftItem);
      setItems(_items);
    }
    if (direction === 1) {
      console.log(1);
      const popItem = _items.pop();
      _items.unshift(popItem);
      setItems(_items);
    }
    $slider.current.style.transition = 'none';
    $slider.current.style.transform = `translate(0px)`;
  };

  return (
    <>
      <section id={id} className={className} style={style}>
        <div id="carousel-container" style={carouselBContainerStyle}>
          <div id="carousel-wrap" ref={$carousel}>
            <ul
              id="carousel-slider"
              onTransitionEnd={shiftItem}
              style={carouselBSliderStyle}
              ref={$slider}
            >
              {items.map((item, index) => (
                <>{isLoading ? <></> : <li key={index}>{item}</li>}</>
              ))}
            </ul>
            <div
              id="carousel-prev"
              className="carousel-btn"
              onClick={handlePrev}
              style={{ top: `calc(50% - ${btnSize / 2}px)` }}
            >
              {CarouselItems.length > 3 && (
                <Arrow
                  style={{
                    width: btnSize,
                    height: btnSize,
                  }}
                ></Arrow>
              )}
            </div>
            <div
              id="carousel-next"
              className="carousel-btn"
              onClick={handleNext}
              style={{ top: `calc(50% - ${btnSize / 2}px)` }}
            >
              {CarouselItems.length > 3 && (
                <Arrow
                  style={{
                    width: btnSize,
                    height: btnSize,
                    transform: 'scaleX(-1)',
                  }}
                ></Arrow>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Radium(Carousel);
