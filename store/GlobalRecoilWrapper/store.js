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
      notifications: [],
    },
    {
      type: 'unviewed',
      notifications: [],
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
