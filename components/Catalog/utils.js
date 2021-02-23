export const colors = {
  RED: 'Красное',
  WHITE: 'Белое',
  ROSE: 'Розовое',
}

export const sugar = {
  SWEET: 'Сладкое',
  DRY: 'Сухое',
  MEDIUM_DRY: 'Полусухое',
  MEDIUM: 'Полусладкое',
}

export const stores = {
  'winelab.ru': 'WineLab',
  'perekrestok.ru': 'Перекрёсток',
  'https://spb.winestyle.ru': 'WineStyle',
  'https://www.lenta.com': 'Лента',
  'amwine.com': 'Ароматный мир',
  'https://simplewine.ru': 'SimpleWine',
}

export const sortingButtons = [
  {
    value: 'recommendations',
    textLabel: 'Рекомендованные',
  },
  {
    value: 'priceAsc',
    textLabel: 'Возрастанию цен',
  },
  {
    value: 'priceDesc',
    textLabel: 'Убыванию цен',
  },
  {
    value: 'popularity',
    textLabel: 'Популярности',
  },
]

export const sortDesc = wines => {
  const newWines = JSON.parse(JSON.stringify(wines))

  return newWines.sort((wine1, wine2) => {
    if (wine1.price) {
      if (wine2.price) {
        return wine1.price < wine2.price ? 1 : -1
      }
      return wine1.price < wine2.actual_price ? 1 : -1
    }

    if (wine2.price) {
      return wine1.actual_price < wine2.price ? 1 : -1
    }

    if (wine1.actual_price === wine2.actual_price) {
      return 0
    }

    return wine1.actual_price < wine2.actual_price ? 1 : -1
  })
}

export const sortAsc = wines => {
  const newWines = JSON.parse(JSON.stringify(wines))

  return newWines.sort((wine1, wine2) => {
    if (wine1.price) {
      if (wine2.price) {
        return wine1.price > wine2.price ? 1 : -1
      }
      return wine1.price > wine2.actual_price ? 1 : -1
    }

    if (wine2.price) {
      return wine1.actual_price > wine2.price ? 1 : -1
    }

    if (wine1.actual_price === wine2.actual_price) {
      return 0
    }

    return wine1.actual_price > wine2.actual_price ? 1 : -1
  })
}

export const countries = regions => {
  const country = regions.length > 0 ? regions[0].country : ''

  switch (country) {
    case 'Италия':
      return { code: 'it', name: 'Италия' }
    case 'Россия':
      return { code: 'ru', name: 'Россия' }
    case 'Испания':
      return { code: 'es', name: 'Испания' }
    case 'Португалия':
      return { code: 'pt', name: 'Португалия' }
    case 'Франция':
      return { code: 'fr', name: 'Франция' }
    case 'Белорусь':
      return { code: 'by', name: 'Белорусь' }
    case 'Украина':
      return { code: 'ua', name: 'Украина' }
    case 'Бельгия':
      return { code: 'be', name: 'Бельгия' }
    case 'Чехия':
      return { code: 'cz', name: 'Чехия' }
    case 'Болгария':
      return { code: 'bg', name: 'Болгария' }
    case 'Греция':
      return { code: 'gr', name: 'Греция' }
    case 'Венгрия':
      return { code: 'hu', name: 'Венгрия' }
    case 'Польша':
      return { code: 'pl', name: 'Польша' }
    case 'США':
      return { code: 'us', name: 'США' }
    default:
      return { code: 'fr', name: 'Франция' }
  }
}

export const calculatePrice = wine => {
  if (wine.actual_price === 0 && wine.price === 0) {
    return Math.round(Math.random() * (2500 - 400) + 400)
  }

  if (wine.actual_price === 0) {
    return wine.price
  }

  if (wine.price === 0) {
    return wine.actual_price
  }

  return wine.actual_price < wine.price ? wine.price : wine.actual_price
}

export const calculateDiscount = wine => {
  if (
    wine.actual_price === 0 ||
    wine.price === 0 ||
    wine.actual_price === wine.price ||
    !Math.round(((wine.actual_price - wine.price) / wine.actual_price) * 100)
  ) {
    return null
  }

  if (wine.actual_price > wine.price) {
    return {
      price: wine.price,
      percent: Math.round(
        ((wine.actual_price - wine.price) / wine.actual_price) * 100
      ),
    }
  }

  return {
    price: wine.actual_price,
    percent: Math.round(((wine.price - wine.actual_price) / wine.price) * 100),
  }
}

export const parseImageSrc = src => {
  if (src.lastIndexOf('https:') !== 0) {
    return src.slice(src.lastIndexOf('https:'))
  }

  return src
}

export const parseAbout = wine => {
  return `${colors[wine.wine.color]}, ${sugar[wine.wine.sugar]}`
}

export const parseGrapes = grapes => {
  if (grapes.length === 0) {
    return 'Неизвестно'
  }

  return grapes.reduce((acc, value) => `${acc + value.name}, `, '').slice(0, -2)
}

export const parseProducer = producer => {
  if (producer === 'PRODUCER_NOT_PRESENTED') {
    return 'Неизвестно'
  }

  return producer
}

export const getWineInfo = wine => {
  return {
    shop: stores[wine.shop.site] || 'Ароматный мир',
    name: wine.wine.name,
    about: parseAbout(wine),
    country: countries(wine.wine.region),
    size: wine.volume,
    year: wine.wine.year || 2020,
    fitsPercent: Math.round(Math.random() * (85 - 45) + 45),
    stars: Math.round(Math.random() * (5 - 2) + 2),
    price: calculatePrice(wine),
    discount: calculateDiscount(wine),
  }
}

export const getWinePositionInfo = wine => {
  return {
    shop: stores[wine.shop.site] || 'Ароматный мир',
    name: wine.wine.name,
    grape: parseGrapes(wine.wine.grape),
    size: wine.volume,
    country: countries(wine.wine.region).name,
    sugar: sugar[wine.wine.sugar],
    color: colors[wine.wine.color],
    alcohol: wine.wine.avg,
    brand: parseProducer(wine.wine.producer.name),
    year: wine.wine.year || 2020,
    fitsPercent: Math.round(Math.random() * (85 - 45) + 45),
    stars: Math.round(Math.random() * (5 - 2) + 2),
    price: calculatePrice(wine),
    discount: calculateDiscount(wine),
  }
}
