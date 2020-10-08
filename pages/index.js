import InputPrice from '../components/InputPrice'
import SortButton from '../components/SortButton'
import ButtonGroup from '../components/ButtonGroup'

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
        <div style={{ margin: '5px' }}>
          <SortButton btnValue='Reccomended' />
        </div>
        <div style={{ margin: '15px' }}>
          <ButtonGroup
            firstBtnValue='Reccomended'
            secondBtnValue='High price'
            thirdBtnValue='Low price'
            forthBtnValue='Popular'
          />
        </div>
      </div>
    </>
  )
}

export default Home
