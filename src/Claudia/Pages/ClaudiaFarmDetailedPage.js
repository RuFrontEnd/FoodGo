import React from 'react';
import ClaudiaMainContent from '../Components/ClaudiaMainContent/ClaudiaMainContent';
import ClaudiaDetailedThemePic from '../Components/ClaudiaDetailedThemePic/ClaudiaDetailedThemePic';
import ClaudiaDetailedMainText from '../Components/ClaudiaDetailedMainText/ClaudiaDetailedMainText';
import ClaudiaDetailedSilder from '../Components/ClaudiaDetailedSilder/ClaudiaDetailedSilder';
import ClaudiaDetailedSchedule from '../Components/ClaudiaDetailedSchedule/ClaudiaDetailedSchedule';
import ClaudiaDetailedFarmIntro from '../Components/ClaudiaDetailedFarmIntro/ClaudiaDetailedFarmIntro'
import ClaudiaDetailedFarmAdr from '../Components/ClaudiaDetailedFarmAdr/ClaudiaDetailedFarmAdr';
import ClaudiaDetailedNavButtons from '../Components/ClaudiaDetailedNavButtons/ClaudiaDetailedNavButtons';
import ClaudiaDetailedRecommended from '../Components/ClaudiaDetailedRecommended/ClaudiaDetailedRecommended';
import Footer from '../../Share/Components/Footer/Footer';
import ScrollButtonGreen from '../../Share/Components/ToTopButton/ScrollButtonGreen';

function ClaudiaFarmIntroPage(props) {
    const { handleCartNumber } = props;

    return (
        <>
            <ClaudiaMainContent>
                <ClaudiaDetailedThemePic />
                <ClaudiaDetailedMainText handleCartNumber={handleCartNumber} />
                <ClaudiaDetailedSilder />
                <ClaudiaDetailedSchedule />
                <ClaudiaDetailedFarmIntro />
                <ClaudiaDetailedFarmAdr />
                <ClaudiaDetailedNavButtons />
                <ClaudiaDetailedRecommended />
            </ClaudiaMainContent>
            <ScrollButtonGreen />
        </>
    )
}

export default ClaudiaFarmIntroPage;