import { atom, selector, selectorFamily, waitForAll } from 'recoil'
import { sortAsc, sortDesc } from './utils'

export const favoritesState = atom({
  key: 'favorites',
  default: [],
})
export const favoritesSortState = atom({
  key: 'favoritesSortState',
  default: 'recommendations',
})
export const addWineQuery = selectorFamily({
  key: 'addWineQuery',
  // eslint-disable-next-line
  get: id => async ({ get }) => {
    await fetch(`http://77.234.215.138:48080/user-service/favorites/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZV9udW1iZXIiOiIrNzEyMzMyMTEyMTIiLCJyb2xlIjoiVVNFUiIsImlkIjoiMTQiLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNjA3OTYwNzIwLCJleHAiOjE2MDc5NjQzMjB9.3tFEtvfBR33cWJSka3ID0XuCw2ItdvX8gjbkWZEt7xM',
      },
    })
  },
})
export const deleteWineQuery = selectorFamily({
  key: 'deleteWineQuery',
  // eslint-disable-next-line
  get: id => async ({ get }) => {
    await fetch(`http://77.234.215.138:48080/user-service/favorites/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZV9udW1iZXIiOiIrNzEyMzMyMTEyMTIiLCJyb2xlIjoiVVNFUiIsImlkIjoiMTQiLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNjA3OTYwNzIwLCJleHAiOjE2MDc5NjQzMjB9.3tFEtvfBR33cWJSka3ID0XuCw2ItdvX8gjbkWZEt7xM',
      },
    })
  },
})
export const deleteQuery = selector({
  key: 'deleteQuery',
  // eslint-disable-next-line
  get: async ({ get }) => {
    await fetch('http://77.234.215.138:48080/user-service/favorites/clear', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZV9udW1iZXIiOiIrNzEyMzMyMTEyMTIiLCJyb2xlIjoiVVNFUiIsImlkIjoiMTQiLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNjA3OTYwNzIwLCJleHAiOjE2MDc5NjQzMjB9.3tFEtvfBR33cWJSka3ID0XuCw2ItdvX8gjbkWZEt7xM',
      },
    })
  },
})
export const favoritesQuery = selector({
  key: 'favoritesQuery',
  // eslint-disable-next-line
  get: async ({ get }) => {
    const response = await fetch(
      'http://77.234.215.138:48080/user-service/favorites/list',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZV9udW1iZXIiOiIrNzEyMzMyMTEyMTIiLCJyb2xlIjoiVVNFUiIsImlkIjoiMTQiLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNjA3OTYwNzIwLCJleHAiOjE2MDc5NjQzMjB9.3tFEtvfBR33cWJSka3ID0XuCw2ItdvX8gjbkWZEt7xM',
        },
      }
    )
    if (response.status !== 200) {
      throw new Error('Server error')
    }
    return response.json()
  },
})
export const winesQuery = selectorFamily({
  key: 'winesQuery',
  // eslint-disable-next-line
  get: userID => async ({ get }) => {
    const response = await fetch(
      `http://77.234.215.138:48080/catalog-service/position/true/byId/${userID}`,
      {
        method: 'GET',
        headers: {
          accessToken: '123',
          'Content-Type': 'application/json',
        },
      }
    )
    if (response.status !== 200) {
      throw new Error('Server error')
    }
    if (response.status === 500) {
      return 'fail'
    }
    return response.json()
  },
})
export const contentQuery = selector({
  key: 'contentQuery',
  // eslint-disable-next-line
  get: ({ get }) => {
    const favoriteIds = get(favoritesQuery)
    const wines = get(waitForAll(favoriteIds.map(id => winesQuery(id))))
    return wines
  },
})
export const sortedWinesState = selector({
  key: 'filteredTodoListState',
  // eslint-disable-next-line
  get: ({ get }) => {
    const list = get(favoritesState)
    const sort = get(favoritesSortState)
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
