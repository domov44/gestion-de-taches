import React from 'react';
import styled from "styled-components";

const FormContainer = styled.form`
    width: 500px;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 15px;
    
`;

export default function Form({children}) {
    return (
      <FormContainer>
          {children}
      </FormContainer>
    )
}

