import React from "react";
import Result from "./Result";

function Student(props) {
  return (
    <div>
      <h3>Student: {props.data.name}</h3>
      <Result subjects={props.data.subjects} />
    </div>
  );
}

export default Student;
