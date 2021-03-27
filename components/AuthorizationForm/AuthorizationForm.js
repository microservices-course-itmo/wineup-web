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
    finalMessage,
    cityName,
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
            isMessageVisible={isMessageVisible}
          />
        )
      case formCodes.registrationForm:
        return (
          <RegistrationForm
            uid={uid}
            date={date}
            cityId={cityId}
            cityName={cityName}
            authForm={authForm}
            dispatch={dispatch}
            username={username}
            dateParts={dateParts}
            isCalendarOpen={isCalendarOpen}
            usernameError={usernameError}
            calendarError={calendarError}
            isMessageVisible={isMessageVisible}
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
        <div className='authStatusWrapper'>
          <AuthorizationStatus
            type='success'
            text={finalMessage}
            closeCallback={() => router.push('/')}
          />
        </div>
      )}
      <div id='recaptcha' />
      <style jsx>
        {`
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

          .authStatusWrapper {
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
