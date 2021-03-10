import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { userState } from '../../store/GlobalRecoilWrapper/store'

const imagePaths = {
  city: '/assets/header/city-icon',
  home: '/assets/header/catalog',
  community: '/assets/header/community',
  likes: '/assets/header/likes',
  favorites: '/assets/header/heart',
  login: '/assets/header/login',
}

const Header = () => {
  const [activeImage, setActiveImage] = useState('')
  const user = useRecoilValue(userState)
  const { asPath } = useRouter()

  useEffect(() => {
    switch (asPath) {
      case '/':
        setActiveImage('home')
        break
      case '/favorites':
        setActiveImage('favorites')
        break
      case '/login':
        setActiveImage('login')
        break
      case '/profile':
        setActiveImage('login')
        break
      default:
        setActiveImage('')
        break
    }
  }, [asPath])

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
            src={`${imagePaths.home}${
              activeImage === 'home' ? '-active' : ''
            }.svg`}
            alt='catalog'
          />
          <p>Каталог</p>
        </div>
      </Link>
      <Link href='/'>
        <div className='menu-item community'>
          <img
            className='icon'
            src={`${imagePaths.community}${
              activeImage === 'community' ? '-active' : ''
            }.svg`}
            alt='city'
          />
          <p>Сообщество</p>
        </div>
      </Link>
      <Link href='/'>
        <p className='title'>WineUp</p>
      </Link>
      <Link href='/'>
        <div className='menu-item likes'>
          <img
            className='icon'
            src={`${imagePaths.likes}${
              activeImage === 'likes' ? '-active' : ''
            }.svg`}
            alt='city'
          />
          <p>Лайки</p>
        </div>
      </Link>
      <Link href={`${user ? '/favorites' : 'login'}`}>
        <div className='menu-item heart'>
          <img
            className='icon'
            src={`${imagePaths.favorites}${
              activeImage === 'favorites' ? '-active' : ''
            }.svg`}
            alt='heart'
          />
          <p>Избранное</p>
        </div>
      </Link>
      <Link href={`${user ? '/profile' : 'login'}`}>
        <div className='menu-item login'>
          <img
            className='icon'
            src={`${imagePaths.login}${
              activeImage === 'login' ? '-active' : ''
            }.svg`}
            alt='profile'
          />
          {user ? <p>Профиль</p> : <p>Войти</p>}
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

          .active-icon {
            filter: invert(25%) sepia(30%) saturate(5944%) hue-rotate(310deg)
              brightness(60%) contrast(110%);
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
