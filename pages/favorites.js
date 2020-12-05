import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Search from '../components/Search'
import CatalogFavorite from '../components/CatalogFavorite'
import WineCard from '../components/WineCard'
import ButtonGroupCatalog from '../components/ButtonGroupCatalog'

const Favorite = () => {
  // const [showResults, setShowResults] = useState('hidden')
  // const [clicked, setClicked] = useState(false)
  const [liked, setLiked] = useState(true)
  // const handleAllFavorites = () => {
  //   return (
  //     clicked ? setClicked(false) : setClicked(true),
  //     clicked ? setShowResults('hidden') : setShowResults('')
  //   )
  // }
  const clearItem = () => {
    setLiked(false)
  }
  const favorites = [
    {
      imageSrc:
        'https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png',
      info: {
        shop: 'Ароматный мир',
        name: 'Estate Vineyards Sauvignon Blanc',
        about: 'Красное, полусладкое',
        country: { code: 'pt', name: 'Португалия' },
        size: 0.75,
        year: 2011,
        fitsPercent: 75,
        stars: 1,
        price: '1200',
        discount: {
          price: '900',
          percent: 12,
        },
      },
      isLiked: liked,
      color: '1',
    },
    {
      imageSrc:
        'https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png',
      info: {
        shop: 'Ароматный мир',
        name: 'Estate Vineyards Sauvignon Blanc',
        about: 'Красное, полусладкое',
        country: { code: 'pt', name: 'Португалия' },
        size: 0.75,
        year: 2012,
        fitsPercent: 75,
        stars: 2,
        price: '1200',
        discount: {
          price: '900',
          percent: 12,
        },
      },
      isLiked: false,
      color: '2',
    },
    {
      imageSrc:
        'https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png',
      info: {
        shop: 'Ароматный мир',
        name: 'Estate Vineyards Sauvignon Blanc',
        about: 'Красное, полусладкое',
        country: { code: 'pt', name: 'Португалия' },
        size: 0.75,
        year: 2013,
        fitsPercent: 75,
        stars: 3,
        price: '1200',
        discount: {
          price: '900',
          percent: 12,
        },
      },
      isLiked: liked,
      color: '3',
    },
    {
      imageSrc:
        'https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png',
      info: {
        shop: 'Ароматный мир',
        name: 'Estate Vineyards Sauvignon Blanc',
        about: 'Красное, полусладкое',
        country: { code: 'pt', name: 'Португалия' },
        size: 0.75,
        year: 2014,
        fitsPercent: 75,
        stars: 4,
        price: '1200',
        discount: {
          price: '900',
          percent: 12,
        },
      },
      isLiked: liked,
      color: '3',
    },
    {
      imageSrc:
        'https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png',
      info: {
        shop: 'Ароматный мир',
        name: 'Estate Vineyards Sauvignon Blanc',
        about: 'Красное, полусладкое',
        country: { code: 'pt', name: 'Португалия' },
        size: 0.75,
        year: 2014,
        fitsPercent: 75,
        stars: 4,
        price: '1200',
        discount: {
          price: '900',
          percent: 12,
        },
      },
      isLiked: false,
      color: '3',
    },
    {
      imageSrc:
        'https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png',
      info: {
        shop: 'Ароматный мир',
        name: 'Estate Vineyards Sauvignon Blanc',
        about: 'Красное, полусладкое',
        country: { code: 'pt', name: 'Португалия' },
        size: 0.75,
        year: 2014,
        fitsPercent: 75,
        stars: 4,
        price: '1200',
        discount: {
          price: '900',
          percent: 12,
        },
      },
      isLiked: false,
      color: '3',
    },
    {
      imageSrc:
        'https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png',
      info: {
        shop: 'Ароматный мир',
        name: 'Estate Vineyards Sauvignon Blanc',
        about: 'Красное, полусладкое',
        country: { code: 'pt', name: 'Португалия' },
        size: 0.75,
        year: 2014,
        fitsPercent: 75,
        stars: 4,
        price: '1200',
        discount: {
          price: '900',
          percent: 12,
        },
      },
      isLiked: false,
      color: '3',
    },
  ]
  return (
    <div className='wrapper'>
      <Header />
      <Search />
      <div className='content'>
        <ButtonGroupCatalog />
        <div>
          <button type='button' className='buttonClear' onClick={clearItem}>
            <text className='textBtn'>Очистить избранное?</text>
          </button>
          {/* <hr className='line' />
          <p className='textFavorite'>Найдено в избранном:</p> */}
        </div>
        <CatalogFavorite>
          {favorites && favorites.filter(({ isLiked }) => isLiked).length ? (
            favorites
              .filter(({ isLiked }) => isLiked)
              .map(item => (
                <WineCard
                  key={item.toString()}
                  imageSrc={item.imageSrc}
                  info={item.info}
                  isLiked={item.isLiked}
                  color={item.color}
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
        {/* {favorites && !favorites.filter(({ isLiked }) => isLiked).length ? (
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
                      key={item.toString()}
                      imageSrc={item.imageSrc}
                      info={item.info}
                      isLiked={item.isLiked}
                      color={item.color}
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
