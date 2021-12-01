import React from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-right: 1rem;
  }

  & input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;

const Input = (props) => {
  return (
    <InputDiv>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </InputDiv>
  );
};
export default Input;
