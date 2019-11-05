import React from "react"
import HourDisplay from './HourDisplay'
import MinuteDisplay from './MinuteDisplay'
import styled from "styled-components"
const Wrapper = styled.div`
display:flex;
flex-flow: row nowrap;
grid-column:auto/span 2;
justify-content:space-between;
`
const Display = () => (
<Wrapper>
  <HourDisplay/>
  <MinuteDisplay/>
</Wrapper>
)


export default Display;