import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import NotificationsTypeGroup from '../NotificationsTypeGroup'
import {
  notificationsState,
  userState,
} from '../../store/GlobalRecoilWrapper/store'
import { fetchNotifications } from '../../store/NotificationsModule/helpers'
import Toast from '../Toast'

const NotificationsBox = () => {
  const [toastVisibility, setToastVisibility] = useState(false)
  const [notificationsList] = useRecoilState(notificationsState)
  const currentUser = useRecoilValue(userState)
  const [, setNotifications] = useRecoilState(notificationsState)

  const isEmpty =
    notificationsList.reduce(
      (prev, currentGroup) => prev + currentGroup.notifications.length,
      0
    ) === 0
  return (
    <div className='container'>
      {toastVisibility ? (
        <Toast
          type='success'
          text='Уведомление успешно удалено'
          closeCallback={() => setToastVisibility(false)}
          closeTimeout={500}
        />
      ) : null}
      {!isEmpty ? (
        notificationsList.map(
          group =>
            group.notifications.length > 0 && (
              <NotificationsTypeGroup
                key={group.type}
                type={group.type}
                notifications={group.notifications}
                refetch={() => {
                  fetchNotifications(currentUser, setNotifications)
                  setToastVisibility(true)
                }}
              />
            )
        )
      ) : (
        <div className='noNotificationsWrapper'>
          <span className='noNotifications'>У вас пока нет уведомлений...</span>
        </div>
      )}

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            max-height: 760px;
            overflow: scroll;
          }

          .noNotificationsWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 620px;
          }

          .noNotifications {
            font-family: 'PT Sans', sans-serif;
            display: flex;
            font-size: 20px;
            padding: 5px;
          }
        `}
      </style>
    </div>
  )
}

export default NotificationsBox
