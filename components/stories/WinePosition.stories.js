import React from 'react'
import WinePosition from '../WinePosition'

export default {
  title: 'WinePosition',
  component: WinePosition,
}

const Template = args => <WinePosition {...args} />
export const winePosition = Template.bind({})
winePosition.args = {
  imageSrc:
    'https://amwine.ru/upload/resize_cache/iblock/7bc/620_620_1/7bcaa8fad7ebb211cbcda8a27b5382ba.png',
  info: {
    name: 'Estate Vineyards Sauvignon Blanc',
    grape: 'Арени',
    size: 0.75,
    country: 'Португалия',
    sugar: 'сухое',
    color: 'красное',
    shop: 'Ароматный мир',
    alcohol: 12,
    brand: 'Gevorkian Winery',
    year: 2011,
    fitsPercent: 75,
    stars: 3,
    price: '1200',
    discount: {
      price: '900',
      percent: 12,
    },
  },
}
