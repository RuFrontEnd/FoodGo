import React, { useState, useEffect } from 'react';
import './JessListC.scss';
import './ArrowRight.scss';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
// import ArrowRight from '../../../Share/Components/ArrowRight/ArrowRight'

function JessListC() {
  // A-Veg
  const ComponentA = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <Fade left>
              <div className=" jess-vegChoice1 mx-3 col-6 col-md-4"></div>

              <div className=" jess-vegChoice2 mx-3 col-12 col-md-4"></div>

              <div className=" jess-vegChoice3 mx-3 col-12 col-md-4"></div>
            </Fade>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>朝敏果菜行</h2>
          </div>
        </div>
      </div>
    );
  };
  const ComponentA2 = (props) => {
    return (
      <div className="col-12 col-sm-7 jess-ListC-A2">
        <Slide top cascade>
          <p className="jess-text-24brown">花蓮 結球萵苣</p>
          <p className="jess-text-20white">彩葉萵苣</p>
        </Slide>
        <p className="jess-text-15Gray">
          栽培品種的形態及色彩變化相當豐富，常見的栽培品種依形態分為葉用、剝葉、立葉、皺葉、結球及嫩莖類。葉用、立葉及皺葉萵苣又稱為不結球萵苣。顏色有綠及紫色系，綠色系又分為淡綠、黃綠及深綠色等不同的變化；紫色系亦有淡紫及深紫色等不同的變化；其他尚有紫綠鑲嵌等色系。
        </p>
      </div>
    );
  };
  // B
  const ComponentB = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <Fade left>
              <div className=" jess-onion01 mx-3 col-12 col-md-4"></div>

              <div className=" jess-onion02 mx-3 col-12 col-md-4"></div>

              <div className=" jess-onion03 mx-3 col-12 col-md-4"></div>
            </Fade>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>美世界果園</h2>
          </div>
        </div>
      </div>
    );
  };
  const ComponentB2 = (props) => {
    return (
      <div className="col-12 col-sm-7 jess-ListC-B2">
        <Slide top cascade>
          <p className="jess-text-24brown">屏東洋蔥</p>
          <p className="jess-text-20white">「自己會趴下」的好洋蔥</p>
        </Slide>
        <p className="jess-text-15Gray">
          車城的洋蒽聞名遐邇，為本鄉主要的作物；
          由於洋蔥在結球之前，雖能耐潮濕的氣候，但在進入結球期後，生長環境仍以乾燥氣候為宜。洋蒽不但是本鄉最重要的經濟作物，同時，也標誌著本鄉在全國洋蔥生產方面所占有的重要地位。
        </p>
      </div>
    );
  };
  // C
  const ComponentC = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <Fade left>
              <div className=" jess-carrort1 mx-3 col-12 col-md-4"></div>

              <div className=" jess-carrort2 mx-3 col-12 col-md-4"></div>

              <div className=" jess-carrort3 mx-3 col-12 col-md-4"></div>
            </Fade>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>楊桃園休閒農場</h2>
          </div>
        </div>
      </div>
    );
  };
  const ComponentC2 = (props) => {
    return (
      <div className="col-12 col-sm-7 jess-ListC-B2">
        <Slide top cascade>
          <p className="jess-text-24brown">台南 紅蘿蔔</p>
          <p className="jess-text-20white">胡蘿蔔之鄉</p>
        </Slide>
        <p className="jess-text-15Gray">
          本鄉人稱胡蘿蔔之鄉，年收穫量約四萬公頓，全台第一。位於將軍溪下游沖積平原，肥沃的沙質土壤，最適合種植素有人參之稱的胡蘿蔔，種植面積全省最廣，胡蘿蔔又稱紅蘿蔔，適合炒、滷、拌、煮、燉，是色澤美麗、營養豐富的烹調配角，鄉民以契作方式於八月中旬下種，五個月以後即可收成，屆時可見農家忙於採收胡蘿蔔的景象。
        </p>
      </div>
    );
  };
  // D
  const ComponentD = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <Fade left>
              <div className=" jess-gu01 mx-3 col-12 col-md-4"></div>

              <div className=" jess-gu02 mx-3 col-12 col-md-4"></div>

              <div className=" jess-gu03 mx-3 col-12 col-md-4"></div>
            </Fade>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              頂級溫室栽培 使用大量鮮奶 等天然營 養素、並施用有機肥 果實飽滿
              香氣濃郁 口感極佳 甜度高 給消費者吃的健康、安
              心、讓你吃的安心還想在吃。
            </p>
            <h2>獅山琥珀農園</h2>
          </div>
        </div>
      </div>
    );
  };
  const ComponentD2 = (props) => {
    return (
      <div className="col-12 col-sm-7 jess-ListC-B2">
        <Slide top cascade>
          <p className="jess-text-24brown">新社 杏包菇</p>
          <p className="jess-text-20white">菇香厚實黑冬菇</p>
        </Slide>
        <p className="jess-text-15Gray">
          嚴選生長期在12月至6月的黑早冬菇，將於寒冷氣候栽種的第一及第二水冬菇，經人工挑選出蘊含豐富養分的菇種，
          由於風味濃郁、肉質肥厚因而被稱之「厚實」冬菇，而佔總產量30%的精選性更展現其珍貴與稀少
          不僅馥郁香氣讓人為之陶醉，飽滿厚實的口感更猶如鮑魚般紮實彈牙，搭配各式食材料理皆能展現最佳風味
        </p>
      </div>
    );
  };
  // E
  const ComponentE = (props) => {
    return (
      <div className="container-fluid mt-5 ">
        <div className="row  justify-content-start">
          <div className="col-8 d-flex align-items-center">
            <Fade left>
              <div className=" jess-chicken1 mx-3 col-12 col-md-4"></div>

              <div className=" jess-chicken2 mx-3 col-12 col-md-4"></div>

              <div className=" jess-chicken3 mx-3 col-12 col-md-4"></div>
            </Fade>
          </div>
          <div className="col-2  jess-vegChoice-text">
            <p className="jess-text-15Gray">
              野生的雞隻是雜食性，喜歡吃蔬菜、穀物、野果、昆蟲、各種野生植物及純淨的水。喜好在寬廣的草地上奔馳，偶爾會攀上灌木上覓食。
            </p>
            <h2>永豐餘生技</h2>
          </div>
        </div>
      </div>
    );
  };
  const ComponentE2 = (props) => {
    return (
      <div className="col-12 col-sm-7 jess-ListC-B2">
        <Slide top cascade>
          <p className="jess-text-24brown">彰化 放山古早雞</p>
          <p className="jess-text-20white">飄洋過海的古早放山雞</p>
        </Slide>
        <p className="jess-text-15Gray">
          生長於中南台灣廣闊的田區，以低密度放養，且以天然健康五穀麥片及蔬菜餵食，讓放山古早雞有足夠的空間運動，因此皮下脂肪層薄，肉質特別結實甜美而不油膩，絕非一般雞隻可比擬。此外，相較於一般土雞，飼主為了管理方便而剪喙避免互喙。
        </p>
      </div>
    );
  };

  //
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('active');
      console.log(target);
    });

    addElem.classList.add('active');
  };

  const TabMenu = () => {
    const [component, setComponent] = React.useState(<ComponentA />);
    const [component2, setComponent2] = React.useState(<ComponentA2 />);

    const vegA = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentA />);
      setComponent2(<ComponentA2 />);
    };

    const vegB = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentB />);
      setComponent2(<ComponentB2 />);
    };
    const vegC = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentC />);
      setComponent2(<ComponentC2 />);
    };
    const vegD = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentD />);
      setComponent2(<ComponentD2 />);
    };
    const vegE = (e) => {
      setTabActive(e.target, '.jess-a');
      setComponent(<ComponentE />);
      setComponent2(<ComponentE2 />);
    };
    return (
      <>
        <div className="container-fluid jess-proC-bg ">
          {/* <img src="./images/jess-productlistC-768x457.jpg"></img> */}
          <div className="jess-proC-grace d-flex align-items-center">
            <div className="container ">
              <div className="row align-items-center">
                <div className="col-3">
                  <div className="jess-proC-farm"></div>
                </div>
                <div className="col-7">
                  <p className="jess-text-30white">每份餐點的無微不至</p>
                  <p className="jess-text-15white">您的每一份餐點</p>
                  <p className="jess-text-15white">
                    都是以下無微不至的用心製作. 讓您享受盒餐的新感官體驗
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container pt-5">
            <div className="jess-bento float-right"></div>
            <div className="jess-coverbg">
              <div className=" row jess-zindex">{component2}</div>
            </div>
          </div>
        </div>
        <div className="container-fluid jess-proC-vegChange">
          <ul className="row justify-content-around  align-items-end  jess-proC-vegbox">
            <li className="col-2 "></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic1 jess-a active"
              onClick={vegA}
            ></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic2 jess-a"
              onClick={vegB}
            ></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic3 jess-a"
              onClick={vegC}
            ></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic4 jess-a"
              onClick={vegD}
            ></li>
            <li
              className="col mx-4 rounded jess-proC-vegPic5 jess-a"
              onClick={vegE}
            ></li>
            <li className="col-2 "></li>
          </ul>

          <div className="jess-product-Tab1 d-flex mt-3">{component}</div>
          <div className="container d-flex justify-content-end">
            <div className="arrowright-warp">
              <div className="jess-arrow-circleR jess-arrow" draggable="true">
                <div className="jess-arrow-right"></div>
              </div>
            </div>
            {/* <div className="jess-proC-rArrow d-flex float-right">
              <ArrowRight />
            </div> */}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <TabMenu />
    </>
  );
}

export default JessListC;
