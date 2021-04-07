import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import NotificationTooltip from '../NotificationTooltip'
import useLocalStorage from '../../hooks/useLocalStorage'
import ModalWrapper from '../ModalWrapper'
import {
  notificationTokenState,
  userState,
} from '../../store/GlobalRecoilWrapper/store'
import api from '../../api'

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
  const currentUser = useRecoilValue(userState)
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useLocalStorage('notificationsDisabled')
  const notificationToken = useRecoilValue(notificationTokenState)

  const toggleDisableNotifications = () => {
    if (!isDisabled && currentUser) {
      api
        .addNotificationsTokenByUserId(currentUser.id, notificationToken)
        .then(() => setIsDisabled(!isDisabled))
    }
    if (isDisabled) {
      api
        .deleteCurrentUserNotificationToken()
        .then(() => setIsDisabled(!isDisabled))
    }
  }

  return (
    <div className='wrapper'>
      <div className='header'>
        <h2 className='title'>{section.title}</h2>
        {section.key === SectionKeys.notifications.key && (
          <div className='buttonWrapper'>
            <button
              type='button'
              className='buttonSettings'
              onClick={() => setTooltipVisible(prevState => !prevState)}
            >
              <img
                src={`${prefix}/assets/notifications/gear.svg`}
                alt='settings'
              />
            </button>
            <ModalWrapper
              isModal={false}
              visible={tooltipVisible}
              onClose={() => setTooltipVisible(false)}
            >
              <div className='tooltipWrapper'>
                <NotificationTooltip
                  notificationEnable={isDisabled}
                  onChange={toggleDisableNotifications}
                />
              </div>
            </ModalWrapper>
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
        .buttonSettings {
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
