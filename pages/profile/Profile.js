import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import Header from '../../components/Header'
import { userState } from '../../store/GlobalRecoilWrapper/store'
import useLocalStorage from '../../utils/useLocalStorage'
import CustomInput from '../../components/CustomInput'
import api from '../../api'
import GlobalRecoilWrapper from '../../store/GlobalRecoilWrapper'

const cityNameById = id => {
  if (id === 1) return 'Москва'
  if (id === 2) return 'Санкт-Петербург'
  return null
}
const cityIdByName = cityName => {
  if (cityName === 'Москва') return 1
  if (cityName === 'Санкт-Петербург') return 2
  return null
}

// const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
const Profile = () => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken')
  const currentUser = useRecoilValue(userState)

  const [nameInputState, setNameInputState] = useState()
  const [cityInputState, setCityInputState] = useState()
  const [phoneInputState, setPhoneInputState] = useState()
  useEffect(() => {
    if (currentUser) {
      setNameInputState(currentUser.name || 'Не указано')
      setCityInputState(cityNameById(currentUser.cityId) || 'Не указано')
      setPhoneInputState(currentUser.phoneNumber || 'Не указано')
    }
  }, [currentUser])

  const onInputChange = evt => {
    const newValue = evt.currentTarget.value
    switch (evt.currentTarget.id) {
      case 'name-input':
        setNameInputState(newValue)
        break
      case 'city-input':
        setCityInputState(newValue)
        break
      case 'phone-input':
        setPhoneInputState(newValue)
        break
      default:
        break
    }
  }
  const onSubmit = async () => {
    const userToPatch = {
      name: nameInputState !== currentUser.name ? nameInputState : null,
      cityId:
        cityIdByName(cityInputState) !== currentUser.cityId
          ? cityIdByName(cityInputState)
          : null,
      phoneNumber:
        phoneInputState !== currentUser.phoneNumber ? phoneInputState : null,
    }
    Object.keys(userToPatch).forEach(key => {
      if (!userToPatch[key]) delete userToPatch[key]
    })
    api
      .sendRequest({
        url: '/user-service/users/me',
        method: 'PATCH',
        data: userToPatch,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json;charset=utf-8',
          accept: '*/*',
        },
      })
      .then(() => window.location.reload())
      .catch(alert)
  }
  const onCancel = () => {
    setNameInputState(currentUser.name || 'Не указано')
    setCityInputState(cityNameById(currentUser.cityId) || 'Не указано')
    setPhoneInputState(currentUser.phoneNumber || 'Не указано')
  }

  return (
    <GlobalRecoilWrapper>
      <Header />
      <div className='content'>
        <header className='main-header'>Личный кабинет</header>
        {currentUser && (
          <div className='profile'>
            <nav className='container'>
              <div className='user-avatar'>
                <img
                  className='avatar'
                  src='/assets/wineup-avatar-default.svg'
                  alt='User Avatar'
                />
              </div>

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
                  value={nameInputState}
                  onChange={onInputChange}
                />
                <CustomInput
                  id='city-input'
                  label='Город'
                  value={cityInputState}
                  onChange={onInputChange}
                />
                <CustomInput
                  id='phone-input'
                  label='Телефон'
                  value={phoneInputState}
                  onChange={onInputChange}
                />
              </div>
              <footer className='button-footer'>
                <button
                  type='reset'
                  className='btn cancel-btn'
                  onClick={onCancel}
                >
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
          .content {
            display: flex;
            margin-top: 40px;
            padding: 0 20px;
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
            justify-content: space-between;
            background-color: white;
            padding: 40px;
            margin-bottom: 40px;
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
    </GlobalRecoilWrapper>
  )
}

export default Profile
