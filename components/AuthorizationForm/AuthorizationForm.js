import React, { useReducer } from 'react'

import { useRouter } from 'next/router'
import { initialState, reducer } from './store'
import TelephoneForm from '../TelephoneForm'
import TelephoneAndCodeForm from '../TelephoneAndCodeForm'
import RegistrationForm from '../RegistrationForm'
import AuthorizationStatus from '../AuthorizationStatus'

const formCodes = {
  closedForm: 0,
  telephoneForm: 1,
  telephoneAndCodeForm: 2,
  registrationForm: 3,
}

const AuthorizationForm = () => {
  const router = useRouter()
  const [formState, dispatch] = useReducer(reducer, initialState, reducer)
  const {
    uid,
    date,
    cityId,
    telCode,
    authForm,
    username,
    dateParts,
    telephone,
    telCodeError,
    usernameError,
    calendarError,
    isCalendarOpen,
    telephoneError,
    isMessageVisible,
    fb,
  } = formState

  const exitAuthForm = e => {
    if (e.target.className.includes('authFormMain')) {
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  }

  const currentAuthForm = () => {
    switch (authForm) {
      case formCodes.telephoneForm:
        return (
          <TelephoneForm
            dispatch={dispatch}
            telephone={telephone}
            telephoneError={telephoneError}
          />
        )
      case formCodes.telephoneAndCodeForm:
        return (
          <TelephoneAndCodeForm
            telCode={telCode}
            dispatch={dispatch}
            telephone={telephone}
            telCodeError={telCodeError}
            telephoneError={telephoneError}
            fb={fb}
          />
        )
      case formCodes.registrationForm:
        return (
          <RegistrationForm
            uid={uid}
            date={date}
            cityId={cityId}
            authForm={authForm}
            dispatch={dispatch}
            username={username}
            dateParts={dateParts}
            isCalendarOpen={isCalendarOpen}
            usernameError={usernameError}
            calendarError={calendarError}
          />
        )
      default:
        return null
    }
  }

  return (
    <div>
      {authForm !== formCodes.closedForm && (
        <div className='authFormMain' onClick={exitAuthForm}>
          {currentAuthForm()}
        </div>
      )}
      {isMessageVisible && (
        <AuthorizationStatus
          type='success'
          title='Успех!'
          text='Вы успешно зарегистроровались в системе'
          closeCallback={() => router.push('/')}
        />
      )}
      <div id='recaptcha' />
      <style jsx>
        {`
          .finalMessage {
            width: 40%;
            height: 66px;
            padding: 12px 0;
            display: inline-block;
            background: #b1e86b;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 5px;
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            text-align: center;
            position: fixed;
            top: 92.9%;
            left: 30%;
            z-index: 1000;
          }

          .authFormMain {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
          }
        `}
      </style>
    </div>
  )
}

export default AuthorizationForm
