import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import Header from '../../components/Header'
import {
  userState,
  notificationsState,
  unreadNotificationsCountState,
} from '../../store/GlobalRecoilWrapper/store'
import useLocalStorage from '../../utils/useLocalStorage'
import api from '../../api'
import GlobalRecoilWrapper from '../../store/GlobalRecoilWrapper'
import Badge from '../../components/Badge'
import ProfileSectionMenuItem from '../../components/ProfileSectionMenuItem'
import Toast from '../../components/Toast'
import UserInfoBox from '../../components/UserInfoBox'
import ProfileInfoContainer from '../../components/ProfileInfoContainer'
import NotificationsBox from '../../components/NotificationsBox'

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
const SectionKeys = {
  userInfo: {
    key: 'userInfo',
    title: 'Профиль',
  },
  notifications: {
    key: 'notifications',
    title: 'Уведомления',
  },
}
const Profile = () => {
  /* ESLint error: 'setAccessToken' is assigned a value but never used  no-unused-vars
  const [accessToken, setAccessToken] = useLocalStorage('accessToken') */
  const [accessToken] = useLocalStorage('accessToken')
  const currentUser = useRecoilValue(userState)
  const [nameInputState, setNameInputState] = useState()
  const [cityInputState, setCityInputState] = useState()
  const [phoneInputState, setPhoneInputState] = useState()
  const [activeSection, setActiveSection] = useState(SectionKeys.userInfo)
  const notificationsList = useRecoilValue(notificationsState) // mock
  const unreadNotificationsCount = useRecoilValue(unreadNotificationsCountState) // mock
  const [toastVisibility, setToastVisibility] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setNameInputState(currentUser.name || emptyInputValue)
      setCityInputState(cityNameById(currentUser.cityId) || emptyInputValue)
      setPhoneInputState(currentUser.phoneNumber || emptyInputValue)
    }
  }, [currentUser])

  const showToast = () => {
    setToastVisibility(true)
    setTimeout(() => setToastVisibility(false), 5000)
  }

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
      .then(() => showToast())
      .catch(alert)
  }
  const onCancel = () => {
    setNameInputState(currentUser.name || 'Не указано')
    setCityInputState(cityNameById(currentUser.cityId) || 'Не указано')
    setPhoneInputState(currentUser.phoneNumber || 'Не указано')
  }

  return (
    <GlobalRecoilWrapper>
      {toastVisibility ? (
        <Toast
          message='Пользователь успешно изменен'
          onClose={() => setToastVisibility(false)}
        />
      ) : null}
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
              <ul className='nav-list'>
                <ProfileSectionMenuItem
                  active={activeSection === SectionKeys.userInfo}
                  labelText={SectionKeys.userInfo.title}
                  onClick={() => setActiveSection(SectionKeys.userInfo)}
                />
                <ProfileSectionMenuItem
                  active={activeSection === SectionKeys.notifications}
                  labelText={SectionKeys.notifications.title}
                  onClick={() => setActiveSection(SectionKeys.notifications)}
                >
                  <Badge count={unreadNotificationsCount} />
                </ProfileSectionMenuItem>
              </ul>

              <footer className='button-footer'>
                <Link href='/'>
                  <button type='button' className='btn logout-btn'>
                    Выйти
                  </button>
                </Link>
              </footer>
            </nav>
            <ProfileInfoContainer title={activeSection.title}>
              {activeSection === SectionKeys.userInfo && (
                <UserInfoBox
                  name={nameInputState}
                  cityName={cityInputState}
                  phone={phoneInputState}
                  onInputChange={onInputChange}
                  onSubmit={onSubmit}
                  onCancel={onCancel}
                />
              )}
              {activeSection === SectionKeys.notifications && (
                <>
                  <NotificationsBox
                    notificationsGroupList={notificationsList}
                  />
                </>
              )}
            </ProfileInfoContainer>
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
            flex-basis: 30%;
            flex-grow: 1;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            background-color: white;
            padding: 40px;
            margin-bottom: 40px;
          }
          .nav-list {
            padding: 50px 0;
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
          .logout-btn {
            background-color: #931332;
            border-color: #931332;
            color: white;
          }
        `}
      </style>
    </GlobalRecoilWrapper>
  )
}

export default Profile
