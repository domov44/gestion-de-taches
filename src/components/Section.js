import React from 'react';
import styled from "styled-components";

const SectionContainer = styled.section`
    display: flex;
    witdh: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;

export default function Section({children}) {
    return (
      <SectionContainer>
          {children}
      </SectionContainer>
    )
}
