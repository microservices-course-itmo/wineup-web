import React from 'react'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Footer = () => (
  <div className='container'>
    <div className='wrapper'>
      <div className='top'>
        <div className='info'>
          <h2>
            <span className='wineup'>WineUP</span> – самая актуальная информация
            о винах!
          </h2>
          <h3 className='title'>Остались вопросы? Напишите нам!</h3>
          <a className='email' href='mailto:test@test.ru'>
            test@test.ru
          </a>
        </div>
        <div className='navTop'>
          <h3 className='title'>О WineUP</h3>
          <a>Возможности</a>
          <a>Сообщество</a>
          <a>Контакты</a>
        </div>
        <div className='navBottom'>
          <h3 className='title'>Города</h3>
          <a>Санкт-Петербург</a>
          <a>Москва</a>
        </div>
        <div className='business'>
          <h3 className='title'>Корпоративным клиентам</h3>
          <a>Что такие бизнес профиль?</a>
          <a>Зарегистрироваться как бизнес-пользователь</a>
        </div>
        <div className='apps'>
          <h3 className='title'>Приложение WineUP</h3>
          <a>
            <img src={`${prefix}/assets/gplay.svg`} alt='google play' />
          </a>
          <a>
            <img src={`${prefix}/assets/appstore.svg`} alt='appstore' />
          </a>
        </div>
      </div>
      <div className='bottom'>
        <p className='copyright'>
          <img src={`${prefix}/assets/copyright.svg`} alt='copyright' />
          WineUp, 2020
        </p>
        <a>Пользовательское соглашение</a>
        <a>Политика конфиденциальности</a>
        <p className='love'>Made in St.Petersburg with love ❤️</p>
      </div>
    </div>

    <style jsx>
      {`
        a {
          color: #9e9e9e;
          text-decoration: none;
          outline: none;
          transition: 0.2s;
          cursor: pointer;
        }

        a:hover {
          opacity: 0.8;
        }

        .container {
          margin-top: 20px;
          background-color: #232323;
          color: #9e9e9e;
          font-family: 'PT Sans', sans-serif;
        }

        .wrapper {
          position: relative;
          max-width: 1440px;
          margin: 0 auto;
        }

        .top {
          padding: 40px 20px 0 20px;
          display: grid;
          grid-template-rows: 130px 130px;
          grid-template-columns: 2fr 1fr 1fr;
        }

        .top a {
          margin-bottom: 3px;
          display: block;
        }

        .title {
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          color: #fff;
          font-weight: bold;
          font-size: 22px;
          line-height: 29px;
        }

        .email {
          font-size: 18px;
        }

        .info {
          grid-column: 1;
          grid-row: 1/3;
        }

        .info h2 {
          margin-bottom: 40px;
          color: #fff;
        }

        .wineup {
          font-family: 'Poller One', cursive;
        }

        .navTop {
          grid-column: 2;
          grid-row: 1;
        }

        .navBottom {
          grid-column: 2;
          grid-row: 2;
        }

        .apps > a {
          margin-right: 50px;
          display: inline-block;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          padding: 25px 20px;
          border-top: 1px solid #9e9e9e;
          font-family: 'Playfair Display', serif;

          font-size: 16px;
          line-height: 21px;
        }

        .bottom a {
          margin-left: 100px;
          font-family: 'PT Sans', sans-serif;
        }

        .copyright {
          display: flex;
          align-items: center;
        }

        .copyright img {
          margin-right: 10px;
        }

        .love {
          margin-left: auto;
          font-weight: 700;
        }
      `}
    </style>
  </div>
)

export default Footer
