import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import Header from '../components/Header'
import Search from '../components/Search'
import { userState } from '../components/Authorization/state'
import useLocalStorage from '../utils/useLocalStorage'

const Profile = () => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken')
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken')
  const [currentUser, setCurrentUser] = useState(useRecoilValue(userState))

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/user-service/users/me`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      if (response.status === 403) {
        const responseToken = await fetch(
          `${process.env.NEXT_PUBLIC_API}/user-service/refresh?refreshToken=${refreshToken}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
            },
          }
        )
        if (responseToken.status === 200) {
          responseToken.json().then(json => {
            setAccessToken(json.accessToken)
            setRefreshToken(json.refreshToken)
          })

          await getUser()
        }
      }

      const currentUser2 = await response.json()
      setCurrentUser(currentUser2)
    }
    if (!currentUser) {
      getUser().catch(console.log)
    }
  }, [accessToken, currentUser, refreshToken, setAccessToken, setRefreshToken])

  const user = currentUser
    ? {
        name: currentUser.name || 'Не указано',
        cityName: currentUser.cityId || 'Не указано',
        phoneNumber: currentUser.phoneNumber || 'Не указано',
      }
    : null

  return (
    <div className='wrapper'>
      <Header />
      <Search />
      <div className='content'>
        {user && (
          <div className='profile-wrapper'>
            <div className='profile'>
              <div className='icon-container'>
                <div className='user-avatar'>
                  <img
                    className='avatar'
                    src='/assets/user.svg'
                    alt='user-pic'
                  />
                  <img
                    className='edit-btn'
                    src='/assets/edit-icon.svg'
                    alt='edit'
                  />
                </div>
              </div>
              <div className='info-container'>
                <div className='info-list'>
                  <label htmlFor='name-input'>
                    <div>Ваше имя</div>
                    <input id='name-input' readOnly value={user.name} />
                  </label>
                  <label htmlFor='city-input'>
                    <div>Город</div>
                    <input id='city-input' readOnly value={user.cityName} />
                  </label>
                  <label htmlFor='tel-input'>
                    <div>Телефон</div>
                    <input id='phone-input' readOnly value={user.phoneNumber} />
                  </label>
                </div>
              </div>
            </div>
            <Link href='/'>
              <div className='btn-footer'>
                <button type='button' className='close-btn'>
                  Close
                </button>
              </div>
            </Link>
          </div>
        )}
        {currentUser === 'hasError' && <p>Error</p>}
      </div>
      <style jsx>
        {`
          .wrapper {
            max-width: 1440px;
            padding: 0 20px;
            margin: 0 auto;
          }
          .content {
            display: flex;
            margin-top: 40px;
          }
          .profile-wrapper {
            display: flex;
            flex-flow: column nowrap;
            padding: 0 10%;
            width: 100%;
          }
          .profile {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            width: 100%;
          }
          .icon-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 90px;
            margin-right: 90px;
          }
          .info-container {
            flex-basis: 60%;
          }
          .user-avatar {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;
          }
          .btn-footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 70px;
          }
          .info-list {
            display: flex;
            flex-flow: column nowrap;
          }
          .info-list label {
            margin-bottom: 30px;
            font-size: 28px;
            font-weight: bold;
          }
          .info-list input {
            width: 100%;
            height: 54px;
            padding: 15px;
            font-weight: normal;
            font-size: 22px;
            background-color: rgba(196, 196, 196, 0.16);
            border: 2px solid #9e9e9e;
          }
          .info-list label div {
            margin-bottom: 15px;
          }
          .info-list label:last-child {
            margin-bottom: 0;
          }
          .icon-container .avatar {
            height: 210px;
            width: 210px;
            border-radius: 50%;
          }
          .edit-btn {
            cursor: pointer;
          }
          .close-btn {
            background-color: transparent;
            color: #931332;
            border: 1px solid #931332;
            border-radius: 50px;
            font-size: 18px;
            padding: 5px 60px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Profile
