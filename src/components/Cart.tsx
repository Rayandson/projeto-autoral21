import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SlArrowDown } from 'react-icons/sl';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

interface ContainerProps {
  showCart: boolean | undefined;
}

interface ImgDivProps {
  img: string | null | undefined;
}

export default function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <Container showCart={cartContext?.showCart}>
      <Header>
        <SlArrowDown
          onClick={() => {
            cartContext?.setShowCart(false);
          }}
        />
        <Title>Sua sacola</Title>
      </Header>
      <Content>
        {cartContext?.cart.total !== undefined && cartContext?.cart.total > 0 ? (
          <>
            {cartContext?.cart.items.map((i) => (
              <CartItem itemData={i} />
            ))}
            <DivisionLine />
            <TotalContainer>
              <Total>TOTAL:</Total>
              <TotalValue>R$ {(cartContext?.cart.total / 100).toFixed(2)}</TotalValue>
            </TotalContainer>
          </>
        ) : (
          <MsgDiv>
            <EmptyCartMsg>Sua Sacola está vazia</EmptyCartMsg>
          </MsgDiv>
        )}
      </Content>
      <Footer>
        <OrderButton
        //   onClick={() => addItem()}
        >
          Quero pedir
        </OrderButton>
      </Footer>
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  width: 50vw;
  max-width: 600px;
  height: 80vh;
  background-color: #ffffff;
  z-index: 100;
  position: fixed;
  bottom: ${(props) => (props.showCart ? '10vh' : '-100vh')};
  left: calc(50% - 300px);
  transition: bottom 0.3s ease-in-out;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  @media (max-width: 1200px) {
    left: calc(50% - 25vw);
    padding: 0 12px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    left: 0;
    bottom: ${(props) => (props.showCart ? '0' : '-100vh')};
    padding: 0 2vw;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #5e2bc4;
  text-align: center;
  margin-bottom: 20px;

  svg {
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    left: 20px;
    top: calc(50% - 9px);

    &:hover {
      cursor: pointer;
    }
  }
`;

const Title = styled.p`
  width: 65%;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 75px;
`;

const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 30px;
`;

const DivisionLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #cfcfcf;
  margin: 0 auto;
`;

const Total = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #777777;
`;

const TotalValue = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #000000;
`;

const MsgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: calc(50vh - 72px);
`

const EmptyCartMsg = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #000000;
`;

const Footer = styled.footer`
  width: 100%;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.08);
  background: #ffffff;
  padding: 0 18px;

  @media (max-width: 600px) {
    width: 100vw;
    height: 83px;
  }
`;

const OrderButton = styled.button`
  width: 80%;
  max-width: 500px;
  height: 45px;
  background-color: #5e2bc4;
  border: none;
  border-radius: 5px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;