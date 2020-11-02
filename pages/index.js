import InputPrice from '../components/InputPrice'
import ButtonGroup from '../components/ButtonGroup'
import ReviewCard from '../components/ReviewCard'

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <div style={{ backgroundColor: 'black' }}>
        <InputPrice
          labelFrom='FROM'
          placeholderFrom='0'
          labelTo='TO'
          placeholderTo='100000'
          currency='₹'
        />
        <div style={{ margin: '15px' }}>
          <ButtonGroup />
        </div>
        <div style={{ margin: '15px', width: '400px', background: 'white' }}>
          <ReviewCard
            logDate='19.10.2020'
            logName='Андрей'
            stars='3'
            review='Выходила, песню заводила. Про степного сизого орла. Про того, которого любила. Про того, чьи письма берегла. Выходила, песню заводила. Про степного сизого орла. Про того, которого любила. Про того, чьи письма берегла'
          />
        </div>
      </div>
    </>
  )
}

export default Home
