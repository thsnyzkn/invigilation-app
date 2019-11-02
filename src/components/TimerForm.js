import React from "react";
import styled from "styled-components";
const Section = styled.section`
margin-top:2%;
width:20%;
  
`;
const Title = styled.label`
  grid-row: 1;
  border-bottom:2px solid black;
  padding-bottom:1vh;
  font-size:1em;
  text-align:center;
  line-height:3.5em;
  vertical-align:top;
  
`
const Form = styled.form`
display:grid;
margin-left:44vw;
grid-template-rows:33.3% 33.3% 33.3%;
row-gap:10px;
`
const Input = styled.input`
  box-sizing: border-box;
  border:2px solid green;
  border-radius:3px;
  grid-row:2;
`
const Submit = styled.button`
  border:1px solid turquoise;
  box-sizing: border-box;
  border-radius:3px;
  grid-row:3;
  background-color:tomato;
  color:greenyellow;
  
`

const TimerForm = ({ handleChange, handleSubmit, duration, isSubmit }) => (
  <Section>
    <Form onSubmit={handleSubmit}>
      <Title>Exam Duration</Title>
      <Input
        type="number"
        defaultValue={duration}
        disabled={isSubmit}
        onChange={handleChange}
      />
      <Submit type="submit" disabled={isSubmit}>
        Create
      </Submit>
    </Form>
  </Section>
);

export default TimerForm;
