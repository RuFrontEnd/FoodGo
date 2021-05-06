import React from 'react'
import ClaudiaMainContent from '../../Claudia/Components/ClaudiaMainContent/ClaudiaMainContent'
import ClaudiaIndexThemePic from '../../Claudia/Components/ClaudiaIndexThemePic/ClaudiaIndexThemePic'
import ClaudiaIndexInducText from '../../Claudia/Components/ClaudiaIndexInducText/ClaudiaIndexInducText'
import ClaudiaIndexContent from '../../Claudia/Components/ClaudiaIndexContent/ClaudiaIndexContent'
import Footer from '../../Share/Components/Footer/Footer'
import ScrollButtonGreen from '../../Share/Components/ToTopButton/ScrollButtonGreen'
import Test2 from '../../Claudia/Components/Test2/Test2'

function ClaudiaFarmIndex() {

  return (
    <>
      <ClaudiaMainContent>
        <ClaudiaIndexThemePic />
        <ClaudiaIndexInducText />
        <ClaudiaIndexContent />
      </ClaudiaMainContent>
      <ScrollButtonGreen />
    </>
  )
}

export default ClaudiaFarmIndex
