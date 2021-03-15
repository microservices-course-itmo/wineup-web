import React from 'react'

import NotificationsBox from './NotificationsBox'

export default {
  title: '/Notifications/NotificationsBox',
  component: NotificationsBox,
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

const Template = args => <NotificationsBox {...args} />

export const notifications = Template.bind({})

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

notifications.storyName = 'NotificationsBox'
