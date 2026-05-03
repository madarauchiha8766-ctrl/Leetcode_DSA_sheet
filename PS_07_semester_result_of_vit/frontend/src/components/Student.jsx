import Result from './Result';

function Student({ name, course, marks }) {
  return (
    <div className="glass-panel student-card" style={{ marginBottom: 0 }}>
      <div className="student-header">
        <h3>{name}</h3>
        <p>Course: {course}</p>
      </div>
      <Result marks={marks} />
    </div>
  );
}

export default Student;
