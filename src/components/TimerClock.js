import React from "react";
import styled from "styled-components";
import HourButtons from './HourButtons'
import MinuteButtons from './MinuteButtons'
import Display from './Display';
const Wrapper = styled.div`
  /*display:flex;
  flex-flow: row nowrap;
  justify-content:space-evenly;
  align-items:center; */
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(5vw,1fr));
  grid-column-gap:2%;
  padding: 5vh 0;
  background-color: #F76C6C;
  font-family: "Black Ops One", cursive;
  margin:10% 25% auto;
  box-shadow:inset 0px 0px 0px 0.5vw rebeccapurple;
`;



const TimerClock = ({hour, minute, second }) => (
  <Wrapper>
      <HourButtons/>
      <Display/>
      <MinuteButtons/>
      
  </Wrapper>
);

export default TimerClock;
