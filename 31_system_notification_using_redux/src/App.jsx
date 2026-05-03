import { useDispatch } from 'react-redux';
import { addNotification } from './store/notificationSlice';
import NotificationList from './components/NotificationList';

function App() {
  const dispatch = useDispatch();

  const handleAddNotification = (type) => {
    const newNotification = {
      id: Date.now().toString(),
      type,
      message: `This is a ${type} notification! Something happened just now.`,
      duration: 5000,
    };
    dispatch(addNotification(newNotification));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>System Notifications</h1>
        <p>A beautiful Redux-powered notification system</p>
      </header>
      
      <main className="main-content">
        <div className="card glass-effect">
          <h2>Trigger Notifications</h2>
          <p>Click the buttons below to dispatch notifications to the Redux store.</p>
          
          <div className="button-group">
            <button 
              className="btn btn-success" 
              onClick={() => handleAddNotification('success')}
            >
              Success
            </button>
            <button 
              className="btn btn-error" 
              onClick={() => handleAddNotification('error')}
            >
              Error
            </button>
            <button 
              className="btn btn-warning" 
              onClick={() => handleAddNotification('warning')}
            >
              Warning
            </button>
            <button 
              className="btn btn-info" 
              onClick={() => handleAddNotification('info')}
            >
              Info
            </button>
          </div>
        </div>
      </main>

      <NotificationList />
    </div>
  );
}

export default App;
