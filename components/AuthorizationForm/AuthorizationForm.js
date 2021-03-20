import { useReducer } from 'react'

import { useRouter } from 'next/router'
import { initialState, reducer } from './store'
import TelephoneForm from '../TelephoneForm'
import TelephoneAndCodeForm from '../TelephoneAndCodeForm'
import RegistrationForm from '../RegistrationForm'

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
          finalMessage={formState.finalMessage}
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
          finalMessage={formState.finalMessage}
        />
      </div>
      <div className='finalMessage'>{formState.finalMessage}</div>
      <style jsx>
        {`
          .finalMessage {
            width: 40%;
            height: 66px;
            padding: 12px 0;
            display: ${formState.isMessageVisible ? 'inline-block' : 'none'};
            background: #b1e86b;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 5px;
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            text-align: center;
            position: fixed;
            top: 10%;
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
