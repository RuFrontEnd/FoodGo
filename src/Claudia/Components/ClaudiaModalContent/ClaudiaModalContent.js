import React, { useState, useEffect } from 'react'
import './ClaudiaModalContent.scss'
import Reset from './Images/reset.svg'
import Calender from './Images/calender.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import selectArrow from './Images/selectArrow.svg'

function ClaudiaModalContent(props) {
  const [total, setTotal] = useState(0)
  const { handleCartNumber } = props

  //datepicker
  const [startDate, setStartDate] = useState(new Date())
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="claudia-modal-calender-button" onClick={onClick}>
      <img alt="" src={Calender} />
      <h3>{value}</h3>
    </button>
  )

  const isWeekday = (date) => {
    const day = date.getDay()
    return day == 0 || day == 6
  }

  //change button color

  const activeButtonColor = (e) => {
    //change button to green
    const selectedButton = e.target
    console.log(selectedButton)
    selectedButton.style.backgroundColor = '#438B6B'
    selectedButton.style.color = '#fff'

    //change another button to default

    const getSiblings = function (e) {
      let siblings = []

      if (!e.parentNode) {
        return siblings
      }

      let sibling = e.parentNode.firstChild

      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling)
        }
        sibling = sibling.nextSibling
      }
      return siblings
    }

    let siblings = getSiblings(selectedButton)
    console.log('siblings', siblings)

    siblings.forEach((el) => {
      console.log('element', el)
      el.style.backgroundColor = '#fff'
      el.style.color = '#438B6B'
    })
  }

  //WEB adult counter

  const [count1, setCount1] = useState(0)

  const handleAdultClick = (type) => {
    if (type === 'increment') {
      setCount1(count1 + 1)
    }
    if (type === 'decrement' && count1 > 0) {
      setCount1(count1 - 1)
    }
  }

  //count1 is correct num

  useEffect(() => {
    // console.log('test', count1)
  }, [count1])

  //WEB child counter

  const [count2, setCount2] = useState(0)

  const handleChildClick = (type) => {
    if (type === 'increment') {
      setCount2(count2 + 1)
    }
    if (type === 'decrement' && count2 > 0) {
      setCount2(count2 - 1)
    }
  }

  //WEB total count

  const TotalCount = count1 + count2

  //rwdTotal

  const rwdTotal = () => {
    console.log('rwd')
    // console.log('rwd-adult-select', document.getElementsByClassName('claudia-selection-adult-value')[0].value)
    // console.log('rwd-child-select', document.getElementsByClassName('claudia-selection-child-value')[0].value)
    let rwdAdultNum = +document.getElementsByClassName('claudia-selection-adult-value')[0].value;
    let rwdChildNum = +document.getElementsByClassName('claudia-selection-child-value')[0].value;
    setTotal(800 * rwdAdultNum + 500 * rwdChildNum)
  }

  //WEB adult total price

  const handleAdultTotal = (type) => {
    if (total - 800 >= 0 && count1 > 0 && type === 'decrement') {
      setTotal(total - 800)
    }
    if (type === 'increment') {
      setTotal(total + 800)
    }
  }

  //WEB child total price

  const handleChildTotal = (type) => {
    if (total - 500 >= 0 && count2 > 0 && type === 'decrement') {
      setTotal(total - 500)
    }
    if (type === 'increment') {
      setTotal(total + 500)
    }
  }

  return (
    <>
      <div className="claudia-modal">
        <h1>請選擇日期、預定選項</h1>
        <div className="claudia-modal-inline">
          <h2>
            <b>請選擇參加日期</b>
          </h2>
          {/* <button
                        className="claudia-modal-inline-reset-button"
                        onClick={resetInput}>
                        <h3 className="claudia-modal-inline-right">清除全部</h3>
                        <img alt="" src={Reset} />
                    </button> */}
        </div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<ExampleCustomInput />}
          filterDate={isWeekday}
          dateFormat="yyyy-MM-dd"
          minDate={Date.now()}
        />
        <div className="claudia-modal-middle">
          <div className="claudia-modal-middle-transport">
            <h3>
              <b>前往方式</b>
            </h3>
            <div className="claudia-modal-middle-transport-buttons">
              <button
                className="claudia-modal-middle-transport-buttons-toggle"
                onClick={activeButtonColor}
              >
                團體報名*
              </button>
              <button
                className="claudia-modal-middle-transport-buttons-toggle"
                onClick={activeButtonColor}
              >
                自行前往
              </button>
            </div>
          </div>
          <div className="claudia-modal-middle-group-notes">
            <h4 className="claudia-modal-middle-group-notes-title">
              *團體報名注意事項
            </h4>
            <h4 className="claudia-modal-middle-group-notes-second">
              5人以上成團
            </h4>
            <div className="claudia-modal-middle-group-nums">
              <h4>目前報名人數：7人</h4>
              <h5>確定成團</h5>
            </div>
            <h4>若人數不足無法成團，會再以email方式聯繫</h4>
          </div>
        </div>
        <div className="claudia-modal-signup-num">
          <h3>
            <b>數量</b>
          </h3>
          <div className="claudia-modal-signup-num-box">
            <div className="claudia-modal-signup-num-box-left">
              <b>成人</b>
            </div>

            {/* WEB Adult Right Box Start*/}
            <div
              className="claudia-modal-signup-num-box-right"
              style={{ width: '245px' }}
            >
              <div className="claudia-modal-signup-num-box-price-inline">
                <span>
                  <del>
                    <b>$1000</b>
                  </del>
                </span>
                <span>
                  <b>$800</b>
                </span>
              </div>
              <div className="claudia-modal-counter-box">
                <div
                  onClick={() => {
                    handleAdultClick('decrement')
                    handleAdultTotal('decrement')
                  }}
                  className={
                    count1 === 0
                      ? 'claudia-modal-counter-decrement claudia-modal-cursor-default'
                      : 'claudia-modal-counter-decrement claudia-modal-counter-hover'
                  }
                >
                  <p>-</p>
                </div>
                <div className="claudia-modal-counter-count">
                  <p className="claudia-adult-num">{count1}</p>
                </div>
                <div
                  onClick={() => {
                    handleAdultClick('increment')
                    handleAdultTotal('increment')
                  }}
                  className="claudia-modal-counter-increment"
                >
                  <p>+</p>
                </div>
              </div>
            </div>
            {/* WEB Adult Right Box End*/}

            {/* RWD Adult Right Box Start */}
            <div className="claudia-modal-signup-num-box-right-rwd">
              <div className="claudia-modal-signup-num-box-price-inline-rwd">
                <span>
                  <del>
                    <b>$1000</b>
                  </del>
                </span>
                <span>
                  <b>$800</b>
                </span>
              </div>
              <div className="claudia-selection-container">
                <select className="claudia-selection-adult-value" onChange={rwdTotal}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button>
                  <img src={selectArrow}></img>
                </button>
              </div>
            </div>
            {/* RWD Adult Right Box End */}
          </div>
          <div className="claudia-modal-signup-num-box">
            <div className="claudia-modal-signup-num-box-left">
              <b>兒童</b>
            </div>

            {/* WEB Child Right Box Start*/}
            <div className="claudia-modal-signup-num-box-right">
              <div className="claudia-modal-signup-num-box-price-inline">
                <span>
                  <del>
                    <b>$700</b>
                  </del>
                </span>
                <span>
                  <b>$500</b>
                </span>
              </div>
              <div className="claudia-modal-counter-box">
                <div
                  onClick={() => {
                    handleChildClick('decrement')
                    handleChildTotal('decrement')
                  }}
                  className={
                    count2 === 0
                      ? 'claudia-modal-counter-decrement claudia-modal-cursor-default'
                      : 'claudia-modal-counter-decrement claudia-modal-counter-hover'
                  }
                >
                  <p>-</p>
                </div>
                <div className="claudia-modal-counter-count">
                  <p className="claudia-child-num">{count2}</p>
                </div>
                <div
                  onClick={() => {
                    handleChildClick('increment')
                    handleChildTotal('increment')
                  }}
                  className="claudia-modal-counter-increment"
                >
                  <p>+</p>
                </div>
              </div>
            </div>
            {/* WEB Child Right Box End*/}
            {/* RWD Child Right Box Start */}
            <div
              className="claudia-modal-signup-num-box-right-rwd"
              style={{ width: '177px' }}
            >
              <div className="claudia-modal-signup-num-box-price-inline-rwd">
                <span>
                  <del>
                    <b>$700</b>
                  </del>
                </span>
                <span>
                  <b>$500</b>
                </span>
              </div>
              <div className="claudia-selection-container">
                <select className="claudia-selection-child-value" onChange={rwdTotal}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button>
                  <img src={selectArrow}></img>
                </button>
              </div>
            </div>
            {/* RWD Child Right Box End */}
          </div>
        </div>
        <div className="claudia-modal-last-block">
          <div className="claudia-modal-total-price">
            <span>
              <b>總金額：</b>
            </span>
            <span className="claudia-modal-total-price-orange">
              <b>{total}</b>
            </span>
          </div>
          <div className="claudia-modal-cart-button">
            <button onClick={() => handleCartNumber('add', TotalCount)}>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClaudiaModalContent
