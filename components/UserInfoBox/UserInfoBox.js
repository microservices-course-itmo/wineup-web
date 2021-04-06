import React from 'react'
import firebase from 'firebase'
import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'

const USERNAME_MAX_LENGTH = 15
const USERNAME_MIN_LENGTH = 2
const usernameInvalidRegex = /[`0№!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/
const TELEPHONE_MAX_SIZE = 12
const phoneRegex = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/

const InputTypes = {
  name: 'name-input',
  cityName: 'city-input',
  phone: 'phone-input',
}

const isUsernameValid = username => {
  if (!username) return false
  const validLength =
    username.length > USERNAME_MIN_LENGTH &&
    username.length < USERNAME_MAX_LENGTH
  const invalidRegex = usernameInvalidRegex.test(username)
  return validLength && !invalidRegex
}

const isCityNameValid = cityName => {
  if (!cityName) return false
  return cityName === 'Москва' || cityName === 'Санкт-Петербург'
}

const isTelephoneValid = phoneNumber => {
  if (!phoneNumber) return false
  const validLength = phoneNumber.length === TELEPHONE_MAX_SIZE
  const validRegex = phoneRegex.test(phoneNumber)
  return validLength && validRegex
}
/**
 * @param{string} name
 * @param{string} currentCity
 * @param{string} phone
 * @param{function} onInputChange
 * @param{function} onSubmit
 * @param{function} onCancel
 */
const UserInfoBox = ({
  name,
  currentCity,
  phone,
  onInputChange,
  onSubmit,
  onCancel,
}) => {
  const validateAndSubmit = () => {
    if (
      isUsernameValid(name) &&
      isCityNameValid(currentCity.value) &&
      isTelephoneValid(phone)
    ) {
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
        console.log(e)
      }
      onSubmit(applicationVerifier)
    } else {
      alert('Поля не соответствуют требованиям')
    }
  }
  return (
    <>
      <div className='infoList'>
        <CustomInput
          id={InputTypes.name}
          label='Ваше имя'
          value={name}
          hasError={!isUsernameValid(name)}
          onChange={onInputChange}
        />
        <Dropdown
          id={InputTypes.cityName}
          selectedCity={currentCity}
          onChange={onInputChange}
          width='100%'
          backgroundColor='rgba(196, 196, 196, 0.16)'
          margin='0'
          colorLabel='#818181'
          color='rgb(84, 84, 84)'
          border='2px solid #9e9e9e'
          marginLabel='35px 0 15px'
        />
        <CustomInput
          id={InputTypes.phone}
          label='Телефон'
          value={phone}
          hasError={!isTelephoneValid(phone)}
          onChange={onInputChange}
        />
      </div>
      <footer className='buttonFooter'>
        <button type='reset' className='btn cancelBtn' onClick={onCancel}>
          Отменить
        </button>
        <button
          type='button'
          className='btn submitBtn'
          onClick={validateAndSubmit}
        >
          Подтвердить
        </button>
        <div id='phone-confirm-recaptcha' className='captcha' />
      </footer>
      <style jsx>
        {`
          .captcha {
            z-index: 666666;
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

          .btn {
            border: 1px solid;
            border-radius: 50px;
            font-size: 18px;
            padding: 5px 60px;
            cursor: pointer;
            outline: none;
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
    </>
  )
}

export default UserInfoBox
