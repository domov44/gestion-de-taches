import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    background: #0909ce;
    color: white;
    cursor: pointer;
    line-height: 1;
`;
export default function Button({children, type, onClick}) {
    return (
      <ButtonContainer type={type} onClick={onClick}>
          {children}
      </ButtonContainer>
    )
}
