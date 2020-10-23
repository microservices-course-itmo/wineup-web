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

// Количество звездочек (для цикла)
const starsNumber = [1, 2, 3, 4, 5]

/**
 * Карточка вина с главной информацией о нём
 * @param {string} imageSrc - Адрес изображения бутылки вина
 * @param {number} color - Номер цвета заднего фона, всего их три, они указаны в массиве colors
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
 * @param {number} info.stars - Сколько эксперты дали звёзд
 * @param {number} info.price - Цена без скидок
 * @param {Object} info.discount - Опциональный параметр, указывает, что на вино есть скидка
 * @param {number} info.discount.price - Цена со скидкой
 * @param {number} info.discount.percent - Сколько процентов скидка
 */
const WinePosition = ({ imageSrc, info, color = 0 }) => (
  <>
    <h2 className='name'>{info.name}</h2>
    <div className='card'>
      <img className='wine-img' src={imageSrc} alt='bottle' />

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
      </div>

      <div className='right-block'>
        {info.discount ? (
          <>
            <p>
              <span className='previous-price'>{info.price}</span> -20%
            </p>
            <p className='current-price'>{formatPrice(info.discount.price)}</p>
          </>
        ) : (
          <p className='current-price price-pt'>{formatPrice(info.price)}</p>
        )}

        <div className='score'>
          <span className='score-caption'>Оценка экспертов: </span>

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
        </div>

        <p className='score-caption'>
          Подходит вам на:
          <span className='score-percent'>{info.fitsPercent}%</span>
        </p>
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
          height: 570px;
          background: linear-gradient(
            180deg,
            white 0,
            white 144px,
            ${colors[color]} 144px,
            ${colors[color]} 265px,
            white 265px,
            white 600px
          );
          position: relative;
        }

        .wine-img {
          width: 120px;
          height: auto;

          position: absolute;
          top: 50px;
          left: 11%;
        }

        .info {
          width: 480px;
          height: 492px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);

          padding: 40px 50px;

          background: rgba(252, 252, 252, 0.91);
          box-shadow: 0 4px 29px rgba(0, 0, 0, 0.15);
        }

        .info-title {
          font-family: PT Sans, sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          line-height: 28px;

          color: #9e9e9e;
        }

        .info-text {
          color: #000;
        }

        .right-block {
          width: 350px;
          position: absolute;
          right: 0;
          top: 150px;
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

        .stars {
          width: 137px;
          display: flex;
          justify-content: space-between;
        }

        .score {
          display: flex;
          align-items: center;
          text-align: left;
          padding-top: 52px;
          padding-bottom: 20px;
        }

        .score-caption {
          padding-right: 15px;

          font-family: PT Sans, sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          line-height: 28px;
          text-align: left;

          color: #000000;
        }

        .score-percent {
          padding-left: 25px;
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          line-height: 28px;

          color: #ecab2e;
        }
      `}
    </style>
  </>
)

export default WinePosition

// Пример:
// <WinePosition
//   imageSrc='https://amwine.ru/upload/resize_cache/iblock/7bc/620_620_1/7bcaa8fad7ebb211cbcda8a27b5382ba.png'
//   info={{
//     name: 'Estate Vineyards Sauvignon Blanc',
//     grape: 'Арени',
//     size: 0.75,
//     country: 'Португалия',
//     sugar: 'сухое',
//     color: 'красное',
//     shop: 'Ароматный мир',
//     alcohol: 12,
//     brand: 'Gevorkian Winery',
//     year: 2011,
//     fitsPercent: 75,
//     stars: 3,
//     price: '1200',
//     discount: {
//     price: '900',
//       percent: 12,
//   },
// }}
// />
