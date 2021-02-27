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
    const searchParameters = Object.keys(wineFilter).reduce((acc, el) => {
      if (wineFilter[el] !== 0 && wineFilter[el].length !== 0) {
        if (el === 'priceFrom') {
          return acc.concat(`price>${wineFilter[el]};`)
        }
        if (el === 'priceTo') {
          return acc.concat(
            `${acc.includes('price') ? '~' : ''}price<${wineFilter[el]};`
          )
        }
        const filters = wineFilter[el].reduce((a, e) => {
          return a.concat(`${a.includes(el) ? '~' : ''}${el}:${e};`)
        }, '')

        return acc.concat(filters)
      }

      return acc
    }, '')

    const body = {
      ...winePage,
      searchParameters,
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/catalog-service/position/true/`,
      {
        method: 'POST',
        headers: {
          accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
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
