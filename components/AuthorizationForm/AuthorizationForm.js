import { useReducer } from 'react'

import { initialState, reducer } from './store'
import TelephoneForm from './TelephoneForm'
import TelephoneAndCodeForm from './TelephoneAndCodeForm'
import RegistrationForm from './RegistrationForm'

const AuthorizationForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialState, reducer)

  return (
    <div className='authForm'>
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
      />

      <div className='finalMessage'>
        Вы успешно зарегистрировались в системе
      </div>

      <style jsx>
        {`
          .finalMessage {
            width: 1364px;
            height: 86px;
            padding: 24px 0;
            display: ${formState.isMessageVisible ? 'block' : 'none'};

            background: #b1e86b;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 5px;
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            text-align: center;
          }

          .authForm {
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            position: fixed;
            top: 0;
            left: 0;

            background-color: rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </div>
  )
}

export default AuthorizationForm
