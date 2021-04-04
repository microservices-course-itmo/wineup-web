import React from 'react'
import Notification from '../Notification'

const titles = type => {
  switch (type) {
    case 'viewed':
      return 'Прочитанные'
    case 'unviewed':
      return 'Новые'
    default:
      return 'Уведомления'
  }
}

/**
 * Контейнер для списка уведомлений
 * @param {string} groupType - Тип уведомлений
 * @param {Array} notifications - Объект уведомления
 * @param {string} notifications.text - Текст уведомления
 * @param {string} notifications.time - Время создания уведомления
 * @param {string} notifications.imageType - Тип изображения слева
 */
const NotificationsTypeGroup = ({
  type: groupType = 'unread',
  notifications = [],
}) => (
  <>
    <h2 className='title'>{titles(groupType)}</h2>

    <div className='container'>
      {notifications.map(({ message, date, type: notificationType }, index) => (
        <Notification
          date={date}
          message={message}
          type={notificationType}
          key={`${groupType}-${index + 1}`}
          isViewed={groupType === 'viewed'}
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

        .noNotifications {
          padding: 5px;
          font-family: 'PT Sans', sans-serif;
        }
      `}
    </style>
  </>
)

export default NotificationsTypeGroup
