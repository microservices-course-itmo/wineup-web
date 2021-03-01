/* eslint-disable */
import { useCallback, useReducer } from 'react'
import firebase from 'firebase'
import { useRouter } from 'next/router'
import { initialState, reducer, ReducerType } from './store'
import { useRecoilState } from 'recoil'
import { userState } from '../../utils/AuthorizationFormAtom'
import useLocalStorage from '../../utils/useLocalStorage'

const pI = value => {
  return parseInt(value, 10)
}

const DATE_MAX_LENGTH = 11
const CURRENT_YEAR = 2021
const CONSENT_YEAR = 18
const TOO_YOUNG = CURRENT_YEAR - CONSENT_YEAR
const DAY_LIMIT = 31
const MONTH_LIMIT = 12
const YEAR_LIMIT = 4
const DAY_MAX_LENGTH = 2
const DAY_PLUS_MONTH_MAX_LENGTH = 5
const USERNAME_MAX_LENGTH = 15
const USERNAME_MIN_LENGTH = 2
const TELEPHONE_MAX_SIZE = 12
const OK_CODE = 200

const AuthorizationForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialState, reducer)
  const [, setUser] = useRecoilState(userState)
  const [, setAccessToken] = useLocalStorage('accessToken', '')
  const [, setRefreshToken] = useLocalStorage('refreshToken', '')
  const router = useRouter()

  const handleDate = useCallback(
    e => {
      const date = e.target.value
      const dateParts = date.split('.')
      if (date < DATE_MAX_LENGTH) {
        dispatch({ type: ReducerType.setDate, payload: date })
        if (pI(dateParts[0]) > DAY_LIMIT)
          dispatch({
            type: ReducerType.setCalendarError,
            payload: `Ошибка: дней не может быть больше ${DAY_LIMIT}`,
          })
        if (pI(dateParts[1]) > MONTH_LIMIT)
          dispatch({
            type: ReducerType.setCalendarError,
            payload: 'Ошибка: месяцев всего ${MONTH_LIMIT}',
          })
        if (pI(dateParts[2]) > CURRENT_YEAR)
          dispatch({
            type: ReducerType.setCalendarError,
            payload: 'Приветствую тебя, гость из будущего!',
          })
        if (pI(dateParts[2]) > TOO_YOUNG)
          dispatch({
            type: ReducerType.setCalendarError,
            payload: 'Ошибка: не достигли ${CONSENT_YEAR} лет',
          })
        else {
          dispatch({ type: ReducerType.clearCalendarError })
          if (!(date.charAt(date.length - 1) === '.'))
            if (
              date.length === DAY_MAX_LENGTH ||
              date.length === DAY_PLUS_MONTH_MAX_LENGTH
            )
              if (dateParts[0].length === 2)
                dispatch({ type: ReducerType.setDate, payload: `${date}.` })
        }
      } else {
        dispatch({
          type: ReducerType.setCalendarError,
          payload: 'Предупреждение: вы пытаетесь ввести слишком длинную строку',
        })
      }
    },
    [formState]
  )

  const handleDay = useCallback(
    e => {
      const day = e.target.value
      if (day.length <= DAY_MAX_LENGTH) {
        if (pI(day) <= DAY_LIMIT) {
          const [, month, year] = formState.dateParts
          dispatch({
            type: ReducerType.setDate,
            payload: `${day}.${month}.${year}`,
          })
          dispatch({ type: ReducerType.clearCalendarError })
        } else {
          dispatch({
            type: ReducerType.setCalendarError,
            payload: 'Ошибка: дней не может быть больше ${DAY_LIMIT}',
          })
        }
      }
    },
    [formState]
  )
  const handleMonth = useCallback(
    e => {
      const month = e.target.value
      if (month.length <= MONTH_LIMIT) {
        if (pI(month) <= MONTH_LIMIT) {
          const [day, , year] = formState.dateParts
          dispatch({
            type: ReducerType.setDate,
            payload: `${day}.${month}.${year}`,
          })
          dispatch({ type: ReducerType.clearCalendarError })
        } else {
          dispatch({
            type: ReducerType.setCalendarError,
            payload: 'Ошибка: месяцев всего ${MONTH_LIMIT}',
          })
        }
      }
    },
    [formState]
  )
  const handleYear = useCallback(
    e => {
      const year = e.target.value
      if (year.length <= YEAR_LIMIT) {
        const [day, month] = formState.dateParts
        dispatch({
          type: ReducerType.setDate,
          payload: `${day}.${month}.${year}`,
        })
        if (pI(year) > YEAR_LIMIT)
          dispatch({
            type: ReducerType.setCalendarError,
            payload: 'Приветствую тебя, гость из будущего!',
          })
        if (pI(year) >= TOO_YOUNG)
          dispatch({
            type: ReducerType.setCalendarError,
            payload: 'Ошибка: не достигли ${CONSENT_YEAR} лет',
          })
        else {
          dispatch({ type: ReducerType.clearCalendarError })
        }
      }
    },
    [formState]
  )
  const toggleIsCalendarOpen = useCallback(() => {
    dispatch({
      type: ReducerType.setIsCalendarOpen,
      payload: !formState.isCalendarOpen,
    })
  }, [formState.isCalendarOpen])

  const handleUserName = useCallback(
    e => {
      const username = e.target.value
      dispatch({ type: ReducerType.setUserName, payload: username })
      if (
        username.length < USERNAME_MIN_LENGTH ||
        username.length > USERNAME_MAX_LENGTH
      )
        dispatch({
          type: ReducerType.setUsernameError,
          payload:
            'Ошибка: слишком короткое значение. Допустимая длина ${USERNAME_MIN_LENGTH}-${USERNAME_MAX_LENGTH} символов',
        })
      else {
        const format = /[ `1234567890№!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
        if (format.test(username))
          dispatch({
            type: ReducerType.setUsernameError,
            payload: 'Ошибка: недопустимые символы',
          })
        else dispatch({ type: ReducerType.clearUsernameError })
      }
    },
    [formState]
  )

  const handleTelephone = useCallback(
    e => {
      const telephone = e.target.value
      const format = /[ `№!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~a-zA-Zа-яА-Я]/
      if (format.test(telephone))
        dispatch({
          type: ReducerType.setTelephoneError,
          payload: 'Ошибка: недопустимые символы',
        })
      if (
        telephone.charAt(0) === '+' &&
        telephone.charAt(1) === '7' &&
        telephone.length <= TELEPHONE_MAX_SIZE
      )
        dispatch({ type: ReducerType.clearTelephoneError })
      else {
        dispatch({
          type: ReducerType.setTelephoneError,
          payload:
            'Ошибка: Неправильный формат номера телефона - +7-XXX-XXX-XX-XX',
        })
      }
      dispatch({ type: ReducerType.setTelephone, payload: telephone })
    },
    [formState]
  )

  const handleTelCode = useCallback(e => {
    const telcode = e.target.value
    if (telcode.length <= 6)
      dispatch({ type: ReducerType.setTelCode, payload: telcode })
  }, [])

  const handleFirstForm = async () => {
    if (
      formState.telephoneError[0] === '' &&
      formState.telephone[0].length === TELEPHONE_MAX_SIZE
    ) {
      const applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha',
        { size: 'invisible' }
      )
      try {
        dispatch({
          type: ReducerType.setSendCode,
          payload: async () =>
            await firebase
              .auth()
              .signInWithPhoneNumber(
                localStatesHandler.telephone[0],
                applicationVerifier
              ),
        })
      } catch (err) {
        throw new Error(
          `Error occurred during singing in with phone number: ${err}`
        )
      }
      dispatch({ type: ReducerType.setAuthForm, payload: 2 })
    } else
      dispatch({
        type: ReducerType.setTelephoneError,
        payload:
          'Ошибка: Неправильный формат номера телефона - +7-XXX-XXX-XX-XX',
      })
  }

  const tryHandleFirstFormAgain = async () => {
    dispatch({ type: ReducerType.setAuthForm, payload: 1 })
  }

  const handleSecondForm1 = async () => {
    if (
      formState.telephoneError[0] === '' &&
      formState.telephone[0].length === TELEPHONE_MAX_SIZE
    ) {
      try {
        const token = await formState
          .sendCode()
          .confirm(formState.telCode)
          .then(({ user: { ya } }) => ya)
        dispatch({ type: ReducerType.setUid, payload: token })
        const data = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 123,
          },
          body: JSON.stringify({
            fireBaseToken: token,
          }),
        }
        const response = await fetch(
          'http://77.234.215.138:48080/user-service/login',
          data
        )
        if (response.status === OK_CODE) {
          response.json().then(json => {
            dispatch({ type: ReducerType.setUser })
            setUser(json)
            setAccessToken[1](json.accessToken)
            setRefreshToken[1](json.refreshToken)
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
  const registration = async () => {
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 123,
      },
      body: JSON.stringify({
        birthday: formState.date,
        cityId: 1,
        fireBaseToken: formState.uid,
        name: formState.username,
      }),
    }
    const response = await fetch(
      'http://77.234.215.138:48080/user-service/registration',
      data
    )
    if (response.status === 200) {
      response.json().then(json => {
        setUser(json)
        setAccessToken(json.accessToken)
        setRefreshToken(json.refreshToken)
      })
    }
    dispatch({ type: ReducerType.showMessage })
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  return (
    <div className='wrapper'>
      <div className='finalMessage'>
        <div className='messageText'>
          Вы успешно зарегистрировались в системе
        </div>
      </div>
      <div className='authForm'>
        <div className='authForm1'>
          <div className='header'>Войдите или зарегистрируйтесь</div>
          <div className='inputForm'>
            <div className='formName'>Введите номер телефона</div>
            <input
              className='inputField'
              placeholder='+7- (_ _ _) - _ _ _ - _ _ - _ _'
              value={formState.telephone}
              onChange={handleTelephone}
            />
            <input
              className='errorMessage'
              value={formState.telephoneError}
              disabled
            />
          </div>
          <div id='telButton1' className='telButton1' onClick={handleFirstForm}>
            Запросить код подтверждения
          </div>
          <div id='recaptcha' />
        </div>
        <div className='authForm2'>
          <div className='header'>Войдите или зарегистрируйтесь</div>
          <div className='inputForm'>
            <div className='formName'>Введите номер телефона</div>
            <input
              className='inputField'
              placeholder='+7- (_ _ _) - _ _ _ - _ _ - _ _'
              value={formState.telephone}
              onChange={handleTelephone}
            />
            <input
              className='errorMessage'
              value={formState.telephoneError}
              disabled
            />
          </div>
          <div className='inputForm'>
            <div className='formName'>Введите код</div>
            <input
              className='inputField'
              placeholder='_ _ _ _ _ _'
              value={formState.telCode}
              onChange={handleTelCode}
            />
            <input
              className='errorMessage'
              value={formState.telCodeError}
              disabled
            />
          </div>
          <div className='telButton21'>
            <div className='telButton2Inner' onClick={handleSecondForm1}>
              Подтвердить
            </div>
          </div>
          <div className='telButton22'>
            <div className='telButton2Inner' onClick={tryHandleFirstFormAgain}>
              Отправить повторно
            </div>
          </div>
        </div>
        <div className='authForm3'>
          <div className='header'>Войдите или зарегистрируйтесь</div>
          <div className='inputForm'>
            <div className='formName'>Введите имя</div>
            <input
              className='inputField'
              placeholder='Иван'
              value={formState.username}
              onChange={handleUserName}
            />
            <input
              className='errorMessage'
              value={formState.usernameError[0]}
              disabled
            />
          </div>
          <div className='inputForm'>
            <div className='formName'>Дата рождения</div>
            <input
              className='inputField'
              placeholder='ДД.ММ.ГГГГ'
              value={formState.date}
              onChange={handleDate}
            />
            <input
              className='errorMessage'
              value={formState.calendarError}
              disabled
            />
            <div onClick={toggleIsCalendarOpen}>
              <img
                className='icon1'
                src='assets/authorization/calendar.svg'
                alt=''
              />
            </div>
            <div className='calendar' id='calendar'>
              <input
                className='day'
                placeholder='ДД'
                value={formState.dateParts[0]}
                onChange={handleDay}
              />
              <input
                className='month'
                placeholder='ММ'
                value={formState.dateParts[1]}
                onChange={handleMonth}
              />
              <input
                className='year'
                placeholder='ГГГГ'
                value={formState.dateParts[2]}
                onChange={handleYear}
              />
            </div>
          </div>
          <div className='inputForm'>
            <div className='formName'>Город</div>
            <input className='inputField' placeholder='Москва' />
            <input className='errorMessage' disabled />
            <img
              className='icon2'
              src='assets/authorization/arrow.svg'
              alt=''
            />
          </div>
          <div className='authButton' onClick={registration}>
            Зарегистрироваться
          </div>
          <div className='soulContract'>
            Нажимая кнопку «Зарегистрироваться», вы соглашаетесь с политикой
            конфиденциальности
          </div>
        </div>
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
            bottom: -300px;
            right: 0px;
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
          .authForm1 {
            position: absolute;
            right: 0px;
            bottom: 0px;
            background: white;
            display: ${formState.authForm === 1 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 512px;
            box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.48);
          }
          .authForm2 {
            background: white;
            display: ${formState.authForm === 2 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 630px;
            box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.48);
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
          .day {
            margin: 25px 4px 25px 25px;
            width: 46px;
            height: 41px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 5px 0px 0px 5px;
            text-indent: 10px;
          }
          .month {
            width: 41px;
            height: 41px;
            margin: 25px 4px 25px 0px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 0px;
            text-indent: 5px;
          }
          .year {
            margin: 25px 25px 25px 0px;
            width: 56px;
            height: 41px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 0px 5px 5px 0px;
            text-indent: 10px;
          }
          .calendar {
            visibility: ${formState.isCalendarOpen ? 'visible' : 'hidden'};
            width: 201px;
            height: 91px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.11);
            border-radius: 5px;
            position: relative;
            left: 510px;
            top: -110px;
            background: white;
            display: flex;
          }
          .icon1 {
            position: relative;
            top: -55px;
            left: 463px;
          }
          .icon2 {
            position: relative;
            top: -47.5px;
            left: 467px;
          }
          .soulContract {
            margin: 5px 185px 5px 185px;
            width: 315px;
            height: 36px;
            font-family: PT Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            color: #9e9e9e;
          }
          .telButton1 {
            width: 464px;
            height: 58px;
            background: #232323;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            margin: 50px 120px 5px 119px;
            font: 22px Sans;
            color: white;
            border: 0px;
          }
          .telButton1:active {
            box-shadow: 0px 0px 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
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
          .authButton {
            width: 274px;
            height: 58px;
            background: #232323;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            margin: 50px 206px 5px 205px;
            font: 22px Sans;
            color: white;
            border: 0px;
          }
          .authButton:active {
            box-shadow: 0px 0px 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
          }
          a.authButton:focus {
            box-shadow: 0px 0px 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
          }
          .authForm3 {
            background: white;
            display: ${formState.authForm === 3 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 797px;
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
        `}
      </style>
    </div>
  )
}

export default AuthorizationForm
