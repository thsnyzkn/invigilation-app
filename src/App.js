import React, { useState } from "react";
import TimerForm from "./components/TimerForm";
import TimerClock from "./components/TimerClock";
import useInterval from "./hooks/useInterval";
import styled from "styled-components";
//import './App.scss';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width:100%;
  display:grid;
  grid-template-rows:53.3% 43.3% 13.3%;
`;
const Buttons = styled.div``;
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
    <TimerClock hour={hour} minute={minutes} second={seconds} />
      <TimerForm
        duration={duration}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmit={isSubmit}
      />
      

      <Buttons>
        <button onClick={handleStart}>START</button>
        <button onClick={handlePause}>{isRunning ? "PAUSE" : "RESUME"}</button>
        <button onClick={console.log("HEBELE")}>RESET</button>
      </Buttons>
    </Wrapper>
  );
}

export default App;
