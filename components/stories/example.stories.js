/* import React from 'react'
import { WineCard } from '../winecard' //импортируем нужный компонент
//экспортируем нужные данные (название элемента в самом Sotybook)
export default {
  title: 'WineCard',
  component: WineCard,
}

//Определяем шаблон для последующей передачи агрументов
const Template = args => <WineCard {...args} />
//Создаём копию функции для последующей работы в Storybook
export const winecard = Template.bind({})
//задаём агрументы
winecard.args = {
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
}
*/
