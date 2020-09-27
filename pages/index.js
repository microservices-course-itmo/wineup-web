import WineCard from '../components/WineCard'

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <div style={{ display: 'flex' }}>
        <WineCard
          imageSrc='./assets/bottles/blanc.png'
          shop='Aroma'
          name='Blanc'
          info='Austria, red, drain, 0.75l'
          percentage='75'
          stars='4'
          price='56789'
          discount={{
            price: 2131,
            percent: 12,
          }}
          isLiked
        />
        <WineCard
          imageSrc='./assets/bottles/blanc.png'
          shop='Aroma'
          name='Blanc'
          info='Austria,fghujk rjhgkhjghged, drain, 0.75l'
          percentage='75'
          stars='4'
          price='56789'
          discount={{
            price: 2131,
            percent: 12,
          }}
          isLiked
        />
      </div>
    </>
  )
}

export default Home
