import { useState, useEffect } from 'react';
import Student from './components/Student';

const API_URL = 'http://localhost:8000/api.php';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    marks: [
      { subject: 'Subject 1', mse: '', ese: '' },
      { subject: 'Subject 2', mse: '', ese: '' },
      { subject: 'Subject 3', mse: '', ese: '' },
      { subject: 'Subject 4', mse: '', ese: '' }
    ]
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      
      // Map API data back to our expected component state structure
      if (Array.isArray(data)) {
         const mappedData = data.map(s => ({
            id: s.id,
            name: s.name,
            course: s.course,
            marks: [
              { subject: 'Subject 1', mse: s.sub1_mse, ese: s.sub1_ese },
              { subject: 'Subject 2', mse: s.sub2_mse, ese: s.sub2_ese },
              { subject: 'Subject 3', mse: s.sub3_mse, ese: s.sub3_ese },
              { subject: 'Subject 4', mse: s.sub4_mse, ese: s.sub4_ese }
            ]
         }));
         setStudents(mappedData);
      }
    } catch (err) {
      console.error(err);
      setError('Cannot connect to API. Please ensure the PHP backend is running and the MySQL database is configured.');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkChange = (index, field, value) => {
    const newMarks = [...formData.marks];
    newMarks[index][field] = value;
    setFormData({ ...formData, marks: newMarks });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to save data');
      
      // Update UI dynamically with the newly added student
      const newStudent = {
         id: result.student.id || Date.now(),
         name: formData.name,
         course: formData.course,
         marks: [...formData.marks]
      };
      
      setStudents([newStudent, ...students]);
      
      // Reset form
      setFormData({
        name: '',
        course: '',
        marks: [
          { subject: 'Subject 1', mse: '', ese: '' },
          { subject: 'Subject 2', mse: '', ese: '' },
          { subject: 'Subject 3', mse: '', ese: '' },
          { subject: 'Subject 4', mse: '', ese: '' }
        ]
      });

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>VIT Semester Result Portal</h1>
        <p>Prepare and calculate semester results dynamically</p>
      </header>

      {error && <div className="error-message">{error}</div>}

      <div className="glass-panel">
        <h2>Add New Student Result</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Student Name</label>
              <input 
                type="text" 
                className="form-control" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>
            <div className="form-group">
              <label>Course</label>
              <input 
                type="text" 
                className="form-control" 
                value={formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                required 
              />
            </div>
          </div>

          <h3 style={{ marginTop: '1.5rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
            Enter Marks (MSE: out of 100, ESE: out of 100)
          </h3>
          <div className="marks-grid">
            {formData.marks.map((mark, index) => (
              <div key={index} className="subject-input">
                <h4>{mark.subject}</h4>
                <div className="inputs">
                  <input 
                    type="number" 
                    className="form-control" 
                    placeholder="MSE" 
                    value={mark.mse}
                    onChange={(e) => handleMarkChange(index, 'mse', e.target.value)}
                    required
                    min="0" max="100"
                  />
                  <input 
                    type="number" 
                    className="form-control" 
                    placeholder="ESE" 
                    value={mark.ese}
                    onChange={(e) => handleMarkChange(index, 'ese', e.target.value)}
                    required
                    min="0" max="100"
                  />
                </div>
              </div>
            ))}
          </div>

          <button type="submit" className="btn">Calculate & Save Result</button>
        </form>
      </div>

      <div className="results-section">
        <h2 style={{ marginBottom: '1.5rem' }}>Student Records</h2>
        {loading ? (
          <div className="loading">Loading records...</div>
        ) : students.length === 0 ? (
          <div className="loading">No records found. Add a student to begin.</div>
        ) : (
          <div className="students-list">
            {students.map(student => (
              <Student 
                key={student.id} 
                name={student.name} 
                course={student.course} 
                marks={student.marks} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
