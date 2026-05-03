import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './index.css'; // Ensure main css is loaded
// Optionally clearing App.css by removing its import if not needed, but we can just leave index.css

function App() {
  // Initialize state from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme ? savedTheme : 'light';
  });

  // Apply theme to body/html data-theme attribute whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Theme Switcher</h1>
        <p className="subtitle">Toggle between light and dark modes</p>

        <div className="theme-display">
          {theme === 'light' ? (
            <Sun className="icon" style={{ color: '#f59e0b' }} />
          ) : (
            <Moon className="icon" style={{ color: '#60a5fa' }} />
          )}
          <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'} Active</span>
        </div>

        <button className="toggle-button" onClick={toggleTheme}>
          {theme === 'light' ? (
            <>
              <Moon className="icon" />
              Switch to Dark Mode
            </>
          ) : (
            <>
              <Sun className="icon" />
              Switch to Light Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
