import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

// Форматирует цены
const { format: formatPrice } = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

// Форматирует числа
const { format: formatNumber } = new Intl.NumberFormat('ru-RU')

// Цвета для заднего фона
const colors = ['#931332', '#BBADA4', '#FAA4A4']

// Количество звездочек (для циакла)
const starsNumber = [1, 2, 3, 4, 5]
/**
 * Карточка вина с главной информацией о нём
 * @param {string} imageSrc - Адрес изображения бутылки вина
 * @param {boolean} isLiked - Флаг, показывающий лайкнул ли юзер винчик
 * @param {number} color - Номер цвета заднего фона, всего их три, они указаны в массиве colors
 * @param {Object} info - Информация о вине
 * @param {string} info.shop - Название магазина
 * @param {string} info.name - Название вина
 * @param {string} info.about - Тип и цвет винчика
 * @param {Object} info.country - Страна изготовитель
 * @param {string} info.country.code - Код страны (например, fr для Франции)
 * @param {string} info.country.name - Название страны на руссоком
 * @param {number} info.size - Размер бутылки
 * @param {number} info.year - Год
 * @param {number} info.fitsPercent - Процент насколько подходит юзеру вино
 * @param {number} info.stars - Сколько эксперты дали звёзд
 * @param {number} info.price - Цена без скидок
 * @param {Object} info.discount - Опциональный параметр, указывает, что на вино есть скидка
 * @param {number} info.discount.price - Цена со скидкой
 * @param {number} info.discount.percent - Сколько процентов скидка
 */
const WineCard = ({ imageSrc, info, isLiked, color }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(isLiked)

  return (
    <div className='card'>
      <div className='top'>
        <button
          className='heart-button'
          onClick={() => setIsHeartFilled(!isHeartFilled)}
          type='button'
        >
          <img
            className={`heart ${isHeartFilled ? 'filled' : ''}`}
            src={`assets/card/heart-${isHeartFilled ? 'filled' : 'empty'}.svg`}
            alt='heart'
          />
        </button>

        <div className='score'>
          <div className='stars'>
            {starsNumber.map((star, index) => (
              <img
                src={`assets/card/${
                  index < info.stars ? 'filled' : 'empty'
                }-star.svg`}
                alt={`${index < info.stars ? 'filled' : 'empty'} star`}
                key={star.toString()}
              />
            ))}
          </div>
          <h3 className='score-caption'>Оценка экспертов</h3>
        </div>

        {imageSrc ? (
          <div className='img-container'>
            <img className='wine-img' src={imageSrc} alt={info.name} />
          </div>
        ) : null}

        <div className='wine-bg'>
          <h2 className='price'>
            {formatPrice(info.discount ? info.discount.price : info.price)}
          </h2>
          <h4 className='size'>{formatNumber(info.size)} л.</h4>
        </div>

        {info.discount ? (
          <div className='discount'>
            <h2 className='discount-percent'>-{info.discount.percent}%</h2>
            <h4 className='old-price'>{formatPrice(info.price)}</h4>
          </div>
        ) : null}
      </div>

      <h2 className='name'>{info.name}</h2>

      <div className='line' />

      <h2 className='year'>{info.year} г.</h2>

      <div className='icons'>
        <ReactCountryFlag
          style={{
            width: 20,
            height: 15,
            borderRadius: 3,
          }}
          countryCode={info.country.code}
          svg
        />
        <img src='assets/card/bottle-icon.svg' alt='bottle icon' />
        <img src='assets/card/fits-icon.svg' alt='fits icon' />
        <img src='assets/card/shop-icon.svg' alt='shop icon' />
      </div>

      <div className='info'>
        <p>{info.country.name}</p>
        <p>{info.about}</p>
        <p>Подходит вам на {info.fitsPercent}%</p>
        <p>{info.shop}</p>
      </div>

      <style jsx>
        {`
          .flag-icon {
            background-size: contain;
            background-position: 50%;
            background-repeat: no-repeat;
          }

          .card {
            width: 300px;
            height: 587px;
            position: relative;

            background-color: #ffffff;
          }

          .top {
            height: 340px;
            position: relative;
          }

          .heart-button {
            padding: 10px;
            border: none;
            background-color: #ffffff;
            outline: none;
            cursor: pointer;
          }

          .heart {
            fill: transparent;
            stroke: #931332;
            transition: fill 0.3s;
          }

          .heart.filled {
            fill: #931332;
          }

          .stars {
            width: 137px;
            display: flex;
            justify-content: space-between;
          }

          .score {
            padding-left: 10px;
            padding-top: 52px;
          }

          .score-caption {
            padding-top: 4px;

            font-family: PT Sans, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            color: #9e9e9e;
          }

          .wine-img {
            width: auto;
            height: 270px;

            position: absolute;
            top: 50px;
            right: 65px;

            z-index: 2;
          }

          .img-container {
            //width: ;
          }

          .wine-bg {
            width: 100%;
            height: 122px;

            position: absolute;
            top: 152px;

            background-color: ${colors[color] || '#931332'};
          }

          .discount {
            position: absolute;
            top: 60px;
            right: 5px;
          }

          .discount-percent {
            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: 900;
            font-size: 30px;
            line-height: 40px;
            color: #931332;
          }

          .old-price {
            position: relative;
            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 27px;
            text-decoration-line: line-through;
            color: #c4c4c4;
          }

          .price {
            position: absolute;
            top: 40px;
            left: 20px;

            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: bold;
            font-size: 28px;
            line-height: 37px;

            color: #ffffff;
          }

          .size {
            position: absolute;
            bottom: 5px;
            right: 5px;

            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 24px;
            color: #ffffff;
          }

          .name {
            max-height: 75px;
            padding-left: 10px;

            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: bold;
            font-size: 28px;
            line-height: 37px;

            color: #000000;
            overflow: hidden;
          }

          .line {
            width: 165px;

            position: absolute;
            bottom: 155px;
            left: 10px;

            border-bottom: 2px solid #9e9e9e;
          }

          .year {
            position: absolute;
            bottom: 5px;
            right: 5px;

            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
            line-height: 40px;

            color: #000000;
          }

          .icons {
            width: 25px;
            height: 108px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            position: absolute;
            bottom: 20px;
            left: 10px;
          }

          .info {
            position: absolute;
            bottom: 11px;
            left: 45px;

            font-family: PT Sans, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 31px;
            color: #9e9e9e;
          }
        `}
      </style>
    </div>
  )
}

export default WineCard
