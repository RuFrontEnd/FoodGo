import React, { useState } from 'react'
import './ClaudiaIndexContent.scss'
import ClaudiaIndexMap from '../ClaudiaIndexMap/ClaudiaIndexMap'
import ClaudiaIndexCardIntro from '../ClaudiaIndexCardIntro/ClaudiaIndexCardIntro'
import ClaudiaIndexCardList from '../ClaudiaIndexCardList/ClaudiaIndexCardList'

function ClaudiaIndexContent() {
  const [city, setCity] = useState('')
  const [imgNum, setImgNum] = useState('1')
  const [data, setData] = useState('')
  const [buttonNum, setButtonNum] = useState(0)

  return (
    <>
      <div className="claudia-index-content">
      <div className="claudia-index-content-fix-container">
        <div className="claudia-index-content-container">
          <div className="claudia-index-map">
            <ClaudiaIndexMap setCity={setCity} setData={setData} data={data} />
          </div>
          <div className="claudia-index-card">
            <ClaudiaIndexCardList
              city={city}
              data={data}
              setButtonNum={setButtonNum}
              setImgNum={setImgNum}
            />
            <ClaudiaIndexCardIntro
              city={city}
              data={data}
              imgNum={imgNum}
              buttonNum={buttonNum}
            />
          </div>
        </div>

      </div>
        
        {/* <div className="claudia-fake-footer"></div> */}
      </div>
    </>
  )
}

export default ClaudiaIndexContent
