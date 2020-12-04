import React from 'react'
import WineCard from './WineCard'

const SameWines = () => (
  <>
    <h3 className='temporary-wines'>Похожие вина</h3>

    <div className='temporary-grid'>
      <WineCard
        imageSrc='https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png'
        info={{
          shop: 'Ароматный мир',
          name: 'Estate Vineyards Sauvignon Blanc',
          about: 'Красное, полусладкое',
          country: { code: 'pt', name: 'Португалия' },
          size: 0.75,
          year: 2011,
          fitsPercent: 75,
          stars: 3,
          price: '1200',
          discount: {
            price: '900',
            percent: 12,
          },
        }}
        isLiked
        color={0}
      />
      <WineCard
        imageSrc='https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png'
        info={{
          shop: 'Ароматный мир',
          name: 'Estate Vineyards Sauvignon Blanc',
          about: 'Красное, полусладкое',
          country: { code: 'pt', name: 'Португалия' },
          size: 0.75,
          year: 2011,
          fitsPercent: 75,
          stars: 5,
          price: '1200',
          discount: {
            price: '900',
            percent: 12,
          },
        }}
        isLiked
        color={0}
      />
      <WineCard
        imageSrc='https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png'
        info={{
          shop: 'Ароматный мир',
          name: 'Estate Vineyards Sauvignon Blanc',
          about: 'Красное, полусладкое',
          country: { code: 'pt', name: 'Португалия' },
          size: 0.75,
          year: 2011,
          fitsPercent: 75,
          stars: 0,
          price: '1200',
          discount: {
            price: '900',
            percent: 12,
          },
        }}
        isLiked
        color={0}
      />
      <WineCard
        imageSrc='https://amwine.ru/upload/iblock/0b6/0b6011c5de672a90d00f16aa4a130449.png'
        info={{
          shop: 'Ароматный мир',
          name: 'Estate Vineyards Sauvignon Blanc',
          about: 'Красное, полусладкое',
          country: { code: 'pt', name: 'Португалия' },
          size: 0.75,
          year: 2011,
          fitsPercent: 75,
          stars: 5,
          price: '1200',
          discount: {
            price: '900',
            percent: 12,
          },
        }}
        isLiked
        color={0}
      />
    </div>

    <style jsx>{`
      .temporary-grid {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
      }

      .temporary-wines {
        margin-top: 70px;
        margin-bottom: 60px;

        font-family: Playfair Display, serif;
        font-style: normal;
        font-size: 28px;

        color: #000000;
      }
    `}</style>
  </>
)

export default SameWines
