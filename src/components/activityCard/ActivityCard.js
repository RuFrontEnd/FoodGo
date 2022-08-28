import React from 'react';
import styled from 'styled-components/macro';
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

const Title = styled.h2`
  transform: translateY(-10rem);
  opacity: 0;
  font-family: 'Noto Sans TC';
  font-weight: 400;
  color: ${orange};
  font-size: 2.4rem;
  transition: all 0.2s ease-in-out;
`;

const Content = styled.p`
  transform: translateY(40rem);
  opacity: 1;
  color: #ffffff;
  font-size: 2rem;
  transition: all 0.2s linear;
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

  &:hover ${Content} {
    opacity: 1;
    transform: translateY(10rem);
    transition-delay: 0.5s;
    transition: all 0.2s ease-in-out;
  }

  &:hover ${Title} {
    opacity: 1;
    transform: translateY(8rem);
    transition-delay: 0.1s;
  }
`;

function ActivityCard(props) {
  const { className, backgroundImg, title, topContent, bottomContent } = props;
  return (
    <Cotainer className={className}>
      <Wrap>
        <Groupon src={backgroundImg} />
        <Mask>
          <TopLine />
          <Title className="text-center">{title}</Title>
          <Content className="text-center">
            {topContent} <br />
            {bottomContent}
          </Content>
          <BottomLine />
        </Mask>
      </Wrap>
    </Cotainer>
  );
}

export default ActivityCard;
