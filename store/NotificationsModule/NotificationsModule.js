import { useEffect } from 'react'
import firebase from 'firebase'
import { useRecoilValue, useRecoilState } from 'recoil'
import {
  notificationsState,
  userState,
  notificationTokenState,
} from '../GlobalRecoilWrapper/store'
import { fetchNotifications } from './helpers'
import useLocalStorage from '../../hooks/useLocalStorage'

const NotificationsModule = () => {
  const currentUser = useRecoilValue(userState)
  const [, setNotificationToken] = useRecoilState(notificationTokenState)
  const [, setNotifications] = useRecoilState(notificationsState)
  const [isDisabled] = useLocalStorage('notificationsDisabled')

  useEffect(() => {
    fetchNotifications(currentUser, setNotifications)
  }, [currentUser, setNotifications])

  const onMessageHandler = payload => {
    if (!isDisabled) {
      const notificationTitle = payload.notification.title || 'Wineup-web'
      const notificationOptions = {
        body: payload.notification.body || 'Вам пришло сообщение!',
        icon: payload.notification.image || './assets/notifications/wineup.svg',
      }
      /* eslint-disable no-new */
      new Notification(notificationTitle, notificationOptions)
    }
    fetchNotifications(currentUser, setNotifications)
  }

  if (typeof window !== 'undefined') {
    const messaging = firebase.messaging()
    messaging.onMessage(onMessageHandler)
    messaging.getToken().then(token => {
      setNotificationToken(token)
    })
  }

  return null
}

export default NotificationsModule
