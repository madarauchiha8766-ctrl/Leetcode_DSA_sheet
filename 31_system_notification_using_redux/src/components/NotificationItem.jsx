import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../store/notificationSlice';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const icons = {
  success: <CheckCircle className="icon success-icon" />,
  error: <AlertCircle className="icon error-icon" />,
  warning: <AlertTriangle className="icon warning-icon" />,
  info: <Info className="icon info-icon" />,
};

const NotificationItem = ({ notification }) => {
  const dispatch = useDispatch();
  const { id, type, message, duration = 5000 } = notification;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        dispatch(removeNotification(id));
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [dispatch, id, duration]);

  return (
    <div className={`notification-item ${type}`}>
      <div className="notification-icon">{icons[type] || icons.info}</div>
      <div className="notification-content">
        <p className="notification-message">{message}</p>
      </div>
      <button 
        className="close-button" 
        onClick={() => dispatch(removeNotification(id))}
      >
        <X size={18} />
      </button>
      <div className="progress-bar" style={{ animationDuration: `${duration}ms` }} />
    </div>
  );
};

export default NotificationItem;
