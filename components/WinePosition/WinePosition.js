import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useRouter } from 'next/router'
import { userState } from '../../store/GlobalRecoilWrapper/store'

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
  const currentUser = useRecoilValue(userState)
  const router = useRouter()
  const toggleFavorite = () => {
    if (currentUser) {
      setIsFavorite(prevState => !prevState)
    } else {
      router.push('/login')
    }
  }

  return (
    <>
      <h2 className='name'>{info.name}</h2>
      <div className='card'>
        <div className='img'>
          <img className='wineImg' src={imageSrc} alt='bottle' />
          <p className='scoreCaption'>
            Подходит вам на:
            <span className='scorePercent'>{info.fitsPercent}%</span>
          </p>
        </div>

        <div className='info'>
          <p className='infoTitle'>
            Виноград: <span className='infoText'>{info.grape}</span>
          </p>
          <p className='infoTitle'>
            Объем: <span className='infoText'>{formatNumber(info.size)}</span>
          </p>
          <p className='infoTitle'>
            Страна: <span className='infoText'>{info.country}</span>
          </p>
          <p className='infoTitle'>
            Сахар: <span className='infoText'>{info.sugar}</span>
          </p>
          <p className='infoTitle'>
            Цвет: <span className='infoText'>{info.color}</span>
          </p>
          <p className='infoTitle'>
            Магазин: <span className='infoText'>{info.shop}</span>
          </p>
          <p className='infoTitle'>
            Крепость: <span className='infoText'>{info.alcohol}</span>
          </p>
          <p className='infoTitle'>
            Производитель: <span className='infoText'>{info.brand}</span>
          </p>
          <p className='infoTitle'>
            Винтаж: <span className='infoText'>{info.year}</span>
          </p>

          <a href='https://amwine.ru/' className='goToShop'>
            Перейти в магазин
            <img src='../assets/card/cart-icon.svg' alt='cart-icon' />
          </a>
        </div>

        <div className='rightBlock'>
          {info.discount ? (
            <>
              <p>
                <span className='previousPrice'>{info.price}</span> -
                {info.discount.percent}%
              </p>
              <p className='currentPrice'>{formatPrice(info.discount.price)}</p>
            </>
          ) : (
            <p className='currentPrice pricePt'>{formatPrice(info.price)}</p>
          )}

          <button type='button' className='favorite' onClick={toggleFavorite}>
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

          .wineImg {
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

          .infoTitle {
            margin-bottom: 20px;
            font-family: PT Sans, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 28px;
            color: #9e9e9e;
          }

          .infoText {
            color: #000;
          }

          .goToShop {
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

          .goToShop img {
            margin-left: 10px;
          }

          .goToShop:hover {
            background: #af2f4e;
          }

          .goToShop:focus {
            background: #680019;
          }

          .rightBlock {
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

          .previousPrice {
            text-decoration-line: line-through;
            color: #000;
          }

          .currentPrice {
            font-size: 50px;
          }

          .pricePt {
            padding-top: 1.5rem;
          }

          .scoreCaption {
            padding-right: 15px;
            font-family: PT Sans, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 28px;
            text-align: left;
            color: #000000;
          }

          .scorePercent {
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
