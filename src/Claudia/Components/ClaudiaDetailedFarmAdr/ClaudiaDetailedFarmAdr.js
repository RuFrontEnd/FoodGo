import React, { useState } from 'react';
import './ClaudiaDetailedFarmAdr.scss';
import Button from '../../../Share/Components/Button/Button';


function ClaudiaDetailedFarmAdr() {

    const changeTextPublic = () => {
        document.getElementsByClassName('claudia-detailed-farm-adr-transport-text')[0].innerHTML =
            `<p>1. 捷運市政府站→轉小2路公車→白石湖社區同心池下車，即到農場。</p>
            <p>2. 捷運內湖站→下車步行至「成功路4段182巷口」（約160公尺）→轉小2路公車或小2路區間車→白石湖社區同心池下車，即抵農場。</p>`

    }

    const changeTextPrivate = () => {
        document.getElementsByClassName('claudia-detailed-farm-adr-transport-text')[0].innerHTML =
            `<p>1. 中山高速公路→成功交流道成功4段→金龍路→內湖路→碧山路</p>
            <p>2. 基隆路或市民大道→環東快速道路→舊宗路→民權東路 6段→成功路4段→金龍路→內湖路→碧山路</p>
            <p>3.中山北路→北安路→內湖路→碧山路</p>`

    }

    return (
        <>
            <div className="claudia-detailed-farm-adr" id="farm-adr">
                <h1><b>體驗地點</b></h1>
                <div className="claudia-detailed-farm-adr-container">
                    <div className="claudia-detailed-farm-adr-info-container">
                        <div className="claudia-detailed-farm-adr-info">
                            <p>農場地址：台北市內湖區碧山路58-1號</p>
                            <p>聯絡電話：0912-472-001</p>
                            <iframe title="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.032376624603!2d121.58711061485543!3d25.100765341766156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442acfc16c4180b%3A0xac447d9596417f6a!2z6L6y6amb5qOn6L6y5aC0!5e0!3m2!1szh-TW!2stw!4v1603621745007!5m2!1szh-TW!2stw" width="560" height="460" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>

                    </div>
                    <div className="claudia-detailed-farm-adr-transport">
                        <div className="claudia-detailed-farm-adr-transport-container">
                            <div className="claudia-detailed-farm-adr-transport-buttons">
                                <div className="claudia-detailed-farm-adr-transport-buttons-i"
                                    onClick={changeTextPublic}>
                                    <Button className="button-btn-g" text="大眾運輸" />
                                </div>
                                <div className="claudia-detailed-farm-adr-transport-buttons-i"
                                    onClick={changeTextPrivate}>
                                    <Button className="button-btn-g" text="開車前往" />
                                </div>
                            </div>
                            <div className="claudia-detailed-farm-adr-transport-text">
                                <p>1. 捷運市政府站→轉小2路公車→白石湖社區同心池下車，即到農場。</p>
                                <p>2. 捷運內湖站→下車步行至「成功路4段182巷口」（約160公尺）→轉小2路公車或小2路區間車→白石湖社區同心池下車，即抵農場。</p>
                                {/* <p>1. 中山高速公路→成功交流道成功4段→金龍路→內湖路→碧山路</p>
                                <p>2. 基隆路或市民大道→環東快速道路→舊宗路→民權東路 6段→成功路4段→金龍路→內湖路→碧山路</p>
                                <p>3.中山北路→北安路→內湖路→碧山路</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ClaudiaDetailedFarmAdr;