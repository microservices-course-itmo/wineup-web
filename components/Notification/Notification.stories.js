import React from 'react'

import Notification from './Notification'

export default {
  title: '/Notifications/Notification',
  component: Notification,
  argTypes: {
    type: {
      description: 'Тип уведомлений, может быть read или unread',
    },
    imageType: {
      description: 'Тип изображения слева, может быть liked или wineup',
    },
    text: {
      description: 'Текст уведомления',
    },
    time: {
      description: 'Время создания уведомления',
    },
  },
}

const Template = args => <Notification {...args} />

export const notifications = Template.bind({})

notifications.args = {
  type: 'read',
  imageType: 'wineup',
  text:
    'WineUp поздровляет Вас с днем рождения! Порадуйте себя мпецаильно подобранными внами по вашим предпочтениям!',
  time: '19:01',
}

notifications.storyName = 'Notification'
