import { useState } from 'react'
import { selector, useRecoilValueLoadable } from 'recoil'

import ButtonGroup from './ButtonGroup'
import WineCard from './WineCard'
import Loader from './Loader'

const winesQuery = selector({
  key: 'Wines',
  get: async () => {
    const response = await fetch(
      'http://77.234.215.138:48080/catalog-service/position/true/',
      {
        method: 'POST',
        headers: {
          accessToken: '123',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 1,
          to: 12,
        }),
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
              key={wine.id}
              imageSrc='https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png'
              info={{
                shop: 'Ароматный мир',
                name: 'Vodka',
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

      {state !== 'hasValue' && (
        <div className='message'>
          {state === 'hasError' && (
            <div className='loading'>
              <img
                className='error-icon'
                src='assets/error.svg'
                alt='error icon'
              />
              <p>
                Произошла ошибка
                <br />
                Попробуйте перезагрузить страницу
              </p>
            </div>
          )}
          {state === 'loading' && (
            <div className='loading'>
              <Loader />
              <p>Загружаем каталог...</p>
            </div>
          )}
        </div>
      )}

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

        .message {
          padding-top: 30px;

          display: flex;
          justify-content: center;
        }

        .loading {
          max-width: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        .loading p {
          margin-top: 25px;

          font-family: Playfair Display, serif;
          font-size: 16px;
          color: #000000;
        }

        .error-icon {
          width: 120px;
          height: auto;
        }
      `}</style>
    </div>
  )
}

export default Catalog
