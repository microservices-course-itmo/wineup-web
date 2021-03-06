import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../../store/GlobalRecoilWrapper/store'
import api from '../../api'
import useLocalStorage from '../../utils/useLocalStorage'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
const Header = () => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken')
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken')
  const [currentUser, setCurrentUser] = useState(useRecoilValue(userState))

  useEffect(() => {
    const getUser = async () => {
      const response = await api.getProfile(accessToken)

      if (response.error) {
        const [newAccessToken, newRefreshToken] = await api.refreshToken(
          refreshToken
        )
        setAccessToken(newAccessToken)
        setRefreshToken(newRefreshToken)
      }
      const newCurrentUser = await response.profile
      setCurrentUser(newCurrentUser)
    }
    if (!currentUser) {
      getUser().catch(alert)
    }
  }, [accessToken, currentUser, refreshToken, setAccessToken, setRefreshToken])

  return (
    <div className='header'>
      <Link href='/'>
        <div className='menu-item city'>
          <img
            className='icon'
            src={`${prefix}/assets/header/city-icon.svg`}
            alt='city'
          />
          <p>Санкт-Петербург</p>
        </div>
      </Link>
      <Link href='/'>
        <div className='menu-item catalog'>
          <img
            className='icon'
            src={`${prefix}/assets/header/catalog.svg`}
            alt='catalog'
          />
          <p>Каталог</p>
        </div>
      </Link>
      <Link href='/'>
        <div className='menu-item community'>
          <img
            className='icon'
            src={`${prefix}/assets/header/community.svg`}
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
            src={`${prefix}/assets/header/likes.svg`}
            alt='city'
          />
          <p>Лайки</p>
        </div>
      </Link>
      <Link href={`${currentUser ? '/favorites' : 'login'}`}>
        <div className='menu-item heart'>
          <img
            className='icon'
            src={`${prefix}/assets/header/heart.svg`}
            alt='heart'
          />
          <p>Избранное</p>
        </div>
      </Link>
      <Link href={`${currentUser ? '/profile' : 'login'}`}>
        <div className='menu-item login'>
          <img
            className='icon'
            src={`${prefix}/assets/header/man.svg`}
            alt='profile'
          />
          {currentUser ? <p>{currentUser.name}</p> : <p>Войти</p>}
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

            font-family: Arial, serif;
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
