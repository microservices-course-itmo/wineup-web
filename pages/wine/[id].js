import WinePosition from '../../components/WinePosition'
import ItemDescription from '../../components/ItemDescriptionCard'
import ReviewBox from '../../components/ReviewBox'
import Header from '../../components/Header'
import Search from '../../components/Search'

const Wine = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Search />
      <div className='wine-position'>
        <WinePosition
          imageSrc='https://amwine.ru/upload/resize_cache/iblock/7bc/620_620_1/7bcaa8fad7ebb211cbcda8a27b5382ba.png'
          info={{
            name: 'Estate Vineyards Sauvignon Blanc',
            grape: 'Арени',
            size: 0.75,
            country: 'Португалия',
            sugar: 'сухое',
            color: 'красное',
            shop: 'Ароматный мир',
            alcohol: 12,
            brand: 'Gevorkian Winery',
            year: 2011,
            fitsPercent: 75,
            stars: 3,
            price: '1200',
            discount: {
              price: '900',
              percent: 12,
            },
          }}
        />
      </div>

      <div className='container'>
        <ItemDescription />
        <ReviewBox />
      </div>

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
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default Wine
