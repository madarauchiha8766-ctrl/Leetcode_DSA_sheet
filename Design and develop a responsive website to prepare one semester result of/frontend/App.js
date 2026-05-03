import React from "react";
import Student from "./Student";

function App() {
  const studentData = {
    name: "Rahul",
    subjects: [
      { name: "Maths", mse: 25, ese: 60 },
      { name: "Physics", mse: 20, ese: 55 },
      { name: "Chemistry", mse: 22, ese: 50 },
      { name: "DSA", mse: 28, ese: 65 }
    ]
  };

  return (
    <div>
      <h2>VIT Result System</h2>
      <Student data={studentData} />
    </div>
  );
}

export default App;
