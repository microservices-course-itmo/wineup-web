import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import Catalog from '../components/Catalog'
import FilterBar from '../components/FilterBar'
import GlobalRecoilWrapper from '../store/GlobalRecoilWrapper'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <GlobalRecoilWrapper>
        <Header />
        <Search />

        <div className='content'>
          <FilterBar />
          <Catalog />
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
          `}
        </style>
      </GlobalRecoilWrapper>
      <Footer />
    </>
  )
}

export default Home
