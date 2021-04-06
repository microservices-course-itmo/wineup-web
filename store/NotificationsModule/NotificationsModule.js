import { useEffect } from 'react'
import firebase from 'firebase'
import { useRecoilValue, useRecoilState } from 'recoil'
import { notificationsState, userState } from '../GlobalRecoilWrapper/store'
import { fetchNotifications } from './helpers'

const NotificationsModule = () => {
  const currentUser = useRecoilValue(userState)
  const [, setNotifications] = useRecoilState(notificationsState)

  useEffect(() => {
    fetchNotifications(currentUser, setNotifications)
  }, [currentUser, setNotifications])

  const onMessageHandler = payload => {
    const notificationTitle = payload.notification.title || 'Wineup-web'
    const notificationOptions = {
      body: payload.notification.body || 'Вам пришло сообщение!',
      icon: payload.notification.image || './assets/notifications/wineup.svg',
    }
    /* eslint-disable no-new */
    new Notification(notificationTitle, notificationOptions)
    fetchNotifications(currentUser, setNotifications)
  }

  if (typeof window !== 'undefined') {
    const messaging = firebase.messaging()
    messaging.onMessage(onMessageHandler)
    messaging.getToken().then(a => console.log(a))
  }

  return null
}

export default NotificationsModule
