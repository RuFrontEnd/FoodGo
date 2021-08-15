import React from 'react';
import styled from 'styled-components/macro';
import 'Jess/Components/JessMenuD/JessMenuD.scss';

const Cotainer = styled.section``;

const Wrap = styled.div``;

const Title = styled.h2``;

const Content = styled.p``;

function ActivityCard() {
  return (
    <Cotainer className="col-12 col-sm-3">
      <Wrap className="jess-view jess-view-first">
        <div className="jess-menuD-groupon1 "></div>
        <div class="jess-mask text-center">
          <div className="jess-line"></div>
          <Title className="text-center">現在訂購</Title>
          <Content className="text-center">
            就 送 <br />
            Blender Bottle 搖搖杯
          </Content>
          <div className="jess-line2"></div>
        </div>
      </Wrap>
    </Cotainer>
  );
}

export default ActivityCard;
