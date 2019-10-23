import React, { useState } from "react";
import TimerForm from "./components/TimerForm";
import TimerClock from "./components/TimerClock";
function App() {
  const [duration, setDuration] = useState(null);
  let hour = Math.round(duration/60)
  let minutes = Math.round(duration%60)
  const handleSubmit = event => {
    event.preventDefault();
    const {value} = event.target
    setDuration(value);
  };
  const handleChange = event => {
    const { value } = event.target;
    setDuration( value );
    
  };
  return (
    <div className="App">
      <TimerForm
        duration={duration}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TimerClock
        hour={hour}
        minute={minutes}
        seconds={40}
      />
    </div>
  );
}

export default App;
