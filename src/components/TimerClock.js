import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
  margin:auto;
  width:24%;
  background-color:palegoldenrod;
  font-size:6em;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align:center;
  color:cadetblue;
`
const TimerClock = ({handleHour,handleMinute,hour, minute}) => (
  <Wrapper>
    <span onChange={handleHour}>{hour}</span>:
    <span onChange={handleMinute}>{minute}</span>
  </Wrapper>
);

export default TimerClock;
