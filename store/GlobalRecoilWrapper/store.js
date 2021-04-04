/*eslint-disable*/
import { atom, selector } from 'recoil'

const userState = atom({
  key: 'user',
  default: null,
})

const errorState = atom({
  key: 'error',
  default: {
    error: false,
    message: '',
  },
})

const notificationsState = atom({
  key: 'notifications',
  default: [
    {
      type: 'viewed',
      notifications: [
        {
          id: 0,
          message: 'Banti',
          date: Date.now(),
          type: 'WINE_PRICE_UPDATED',
          userId: 80,
          wineId: 'wine-328',
        },
        {
          id: 1,
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
      ],
    },
  ],
})

const unreadNotificationsCountState = selector({
  key: 'unread-notifications-count',
  get: ({ get }) => {
    const notifications = get(notificationsState)
    for (const group of notifications) {
      if (group.type === 'unviewed') return group.notifications.length
    }
    return 0
  },
})

export {
  userState,
  errorState,
  notificationsState,
  unreadNotificationsCountState,
}
