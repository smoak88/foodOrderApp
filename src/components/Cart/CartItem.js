import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;

  & h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }

  & button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  & button:hover,
  & button:active {
    background-color: #8a2b06;
    color: white;
  }
`;
const StyledSummaryDiv = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPriceSpan = styled.span`
  font-weight: bold;
  color: #8a2b06;
`;

const StyledAmountSpan = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
`;
const StyledActionsDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <StyledLi>
      <div>
        <h2>{props.name}</h2>
        <StyledSummaryDiv>
          <StyledPriceSpan>{price}</StyledPriceSpan>
          <StyledAmountSpan>x {props.amount}</StyledAmountSpan>
        </StyledSummaryDiv>
      </div>
      <StyledActionsDiv>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </StyledActionsDiv>
    </StyledLi>
  );
};

export default CartItem;
