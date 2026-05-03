import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const toggleClock = () => {
    setIsRunning(!isRunning);
  };

  // Format time to HH:MM:SS
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="app-container">
      <div className="clock-card">
        <h1 className="title">Digital Clock</h1>
        <div className={`time-display ${!isRunning ? 'paused' : ''}`}>
          {formatTime(time)}
        </div>
        <div className="controls">
          <button 
            className={`btn ${isRunning ? 'btn-stop' : 'btn-start'}`} 
            onClick={toggleClock}
          >
            {isRunning ? 'Stop Clock' : 'Start Clock'}
          </button>
        </div>
        {!isRunning && (
          <div className="status-badge">Paused</div>
        )}
      </div>
    </div>
  );
}

export default App;
