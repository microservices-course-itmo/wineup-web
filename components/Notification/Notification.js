import React from 'react'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const images = type => {
  switch (type) {
    case 'wineup':
      return `${prefix}/assets/notifications/wineup.svg`
    case 'liked':
      return `${prefix}/assets/notifications/liked.svg`
    default:
      return `${prefix}/assets/notifications/wineup.svg`
  }
}

/**
 * Элемент списка уведомлений
 * @param {string} type - Тип уведомлений
 * @param {string} text - Текст уведомления
 * @param {string} time - Время создания уведомления
 * @param {string} imageType - Тип изображения слева
 */
const Notification = ({ type, imageType, text, time }) => (
  <>
    <div className={`container ${type}`}>
      <div className='notification'>
        <img className='image' src={images(imageType)} alt='settings' />
        <div>
          <p className='text'>{text}</p>
          <p className='time'>{time}</p>
        </div>
        <button type='button' className='button'>
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

      .read > .notification {
        padding-top: 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #9e9e9e;
      }

      .unread > .notification {
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

export default Notification
