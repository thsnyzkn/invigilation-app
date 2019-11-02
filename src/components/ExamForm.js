import React from "react";


const ExamForm = ({title,place,date,duration})=>(
  <form>
    <label>Exam Title</label>
    <input
      type="text"
      value={title}
      placeholder="Exam Title"
    />
    <label>Exam Place</label>
    <input
      type="text"
      value={place}
      placeholder="Exam Place"
    />
    <label>Exam Date</label>
    <input
      type="date"
      value={date}
      placeholder="Exam Date"
    />
    <label>Exam Duration</label>
    <input
      type="number"
      value={duration}
      placeholder="Exam Duration"
    />
  </form>
)


export default ExamForm;