import Header from '../components/Header'
import Search from '../components/Search'
import Catalog from '../components/Catalog'
import WineCard from '../components/WineCard'
import FilterBar from '../components/FilterBar'
import Wrapper from '../components/Wrapper'

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Search />

      <div className='content'>
        <FilterBar />

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

      <style jsx>
        {`
          .nav {
            width: 100%;
            height: 62px;
            background-color: lightgray;
            margin-top: 40px;
            margin-bottom: 40px;
          }

          .content {
            display: flex;
            margin-top: 40px;
          }

          .filter {
            background-color: lightgray;
            min-width: 375px;
            min-height: 1265px;
            max-width: 375px;
            max-height: 1265px;
          }
        `}
      </style>
    </Wrapper>
  )
}

export default Home
