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

export const winePriceUpdated = Template.bind({})
export const notificationGeneral = Template.bind({})

winePriceUpdated.args = {
  isViewed: true,
  type: 'WINE_PRICE_UPDATED',
  message: 'Chianti',
  date: Date.now(),
}

winePriceUpdated.storyName = 'Wine price updated'

notificationGeneral.args = {
  isViewed: true,
  type: 'NOT_WINE_PRICE_UPDATED',
  message:
    'WineUp поздравляет Вас с днём рождения! Порадуйте себя специально подобранными винами по Вашим предпочтениям!',
  date: Date.now(),
}

notificationGeneral.storyName = 'General view message'
