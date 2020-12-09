import React, { useEffect } from 'react'
import { useRecoilValueLoadable, useRecoilState, useRecoilValue } from 'recoil'

import ButtonGroup from '../ButtonGroup'
import WineCard from '../WineCard'
import Loader from '../Loader'

import {
  winesSortState,
  winesState,
  sortedWinesState,
  winesQuery,
} from './store'
import {
  calculateDiscount,
  calculatePrice,
  countries,
  parseImageSrc,
  parseAbout,
  stores,
} from './utils'

const Catalog = () => {
  const [wines, setWines] = useRecoilState(winesState)
  const sortedWine = useRecoilValue(sortedWinesState)
  const [winesSort, setWinesSort] = useRecoilState(winesSortState)
  // const [winesPage, setWinesPage] = useRecoilState(winesPageState)
  const { contents, state } = useRecoilValueLoadable(winesQuery)

  useEffect(() => {
    if (state === 'hasValue') {
      setWines(contents)
    }
  }, [contents, setWines, state])

  const sortingByObj = {
    title: 'Сортировать по',
    onChange: event => setWinesSort(event.currentTarget.value),
    inputList: [
      {
        id: 'sortingByRecommendations',
        name: 'sortingBy',
        value: 'recommendations',
        defaultChecked: winesSort === 'recommendations',
        textLabel: 'Рекомендованные',
      },
      {
        id: 'sortingByPriceAsc',
        name: 'sortingBy',
        value: 'priceAsc',
        defaultChecked: winesSort === 'priceAsc',
        textLabel: 'Возрастанию цен',
      },
      {
        id: 'sortingByPriceDesc',
        name: 'sortingBy',
        value: 'priceDesc',
        defaultChecked: winesSort === 'priceDesc',
        textLabel: 'Убыванию цен',
      },
      {
        id: 'sortingByPopularity',
        name: 'sortingBy',
        value: 'popularity',
        defaultChecked: winesSort === 'popularity',
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

      {state === 'hasValue' && wines.length > 0 && (
        <>
          <div className='grid'>
            {sortedWine.map((wine, index) => (
              <WineCard
                key={wine.wine_position_id}
                imageSrc={parseImageSrc(wine.image)}
                info={{
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
                }}
                isLiked={Math.round(Math.random())}
                color={index % 3}
              />
            ))}
          </div>
          {/* <div></div> */}
        </>
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
          margin-bottom: 60px;
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
