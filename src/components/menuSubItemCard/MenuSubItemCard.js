import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: relative;
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
  object-fit: cover;
  width: 23rem;
  height: 23rem;
  position: relative;
`;

const Mask = styled.div`
  background-color: red;
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
  const { path, photo, title, price } = props;
  return (
    <Container>
      <Link to={path}>
        <Picture src={photo} />
      </Link>
      <Mask>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Mask>
    </Container>
  );
}

export default MenuSubItemCard;
