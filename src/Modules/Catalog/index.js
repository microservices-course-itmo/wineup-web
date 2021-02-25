import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll'
import { useRouter } from 'next/router'
import { useRecoilValueLoadable, useRecoilState, useRecoilValue } from 'recoil'

import ButtonGroup from '../../Model/ButtonGroup'
import WineCard from '../WineCard'
import Loader from '../../UI/Loader'
import ChangePageButtons from '../../UI/ChangePageButtons'

import { parseImageSrc, getWineInfo, sortingButtons } from './utils'
import {
  winesSortState,
  winesState,
  sortedWinesState,
  winesQuery,
  winesPageState,
} from './store'

const Catalog = () => {
  const [wines, setWines] = useRecoilState(winesState)
  const sortedWine = useRecoilValue(sortedWinesState)
  const [winesSort, setWinesSort] = useRecoilState(winesSortState)
  const [winesPage, setWinesPage] = useRecoilState(winesPageState)
  const { contents, state } = useRecoilValueLoadable(winesQuery)
  const router = useRouter()

  useEffect(() => {
    if (state === 'hasValue') {
      setWines(contents)
    }
  }, [contents, setWines, state])

  useEffect(() => {
    if (router.query.page) {
      setWinesPage({
        from: Number(router.query.page),
        to: winesPage.to,
      })
    } else {
      setWinesPage({
        from: 1,
        to: winesPage.to,
      })
    }
  }, [router, setWinesPage, winesPage.to])

  const changePage = isNextPage => {
    animateScroll.scrollToTop({
      duration: 100,
    })

    if (!isNextPage && winesPage.from > 1) {
      router.push({
        pathname: '/',
        query: { page: winesPage.from - 1 },
      })
    }

    if (isNextPage) {
      router.push({
        pathname: '/',
        query: { page: winesPage.from + 1 },
      })
    }
  }

  return (
    <div className='catalog'>
      <ButtonGroup
        title='Сортировать по'
        activeButton={winesSort}
        buttons={sortingButtons}
        onChange={event => setWinesSort(event.currentTarget.value)}
      />

      {state === 'hasValue' &&
        (wines.length > 0 ? (
          <>
            <div className='grid'>
              {sortedWine.map((wine, index) => (
                <WineCard
                  key={wine.wine_position_id}
                  wineId={wine.wine_position_id}
                  imageSrc={parseImageSrc(wine.image)}
                  info={getWineInfo(wine)}
                  isLiked={Math.round(Math.random())}
                  color={index % 3}
                />
              ))}
            </div>

            <ChangePageButtons
              isPrev={winesPage.from !== 1}
              previousPage={() => changePage()}
              nextPage={() => changePage(1)}
            />
          </>
        ) : (
          <p>Каталог пуст</p>
        ))}

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
          margin-bottom: 30px;
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

        @media all and (max-width: 767px) {
          .catalog {
            margin-top: 40px;
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  )
}

export * from './store'
export default Catalog
