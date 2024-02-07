import React from 'react';
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
`;
const Label = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
    font-weight: 600;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px 14px;
    font-size: 20px;
    border-radius: 5px;
`;

export default function InputText({type, label, ...restProps}) {
    return (
      <InputContainer >
          <Label>
              {label}
          </Label>
          <Input type={type} {...restProps}/>
      </InputContainer>
    )
}
