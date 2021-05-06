import React, { useState, useEffect } from "react";
import "Ru/Components/Ru-ShowWidth/Style.scss";

// 監控瀏覽器寬度
function ShowWidth(props) {
  useEffect(() => {
    // const $showWidth = document.querySelector("#showWidth");
    window.addEventListener("resize", (e) => {
      // console.log(e.target.innerWidth);
      SetWidth(e.target.innerWidth);
    });
  }, []);
  const [width, SetWidth] = useState("");
  return (
    <>
      <span id="showWidth" className="showWidth">
        {width}px
      </span>
    </>
  );
}

export default ShowWidth;
