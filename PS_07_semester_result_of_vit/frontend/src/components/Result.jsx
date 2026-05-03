function Result({ marks }) {
  // Constants for calculation
  const MSE_WEIGHT = 0.3;
  const ESE_WEIGHT = 0.7;
  const PASSING_SCORE = 40;

  let totalScore = 0;
  let hasFailedSubject = false;

  const processedMarks = marks.map((mark) => {
    // Convert to numbers
    const mse = Number(mark.mse) || 0;
    const ese = Number(mark.ese) || 0;
    
    // Calculate final score for the subject: 30% of MSE + 70% of ESE
    // Assuming both MSE and ESE are entered out of 100
    const finalSubjectScore = (mse * MSE_WEIGHT) + (ese * ESE_WEIGHT);
    totalScore += finalSubjectScore;
    
    const passed = finalSubjectScore >= PASSING_SCORE;
    if (!passed) hasFailedSubject = true;

    return {
      ...mark,
      finalSubjectScore: finalSubjectScore.toFixed(2),
      passed
    };
  });

  const percentage = (totalScore / marks.length).toFixed(2);
  const overallPassed = !hasFailedSubject && percentage >= PASSING_SCORE;

  return (
    <div>
      <table className="result-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>MSE (30%)</th>
            <th>ESE (70%)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {processedMarks.map((mark, idx) => (
            <tr key={idx}>
              <td>{mark.subject}</td>
              <td>{mark.mse}</td>
              <td>{mark.ese}</td>
              <td style={{ color: mark.passed ? 'var(--success)' : 'var(--danger)' }}>
                {mark.finalSubjectScore}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="final-status">
        <div>
          <strong>Overall: </strong> {percentage}%
        </div>
        <div className={`status-badge ${overallPassed ? 'status-pass' : 'status-fail'}`}>
          {overallPassed ? 'PASS' : 'FAIL'}
        </div>
      </div>
    </div>
  );
}

export default Result;
