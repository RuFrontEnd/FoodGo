import React, { useEffect } from 'react'
import 'Ru/Components/RuButton/Style.scss'
import { withRouter } from 'react-router'

function RuButton(props) {
  // text 按鈕文字
  // className 橘色樣式為button-btn 綠色樣式為button-btn-g
  const {
    text,
    className,
    id,
    openBento,
    setOpenBento,
    openSalad,
    setOpenSalad,
    openCustom,
    setOpenCustom,
  } = props

  // 路由方法
  function handleCardArea(e) {
    // console.log(props)
    if (id === 'ru-button-btn-1') {
      props.history.push('/productList')
    } else if (id === 'ru-button-btn-2') {
      props.history.push('/productListSalad')
    } else if (id === 'ru-button-btn-3') {
      props.history.push('/productListCustom')
    } else if (id === 'ru-button-btn-4') {
      props.history.push('/vegBox')
    }
  }

  // 亮按鈕邏輯
  useEffect(() => {
    // 查看所處路由
    if (props.location.pathname === '/productList') {
      // 改變state值讓JSX的三元去判斷要不要顯示亮鈕樣式
      setOpenBento(true)
    } else if (props.location.pathname === '/productListSalad') {
      setOpenSalad(true)
    } else if (props.location.pathname === '/productListCustom') {
      setOpenCustom(true)
    }
  }, [openBento, openSalad, openCustom])

  return (
    <>
      {/* 先判斷是抓到哪個按鈕再判斷要不要亮 */}
      {id === 'ru-button-btn-1' &&
        (openBento ? (
          <button
            className={className}
            onClick={handleCardArea}
            style={{ backgroundColor: '#F48145', color: 'white' }}
          >
            {text}
          </button>
        ) : (
          <button className={className} onClick={handleCardArea}>
            {text}
          </button>
        ))}
      {id === 'ru-button-btn-2' &&
        (openSalad ? (
          <button
            className={className}
            onClick={handleCardArea}
            style={{ backgroundColor: '#F48145', color: 'white' }}
          >
            {text}
          </button>
        ) : (
          <button className={className} onClick={handleCardArea}>
            {text}
          </button>
        ))}
      {id === 'ru-button-btn-3' &&
        (openCustom ? (
          <button
            className={className}
            onClick={handleCardArea}
            style={{ backgroundColor: '#F48145', color: 'white' }}
          >
            {text}
          </button>
        ) : (
          <button className={className} onClick={handleCardArea}>
            {text}
          </button>
        ))}
      {id === 'ru-button-btn-4' &&
        (id ? (
          <button className={className} onClick={handleCardArea}>
            {text}
          </button>
        ) : (
          <button className={className} onClick={handleCardArea}>
            {text}
          </button>
        ))}
    </>
  )
}

export default withRouter(RuButton)
