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
  notificationsGroupList: [
    {
      type: 'viewed',
      notifications: [
        {
          id: 1,
          message: 'Banti',
          date: Date.now(),
          type: 'WINE_PRICE_UPDATED',
          userId: 80,
          wineId: 'wine-328',
        },
        {
          id: 2,
          message: 'Banti',
          date: Date.now(),
          type: 'WINE_PRICE_UPDATED',
          userId: 80,
          wineId: 'wine-328',
        },
        {
          id: 3,
          message: 'Banti',
          date: Date.now(),
          type: 'WINE_PRICE_UPDATED',
          userId: 80,
          wineId: 'wine-328',
        },
      ],
    },
    {
      type: 'unviewed',
      notifications: [
        {
          id: 4,
          message: 'Banti',
          date: Date.now(),
          type: 'WINE_PRICE_UPDATED',
          userId: 80,
          wineId: 'wine-328',
        },
        {
          id: 5,
          message: 'Banti',
          date: Date.now(),
          type: 'WINE_PRICE_UPDATED',
          userId: 80,
          wineId: 'wine-328',
        },
        {
          id: 6,
          message: 'Banti',
          date: Date.now(),
          type: 'WINE_PRICE_UPDATED',
          userId: 80,
          wineId: 'wine-328',
        },
      ],
    },
  ],
}

notifications.storyName = 'NotificationsBox'
