import { useEffect } from 'react'
import {
  useRecoilValueLoadable,
  useRecoilState,
  useRecoilValue,
  useRecoilCallback,
} from 'recoil'
import Link from 'next/link'
import Header from '../components/Header'
import Search from '../components/Search'
import CatalogFavorite from '../components/CatalogFavorite'
import WineCard from '../components/WineCard'
import ButtonGroup from '../components/ButtonGroup'
import {
  favoritesState,
  contentQuery,
  deleteQuery,
  favoritesSortState,
  sortedFavoritesWinesState,
  emptyState,
} from '../components/Favorites/favoritesStore'
import {
  parseImageSrc,
  getWineInfo,
  sortingButtons,
} from '../components/Catalog/utils'
import useLocalStorage from '../hooks/useLocalStorage'

const Favorite = () => {
  const [accessToken] = useLocalStorage('accessToken')
  const [, setFavorites] = useRecoilState(favoritesState)
  const empty = useRecoilValue(emptyState)
  const [, setEmpty] = useRecoilState(emptyState)
  const sortedWine = useRecoilValue(sortedFavoritesWinesState)
  const [, setSortedWine] = useRecoilState(sortedFavoritesWinesState)
  const [favoritesSort, setFavoritesSort] = useRecoilState(favoritesSortState)
  const contentQueryLoadable = useRecoilValueLoadable(contentQuery(accessToken))
  const clearFavorites = useRecoilCallback(({ snapshot }) => async () => {
    await snapshot.getPromise(deleteQuery(accessToken))
    setSortedWine(() => '')
    setEmpty(true)
  })
  useEffect(() => {
    if (sortedWine.length === 0 && !empty) {
      if (contentQueryLoadable.state === 'hasValue') {
        setFavorites(() => contentQueryLoadable.contents)
        setEmpty(true)
      }
    }
  }, [contentQueryLoadable.contents, setFavorites, contentQueryLoadable.state])
  return (
    <div className='wrapper'>
      <Header />
      <Search />
      <div className='content'>
        <ButtonGroup
          title='Сортировать по'
          activeButton={favoritesSort}
          buttons={sortingButtons}
          onChange={event => setFavoritesSort(event.currentTarget.value)}
        />
        <div>
          <button
            type='button'
            className='buttonClear'
            onClick={() => clearFavorites()}
          >
            <text className='textBtn'>Очистить избранное?</text>
          </button>
        </div>
        <CatalogFavorite>
          {sortedWine && sortedWine.length > 0 ? (
            sortedWine.map(wine => (
              <WineCard
                key={wine.wine_position_id}
                wineId={wine.wine_position_id}
                imageSrc={parseImageSrc(wine.image)}
                info={getWineInfo(wine)}
                isLiked
                color={wine.color}
              />
            ))
          ) : (
            <div className='emptyContainer'>
              <div className='emptyFavorite'>
                <p className='emptyContainerText'>
                  Тут пока пусто, но наш каталог поможет вам что-нибудь найти...
                </p>
                <Link href='/'>
                  <a href='/#' className='linkText'>
                    Перейти в каталог...
                  </a>
                </Link>
              </div>
            </div>
          )}
        </CatalogFavorite>
        {/* {favorites && !favorites.length ? (
          <div />
        ) : (
          <div>
            <div>
              <hr className='line' />
              <p className='textFavorite'>Найдено в каталоге:</p>
            </div>
            <CatalogFavorite>
              {favorites &&
                favorites.map((item, index) => (
                  <div id={index} className={`${index > 3 ? showResults : ''}`}>
                    <WineCard
                      key={wine.wine_position_id}
                      wineId={wine.wine_position_id}
                      imageSrc={parseImageSrc(wine.image)}
                      info={getWineInfo(wine)}
                      isLiked={Math.round(Math.random())}
                      color="3"
                    />
                  </div>
                ))}
            </CatalogFavorite>
            <div className='btnAllFavoritesContainer'>
              {favorites.length > 4 ? (
                <button
                  type='button'
                  className='btnAllFavorites'
                  onClick={() => handleAllFavorites()}
                >
                  <text className='emptyContainerText'>
                    {clicked ? 'Скрыть' : 'Посмотреть больше'}{' '}
                  </text>
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        )} */}
      </div>
      <style jsx>{`
        .wrapper {
          max-width: 1440px;
          padding: 0 20px;
          margin: 0 auto;
        }

        .hidden {
          display: none;
        }

        .line {
          border: 0.1px solid;
          color: black;
        }

        .nav {
          width: 100%;
          height: 62px;
          background-color: lightgray;
          margin-top: 40px;
          margin-bottom: 40px;
        }

        .content {
          display: flex;
          flex-direction: column;
          margin-top: 40px;
        }

        .filter {
          background-color: lightgray;
          min-width: 375px;
          min-height: 1265px;
          max-width: 375px;
          max-height: 1265px;
        }

        .buttonClear {
          float: right;
          margin-top: -20px;
          background: transparent;
          border: none;
          width: 200px;
          outline: 0;
        }

        .buttonCatalog {
          background: transparent;
          border: none;
          width: 200px;
          outline: 0;
        }

        .textBtn {
          font-size: 12px;
          color: grey;
          font-family: arial;
          text-decoration-line: underline;
          cursor: pointer;
        }

        .textFavorite {
          font-size: 18px;
          font-family: times new roman;
          font-weight: bold;
        }

        .emptyFavorite {
          background-image: url('assets/heart-background.png');
          background-repeat: no-repeat;
          background-size: 684px;
          background-position: center;
          display: flex;
          flex-direction: column;
          margin-top: 100px;
          width: 784px;
          height: 784px;
          align-items: center;
          padding: 200px 0;
          gap: 50px;
        }

        .emptyContainer {
          position: absolute;
          left: 26.67%;
          right: 25.83%;
          top: 39.16%;
          bottom: 26.91%;
        }

        .emptyContainerText {
          font-size: 28px;
          font-family: 'Times New Roman';
        }

        .linkText {
          font-size: 22px;
          color: #921332;
          font-weight: 700;
          text-decoration-line: underline;
          cursor: pointer;
        }

        .btnAllFavoritesContainer {
          display: flex;
          justify-content: center;
          margin-top: 147px;
          margin-bottom: 336px;
        }

        .btnAllFavorites {
          background: transparent;
          border: 1px solid;
          border-color: #931332;
          border-radius: 50px;
          width: 328px;
          height: 57px;
          box-sizing: border-box;
          outline: 0;
        }
      `}</style>
    </div>
  )
}
export default Favorite
