import firebase from 'firebase'

const NotificationsModule = () => {
  // const [notificationsList, setNotificationsList] = useRecoilState(notificationsState) // mock
  const onMessageHandler = payload => {
    console.log(payload)
  }

  if (typeof window !== 'undefined') {
    const messaging = firebase.messaging()
    messaging.onMessage(onMessageHandler)
  }

  return null
}

export default NotificationsModule
