import { atom, selector } from 'recoil'
import api from '../../api'

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
    page: 1,
    amount: 12,
  },
})

export const formFiltersState = atom({
  key: 'formFilters',
  default: {
    priceFrom: 0,
    priceTo: 100000,
    volume: [],
    color: [],
    sugar: [],
    sort: [],
    country: [],
    region: [],
    sparkling: [],
  },
})

export const winesQuery = selector({
  key: 'winesQuery',
  get: async ({ get }) => {
    const winePage = get(winesPageState)
    const wineFilter = get(formFiltersState)
    const winesSort = get(winesSortState)

    const filterBy = Object.keys(wineFilter).reduce((acc, el) => {
      if (wineFilter[el] !== 0 && wineFilter[el].length !== 0) {
        if (el === 'priceFrom') {
          return acc.concat(`price>${wineFilter[el]};`)
        }
        if (el === 'priceTo') {
          return acc.concat(
            `${acc.includes('price') ? '*' : ''}price<${wineFilter[el]};`
          )
        }
        const filters = wineFilter[el].reduce((a, e) => {
          return a.concat(`${a.includes(el) ? '~' : ''}${el}:${e};`)
        }, '')

        return acc.concat(filters)
      }

      return acc
    }, '')

    const params = {
      ...winePage,
      filterBy,
    }

    if (['priceAsc', 'priceDesc'].includes(winesSort)) {
      params.sortByPair = `actual_price&${
        winesSort.includes('Asc') ? 'asc' : 'desc'
      }`
    }

    const response = await api.getAllWines(params)

    return response
  },
})

export const sorts = atom({
  key: 'sorts',
  default: [],
})
