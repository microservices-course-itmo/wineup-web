import Header from '../components/Header'
import Search from '../components/Search'
import CatalogFavorite from '../components/CatalogFavorite'
import WineCard from '../components/WineCard'
import ButtonGroupCatalog from '../components/ButtonGroupCatalog'

const Favorite = () => {
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
      isLiked: true,
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
      isLiked: true,
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
  const clearItem = () => {
    favorites.forEach(item => {
      item.isLiked = false
    })
  }
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
          <hr className='line' />
          <p className='textFavorite'>Найдено в избранном:</p>
        </div>
        <CatalogFavorite>
          {favorites.filter(({ isLiked }) => isLiked).length ? (
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
            <div className='emptyFavorite'>
              <p>
                Тут пока пусто, но наш каталог поможет вам что-нибудь найти...
              </p>
              <button
                type='button'
                className='buttonCatalog'
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                <text className='textBtn'>Перейти в каталог...</text>
              </button>
            </div>
          )}
        </CatalogFavorite>
        {!favorites.filter(({ isLiked }) => isLiked).length ? (
          <div />
        ) : (
          <div>
            <div>
              <hr className='line' />
              <p className='textFavorite'>Найдено в каталоге:</p>
            </div>
            <CatalogFavorite>
              {favorites.map(item => (
                <WineCard
                  key={item.toString()}
                  imageSrc={item.imageSrc}
                  info={item.info}
                  isLiked={item.isLiked}
                  color={item.color}
                />
              ))}
            </CatalogFavorite>
          </div>
        )}
      </div>
      <style jsx>{`
        .wrapper {
          max-width: 1440px;
          padding: 0 20px;
          margin: 0 auto;
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
          background-size: cover;
          display: flex;
          flex-direction: column;
          margin-top: 150px;
          width: 600px;
          height: 550px;
          align-items: center;
          padding: 200px 0;
        }
      `}</style>
    </div>
  )
}
export default Favorite
