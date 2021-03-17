import React from 'react'
import NotificationsTypeGroup from '../NotificationsTypeGroup'

/**
 * Контейнер для списка уведомлений
 * @param {Array} notificationsGroupList - Объект уведомления
 */
const NotificationsBox = ({ notificationsGroupList }) => {
  const isEmpty =
    notificationsGroupList.reduce(
      (prev, currentGroup) => prev + currentGroup.notifications.length,
      0
    ) === 0
  return (
    <div className='container'>
      {!isEmpty ? (
        notificationsGroupList.map(
          group =>
            group.notifications.length > 0 && (
              <NotificationsTypeGroup
                type={group.type}
                notifications={group.notifications}
              />
            )
        )
      ) : (
        <p className='no-notifications'>Нет уведомлений</p>
      )}

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
          }

          .no-notifications {
            padding: 5px;
            font-family: 'PT Sans', sans-serif;
          }
        `}
      </style>
    </div>
  )
}

export default NotificationsBox
