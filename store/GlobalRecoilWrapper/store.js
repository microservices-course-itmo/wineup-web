/*eslint-disable*/
import { atom } from 'recoil'

const userState = atom({
  key: 'user',
  default: null,
})

const notificationsState = atom({
  key: 'notifications',
  default: [
      {
        type: 'unread',
        notifications: [
          {
            imageType: 'liked',
            text:
              'Порадуйте себя мпецаильно подобранными внами по вашим предпочтениям!',
            time: '19:02'
          },
          {
            imageType: 'wineup',
            text:
              'WineUp поздровляет подобранными винами по вашим предпочтениям!',
            time: '19:03'
          }
        ]
      },
      {
        type: 'read',
        notifications: [
          {
            imageType: 'wineup',
            text: 'WineUp поздровляет Вас с днем рождения! Порадуйте себя мпецаильно подобранными внами по вашим предпочтениям!',
            time: '19:01'
          },
          {
            imageType: 'wineup',
            text:
              'WineUp поздровляет Вас с днем рождения! Порадуйте себя мпецаильно подобранными внами по вашим предпочтениям!',
            time: '19:01'
          },
          {
            imageType: 'liked',
            text:
              'Порадуйте себя мпецаильно подобранными внами по вашим предпочтениям!',
            time: '19:02'
          },
          {
            imageType: 'wineup',
            text:
              'WineUp поздровляет подобранными винами по вашим предпочтениям!',
            time: '19:03'
          }
        ]
      }]
})
const unreadNotificationsCountState = selector({
  key: 'unread-notifications-count',
  get: ({ get }) => {
    const notifications = get(notificationsState)
    for (const group of notifications) {
      if (group.type === 'unread') return group.notifications.length
    }
    return 0
  }
})

export { userState, notificationsState, unreadNotificationsCountState }

