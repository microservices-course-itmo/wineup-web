import React from 'react'
import { useRouter } from 'next/router'
import { selectorFamily, useRecoilValueLoadable } from 'recoil'

import WinePosition from '../../components/WinePosition'
import Header from '../../components/Header'
import Search from '../../components/Search'
import GlobalRecoilWrapper from '../../store/GlobalRecoilWrapper'
import SameWines from '../../components/SameWines'
import {
  getWinePositionInfo,
  parseImageSrc,
} from '../../components/Catalog/utils'
import Loader from '../../components/Loader'
import api from '../../api'
import useLocalStorage from '../../hooks/useLocalStorage'
import Footer from '../../components/Footer'

export const winesPositionState = selectorFamily({
  key: 'winesPositionState',
  get: ([id, token]) => async () => {
    if (id) {
      const response = await api.getWineById(id, token)

      return response
    }

    throw new Error()
  },
})

const Wine = () => {
  const [accessToken] = useLocalStorage('accessToken')
  const router = useRouter()
  const { state, contents } = useRecoilValueLoadable(
    winesPositionState([router.query.id, accessToken])
  )

  return (
    <>
      <GlobalRecoilWrapper>
        <Header />
        <Search />

        {state === 'hasValue' && (
          <>
            <div className='winePosition'>
              <WinePosition
                imageSrc={parseImageSrc(contents.image)}
                info={getWinePositionInfo(contents)}
                favorite={contents.liked}
                wineId={contents.wine_position_id}
              />
            </div>

            <SameWines />
          </>
        )}

        {state !== 'hasValue' && (
          <div className='message'>
            {state === 'hasError' && (
              <div className='loading'>
                <img
                  className='errorIcon'
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
                <p>Загружаем карточку вина...</p>
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
          .winePosition {
            margin-top: 80px;
          }
          .container {
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
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
          .errorIcon {
            width: 120px;
            height: auto;
          }
        `}</style>
      </GlobalRecoilWrapper>
      <Footer />
    </>
  )
}

export default Wine
