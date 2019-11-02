import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
  background-color:palegoldenrod;
  font-family:Arial, Helvetica, sans-serif;
  text-align:center;
  color:cadetblue;
  
`
const Title = styled.span`
font-size:10vw;

`
const TimerClock = ({hour, minute,second}) => (
  <Wrapper>
    <Title>{hour}</Title><span>hr</span>
    <Title>{minute}</Title><span>min</span>
    <Title>{second}</Title>
  </Wrapper>
);

export default TimerClock;
