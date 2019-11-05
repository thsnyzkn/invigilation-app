import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  grid-column:auto/span 1;
  display:inline-flex;
  flex-flow: column nowrap;
  justify-content:space-between;
  align-items:center;
  background-color: transparent;
  border:transparent;
  
`;
const Button = styled.button`
  background-color: black;
  color: white;
  text-align:center;
`;
const HourButtons = () => (
  <Wrapper>
    <Button>+</Button>
    <Button>-</Button>
  </Wrapper>
);

export default HourButtons;
