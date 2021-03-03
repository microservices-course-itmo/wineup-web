import React, { useState } from 'react'

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
 * @param {number} color - Номер цвета заднего фона, всего их три, они указаны в массиве colors
 * @param {boolean} favorite - Является ли избранным вином
 * @param {Object} info - Информация о вине
 * @param {string} info.name - Название вина
 * @param {string} info.grape - Сорт винограда
 * @param {number} info.size - Размер бутылки
 * @param {string} info.country - Страна изготовитель
 * @param {string} info.sugar - Сладкое/полусладкое...
 * @param {string} info.color - Белое/Красное...
 * @param {string} info.alcohol - Процент алкоголя
 * @param {string} info.brand - Производитель
 * @param {string} info.shop - Название магазина
 * @param {number} info.year - Год
 * @param {number} info.fitsPercent - Процент насколько подходит юзеру вино
 * @param {number} info.price - Цена без скидок
 * @param {Object} info.discount - Опциональный параметр, указывает, что на вино есть скидка
 * @param {number} info.discount.price - Цена со скидкой
 * @param {number} info.discount.percent - Сколько процентов скидка
 */
const WinePosition = ({ imageSrc, info, color = 0, favorite = false }) => {
  const [isFavorite, setIsFavorite] = useState(favorite)

  return (
    <>
      <h2 className='name'>{info.name}</h2>
      <div className='card'>
        <div className='img'>
          <img className='wine-img' src={imageSrc} alt='bottle' />
          <p className='score-caption'>
            Подходит вам на:
            <span className='score-percent'>{info.fitsPercent}%</span>
          </p>
        </div>

        <div className='info'>
          <p className='info-title'>
            Виноград: <span className='info-text'>{info.grape}</span>
          </p>
          <p className='info-title'>
            Объем: <span className='info-text'>{formatNumber(info.size)}</span>
          </p>
          <p className='info-title'>
            Страна: <span className='info-text'>{info.country}</span>
          </p>
          <p className='info-title'>
            Сахар: <span className='info-text'>{info.sugar}</span>
          </p>
          <p className='info-title'>
            Цвет: <span className='info-text'>{info.color}</span>
          </p>
          <p className='info-title'>
            Магазин: <span className='info-text'>{info.shop}</span>
          </p>
          <p className='info-title'>
            Крепость: <span className='info-text'>{info.alcohol}</span>
          </p>
          <p className='info-title'>
            Производитель: <span className='info-text'>{info.brand}</span>
          </p>
          <p className='info-title'>
            Винтаж: <span className='info-text'>{info.year}</span>
          </p>

          <a href='https://amwine.ru/' className='go-to-shop'>
            Перейти в магазин
            <img src='../assets/card/cart-icon.svg' alt='cart-icon' />
          </a>
        </div>

        <div className='right-block'>
          {info.discount ? (
            <>
              <p>
                <span className='previous-price'>{info.price}</span> -
                {info.discount.percent}%
              </p>
              <p className='current-price'>
                {formatPrice(info.discount.price)}
              </p>
            </>
          ) : (
            <p className='current-price price-pt'>{formatPrice(info.price)}</p>
          )}

          <button
            type='button'
            className='favorite'
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? (
              <>
                Убрать из избранного
                <img src='../assets/card/heart-filled.svg' alt='cart-icon' />
              </>
            ) : (
              <>
                Добавить в избранное
                <img src='../assets/card/heart-empty.svg' alt='cart-icon' />
              </>
            )}
          </button>
        </div>
      </div>

      <style jsx>
        {`
          .name {
            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 43px;

            color: #000000;
          }

          .card {
            width: 100%;
            margin-top: 80px;
            padding-bottom: 60px;

            display: flex;
            justify-content: space-between;

            background: linear-gradient(
              180deg,
              white 0,
              white 98px,
              ${colors[color]} 98px,
              ${colors[color]} 219px,
              white 219px,
              white
            );
            border-bottom: 1px solid #c4c4c4;
          }

          .img {
            flex-basis: 33%;

            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .wine-img {
            width: 120px;
            height: auto;
            margin-bottom: 25px;
          }

          .info {
            flex-basis: 33%;
            min-width: 315px;

            display: flex;
            flex-direction: column;

            padding: 40px 50px;

            background: rgba(252, 252, 252, 0.91);
            box-shadow: 0 4px 29px rgba(0, 0, 0, 0.15);
          }

          .info-title {
            margin-bottom: 20px;
            font-family: PT Sans, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 28px;

            color: #9e9e9e;
          }

          .info-text {
            color: #000;
          }

          .go-to-shop {
            margin-top: 20px;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 24px;
            color: #fff;
            background-color: #931332;
            box-shadow: 0 15px 31px rgba(147, 19, 50, 0.46);
            border-radius: 8px;
            text-decoration: none;
            transition: 0.2s;
          }

          .go-to-shop img {
            margin-left: 10px;
          }

          .go-to-shop:hover {
            background: #af2f4e;
          }

          .go-to-shop:focus {
            background: #680019;
          }

          .right-block {
            margin-top: 105px;
            flex-basis: 33%;
            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: bold;
            font-size: 35px;
            line-height: 47px;
            text-align: center;

            color: #fff;
          }

          .previous-price {
            text-decoration-line: line-through;
            color: #000;
          }

          .current-price {
            font-size: 50px;
          }

          .price-pt {
            padding-top: 1.5rem;
          }

          .score-caption {
            padding-right: 15px;

            font-family: PT Sans, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 28px;
            text-align: left;

            color: #000000;
          }

          .score-percent {
            padding-left: 15px;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 28px;

            color: #ecab2e;
          }

          .favorite {
            margin: 50px 20px 0 auto;
            padding: 10px 20px;

            display: flex;
            align-items: center;

            font-family: 'PT Sans', sans-serif;
            font-weight: 400;
            font-size: 24px;
            color: #931332;

            border: 1px solid #931332;
            border-radius: 8px;
            background-color: transparent;
            cursor: pointer;
            outline: none;
            transition: 0.2s;
          }

          .favorite img {
            margin-left: 10px;
          }

          .favorite:hover {
            border-color: #af2f4e;
            box-shadow: 0 0 5px #af2f4e;
          }
        `}
      </style>
    </>
  )
}

export default WinePosition
