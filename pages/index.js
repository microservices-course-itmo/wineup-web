import Header from '../components/Header'
import Search from '../components/Search'
import Catalog from '../components/Catalog'
import FilterBar from '../components/FilterBar'

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Search />

      <div className='content'>
        <FilterBar />

        <Catalog />
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
          margin-top: 40px;
        }

        .filter {
          background-color: lightgray;
          min-width: 375px;
          min-height: 1265px;
          max-width: 375px;
          max-height: 1265px;
        }

        @media all and (max-width: 767px) {
          .content {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
