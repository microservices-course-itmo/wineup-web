import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll'
import { useRouter } from 'next/router'
import { useRecoilValueLoadable, useRecoilState } from 'recoil'

import ButtonGroup from '../ButtonGroup'
import WineCard from '../WineCard'
import Loader from '../Loader'
import ChangePageButtons from '../ChangePageButtons'

import { parseImageSrc, getWineInfo, sortingButtons } from './utils'
import { winesSortState, winesState, winesQuery, winesPageState } from './store'

const Catalog = () => {
  const [wines, setWines] = useRecoilState(winesState)
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
        page: Number(router.query.page),
        amount: winesPage.amount,
      })
    } else {
      setWinesPage({
        page: 1,
        amount: winesPage.amount,
      })
    }
  }, [router, setWinesPage, winesPage.amount])

  const changePage = isNextPage => {
    animateScroll.scrollToTop({
      duration: 100,
    })

    if (!isNextPage && winesPage.page > 1) {
      router.push({
        pathname: '/',
        query: { page: winesPage.page - 1 },
      })
    }

    if (isNextPage) {
      router.push({
        pathname: '/',
        query: { page: winesPage.page + 1 },
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
              {wines.map((wine, index) => (
                <WineCard
                  key={wine.wine_position_id}
                  wineId={wine.wine_position_id}
                  imageSrc={parseImageSrc(wine.image)}
                  info={getWineInfo(wine)}
                  isLiked={wine.liked}
                  color={index % 3}
                />
              ))}
            </div>

            <ChangePageButtons
              isPrev={winesPage.page !== 1}
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

        .errorIcon {
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
