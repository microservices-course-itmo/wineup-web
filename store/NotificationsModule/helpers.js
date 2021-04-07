import api from '../../api'

export const getPreparedNotifications = notifications => {
  const viewedNotifications = {
    type: 'viewed',
    notifications: [],
  }
  const unviewedNotifications = {
    type: 'unviewed',
    notifications: [],
  }

  notifications.forEach(notification => {
    if (notification.viewed) {
      viewedNotifications.notifications.push(notification)
    } else {
      unviewedNotifications.notifications.push(notification)
    }
  })
  return [unviewedNotifications, viewedNotifications]
}

export const fetchNotifications = (currentUser, setNotifications) => {
  if (currentUser) {
    api.getNotificationsByUserId(currentUser.id).then(notifications => {
      const preparedNotifications = getPreparedNotifications(notifications)
      setNotifications(preparedNotifications)
    })
  }
}
