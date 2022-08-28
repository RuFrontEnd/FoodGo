import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Title = styled.div`
  margin-bottom: 2.5px;
`;

const Price = styled.div`
  display: block;
`;

const Picture = styled.img`
  position: relative;
  width: 23rem;
  height: 23rem;
  object-fit: cover;
`;

const Mask = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  width: 100%;
  height: 8.5rem;
  opacity: 0;
  font-size: 15px;
  bottom: -6rem;
  left: 0;
  transform: translateY(0px);
  transition: all 0.5s ease-out;
`;

const Container = styled.section`
  position: relative;
  overflow: hidden;

  &:hover ${Mask} {
    opacity: 1;
    height: 6.5rem;
    bottom: 0rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Info = styled.div`
  display: block;
`;

function MenuSubItemCard(props) {
  const { path, photo, title, price } = props;
  return (
    <Container>
      <Link to={path}>
        <Picture src={photo} />
      </Link>
      <Mask>
        <Info>
          <Title>{title}</Title>
          <Price>${price}</Price>
        </Info>
      </Mask>
    </Container>
  );
}

export default MenuSubItemCard;
