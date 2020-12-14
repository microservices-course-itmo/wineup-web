import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <Link href='/'>
        <div className='menu-item city'>
          <img className='icon' src='/assets/header/city-icon.svg' alt='city' />
          <p>Санкт-Петербург</p>
        </div>
      </Link>
      <Link href='/'>
        <div className='menu-item catalog'>
          <img
            className='icon'
            src='/assets/header/catalog.svg'
            alt='catalog'
          />
          <p>Каталог</p>
        </div>
      </Link>
      <Link href='/'>
        <div className='menu-item community'>
          <img className='icon' src='/assets/header/community.svg' alt='city' />
          <p>Сообщество</p>
        </div>
      </Link>
      <Link href='/'>
        <p className='title'>WineUp</p>
      </Link>
      <Link href='/'>
        <div className='menu-item likes'>
          <img className='icon' src='/assets/header/likes.svg' alt='city' />
          <p>Лайки</p>
        </div>
      </Link>
      <Link href='/favorites'>
        <div className='menu-item heart'>
          <img className='icon' src='/assets/header/heart.svg' alt='heart' />
          <p>Избранное</p>
        </div>
      </Link>
      <Link href='/login'>
        <div className='menu-item login'>
          <img className='icon' src='/assets/header/man.svg' alt='profile' />
          <p>Войти</p>
        </div>
      </Link>
      <style jsx>
        {`
          .header {
            height: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px;

            font-family: Arial;
            font-style: normal;
            font-weight: normal;

            color: #000000;
          }

          .menu-item {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            font-size: 16px;
            min-width: max-content;
            line-height: 18px;
            margin: 0 8px;
            white-space: nowrap;
            cursor: pointer;
          }

          .icon {
            margin-right: 10px;
          }

          .title {
            padding: 0 10px;

            font-family: 'Poller One', cursive;
            font-style: normal;
            font-weight: normal;
            font-size: 70px;
            line-height: 83px;
            color: #000000;

            cursor: pointer;
          }

          @media screen and (max-width: 1200px) {
            .menu-item p {
              display: none;
            }
          }

          @media screen and (max-width: 767px) {
            .menu-item {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Header
