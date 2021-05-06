import * as React from "react";
import { useEffect, useState } from "react";
import "./Test2.scss";
import Pic from './Images/index_bg.jpg';

function Test2() {

    // const [offset, setOffset] = useState(0)
    // useEffect(() => {
    //     function handleScroll() {
    //         setOffset(window.pageYOffset)
    //         console.log('scrolltop', window.pageYOffset)

    //         //fix bg img
    //         if (window.pageYOffset < 500) {
    //             document.getElementsByClassName('parallax')[0].style.position = 'fixed';
    //         } else {
    //             document.getElementsByClassName('parallax')[0].style.position = 'static';
    //         }
    //     }
    //     window.addEventListener("scroll", handleScroll)
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [])
    return (
        <div className="App">
            <section className="hero">
                <img
                    src={Pic}
                    alt="test"
                    className="parallax"
                />
                <div className="text-wrapper"
                // style={{
                //     transform: `translateY(-${offset * 0.5}px)`,
                // }}
                >
                    <h1 className="headline">Parallax</h1>
                    <h2 className="sub-headline">Scrolling effect</h2>
                </div>
            </section>
        </div>
    )
}

export default Test2;