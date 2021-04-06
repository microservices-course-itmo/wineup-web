import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import NotificationsTypeGroup from '../NotificationsTypeGroup'
import {
  notificationsState,
  userState,
} from '../../store/GlobalRecoilWrapper/store'
import { fetchNotifications } from '../../store/NotificationsModule/helpers'

const NotificationsBox = () => {
  const [notificationsList] = useRecoilState(notificationsState)
  const currentUser = useRecoilValue(userState)
  const [, setNotifications] = useRecoilState(notificationsState)

  useEffect(() => {
    fetchNotifications(currentUser, setNotifications)
  }, [currentUser, setNotifications])
  console.log(notificationsList)

  const isEmpty =
    notificationsList.reduce(
      (prev, currentGroup) => prev + currentGroup.notifications.length,
      0
    ) === 0
  return (
    <div className='container'>
      {!isEmpty ? (
        notificationsList.map(
          group =>
            group.notifications.length > 0 && (
              <NotificationsTypeGroup
                key={group.type}
                type={group.type}
                notifications={group.notifications}
                refetch={() =>
                  fetchNotifications(currentUser, setNotifications)
                }
              />
            )
        )
      ) : (
        <p className='noNotifications'>Нет уведомлений</p>
      )}

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            max-height: 760px;
            overflow: scroll;
          }

          .noNotifications {
            padding: 5px;
            font-family: 'PT Sans', sans-serif;
          }
        `}
      </style>
    </div>
  )
}

export default NotificationsBox
