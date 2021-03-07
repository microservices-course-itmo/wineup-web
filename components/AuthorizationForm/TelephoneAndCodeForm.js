import { useCallback } from 'react'
import firebase from 'firebase'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import useLocalStorage from '../../utils/useLocalStorage'
import { ReducerType } from './store'
import api from '../../api'
import { userState } from '../../store/GlobalRecoilWrapper/store'

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
      const applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha',
        { size: 'invisible' }
      )
      try {
        const fb = await firebase
          .auth()
          .signInWithPhoneNumber(telephone, applicationVerifier)
        const token = fb.confirm(telCode).then(({ user: { ya } }) => ya)
        dispatch({ type: ReducerType.setUid, payload: token })
        const data = {
          fireBaseToken: token,
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
        <div className='telButton21'>
          <div className='telButton2Inner' onClick={handleSecondForm}>
            Подтвердить
          </div>
        </div>
        <div className='telButton22'>
          <div className='telButton2Inner' onClick={tryHandleFirstFormAgain}>
            Отправить повторно
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .authForm2 {
            position: absolute;
            right: 0px;
            bottom: 0px;
            background: white;
            display: ${authForm === 2 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 630px;
            box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.48);
          }
          .header {
            width: 453px;
            height: 35px;
            margin: 45px 116px 60px 116px;
            font-family: Times New Roman;
            font-size: 28px;
            line-height: 33px;
            text-align: center;
            font-weight: bold;
          }
          .inputForm {
            margin: 2px 93px 2px 93px;
            width: 499px;
            height: 103px;
          }
          .formName {
            height: 22px;
            font: 22px Sans;
            color: black;
          }
          .inputField {
            height: 53px;
            margin-top: 10px;
            text-indent: 25px;
            width: 499px;
            font: 18px Sans;
            border: 1px solid #9e9e9e;
            border-radius: 5px;
          }
          .inputField:active {
            border: 0px;
            border-bottom: 2px solid red;
          }
          .errorMessage {
            color: #cf3737;
            font-family: PT Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            height: 18px;
            width: 499px;
            border: 0px;
            padding: 0px;
            background: inherit;
          }
          .telButton21 {
            background: #232323;
            font: 22px Sans;
            color: white;
            border: 0px;
            display: inline-block;
            border-radius: 50px;
            width: 274px;
            height: 58px;
            margin: 58px 39px 140px 49px;
          }
          .telButton22 {
            background: #232323;
            font: 22px Sans;
            color: white;
            border: 0px;
            display: inline-block;
            border-radius: 50px;
            width: 274px;
            height: 58px;
            margin: 58px 0px 140px 0px;
          }
          .telButton21:active {
            box-shadow: 0px 0px 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
          }
          .telButton22:active {
            box-shadow: 0px 0px 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
          }
          .telButton2Inner {
            display: flex;
            height: 58px;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}

export default TelephoneAndCodeForm
