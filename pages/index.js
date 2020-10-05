import Checkbox from '../components/checkBoxComponent'
import InputBox from '../components/inputBox'
import SortButton from '../components/sortButton'

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <Checkbox label='White' />
      <Checkbox label='Red' />
      <div style={{ backgroundColor: 'black' }}>
        <InputBox
          labelFrom='FROM'
          placeholderFrom='0'
          labelTo='TO'
          placeholderTo='100000'
          currency='₹'
        />
        <div style={{ margin: '5px' }}>
          <SortButton
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
