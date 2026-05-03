import React from "react";

function Result({ subjects }) {

  const calculate = (mse, ese) => {
    return (mse * 0.3 + ese * 0.7).toFixed(2);
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Subject</th>
          <th>MSE</th>
          <th>ESE</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map((sub, index) => (
          <tr key={index}>
            <td>{sub.name}</td>
            <td>{sub.mse}</td>
            <td>{sub.ese}</td>
            <td>{calculate(sub.mse, sub.ese)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
