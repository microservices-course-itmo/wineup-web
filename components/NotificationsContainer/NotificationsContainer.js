import React from 'react'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const NotificationsContainer = ({ children }) => (
  <>
    <div className='header'>
      <h2 className='title'>Уведомления</h2>
      <button type='button' className='button'>
        <img src={`${prefix}/assets/notifications/gear.svg`} alt='settings' />
      </button>
    </div>

    <div className='container'>{children}</div>

    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background-color: #b65f74;
        font-family: 'Playfair Display', serif;
      }

      .title {
        font-weight: bold;
        font-size: 28px;
        color: #ffffff;
      }

      .container {
        padding: 20px;
        background-color: #fff;
      }

      .button {
        padding: 0;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    `}</style>
  </>
)

export default NotificationsContainer
