import React from 'react';
import styled from 'styled-components/macro';
import 'Jess/Components/JessMenuD/JessMenuD.scss';
import { orange } from 'variable/variable';

const Cotainer = styled.section`
  margin: auto;
`;

const Groupon = styled.img`
  position: relative;
  width: 100%;
`;

const Mask = styled.div`
  position: absolute;
  opacity: 0;
  background-color: rgba(8, 8, 8, 0.658);
  transition: all 0.4s ease-in-out;
  width: 30rem;
  height: 30rem;
  top: 0;
`;

const TopLine = styled.div`
  border-bottom: 0.3rem solid ${orange};
  width: 25rem;
  transform: translateY(-20rem);
  opacity: 0;
  margin: 0 auto;
`;

const BottomLine = styled.div`
  border-bottom: 0.3rem solid ${orange};
  width: 25rem;
  transform: translateY(20rem);
  opacity: 0;
  margin: 0 auto;
`;

const Wrap = styled.div`
  position: relative;
  transition: all 0.2s linear;
  width: 30rem;
  height: 30rem;

  &:hover ${Mask} {
    width: 30rem;
    height: 30rem;
    position: absolute;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    opacity: 1;
  }

  &:hover ${TopLine} {
    transform: translateY(5rem);
    opacity: 1;
  }

  &:hover ${BottomLine} {
    transform: translateY(14rem);
    opacity: 1;
  }
`;

const Title = styled.h2``;

const Content = styled.p``;

function ActivityCard(props) {
  const { className, backgroundImg, title, topContent, bottomContent } = props;
  return (
    <Cotainer>
      <Wrap className="jess-view jess-view-first">
        <Groupon className="jess-menuD-groupon1" src={backgroundImg} />
        <Mask>
          <TopLine className="jess-line" />
          <Title className="text-center">{title}</Title>
          <Content className="text-center">
            {topContent} <br />
            {bottomContent}
          </Content>
          <BottomLine className="jess-line2"></BottomLine>
        </Mask>
      </Wrap>
    </Cotainer>
  );
}

export default ActivityCard;
