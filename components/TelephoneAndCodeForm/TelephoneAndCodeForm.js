import { useCallback } from 'react'
import firebase from 'firebase'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import useLocalStorage from '../../utils/useLocalStorage'
import { ReducerType } from '../AuthorizationForm/store'
import api from '../../api'
import { userState } from '../../store/GlobalRecoilWrapper/store'
import CustomFormButton from '../CustomFormButton/CustomFormButton'

const TELEPHONE_MAX_SIZE = 12
const OK_CODE = 200

const TelephoneAndCodeForm = props => {
  const {
    authForm,
    telephone,
    telephoneError,
    telCode,
    telCodeError,
    dispatch,
  } = props
  const [, setUser] = useRecoilState(userState)
  const [, setAccessToken] = useLocalStorage('accessToken', '')
  const [, setRefreshToken] = useLocalStorage('refreshToken', '')
  const router = useRouter()

  const handleTelCode = useCallback(
    e => {
      const telcode = e.target.value
      if (telcode.length <= 6)
        dispatch({ type: ReducerType.setTelCode, payload: telcode })
    },
    [dispatch]
  )

  const tryHandleFirstFormAgain = async () => {
    dispatch({ type: ReducerType.setAuthForm, payload: 1 })
  }

  const handleSecondForm = async () => {
    if (telephoneError === '' && telephone.length === TELEPHONE_MAX_SIZE) {
      let applicationVerifier
      try {
        applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
          size: 'invisible',
        })
      } catch (e) {
        applicationVerifier = document.getElementById('recaptcha')
      }
      try {
        const fb = await firebase
          .auth()
          .signInWithPhoneNumber(telephone, applicationVerifier)
        const token = fb.confirm(telCode).then(({ user: { ya } }) => ya)
        dispatch({ type: ReducerType.setUid, payload: token })
        const data = {
          fireBaseToken: token.i,
        }
        const response = await api.login(data)

        if (response.status === OK_CODE) {
          response.json().then(json => {
            dispatch({ type: ReducerType.setUser })
            setUser(json)
            setAccessToken(json.accessToken)
            setRefreshToken(json.refreshToken)
          })
          dispatch({ type: ReducerType.showMessage })
          setTimeout(() => {
            router.push('/')
          }, 2000)
        } else {
          dispatch({ type: ReducerType.setAuthForm, payload: 3 })
        }
        dispatch({ type: ReducerType.clearTelCodeError })
      } catch (err) {
        dispatch({
          type: ReducerType.setTelCodeError,
          payload: 'Ошибка: неправильный код',
        })
      }
    } else
      dispatch({
        type: ReducerType.setTelephoneError,
        payload:
          'Ошибка: Неправильный формат номера телефона - +7-XXX-XXX-XX-XX',
      })
  }

  return (
    <div>
      <div className='authForm2'>
        <div className='header'>Войдите или зарегистрируйтесь</div>
        <div className='inputForm'>
          <div className='formName'>Введите номер телефона</div>
          <input
            className='inputField'
            placeholder='+7- (_ _ _) - _ _ _ - _ _ - _ _'
            value={telephone}
          />
          <input className='errorMessage' value={telephoneError} disabled />
        </div>
        <div className='inputForm'>
          <div className='formName'>Введите код</div>
          <input
            className='inputField'
            placeholder='_ _ _ _ _ _'
            value={telCode}
            onChange={handleTelCode}
          />
          <input className='errorMessage' value={telCodeError} disabled />
        </div>
        <div className='buttonGroup'>
          <CustomFormButton
            width='49%'
            onClick={handleSecondForm}
            text='Подтвердить'
          />

          <CustomFormButton
            width='49%'
            onClick={tryHandleFirstFormAgain}
            text='Отправить повторно'
          />
        </div>
      </div>

      <style jsx>
        {`
          .authForm2 {
            background: white;
            display: ${authForm === 2 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 630px;
            box-shadow: 0 0 18px rgba(0, 0, 0, 0.48);
          }
          .header {
            width: 453px;
            height: 35px;
            margin: 45px 116px 60px 116px;
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            line-height: 33px;
            text-align: center;
            font-weight: bold;
          }
          .inputForm {
            margin: 2px 93px 22px 93px;
            width: 499px;
            height: 103px;
          }
          .formName {
            height: 22px;
            margin-bottom: 10px;
            font-size: 22px;
            font-family: 'PT Sans', sans-serif;
            color: black;
          }
          .inputField {
            height: 53px;
            margin-top: 10px;
            text-indent: 25px;
            width: 499px;
            font-size: 18px;
            font-family: 'PT Sans', sans-serif;
            border: 1px solid #9e9e9e;
            border-radius: 5px;
          }
          .inputField:active {
            border: 0;
            border-bottom: 2px solid red;
          }
          .errorMessage {
            color: #cf3737;
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            height: 18px;
            width: 499px;
            border: 0;
            padding: 0;
            background: inherit;
          }
          .buttonGroup {
            margin: 40px 60px;
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  )
}

export default TelephoneAndCodeForm