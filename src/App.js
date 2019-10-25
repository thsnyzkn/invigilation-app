import React, { useState,useEffect } from "react";
import TimerForm from "./components/TimerForm";
import TimerClock from "./components/TimerClock";
import useInterval from "./hooks/useInterval";  
function App() {
  const [duration, setDuration] = useState(null);
  const [hour,setHour] = useState('00')
  const [minutes,setMinutes] = useState('00')
  const [isRunning,setIsRunning]=useState(false)
  
  const handleSubmit = event => {
    event.preventDefault();
    const {value} = event.target
    setDuration(value);

    setHour(Math.round(duration/60))
    setMinutes(Math.round(duration%60))
  };
  const handleChange = event => {
    const { value } = event.target;
    setDuration( value );
    
  };
  
  useInterval(()=>{
    setMinutes(minutes -1)
  },isRunning ? 1000:null)
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
      />
      <button onClick={()=>setIsRunning(true)}>START</button>
      <button onClick={()=>isRunning ? setIsRunning(false):setIsRunning(false)}>PAUSE</button>
      <button onClick={console.log('HEBELE')}>RESET</button>
      
      
    </div>
  );
}

export default App;
