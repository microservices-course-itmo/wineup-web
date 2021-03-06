import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { ReducerType } from '../AuthorizationForm/store'
import api from '../../api'
import { userState, errorState } from '../../store/GlobalRecoilWrapper/store'
import useLocalStorage from '../../hooks/useLocalStorage'
import FormCalendar from '../FormCalendar'
import CustomFormButton from '../CustomFormButton'
import { CalendarErrors } from '../FormCalendar/FormCalendar'
import Dropdown from '../Dropdown'
import { cityIndexSeparator } from '../Dropdown/Dropdown'
import CloseButton from '../CloseButton'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
const usernameRegex = /[`0№!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/
const dateRegex = /[`№!@#$%^&*()_+=[\]{};':"\\|,<>/?~\- a-zA-Zа-яА-Я]/
const CURRENT_YEAR = 2021
const CONSENT_YEAR = 18
const DATE_MAX_LENGTH = 11
const TOO_YOUNG = CURRENT_YEAR - CONSENT_YEAR
const DAY_LIMIT = 31
const MONTH_LIMIT = 12
const DAY_MAX_LENGTH = 2
const DAY_PLUS_MONTH_MAX_LENGTH = 5
const USERNAME_MAX_LENGTH = 15
const USERNAME_MIN_LENGTH = 2
const parseIntToDecimal = value => {
  return parseInt(value, 10)
}

const RegistrationForm = props => {
  const {
    username,
    usernameError,
    date,
    calendarError,
    dateParts,
    dispatch,
    isCalendarOpen,
    uid,
    cityId,
    cityName,
  } = props
  const [, setUser] = useRecoilState(userState)
  const [, setError] = useRecoilState(errorState)
  const [, setAccessToken] = useLocalStorage('accessToken', '')
  const [, setRefreshToken] = useLocalStorage('refreshToken', '')
  const router = useRouter()

  const toggleIsCalendarOpen = useCallback(() => {
    dispatch({
      type: ReducerType.setIsCalendarOpen,
      payload: !isCalendarOpen,
    })
  }, [dispatch, isCalendarOpen])

  const handleDate = useCallback(
    e => {
      let validConditions = true
      const date = e.target.value
      const [day, month, year] = date.split('.')
      if (date.length < DATE_MAX_LENGTH) {
        dispatch({ type: ReducerType.setDate, payload: date })
        if (parseIntToDecimal(day) > DAY_LIMIT) {
          validConditions = false
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.dayLimit,
          })
        }
        if (parseIntToDecimal(month) > MONTH_LIMIT) {
          validConditions = false
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.monthLimit,
          })
        }
        if (parseIntToDecimal(year) > CURRENT_YEAR) {
          validConditions = false
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.yearExceeded,
          })
        }
        if (parseIntToDecimal(year) > TOO_YOUNG) {
          validConditions = false
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.userYoungAge,
          })
        }
        if (
          parseIntToDecimal(day) < 1 ||
          parseIntToDecimal(month) < 1 ||
          parseIntToDecimal(year) < 1
        ) {
          validConditions = false
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.negativeValue,
          })
        }
        if (dateRegex.test(date)) {
          validConditions = false
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.invalidData,
          })
        }
        if (validConditions) {
          dispatch({ type: ReducerType.clearCalendarError })
          const isLastCharValid = date.charAt(date.length - 1) !== '.'
          const isDateValid =
            date.length === DAY_MAX_LENGTH ||
            date.length === DAY_PLUS_MONTH_MAX_LENGTH // тут посмотри почему ты сравниваешь DAY_max_length с DATE.length -- так и задумано, это нужно чтобы точку доставлять
          const isDayValid = day.length === 2 // тут, было бы круто поменять на day.length === 2 -- круто
          if (isLastCharValid && isDateValid && isDayValid)
            dispatch({ type: ReducerType.setDate, payload: `${date}.` })
        }
      }
    },
    [dispatch]
  )

  const handleUserName = useCallback(
    e => {
      const username = e.target.value
      const invalidUsername =
        username.length < USERNAME_MIN_LENGTH ||
        username.length > USERNAME_MAX_LENGTH
      const invalidRegex = usernameRegex.test(username)
      dispatch({ type: ReducerType.setUserName, payload: username })
      if (invalidUsername) {
        dispatch({
          type: ReducerType.setUsernameError,
          payload: `Ошибка: слишком короткое значение. Допустимая длина ${USERNAME_MIN_LENGTH}-${USERNAME_MAX_LENGTH} символов`,
        })
      }
      if (invalidRegex) {
        dispatch({
          type: ReducerType.setUsernameError,
          payload: 'Ошибка: недопустимые символы',
        })
      }
      if (!(invalidUsername || invalidRegex))
        dispatch({ type: ReducerType.clearUsernameError })
    },
    [dispatch]
  )

  const handleCity = useCallback(
    e => {
      const targetId = e.target.id.split(cityIndexSeparator)[1]
      dispatch({ type: ReducerType.setCityId, payload: targetId })
      dispatch({ type: ReducerType.setCityName, payload: e.target.value })
    },
    [dispatch]
  )

  const registration = async () => {
    if (username.length > 0 && usernameError === '' && calendarError === '') {
      const data = {
        birthday: date,
        cityId,
        fireBaseToken: uid,
        name: username,
      }

      const response = await api.registration(data)

      if (!response.error) {
        setUser(response.user.user)
        setAccessToken(response.user.accessToken)
        setRefreshToken(response.user.refreshToken)
        dispatch({ type: ReducerType.showMessage })
      } else {
        setError({ error: response.error, message: response.message })
      }
      dispatch({
        type: ReducerType.setFinalMessage,
        payload: 'Вы успешно зарегистрировались в системе',
      })
      dispatch({ type: ReducerType.setAuthForm, payload: 0 })
      dispatch({ type: ReducerType.showMessage })
      setTimeout(() => {
        router.push('/')
      }, 10)
    }
  }

  return (
    <div>
      <div className='authForm3'>
        <CloseButton callback={() => router.push('/')} />
        <div className='header'>Войдите или зарегистрируйтесь</div>
        <div className='inputForm'>
          <div className='formName'>Введите имя</div>
          <input
            className='inputField'
            placeholder='Иван'
            value={username}
            onChange={handleUserName}
          />
          {usernameError && (
            <span className='errorMessage'>{usernameError}</span>
          )}
        </div>
        <div className='inputForm'>
          <div className='formName'>Дата рождения</div>
          <div className='calendarInputWrapper'>
            <input
              className='inputField'
              placeholder='ДД.ММ.ГГГГ'
              value={date}
              onChange={handleDate}
            />
            <span onClick={toggleIsCalendarOpen}>
              <img
                className='icon1'
                src={`${prefix}assets/authorization/calendar.svg`}
                alt=''
              />
            </span>
          </div>
          {calendarError && (
            <span className='errorMessage'>{calendarError}</span>
          )}
          <FormCalendar
            dateParts={dateParts}
            isCalendarOpen={isCalendarOpen}
            dispatch={dispatch}
          />
        </div>
        <Dropdown
          selectedCity={{ id: cityId, value: cityName }}
          onChange={handleCity}
          width='499px'
          backgroundColor='white'
          margin='2px 93px 12px 93px'
          color='black'
          border='1px solid #9e9e9e'
          marginLabel='0 0 10px 0'
        />
        <CustomFormButton
          width='274px'
          margin='50px 206px 5px 205px'
          onClick={registration}
          text='Зарегистрироваться'
          textColorOnHovеr='#fff'
        />

        <div className='soulContract'>
          Нажимая кнопку «Зарегистрироваться», вы соглашаетесь с политикой
          конфиденциальности
        </div>
      </div>
      <style jsx>
        {`
          .authForm3 {
            position: relative;
            background: white;
            display: block;
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 797px;
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
            margin: 2px 93px 12px 93px;
            width: 499px;
            height: 110px;
          }

          .icon1 {
            position: relative;
            cursor: pointer;
            bottom: 36px;
            margin: 0 0 0 auto;
            right: 16px;
          }

          .formName {
            height: 22px;
            margin-bottom: 10px;
            font-size: 22px;
            font-family: 'PT Sans', sans-serif;
            color: black;
          }

          .calendarInputWrapper {
            margin-top: 10px;
          }

          .inputField {
            height: 53px;
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
            padding: 0 0 2px;
            background: inherit;
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
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            color: #9e9e9e;
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
            font-size: 22px;
            font-family: 'PT Sans', sans-serif;
            color: white;
            border: 0;
          }
        `}
      </style>
    </div>
  )
}

export default RegistrationForm
