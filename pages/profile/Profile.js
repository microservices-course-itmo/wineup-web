import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { userState } from '../../store/GlobalRecoilWrapper/store'
import useLocalStorage from '../../utils/useLocalStorage'
import CustomInput from '../../components/CustomInput'

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
  const editedUser = {}
  const onInputChange = (field, newValue) => {
    editedUser[field] = newValue
  }
  const onSubmit = async () => {
    Object.keys(editedUser).forEach(key => {
      if (user[key] === editedUser[key]) {
        editedUser[key] = null
      }
    })
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/user-service/users/me`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json;charset=utf-8',
          accept: '*/*',
        },
        body: JSON.stringify(editedUser),
      }
    )
    console.log(res.json())
  }
  return (
    <div className='wrapper'>
      <Header />
      <Search />
      <div className='content'>
        <header className='main-header'>Личный кабинет</header>
        {user && (
          <div className='profile'>
            <nav className='container'>
              <div className='user-avatar'>
                <img className='avatar' src='/assets/user.svg' alt='user-pic' />
                <img
                  className='edit-btn'
                  src='/assets/edit-icon.svg'
                  alt='edit'
                />
              </div>
              <ul className='nav-list'>
                <li className='nav-item'>Профиль</li>
                <li className='nav-item'>Предпочтения</li>
                <li className='nav-item'>Вопросы</li>
              </ul>
              <footer className='button-footer'>
                <Link href='/'>
                  <button type='button' className='btn logout-btn'>
                    Выйти
                  </button>
                </Link>
              </footer>
            </nav>
            <div className='info-container'>
              <header className='info-header'>Профиль</header>
              <div className='info-list'>
                <CustomInput
                  id='name-input'
                  label='Ваше имя'
                  text={user.name}
                  onChange={evt =>
                    onInputChange('name', evt.currentTarget.value)
                  }
                />
                <CustomInput
                  id='city-input'
                  label='Город'
                  text={user.cityName}
                  onChange={evt =>
                    onInputChange('cityName', evt.currentTarget.value)
                  }
                />
                <CustomInput
                  id='phone-input'
                  label='Телефон'
                  text={user.phoneNumber}
                  onChange={evt =>
                    onInputChange('phoneNumber', evt.currentTarget.value)
                  }
                />
              </div>
              <footer className='button-footer'>
                <button type='button' className='btn cancel-btn'>
                  Отменить
                </button>
                <button
                  type='button'
                  className='btn submit-btn'
                  onClick={onSubmit}
                >
                  Подтвердить
                </button>
              </footer>
            </div>
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
            flex-direction: column;
            background-color: #f5f5f5;
          }
          .main-header {
            font-size: 32px;
            font-weight: bold;
            padding: 30px;
          }
          .profile {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            width: 100%;
          }
          nav.container {
            flex-basis: 25%;
            flex-grow: 1;
            display: flex;
            flex-flow: column nowrap;
            justify-content: stretch;
            background-color: white;
            padding: 40px;
            margin-bottom: 40px;
          }
          .nav-list {
            padding: 50px 0;
          }
          .nav-item {
            font-weight: bold;
            font-size: 22px;
            margin: 20px;
          }
          .info-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-basis: 75%;
            flex-grow: 3;
            background-color: white;
            padding-bottom: 40px;
            margin-left: 80px;
            margin-bottom: 40px;
          }
          .info-header {
            background-color: #b65f74;
            color: white;
            font-size: 28px;
            padding: 20px;
          }
          .user-avatar {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;
          }
          .button-footer {
            display: flex;
            justify-content: space-around;
            margin-top: 150px;
          }
          .info-list {
            display: flex;
            flex-flow: column nowrap;
            padding: 0 20px;
          }
          nav.container .avatar {
            height: 210px;
            width: 210px;
            border-radius: 50%;
          }
          .btn {
            border: 1px solid;
            border-radius: 50px;
            font-size: 18px;
            padding: 5px 60px;
            cursor: pointer;
          }
          .logout-btn,
          .cancel-btn {
            background-color: #931332;
            border-color: #931332;
            color: white;
          }
          .submit-btn {
            background-color: transparent;
            border-color: #717171;
            color: #717171;
          }
        `}
      </style>
    </div>
  )
}

export default Profile
