import Header from '../components/Header'
import Search from '../components/Search'
import Catalog from '../components/Catalog'
import WineCard from '../components/WineCard'
import WinePosition from '../components/WinePosition'

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Search />
      <div className='nav' />

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

      <div className='content'>
        <div className='filter' />

        <Catalog>
          {[0, 1, 2, 3, 4].map((item, index) => (
            <WineCard
              key={item.toString()}
              imageSrc='https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png'
              info={{
                shop: 'Ароматный мир',
                name: 'Estate Vineyards Sauvignon Blanc',
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
        </Catalog>
      </div>

      <style jsx>{`
        .wrapper {
          max-width: 1440px;
          padding: 0 20px;
          margin: 0 auto;
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
        }

        .filter {
          background-color: lightgray;
          min-width: 375px;
          min-height: 1265px;
          max-width: 375px;
          max-height: 1265px;
        }
      `}</style>
    </div>
  )
}

export default Home
