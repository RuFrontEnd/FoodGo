import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Container = styled.div`
  background-color: $white;
  width: 100%;
  height: 85rem;
  padding: 0;
`;

const Title = styled.div`
  display: block;
`;

const Price = styled.div`
  display: block;
`;

const Picture = styled.img`
  background-position: center center;
  background-size: cover;
  width: 23rem;
  height: 23rem;
  position: relative;
`;

const Mask = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;
  position: absolute;
  bottom: 28rem;
  width: 23rem;
  height: 7rem;
  overflow: hidden;

  &:hover {
    opacity: 1;
    transform: translateY(10px);
    background-color: rgba(255, 255, 255, 0.5);
    height: 6rem;
  }
`;

function MenuSubItemCard(props) {
  const { path, title, price } = props;
  return (
    <Container>
      <Link to={path}>
        <Picture />
      </Link>
      <Mask>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Mask>
    </Container>
  );
}

export default MenuSubItemCard;
