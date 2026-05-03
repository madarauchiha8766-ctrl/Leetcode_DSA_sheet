import React from 'react';
import { useSelector } from 'react-redux';
import NotificationItem from './NotificationItem';

const NotificationList = () => {
  const notifications = useSelector((state) => state.notifications.notifications);

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
