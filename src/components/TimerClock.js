import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
  margin:auto;
  width:45%;
  background-color:palegoldenrod;
  font-size:6em;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align:center;
  color:cadetblue;
`
const TimerClock = ({hour, minute,seconds}) => (
  <Wrapper>
    <span>{hour}</span>:
    <span>{minute}</span>:
    <span>{seconds}</span>
  </Wrapper>
);

export default TimerClock;
