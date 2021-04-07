import React, { useMemo } from 'react'
import api from '../../api'
import { throttle } from '../../utils/helpers'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const NOTIFICATION_TYPES = {
  WINE_PRICE_UPDATED: 'WINE_PRICE_UPDATED',
}

const images = type => {
  switch (type) {
    case NOTIFICATION_TYPES.WINE_PRICE_UPDATED:
      return `${prefix}/assets/notifications/liked.svg`
    default:
      return `${prefix}/assets/notifications/wineup.svg`
  }
}

/**
 * Элемент списка уведомлений
 * @param {string} id
 * @param {boolean} isViewed - Флаг прочитанного сообщения
 * @param {string} message - Текст уведомления
 * @param {string} wineId - название вина
 * @param {string} date - Время создания уведомления
 * @param {string} type - Тип уведомления
 * @param {function} refetch - refetch уведомлений
 */
const Notification = ({
  id,
  isViewed,
  wineId,
  message,
  date,
  type,
  refetch,
}) => {
  const deleteNotification = () => {
    api.deleteNotificationById(id).then(() => {
      refetch()
    })
  }
  const notificationMessage = useMemo(() => {
    switch (type) {
      case NOTIFICATION_TYPES.WINE_PRICE_UPDATED:
        return (
          <span>
            Выбранный Вами <b>товар {wineId}</b> теперь со скидкой! Спешите
            приобрести по выгодной цене!
          </span>
        )
      default:
        return message
    }
  }, [type, message])

  return (
    <>
      <div className={`container ${isViewed ? 'viewed' : 'unviewed'}`}>
        <div className='notification'>
          <img className='image' src={images(type)} alt='settings' />
          <div>
            <p className='text'>{notificationMessage}</p>
            <p className='time'>{new Date(date).toLocaleString()}</p>
          </div>
          <button
            type='button'
            className='button'
            onClick={throttle(deleteNotification, 500)}
          >
            <img
              src={`${prefix}/assets/notifications/trash.svg`}
              alt='settings'
            />
          </button>
        </div>
      </div>
      <style jsx>{`
        .notification {
          margin: 0 5px;
          padding: 10px;
          display: flex;
          align-items: center;
        }

        .viewed > .notification {
          padding-top: 0;
          margin-bottom: 10px;
          border-bottom: 1px solid #9e9e9e;
        }

        .unviewed > .notification {
          margin-bottom: 10px;
          background-color: #f2f0f0;
          border-radius: 2px;
        }

        .image {
          width: 41px;
          height: 41px;
          margin-right: 20px;
        }

        .text {
          margin-right: 20px;
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          line-height: 18px;
          color: #232323;
        }

        .time {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          line-height: 18px;
          color: #818181;
        }

        .button {
          min-width: 14px;
          min-height: 18px;
          margin-left: auto;
          padding: 0;
          outline: none;
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Notification
