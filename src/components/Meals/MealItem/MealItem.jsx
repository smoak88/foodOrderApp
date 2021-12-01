import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }
`;
const MealDescription = styled.div`
  font-style: italic;
`;

const MealPrice = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Meal>
      <div>
        <h3>{props.name}</h3>
        <MealDescription>{props.description}</MealDescription>
        <MealPrice>{price}</MealPrice>
      </div>
      <div>
        <MealItemForm />
      </div>
    </Meal>
  );
};
export default MealItem;
