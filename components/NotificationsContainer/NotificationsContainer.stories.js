import React from 'react'

import NotificationsContainer from './index'
import NotificationsBox from '../NotificationsBox'

export default {
  title: 'Notifications',
  component: NotificationsContainer,
  argTypes: {
    type: {
      description: 'Тип уведомлений, может быть read или unread',
    },
    notifications: {
      description:
        'Объект уведомления: ' +
        'notifications.text - Текст уведомления, ' +
        'notifications.time - Время создания уведомления, ' +
        'notifications.imageType - Тип изображения слева, может быть liked или wineup',
    },
  },
}

const Template = args => (
  <NotificationsContainer>
    <NotificationsBox {...args} />
  </NotificationsContainer>
)

export const notifications = Template.bind({})

notifications.description = 'Rjvgjytyn'

notifications.args = {
  type: 'read',
  notifications: [
    {
      imageType: 'wineup',
      text:
        'WineUp поздровляет Вас с днем рождения! Порадуйте себя мпецаильно подобранными внами по вашим предпочтениям!',
      time: '19:01',
    },
    {
      imageType: 'liked',
      text:
        'Порадуйте себя мпецаильно подобранными внами по вашим предпочтениям!',
      time: '19:02',
    },
    {
      imageType: 'wineup',
      text: 'WineUp поздровляет подобранными винами по вашим предпочтениям!',
      time: '19:03',
    },
  ],
}
