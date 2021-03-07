import { useReducer } from 'react'
import { initialState, reducer } from './store'
import TelephoneForm from './TelephoneForm'
import TelephoneAndCodeForm from './TelephoneAndCodeForm'
import RegistrationForm from './RegistrationForm'

const AuthorizationForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialState, reducer)
  return (
    <div className='wrapper'>
      <div className='finalMessage'>
        <div className='messageText'>
          Вы успешно зарегистрировались в системе
        </div>
      </div>
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
      </div>
      <div className='background' />
      <style jsx>
        {`
          .finalMessage {
            position: absolute;
            top: 100px;
            right: 200px;
            width: 1364px;
            height: 86px;
            background: #b1e86b;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 5px;
            font-family: Times New Roman;
            z-index: 10;
            font-size: 28px;
            line-height: 33px;
            text-align: center;
            display: ${formState.isMessageVisible ? 'block' : 'none'};
          }
          .messageText {
            margin: 24.17px 0;
          }
          .wrapper {
            max-width: 1920px;
            padding: 0 0px;
            margin: 0 auto;
          }
          .authForm {
            position: absolute;
            bottom: 0px;
            right: 600px;
            z-index: 10;
            width: 70%;
            height: 100%;
            display: 'block';
          }
          .background {
            position: fixed;
            right: 0px;
            bottom: 0px;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.5;
            z-index: 8;
          }
        `}
      </style>
    </div>
  )
}

export default AuthorizationForm
