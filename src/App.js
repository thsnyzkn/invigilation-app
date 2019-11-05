import React, { useState } from "react";
import TimerForm from "./components/TimerForm";
import TimerClock from "./components/TimerClock";
import useInterval from "./hooks/useInterval";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Black+Ops+One&display=swap');
    
  }
`
const Wrapper = styled.div`
  
  
`;

function App() {
  const [duration, setDuration] = useState(null);
  const [hour, setHour] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleSubmit = event => {
    event.preventDefault();
    let { value } = event.target;
    setDuration(Number(value));

    setHour(
      Math.round(duration / 60) < 10
        ? "0" + Math.round(duration / 60)
        : Math.round(duration / 60)
    );
    setMinutes(
      Math.round(duration % 60) < 10
        ? "0" + Math.round(duration % 60)
        : Math.round(duration % 60)
    );
    setIsSubmit(true);
    value = 0;
    console.log(isSubmit);
  };
  const handleChange = event => {
    const { value } = event.target;
    setDuration(Number(value));
  };
  const handleStart = () => {
    setIsRunning(true);
    setSeconds(59);
    setDuration(null);
  };
  const handlePause = () => {
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };
  const tick = () => {
    setSeconds(seconds - 1);
    if (seconds <= 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    }
  };
  useInterval(tick, isRunning ? 1000 : null);
  return (
    <Wrapper>
    <GlobalStyles />
    <TimerClock hour={hour} minute={minutes} second={seconds} />
      
    </Wrapper>
  );
}

export default App;
