import React, { useState, useEffect } from 'react';
import './JessMenuD.scss';
import styled from 'styled-components/macro';
import ActivityCard from 'components/activityCard/ActivityCard';
import { orange } from 'variable/variable';
import groupon1 from 'assets/jpg/groupon1.jpg';
import groupon2 from 'assets/jpg/groupon2.jpg';
import groupon3 from 'assets/jpg/groupon3.jpg';

const ActivityCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 3rem;
  font-family: 'Noto Serif TC', serif;
  font-weight: bold;
  color: ${orange};
  letter-spacing: 1rem;
`;

function JessMenuD() {
  return (
    <>
      <div className="container-fluid jess-MenuD-container-fluid mt-5">
        <div className="container">
          <Title className="text-center">好康優惠</Title>
          <ActivityCards>
            <ActivityCard
              backgroundImg={groupon1}
              title={'現在訂購'}
              topContent={'就 送'}
              bottomContent={'Blender Bottle 搖搖杯'}
            />
            <ActivityCard
              backgroundImg={groupon2}
              title={'開始訂購'}
              topContent={'立 即'}
              bottomContent={'享受美食'}
            />
            <ActivityCard
              backgroundImg={groupon3}
              title={'APP點餐'}
              topContent={'揪 團'}
              bottomContent={'大家一起來'}
            />
          </ActivityCards>
        </div>
      </div>
    </>
  );
}

export default JessMenuD;
