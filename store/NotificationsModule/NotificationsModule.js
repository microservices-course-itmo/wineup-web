import { useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { notificationsState, userState } from '../GlobalRecoilWrapper/store'
import { fetchNotifications } from './helpers'

const NotificationsModule = () => {
  const currentUser = useRecoilValue(userState)
  const [, setNotifications] = useRecoilState(notificationsState)

  useEffect(() => {
    fetchNotifications(currentUser, setNotifications)
  }, [currentUser, setNotifications])

  return null
}

export default NotificationsModule
