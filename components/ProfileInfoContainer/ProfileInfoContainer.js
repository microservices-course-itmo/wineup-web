import React, { useState } from 'react'
import NotificationTooltip from '../NotificationTooltip'
import useLocalStorage from '../../hooks/useLocalStorage'

const SectionKeys = {
  userInfo: {
    key: 'userInfo',
    title: 'Профиль',
  },
  notifications: {
    key: 'notifications',
    title: 'Уведомления',
  },
}

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
/**
 * @param {Object} section
 * @param {string} section.title
 * @param {string} section.key
 * @param {Node} children
 */
const ProfileInfoContainer = ({ section, children }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useLocalStorage('notificationsDisabled')

  const toggleDisableNotifications = () => {
    setIsDisabled(!isDisabled)
  }

  return (
    <div className='wrapper'>
      <div className='header'>
        <h2 className='title'>{section.title}</h2>
        {section.key === SectionKeys.notifications.key && (
          <div className='buttonWrapper'>
            <button
              type='button'
              className='button'
              onClick={() => setTooltipVisible(prevState => !prevState)}
            >
              <img
                src={`${prefix}/assets/notifications/gear.svg`}
                alt='settings'
              />
            </button>
            {tooltipVisible && (
              <div className='tooltipWrapper'>
                <NotificationTooltip
                  notificationEnable={isDisabled}
                  onChnage={toggleDisableNotifications}
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div className='container'>{children}</div>

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          flex-basis: 70%;
          flex-grow: 3;
          background-color: white;
          padding-bottom: 40px;
          margin-left: 80px;
          margin-bottom: 40px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background-color: #b65f74;
          font-family: 'Playfair Display', serif;
          color: white;
          font-size: 28px;
        }

        .title {
          font-weight: bold;
          font-size: 28px;
          color: #ffffff;
        }

        .container {
          background-color: #fff;
          display: flex;
          flex-flow: column nowrap;
          padding: 0 20px;
        }
        .tooltipWrapper {
          position: absolute;
          top: 50px;
          right: 316px;
        }
        .buttonWrapper {
          position: relative;
        }
        .button {
          padding: 0;
          outline: none;
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default ProfileInfoContainer
