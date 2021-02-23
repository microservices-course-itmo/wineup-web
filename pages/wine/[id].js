import React from 'react'
import { useRouter } from 'next/router'
import { selectorFamily, useRecoilValueLoadable } from 'recoil'

import WinePosition from '../../components/WinePosition'
import ItemDescription from '../../components/ItemDescriptionCard'
import ReviewBox from '../../components/ReviewBox'
import Header from '../../components/Header'
import Search from '../../components/Search'
import Wrapper from '../../components/Wrapper'
import SameWines from '../../components/SameWines'
import { getWinePositionInfo } from '../../components/Catalog/utils'
import Loader from '../../components/Loader'

export const winesPositionState = selectorFamily({
  key: 'winesPositionState',
  get: id => async () => {
    const response = await fetch(
      `http://77.234.215.138:48080/catalog-service/position/true/byId/${id}`,
      {
        headers: {
          accessToken: '123',
        },
      }
    )

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    return response.json()
  },
})

const Wine = () => {
  const router = useRouter()
  const { state, contents } = useRecoilValueLoadable(
    winesPositionState(router.query.id)
  )

  return (
    <Wrapper>
      <Header />
      <Search />

      {state === 'hasValue' && (
        <>
          <div className='wine-position'>
            <WinePosition
              imageSrc={contents.image}
              info={getWinePositionInfo(contents)}
            />
          </div>

          <div className='line' />

          <div className='container'>
            <ItemDescription
              color='Вино элегантного розового цвета.'
              scent='Свежий аромат вина наполнен оттенками полевых цветов.'
              gastro='Вино является идеальным аперитивом, хорошо сочетается со свежими фруктами и десертами.'
              taste='Изысканный вкус вина характеризуется ягодными тонами, легкой кислинкой и богатыми оттенками малины в долгом послевкусии.'
            />

            <div className='line-vertical' />

            <ReviewBox />
          </div>

          <div className='line' />

          <SameWines />
        </>
      )}

      {state !== 'hasValue' && (
        <div className='message'>
          {state === 'hasError' && (
            <div className='loading'>
              <img
                className='error-icon'
                src='/assets/error.svg'
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
        .wrapper {
          max-width: 1440px;
          padding: 0 20px;
          margin: 0 auto;
        }

        .wine-position {
          margin-top: 80px;
        }

        .container {
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
        }

        .line {
          width: calc(100% - 120px);
          height: 2px;

          margin: 60px auto;
          padding: 0 60px;

          background-color: rgba(196, 196, 196, 0.5);
        }

        .line-vertical {
          width: 2px;
          min-height: 100%;

          margin: 90px auto 30px auto;

          background-color: rgba(196, 196, 196, 0.5);
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
    </Wrapper>
  )
}

export default Wine
