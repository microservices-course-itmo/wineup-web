import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import firebase from 'firebase'
import { useRecoilState, useRecoilValue } from 'recoil'
import Header from '../../components/Header'
import {
  userState,
  errorState,
  notificationsState,
  unreadNotificationsCountState,
} from '../../store/GlobalRecoilWrapper/store'
import api from '../../api'
import GlobalRecoilWrapper from '../../store/GlobalRecoilWrapper'
import Badge from '../../components/Badge'
import ProfileSectionMenuItem from '../../components/ProfileSectionMenuItem'
import Toast from '../../components/Toast'
import UserInfoBox from '../../components/UserInfoBox'
import ProfileInfoContainer from '../../components/ProfileInfoContainer'
import NotificationsBox from '../../components/NotificationsBox'
import useLocalStorage from '../../hooks/useLocalStorage'
import ConfirmPhoneModal from '../../components/ConfirmPhoneModal'
import { cityIndexSeparator } from '../../components/Dropdown/Dropdown'

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
  const [accessToken] = useLocalStorage('accessToken')
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  const [, setError] = useRecoilState(errorState)
  const [nameInputState, setNameInputState] = useState(
    currentUser ? currentUser.name : null
  )
  const [cityInputState, setCityInputState] = useState({
    id: currentUser ? currentUser.cityId : null,
    value: currentUser ? cityNameById(currentUser.cityId) : null,
  })
  const [phoneInputState, setPhoneInputState] = useState(
    currentUser ? currentUser.phoneNumber : null
  )
  const [activeSection, setActiveSection] = useState(SectionKeys.userInfo)
  const notificationsList = useRecoilValue(notificationsState) // mock
  const unreadNotificationsCount = useRecoilValue(unreadNotificationsCountState) // mock
  const [toastVisibility, setToastVisibility] = useState(false)

  const [profileData, setProfileData] = useState(null)
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false)
  const [phoneChangeError, setPhoneChangeError] = useState(null)

  const resetFields = () => {
    if (currentUser) {
      setNameInputState(currentUser.name)
      setCityInputState({
        id: currentUser.cityId,
        value: cityNameById(currentUser.cityId),
      })
      setPhoneInputState(currentUser.phoneNumber)
    }
  }

  const refetchProfileData = () => {
    api.getProfile(accessToken).then(res => {
      if (res.error) {
        setError({ error: res.error, message: res.message })
      }

      if (res.profile && !res.profile.error) {
        setCurrentUser(res.profile)
      }
    })
  }

  useEffect(() => {
    if (!currentUser) {
      refetchProfileData()
    }
    resetFields()
  }, [currentUser, setCurrentUser, accessToken])

  const onInputChange = evt => {
    const newValue = evt.currentTarget.value
    const eventId = evt.currentTarget.id.split(cityIndexSeparator)[0]
    switch (eventId) {
      case InputTypes.name:
        setNameInputState(newValue)
        break
      case InputTypes.cityName:
        setCityInputState({ id: cityIdByName(newValue), value: newValue })
        break
      case InputTypes.phone:
        setPhoneInputState(newValue)
        break
      default:
        break
    }
  }

  const updateProfile = (data = null) => {
    api
      .patchProfile(accessToken, data || profileData)
      .then(res => {
        if (res.error) {
          setError({ error: res.error, message: res.message })
        } else {
          setToastVisibility(true)
        }
      })
      .then(() => refetchProfileData())
      .catch(console.error)
  }

  const onClosePhoneConfirmModal = () => {
    setIsConfirmModalVisible(false)
    setPhoneChangeError(null)
  }

  const onSubmitPhoneChange = verificationCode => {
    let applicationVerifier
    try {
      applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'phone-confirm-recaptcha',
        {
          size: 'normal',
        }
      )
    } catch (e) {
      applicationVerifier = document.getElementById('phone-confirm-recaptcha')
    }
    try {
      const provider = new firebase.auth.PhoneAuthProvider()
      provider
        .verifyPhoneNumber(phoneInputState, applicationVerifier)
        .then(verificationId => {
          try {
            const phoneCredential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            )
            firebase.auth().currentUser.updatePhoneNumber(phoneCredential)
          } catch (e) {
            setPhoneChangeError(e.code)
          }
        })
        .then(() => {
          onClosePhoneConfirmModal()
          updateProfile()
        })
        .catch(e => {
          setPhoneChangeError(e.code)
        })
    } catch (e) {
      setPhoneChangeError(e.code)
      console.error(e)
    }
  }

  const onSubmit = async () => {
    const updatedCity = cityInputState.id
    const isPhoneUpdated = phoneInputState !== currentUser.phoneNumber
    const userToPatch = {
      name: nameInputState !== currentUser.name ? nameInputState : null,
      cityId: updatedCity !== currentUser.cityId ? updatedCity : null,
      phoneNumber: isPhoneUpdated ? phoneInputState : null,
    }
    const preparedData = Object.fromEntries(
      Object.entries(userToPatch).filter(field => field[1] !== null)
    )
    if (isPhoneUpdated) {
      setIsConfirmModalVisible(true)
      setProfileData(preparedData)
    } else {
      updateProfile(preparedData)
    }
  }

  return (
    <GlobalRecoilWrapper>
      {toastVisibility ? (
        <Toast
          type='success'
          text='Пользователь успешно изменен'
          closeCallback={() => setToastVisibility(false)}
        />
      ) : null}
      <Header />
      <ConfirmPhoneModal
        visible={isConfirmModalVisible}
        onSubmit={onSubmitPhoneChange}
        onClose={onClosePhoneConfirmModal}
        errorCode={phoneChangeError}
      />
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
              <ul className='navList'>
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

              <footer className='buttonFooter'>
                <Link href='logout'>
                  <button type='button' className='btn logoutBtn'>
                    Выйти
                  </button>
                </Link>
              </footer>
            </nav>
            <ProfileInfoContainer section={activeSection}>
              {activeSection === SectionKeys.userInfo && (
                <UserInfoBox
                  name={nameInputState}
                  currentCity={{
                    ...cityInputState,
                  }}
                  phone={phoneInputState}
                  onInputChange={onInputChange}
                  onSubmit={onSubmit}
                  onCancel={resetFields}
                />
              )}
              {activeSection === SectionKeys.notifications && (
                <NotificationsBox notificationsGroupList={notificationsList} />
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
            flex-basis: 30%;
            flex-grow: 1;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            background-color: white;
            padding: 40px;
            margin-bottom: 40px;
          }
          .navList {
            padding: 50px 0;
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
            outline: none;
          }

          .logoutBtn {
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
