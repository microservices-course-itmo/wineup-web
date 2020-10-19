import InputPrice from '../components/InputPrice'
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
        <div style={{ margin: '15px' }}>
          <ButtonGroup />
        </div>
      </div>
    </>
  )
}

export default Home
