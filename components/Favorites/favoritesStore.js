import {
  atom,
  selector,
  selectorFamily,
  waitForAll,
  useRecoilValue,
} from 'recoil'
import { sortAsc, sortDesc } from '../Catalog/utils'
import api from '../../api'

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
    await api.addWineToFavorites(id, token)
  },
})
export const deleteWineQuery = selectorFamily({
  key: 'deleteWineQuery',
  get: (id, token) => async ({ get }) => {
    await api.deleteWineFromFavorites(id, token)
  },
})
export const deleteQuery = selectorFamily({
  key: 'deleteQuery',
  get: token => async ({ get }) => {
    await api.deleteAllWinesFromFavorites(token)
  },
})
export const favoritesQuery = selectorFamily({
  key: 'favoritesQuery',
  get: token => async ({ get }) => {
    const response = await api.getFavoritesWines(token)

    return response
  },
})
export const winesQuery = selectorFamily({
  key: 'winesQuery',
  get: userId => async ({ get }) => {
    const response = await api.getFavoritesWinesByUserId(userId)

    return response
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
