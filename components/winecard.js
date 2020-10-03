import React from 'react'
import { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'


/**
 * Функция генерирующая плашку с оценкой экспертов в звёздах
 * @param stars Кол-во звёзд, которые присудили эксперты
 */
const generateStars = stars => {
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
export const WineCard = ({ imageSrc, info, isLiked, color }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(isLiked)

  return (
    <div className='card'>
      <button
        className='heart-button'
        onClick={() => setIsHeartFilled(!isHeartFilled)}
        type='button'
      >
        <svg width='25' height='25' viewBox='0 0 25 25' fill='none'>
          <path
            className={`heart ${isHeartFilled ? 'filled' : ''}`}
            d='M22.3795 2.78588L22.3798 2.78629C23.0355 3.50211 23.5623 4.35657 23.9286 5.30311C24.3085 6.28834 24.5027 7.33488 24.5 8.41364V8.41491C24.5 9.42947 24.3144 10.4956 23.9395 11.5897L23.9391 11.5908C23.6284 12.5044 23.1732 13.4605 22.5891 14.4338C21.6641 15.9732 20.3847 17.5906 18.784 19.2403C16.1257 21.9776 13.4966 23.8667 13.3941 23.9401L13.394 23.9401L12.7091 24.4304C12.709 24.4305 12.7089 24.4306 12.7088 24.4306C12.5787 24.5231 12.4212 24.5231 12.2912 24.4306C12.2911 24.4306 12.291 24.4305 12.2909 24.4304L11.606 23.9401L11.6061 23.94L11.5981 23.9345C11.5982 23.9347 11.5973 23.934 11.595 23.9324L11.5863 23.9263L11.5565 23.905C11.5316 23.887 11.4972 23.8621 11.4539 23.8304C11.3674 23.7669 11.2461 23.6767 11.0947 23.5617C10.7921 23.3317 10.3702 23.0028 9.86824 22.5903C8.8637 21.7648 7.54225 20.6075 6.21604 19.2403L6.21598 19.2403C4.61531 17.5907 3.33599 15.9733 2.41101 14.4341C1.82739 13.4616 1.37453 12.5049 1.06046 11.5897C0.685613 10.4956 0.5 9.42947 0.5 8.41491C0.5 7.33531 0.694409 6.28837 1.07423 5.30315C1.43941 4.3561 1.96628 3.50158 2.62261 2.78674L2.62325 2.78604C3.28353 2.06416 4.04898 1.50058 4.8949 1.10965L4.89547 1.10938C5.7704 0.703695 6.69415 0.500023 7.64844 0.500023C8.97173 0.500023 10.2661 0.904186 11.3953 1.67311L11.3953 1.67312C11.6656 1.85717 11.9224 2.05935 12.1658 2.27977L12.5014 2.58361L12.837 2.27977C13.0805 2.05935 13.3373 1.85717 13.6076 1.67312L13.6076 1.67311C14.7368 0.904185 16.0311 0.500023 17.3544 0.500024L17.3557 0.500021C18.2982 0.4976 19.2333 0.704087 20.1074 1.10938L20.1081 1.10969C20.9509 1.49899 21.7226 2.06709 22.3795 2.78588Z'
            stroke='#931332'
          />
        </svg>
      </button>

      <div className='score'>
        <div className='stars'>
          {generateStars(info.stars).map(star => star)}
        </div>
        <h3 className='score-caption'>Оценка экспертов</h3>
      </div>

      {imageSrc ? (
        <img className='wine-img' src={imageSrc} alt={info.name} />
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
            margin-left: 10px;
            background-color: #ffffff;
          }
          .heart-button {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 0;
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
          .star {
            padding: 5px;
          }
          .score {
            position: absolute;
            top: 96px;
            left: 10px;
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
            width: 67px;
            height: auto;
            position: absolute;
            top: 50px;
            right: 80px;
            z-index: 2;
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
            position: absolute;
            top: 340px;
            left: 10px;
            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: bold;
            font-size: 28px;
            line-height: 37px;
            color: #000000;
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