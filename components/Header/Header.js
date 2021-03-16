import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { userState } from '../../store/GlobalRecoilWrapper/store'
import HeaderMenuItem from '../HeaderMenuItem'

const imagePaths = {
  city: '/assets/header/city-icon',
  home: '/assets/header/catalog',
  community: '/assets/header/community',
  likes: '/assets/header/likes',
  favorites: '/assets/header/heart',
  login: '/assets/header/login',
}
const MenuItemKeys = {
  city: 'city',
  home: 'home',
  community: 'community',
  likes: 'likes',
  favorites: 'favorites',
  login: 'login',
}

const Header = () => {
  const [activeImage, setActiveImage] = useState('')
  const currentUser = useRecoilValue(userState)
  const { asPath } = useRouter()

  useEffect(() => {
    switch (asPath) {
      case '/':
        setActiveImage(MenuItemKeys.home)
        break
      case '/favorites':
        setActiveImage(MenuItemKeys.favorites)
        break
      case '/login':
        setActiveImage(MenuItemKeys.login)
        break
      case '/profile':
        setActiveImage(MenuItemKeys.login)
        break
      default:
        setActiveImage('')
        break
    }
  }, [asPath])

  return (
    <div className='header'>
      <HeaderMenuItem
        href='/'
        iconSrc={imagePaths.city}
        isActive={activeImage === MenuItemKeys.city}
        labelText='Санкт-Петербург'
      />
      <HeaderMenuItem
        href='/'
        iconSrc={imagePaths.home}
        isActive={activeImage === MenuItemKeys.home}
        labelText='Каталог'
      />
      <HeaderMenuItem
        href='/'
        iconSrc={imagePaths.community}
        isActive={activeImage === MenuItemKeys.community}
        labelText='Сообщество'
      />
      <Link href='/'>
        <p className='title'>WineUp</p>
      </Link>
      <HeaderMenuItem
        href='/'
        iconSrc={imagePaths.likes}
        isActive={activeImage === MenuItemKeys.likes}
        labelText='Лайки'
      />
      <HeaderMenuItem
        href={`${currentUser ? '/favorites' : 'login'}`}
        iconSrc={imagePaths.favorites}
        isActive={activeImage === MenuItemKeys.favorites}
        labelText='Избранное'
      />
      <HeaderMenuItem
        href={`${currentUser ? '/profile' : 'login'}`}
        iconSrc={imagePaths.login}
        isActive={activeImage === MenuItemKeys.login}
        labelText={currentUser ? currentUser.name : 'Войти'}
        badgeCount={2}
      />

      <style jsx>
        {`
          .header {
            height: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px;

            font-family: Arial, serif;
            font-style: normal;
            font-weight: normal;

            color: #000000;
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
        `}
      </style>
    </div>
  )
}

export default Header
