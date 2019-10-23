import React from "react";

const TimerForm = ({handleChange,handleSubmit,duration}) =>(
  <form onSubmit={handleSubmit}>
    <input disabled={duration<0} type="number" defaultValue={duration}   onChange={handleChange} placeholder="How long does the exam take?"/>
    <button type="submit">Create</button>
  </form>

)

export default TimerForm;