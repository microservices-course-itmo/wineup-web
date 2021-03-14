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
const emptyInputValue = 'Не указано'
const InputTypes = {
  name: 'name-input',
  cityName: 'city-input',
  phone: 'phone-input',
}

const Profile = () => {
  /* ESLint error: 'setAccessToken' is assigned a value but never used  no-unused-vars
  const [accessToken, setAccessToken] = useLocalStorage('accessToken') */
  const [accessToken] = useLocalStorage('accessToken')
  const currentUser = useRecoilValue(userState)

  const [nameInputState, setNameInputState] = useState()
  const [cityInputState, setCityInputState] = useState()
  const [phoneInputState, setPhoneInputState] = useState()
  useEffect(() => {
    if (currentUser) {
      setNameInputState(currentUser.name || emptyInputValue)
      setCityInputState(cityNameById(currentUser.cityId) || emptyInputValue)
      setPhoneInputState(currentUser.phoneNumber || emptyInputValue)
    }
  }, [currentUser])

  const onInputChange = evt => {
    const newValue = evt.currentTarget.value
    switch (evt.currentTarget.id) {
      case InputTypes.name:
        setNameInputState(newValue)
        break
      case InputTypes.cityName:
        setCityInputState(newValue)
        break
      case InputTypes.phone:
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
        <header className='mainHeader'>Личный кабинет</header>
        {currentUser && (
          <div className='profile'>
            <nav className='container'>
              <div className='userAvatar'>
                <img
                  className='avatar'
                  src='/assets/wineup-avatar-default.svg'
                  alt='User Avatar'
                />
              </div>

              <footer className='buttonFooter'>
                <Link href='/'>
                  <button type='button' className='btn logoutBtn'>
                    Выйти
                  </button>
                </Link>
              </footer>
            </nav>
            <div className='infoContainer'>
              <header className='infoHeader'>Профиль</header>
              <div className='infoList'>
                <CustomInput
                  id={InputTypes.name}
                  label='Ваше имя'
                  value={nameInputState}
                  onChange={onInputChange}
                />
                <CustomInput
                  id={InputTypes.cityName}
                  label='Город'
                  value={cityInputState}
                  onChange={onInputChange}
                />
                <CustomInput
                  id={InputTypes.phone}
                  label='Телефон'
                  value={phoneInputState}
                  onChange={onInputChange}
                />
              </div>
              <footer className='buttonFooter'>
                <button
                  type='reset'
                  className='btn cancelBtn'
                  onClick={onCancel}
                >
                  Отменить
                </button>
                <button
                  type='button'
                  className='btn submitBtn'
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

          .mainHeader {
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

          .infoContainer {
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

          .infoHeader {
            background-color: #b65f74;
            color: white;
            font-size: 28px;
            padding: 20px;
          }

          .userAvatar {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;
          }

          .buttonFooter {
            display: flex;
            justify-content: space-around;
            margin-top: 150px;
          }

          .infoList {
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

          .logoutBtn,
          .cancelBtn {
            background-color: #931332;
            border-color: #931332;
            color: white;
          }

          .submitBtn {
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
