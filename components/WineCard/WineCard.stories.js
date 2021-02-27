import React from 'react'
import WineCard from './WineCard'

export default {
  title: 'WineCard',
  component: WineCard,
}

const Template = args => <WineCard {...args} />
export const wineCard = Template.bind({})
wineCard.args = {
  imageSrc:
    'https://amwine.ru/upload/resize_cache/iblock/b8b/620_620_1/b8b1bb64748968fe374765a9f6dc2738.png',
  info: {
    shop: 'Ароматный мир',
    name: 'Estate Vineyards Sauvignon Blanc',
    about: 'Красное, полусладкое',
    country: { code: 'it', name: 'Италия' },
    size: 0.75,
    year: 2011,
    fitsPercent: 75,
    stars: 4,
    price: '1200',
    discount: {
      price: '900',
      percent: 12,
    },
  },
  isLiked: true,
}
