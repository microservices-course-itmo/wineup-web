import { atom, selector } from 'recoil'
import { sortAsc, sortDesc } from './utils'

export const winesState = atom({
  key: 'wines',
  default: [],
})

export const winesSortState = atom({
  key: 'winesSort',
  default: 'recommendations',
})

export const winesPageState = atom({
  key: 'winesPage',
  default: {
    from: 1,
    to: 12,
  },
})

export const winesQuery = selector({
  key: 'winesQuery',
  get: async ({ get }) => {
    const body = get(winesPageState)

    const response = await fetch(
      `${process.env.api}/catalog-service/position/true/`,
      {
        method: 'POST',
        headers: {
          accessToken: process.env.accessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.json()
  },
})

export const sortedWinesState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const list = get(winesState)
    const sort = get(winesSortState)

    switch (sort) {
      case 'priceAsc':
        return sortAsc(list)
      case 'priceDesc':
        return sortDesc(list)
      default:
        return list
    }
  },
})

export const sorts = atom({
  key: 'sorts',
  default: [],
})
