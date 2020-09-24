// eslint-disable-next-line no-use-before-define
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
        {/* eslint-disable-next-line no-use-before-define */}
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
        <img
          className='heart'
          src={`assets/card/${isLiked ? 'filled' : 'empty'}-heart.svg`}
          alt={`${isLiked ? 'filled' : 'empty'} heart`}
        />
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
            right: 19px;
            bottom: 12px;
          }
        `}
      </style>
    </div>
  )
}

export default WineCard
