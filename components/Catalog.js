import { useState } from 'react'
import { selector, useRecoilValueLoadable } from 'recoil'

import ButtonGroup from './ButtonGroup'
import WineCard from './WineCard'

const winesQuery = selector({
  key: 'Wines',
  get: async () => {
    const response = await fetch(
      'http://77.234.215.138:48080/catalog-service/wine',
      {
        headers: {
          accessToken: '123',
        },
      }
    )

    return response.json()
  },
})

const Catalog = () => {
  const [sortingBy, setSortingBy] = useState('recommendations')
  const { contents, state } = useRecoilValueLoadable(winesQuery)

  const sortingByObj = {
    title: 'Сортировать по',
    onChange: event => setSortingBy(event.currentTarget.value),
    inputList: [
      {
        id: 'sortingByRecommendations',
        name: 'sortingBy',
        value: 'recommendations',
        defaultChecked: sortingBy === 'recommendations',
        textLabel: 'Рекомендованные',
      },
      {
        id: 'sortingByPriceAsc',
        name: 'sortingBy',
        value: 'priceAsc',
        defaultChecked: sortingBy === 'priceAsc',
        textLabel: 'Возрастанию цен',
      },
      {
        id: 'sortingByPriceDesc',
        name: 'sortingBy',
        value: 'priceDesc',
        defaultChecked: sortingBy === 'priceDesc',
        textLabel: 'Убыванию цен',
      },
      {
        id: 'sortingByPopularity',
        name: 'sortingBy',
        value: 'popularity',
        defaultChecked: sortingBy === 'popularity',
        textLabel: 'Популярности',
      },
    ],
  }

  return (
    <div className='catalog'>
      <ButtonGroup
        title={sortingByObj.title}
        buttons={sortingByObj.inputList}
        onChange={sortingByObj.onChange}
      />

      {state === 'hasValue' && contents && (
        <div className='grid'>
          {contents.map((wine, index) => (
            <WineCard
              key={wine.toString()}
              imageSrc='https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png'
              info={{
                shop: 'Ароматный мир',
                name: wine,
                about: 'Красное, полусладкое',
                country: { code: 'pt', name: 'Португалия' },
                size: 0.75,
                year: 2011,
                fitsPercent: 75,
                stars: index % 5,
                price: '1200',
                discount: {
                  price: '900',
                  percent: 12,
                },
              }}
              isLiked={index % 2}
              color={index % 3}
            />
          ))}
        </div>
      )}

      {state === 'hasError' && <p>Error</p>}

      <style jsx>{`
        .catalog {
          width: 100%;
          margin-left: 35px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, 300px);
          justify-content: center;
          gap: 45px;
        }

        .sorting {
          width: 100%;
          height: 77px;
          margin-bottom: 30px;
          background-color: lightgray;
        }
      `}</style>
    </div>
  )
}

export default Catalog
