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

const Header = () => {
  const [activeImage, setActiveImage] = useState('')
  const currentUser = useRecoilValue(userState)
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
        <HeaderMenuItem
          iconSrc={imagePaths.city}
          isActive={activeImage === 'city'}
          labelText='Избранное'
        />
      </Link>
      <Link href='/'>
        <HeaderMenuItem
          iconSrc={imagePaths.home}
          isActive={activeImage === 'home'}
          labelText='Каталог'
        />
      </Link>
      <Link href='/'>
        <HeaderMenuItem
          iconSrc={imagePaths.community}
          isActive={activeImage === 'community'}
          labelText='Сообщество'
        />
      </Link>
      <Link href='/'>
        <p className='title'>WineUp</p>
      </Link>
      <Link href='/'>
        <HeaderMenuItem
          iconSrc={imagePaths.likes}
          isActive={activeImage === 'likes'}
          labelText='Лайки'
        />
      </Link>
      <Link href={`${currentUser ? '/favorites' : 'login'}`}>
        <HeaderMenuItem
          iconSrc={imagePaths.favorites}
          isActive={activeImage === 'favorites'}
          labelText='Избранное'
        />
      </Link>
      <Link href={`${currentUser ? '/profile' : 'login'}`}>
        <HeaderMenuItem
          iconSrc={imagePaths.login}
          isActive={activeImage === 'login'}
          labelText={currentUser ? <p>{currentUser.name}</p> : <p>Войти</p>}
          badgeCount={2}
        />
      </Link>

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
