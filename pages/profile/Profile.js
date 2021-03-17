import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import firebase from 'firebase'
import { useRecoilValue } from 'recoil'
import Header from '../../components/Header'
import { userState } from '../../store/GlobalRecoilWrapper/store'
import useLocalStorage from '../../utils/useLocalStorage'
import CustomInput from '../../components/CustomInput'
import api from '../../api'
import GlobalRecoilWrapper from '../../store/GlobalRecoilWrapper'
import ConfirmPhoneModal from '../../components/ConfirmPhoneModal'

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
  const [accessToken] = useLocalStorage('accessToken')
  const currentUser = useRecoilValue(userState)

  const [nameInputState, setNameInputState] = useState()
  const [cityInputState, setCityInputState] = useState()
  const [phoneInputState, setPhoneInputState] = useState()
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false)
  const [profileData, setProfileData] = useState(null)

  const resetFields = () => {
    setNameInputState(currentUser.name || emptyInputValue)
    setCityInputState(cityNameById(currentUser.cityId) || emptyInputValue)
    setPhoneInputState(currentUser.phoneNumber || emptyInputValue)
  }

  useEffect(() => {
    if (currentUser) resetFields()
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

  const updateProfile = (data = null) => {
    api
      .patchProfile(accessToken, data || profileData)
      .then(() => window.location.reload())
      .catch(err => {
        console.log(err)
      })
  }

  const onSubmitPhoneChange = verificationCode => {
    let applicationVerifier
    try {
      applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
        size: 'invisible',
      })
    } catch (e) {
      applicationVerifier = document.getElementById('recaptcha')
    }
    const provider = new firebase.auth.PhoneAuthProvider()
    provider
      .verifyPhoneNumber(phoneInputState, applicationVerifier)
      .then(verificationId => {
        const phoneCredential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        )
        firebase.auth().currentUser.updatePhoneNumber(phoneCredential)
      })
      .then(res => {
        console.log(res)
        updateProfile()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onCancelPhoneChange = () => {
    setIsConfirmModalVisible(false)
    updateProfile()
  }

  const onSubmit = async () => {
    const updatedCity = cityIdByName(cityInputState)
    const isPhoneUpdated = phoneInputState !== currentUser.phoneNumber
    const userToPatch = {
      name: nameInputState !== currentUser.name ? nameInputState : null,
      cityId: updatedCity !== currentUser.cityId ? updatedCity : null,
      phoneNumber: isPhoneUpdated ? phoneInputState : null,
    }
    const preparedData = Object.values(userToPatch).filter(
      field => field !== null
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
      <Header />
      <ConfirmPhoneModal
        visible={isConfirmModalVisible}
        onSubmit={onSubmitPhoneChange}
        onClose={onCancelPhoneChange}
      />
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
              <footer className='button-footer'>
                <button
                  type='reset'
                  className='btn cancel-btn'
                  onClick={resetFields}
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
