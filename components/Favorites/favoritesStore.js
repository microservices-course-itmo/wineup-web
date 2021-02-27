import {
  atom,
  selector,
  selectorFamily,
  waitForAll,
  useRecoilValue,
} from 'recoil'
import { sortAsc, sortDesc } from '../Catalog/utils'

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
  get: (id, token) => async ({ get }) => {
    await fetch(`${process.env.NEXT_PUBLIC_API}/user-service/favorites/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  },
})
export const deleteWineQuery = selectorFamily({
  key: 'deleteWineQuery',
  get: (id, token) => async ({ get }) => {
    await fetch(`${process.env.NEXT_PUBLIC_API}/user-service/favorites/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  },
})
export const deleteQuery = selectorFamily({
  key: 'deleteQuery',
  get: token => async ({ get }) => {
    await fetch(`${process.env.NEXT_PUBLIC_API}/user-service/favorites/clear`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  },
})
export const favoritesQuery = selectorFamily({
  key: 'favoritesQuery',
  get: token => async ({ get }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/user-service/favorites/list`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            `Bearer ${token}`,
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
  get: userID => async ({ get }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/catalog-service/position/true/byId/${userID}`,
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
export const contentQuery = selectorFamily({
  key: 'contentQuery',
  get: token => async ({ get }) => {
    const favoriteIds = get(favoritesQuery(token))
    const wines = get(waitForAll(favoriteIds.map(id => winesQuery(id))))
    return wines
  },
})
export const sortedWinesState = selector({
  key: 'filteredTodoListState',
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