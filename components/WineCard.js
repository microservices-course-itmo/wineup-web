import { useState } from 'react'

// eslint-disable-next-line
const generateStars = (stars) => {
  const result = []

  for (let i = 0; i < 5; i += 1) {
    if (i < stars) {
      result.push(
        <img
          src='assets/card/filled-star.svg'
          className='star'
          alt='filled star'
          key={i}
        />
      )
    } else {
      result.push(
        <img
          src='assets/card/empty-star.svg'
          className='star'
          alt='filled star'
          key={i}
        />
      )
    }
  }

  return result
}

const { format } = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
})

const WineCard = ({
  imageSrc,
  shop,
  name,
  info,
  percentage,
  stars,
  price,
  discount,
  isLiked,
}) => {
  const [isHeartFilled, setIsHeartFilled] = useState(isLiked)

  return (
    <div className='card'>
      <div className='img-container'>
        {imageSrc ? (
          <img className='wine-img' src={imageSrc} alt='wine' />
        ) : null}
      </div>
      <h3 className='shop'>{shop}</h3>
      <div className='info'>
        <h2 className='name'>{name}</h2>
        <p className='text'>{info}</p>
        <p className='suitable'>Подходит вам на {percentage}%</p>
        {/* eslint-disable-next-line */}
        <div className='stars'>{generateStars(stars).map((star) => star)}</div>
        {discount ? (
          <div className='discount'>
            <p className='discount-top'>
              <span className='old-price'>{format(price)}</span> -
              {discount.percent}%
            </p>
            <h2 className='new-price'>{format(discount.price)}</h2>
          </div>
        ) : (
          <h2 className='price'>{format(price)}</h2>
        )}
        <button
          className='heart'
          onClick={() => setIsHeartFilled(!isHeartFilled)}
          type='button'
        >
          <svg width='35' height='28' viewBox='0 0 640 480'>
            <path
              className={`heart-image ${isHeartFilled ? 'filled' : ''}`}
              d='m219.28949,21.827393c-66.240005,0 -119.999954,53.76001 -119.999954,120c0,134.755524 135.933151,170.08728 228.562454,303.308044c87.574219,-132.403381 228.5625,-172.854584 228.5625,-303.308044c0,-66.23999 -53.759888,-120 -120,-120c-48.047913,0 -89.401611,28.370422 -108.5625,69.1875c-19.160797,-40.817078 -60.514496,-69.1875 -108.5625,-69.1875z'
            />
          </svg>
        </button>
      </div>

      <style jsx>
        {`
          .card {
            min-width: 300px;
            max-width: 300px;
            margin: 17px 13px;
            text-align: center;
            background-color: #f2f0f0;
            font-family: Roboto, sans-serif;
          }

          .info {
            height: 250px;
            padding: 20px 45px;
            position: relative;

            background-color: #c4c4c4;
          }

          .img-container {
            height: 168px;
            margin: 4px 0 8px 0;
          }

          .wine-img {
            width: auto;
            height: 160px;
            margin: 8px 0;

            border: none;
          }

          .shop {
            margin: 0;
            padding: 8px;

            color: #ffffff;
            background-color: #878787;
            font-size: 22px;
            font-weight: 400;
          }

          .name {
            margin: 0 0 14px 0;

            font-size: 26px;
            font-weight: 700;
          }

          .text {
            margin: 0 0 19px 0;

            font-size: 16px;
            font-weight: 400;
          }

          .suitable {
            margin: 0 0 7px 0;

            font-size: 16px;
            font-weight: 400;
          }

          .stars {
            width: 154px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          }

          .price {
            margin-top: 47px;
            margin-bottom: 24px;

            font-size: 24px;
            font-weight: 700;
          }

          .discount {
            margin: 0;
            color: #bf2222;
          }

          .discount-top {
            margin-top: 28px;
            margin-bottom: 3px;
            font-size: 14px;
          }

          .old-price {
            margin-right: 5px;
            color: #000;
            text-decoration: line-through;
          }

          .new-price {
            margin: 0;
          }

          .heart {
            position: absolute;
            right: 15px;
            bottom: 12px;

            padding: 0;
            border: none;
            background-color: #c4c4c4;
            outline: none;
            cursor: pointer;
          }

          .heart-image {
            fill: transparent;
            stroke: #cc4747;
            stroke-width: 6px;
            transition: fill 0.3s;
          }

          .heart-image.filled {
            fill: #cc4747;
          }
        `}
      </style>
    </div>
  )
}

export default WineCard
