import React from 'react'
import Notification from '../Notification'

const titles = type => {
  switch (type) {
    case 'read':
      return 'Прочитанные'
    case 'unread':
      return 'Новые'
    default:
      return 'Уведомления'
  }
}

/**
 * Контейнер для списка уведомлений
 * @param {string} type - Тип уведомлений
 * @param {Array} notifications - Объект уведомления
 * @param {string} notifications.text - Текст уведомления
 * @param {string} notifications.time - Время создания уведомления
 * @param {string} notifications.imageType - Тип изображения слева
 */
const NotificationsTypeGroup = ({ type = 'unread', notifications = [] }) => (
  <>
    <h2 className='title'>{titles(type)}</h2>

    <div className='container'>
      {notifications.map(notification => (
        <Notification
          text={notification.text}
          time={notification.time}
          type={type}
          imageType={notification.imageType}
        />
      ))}
    </div>

    <style jsx>
      {`
        .title {
          margin-bottom: 15px;
          padding: 5px 0;
          font-weight: normal;
          font-size: 22px;
          line-height: 28px;
          border-bottom: 1px solid #9e9e9e;
          color: #931332;
        }

        .container {
          margin-bottom: 30px;
        }

        .no-notifications {
          padding: 5px;
          font-family: 'PT Sans', sans-serif;
        }
      `}
    </style>
  </>
)

export default NotificationsTypeGroup
