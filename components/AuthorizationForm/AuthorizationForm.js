import { useReducer } from 'react'

import { useRouter } from 'next/router'
import { initialState, reducer } from './store'
import TelephoneForm from '../TelephoneForm'
import TelephoneAndCodeForm from '../TelephoneAndCodeForm'
import RegistrationForm from '../RegistrationForm'
import AuthorizationStatus from '../AuthorizationStatus'

const AuthorizationForm = () => {
  const router = useRouter()
  const [formState, dispatch] = useReducer(reducer, initialState, reducer)
  const exitAuthForm = e => {
    if (e.target.className.includes('authFormMain')) {
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  }

  return (
    <div>
      <div className='authFormMain' onClick={exitAuthForm}>
        <TelephoneForm
          telephone={formState.telephone}
          telephoneError={formState.telephoneError}
          authForm={formState.authForm}
          dispatch={dispatch}
        />

        <TelephoneAndCodeForm
          authForm={formState.authForm}
          telephone={formState.telephone}
          telephoneError={formState.telephoneError}
          telCode={formState.telCode}
          telCodeError={formState.telCodeError}
          dispatch={dispatch}
        />

        <RegistrationForm
          authForm={formState.authForm}
          dispatch={dispatch}
          dateParts={formState.dateParts}
          isCalendarOpen={formState.isCalendarOpen}
          date={formState.date}
          uid={formState.uid}
          username={formState.username}
          usernameError={formState.usernameError}
          calendarError={formState.calendarError}
          cityId={formState.cityId}
        />

        <AuthorizationStatus
          type='success'
          text='Вы успешно зарегистроровались в системе'
          isVisible={formState.isMessageVisible}
          closeCallback={() => router.push('/')}
        />
      </div>

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
        `}
      </style>
    </div>
  )
}

export default AuthorizationForm
