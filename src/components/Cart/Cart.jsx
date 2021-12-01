import React from "react";
import styled from "styled-components";

const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions = styled.div`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  & button:hover,
  & button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;
const CloseButton = styled.button`
  color: #8a2b06;
`;

const OrderButton = styled.button`
  background-color: #8a2b06;
  color: white;
`;

const Cart = (props) => {
  const cartItems = (
    <CartItems>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </CartItems>
  );

  return (
    <div>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>33.42</span>
      </Total>
      <Actions>
        <CloseButton>Close</CloseButton>
        <OrderButton>Order</OrderButton>
      </Actions>
    </div>
  );
};

export default Cart;
