import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

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

const CloseButton = styled.button``;

const OrderButton = styled.button``;

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

  & ${CloseButton} {
    color: #8a2b06;
  }

  & ${OrderButton} {
    background-color: #8a2b06;
    color: white;
  }
`;

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <CartItems>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItems>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>
      <Actions>
        <CloseButton onClick={props.onClose}>Close</CloseButton>
        {hasItems && <OrderButton>Order</OrderButton>}
      </Actions>
    </Modal>
  );
};

export default Cart;
