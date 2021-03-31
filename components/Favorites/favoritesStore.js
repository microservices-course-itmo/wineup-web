import { atom, selector, selectorFamily } from 'recoil'
import { sortAsc, sortDesc } from '../Catalog/utils'
import api from '../../api'

export const emptyState = atom({
  key: 'emptyState',
  default: false,
})
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
  get: ([id, token]) => async () => {
    await api.addWineToFavorites(id, token)
  },
})
export const deleteWineQuery = selectorFamily({
  key: 'deleteWineQuery',
  get: ([id, token]) => async () => {
    await api.deleteWineFromFavorites(id, token)
  },
})
export const deleteQuery = selectorFamily({
  key: 'deleteQuery',
  get: token => async () => {
    await api.deleteAllWinesFromFavorites(token)
  },
})
export const favoritesQuery = selectorFamily({
  key: 'favoritesQuery',
  get: token => async () => {
    const response = await api.getFavoritesWines(token)

    return response
  },
})
export const winesQuery = selectorFamily({
  key: 'winesQuery',
  get: userId => async () => {
    const response = await api.getFavoritesWinesByUserId(userId)

    return response
  },
})

export const contentQuery = selectorFamily({
  key: 'contentQuery',
  get: token => async () => {
    const response = await api.getFavoritesWines(token)

    return response
  },
})
export const sortedFavoritesWinesState = selector({
  key: 'filteredFavoritesListState',
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
  set: ({ set }, newValue) => set(favoritesState, newValue),
})
export const sorts = atom({
  key: 'sortsFavorites',
  default: [],
})
