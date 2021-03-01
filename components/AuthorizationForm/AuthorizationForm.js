/* eslint-disable */
import { useCallback } from 'react'
import firebase from 'firebase'
import { useRouter } from 'next/router'
import { LocalStatesHandler } from './LocalStatesHandler'

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
  const router = useRouter()
  const localStatesHandler = LocalStatesHandler()
  const handleDate = useCallback(
    e => {
      const date = e.target.value
      const [day, month, year] = date.split('.')
      if (date < DATE_MAX_LENGTH) {
        localStatesHandler.setDate(date)
        if (pI(day) > DAY_LIMIT)
          localStatesHandler.calendarError[1](
            `'Ошибка: дней не может быть больше ${DAY_LIMIT}'`
          )
        if (pI(month) > MONTH_LIMIT)
          localStatesHandler.calendarError[1](
            `'Ошибка: месяцев всего ${MONTH_LIMIT}'`
          )
        if (pI(year) > CURRENT_YEAR)
          localStatesHandler.calendarError[1](
            'Приветствую тебя, гость из будущего!'
          )
        if (pI(year) > TOO_YOUNG)
          localStatesHandler.calendarError[1](
            `'Ошибка: не достигли ${CONSENT_YEAR} лет'`
          )
        else {
          localStatesHandler.calendarError[1]('')
          if (!(date.charAt(date.length - 1) === '.'))
            if (
              date.length === DAY_MAX_LENGTH ||
              date.length === DAY_PLUS_MONTH_MAX_LENGTH
            )
              if (day.length === 2) localStatesHandler.date[1](`${date}.`)
        }
      } else
        localStatesHandler.calendarError[1](
          'Предупреждение: вы пытаетесь ввести слишком длинную строку'
        )
    },
    [localStatesHandler]
  )

  const handleDay = useCallback(
    e => {
      const day = e.target.value
      if (day.length <= DAY_MAX_LENGTH) {
        if (pI(day) <= DAY_LIMIT) {
          localStatesHandler.date[1](
            [day, localStatesHandler.month[0], localStatesHandler.year[0]].join(
              '.'
            )
          )
          localStatesHandler.calendarError[1]('')
        } else
          localStatesHandler.calendarError[1](
            `'Ошибка: дней не может быть больше ${DAY_LIMIT}'`
          )
      }
    },
    [localStatesHandler]
  )
  const handleMonth = useCallback(
    e => {
      const month = e.target.value
      if (month.length <= MONTH_LIMIT) {
        if (pI(month) <= MONTH_LIMIT) {
          localStatesHandler.date[1](
            [localStatesHandler.day[0], month, localStatesHandler.year[0]].join(
              '.'
            )
          )
          localStatesHandler.calendarError[1]('')
        } else
          localStatesHandler.calendarError[1](
            `'Ошибка: месяцев всего ${MONTH_LIMIT}'`
          )
      }
    },
    [localStatesHandler]
  )
  const handleYear = useCallback(
    e => {
      const year = e.target.value
      if (year.length <= YEAR_LIMIT) {
        localStatesHandler.date[1](
          [localStatesHandler.day[0], localStatesHandler.month[0], year].join(
            '.'
          )
        )
        if (pI(year) > YEAR_LIMIT)
          localStatesHandler.calendarError[1](
            'Приветствую тебя, гость из будущего!'
          )
        if (pI(year) >= TOO_YOUNG)
          localStatesHandler.calendarError[1](
            `'Ошибка: не достигли ${CONSENT_YEAR} лет'`
          )
        else localStatesHandler.calendarError[1]('')
      }
    },
    [localStatesHandler]
  )
  const handleClickCalendar = useCallback(() => {
    localStatesHandler.isOpen[1](!localStatesHandler.isOpen[0])
  }, [localStatesHandler.isOpen])

  const handleUserName = useCallback(
    e => {
      const username = e.target.value
      localStatesHandler.username(username)
      if (USERNAME_MIN_LENGTH < username.length < USERNAME_MAX_LENGTH)
        localStatesHandler.nameError[1](
          `'Ошибка: слишком короткое значение. Допустимая длина ${USERNAME_MIN_LENGTH}-${USERNAME_MAX_LENGTH} символов'`
        )
      else {
        const format = /[ `1234567890№!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
        if (format.test(username))
          localStatesHandler.nameError[1]('Ошибка: недопустимые символы')
        else localStatesHandler.nameError[1]('')
      }
    },
    [localStatesHandler]
  )

  const handleTelephone = useCallback(
    e => {
      const telephone = e.target.value
      const format = /[ `№!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~a-zA-Zа-яА-Я]/
      if (format.test(telephone))
        localStatesHandler.telephoneError[1]('Ошибка: недопустимые символы')
      if (
        telephone.charAt(0) === '+' &&
        localStatesHandler.charAt(1) === '7' &&
        localStatesHandler.length <= TELEPHONE_MAX_SIZE
      )
        localStatesHandler.telephoneError[1]('')
      else
        localStatesHandler.telephoneError[1](
          'Ошибка: Неправильный формат номера телефона - +7-XXX-XXX-XX-XX'
        )
      localStatesHandler.telephone[1](e.target.value)
    },
    [localStatesHandler]
  )

  const handleTelCode = useCallback(e => {
    const telcode = e.target.value
    if (telcode.length <= 6) localStatesHandler.telCode(telcode)
  }, [])

  const handleFirstForm = async () => {
    if (
      localStatesHandler.telephoneError[0] === '' &&
      localStatesHandler.telephone[0].length === TELEPHONE_MAX_SIZE
    ) {
      const applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha',
        { size: 'invisible' }
      )
      try {
        localStatesHandler.sendCode[1](
          await firebase
            .auth()
            .signInWithPhoneNumber(
              localStatesHandler.telephone[0],
              applicationVerifier
            )
        )
      } catch (err) {
        throw new Error(
          `Error occurred during singing in with phone number: ${err}`
        )
      }
      localStatesHandler.authForm[1](2)
    } else
      localStatesHandler.telephoneError(
        'Ошибка: Неправильный формат номера телефона - +7-XXX-XXX-XX-XX'
      )
  }

  const tryHandleFirstFormAgain = async () => {
    localStatesHandler.authForm[0](1)
  }

  const handleSecondForm1 = async () => {
    if (
      localStatesHandler.telephoneError[0] === '' &&
      localStatesHandler.telephone[0].length === TELEPHONE_MAX_SIZE
    ) {
      try {
        const token = await localStatesHandler.sendCode[0]
          .confirm(localStatesHandler.telCode[0])
          .then(({ user: { ya } }) => ya)
        localStatesHandler.uid[1](token)
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
            localStatesHandler.user[1](json)
            localStatesHandler.accessToken[1](json.accessToken)
            localStatesHandler.refreshToken[1](json.refreshToken)
          })
          localStatesHandler.message[1](1)
          setTimeout(() => {
            router.push('/')
          }, 2000)
        } else localStatesHandler.authForm[1](3)
        localStatesHandler.telCodeError[1]('')
      } catch (err) {
        localStatesHandler.telCodeError[1]('Ошибка: неправильный код')
      }
    } else
      localStatesHandler.telephoneError(
        'Ошибка: Неправильный формат номера телефона - +7-XXX-XXX-XX-XX'
      )
  }
  const registration = async () => {
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 123,
      },
      body: JSON.stringify({
        birthday: localStatesHandler.date[0],
        cityId: 1,
        fireBaseToken: localStatesHandler.uid[0],
        name: localStatesHandler.username[0],
      }),
    }
    const response = await fetch(
      'http://77.234.215.138:48080/user-service/registration',
      data
    )
    if (response.status === 200) {
      response.json().then(json => {
        localStatesHandler.user[1](json)
        localStatesHandler.accessToken[1](json.accessToken)
        localStatesHandler.refreshToken[1](json.refreshToken)
      })
    }
    localStatesHandler.message[1](1)
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
              value={localStatesHandler.telephone[0]}
              onChange={handleTelephone}
            />
            <input
              className='errorMessage'
              value={localStatesHandler.telephoneError[0]}
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
              value={localStatesHandler.telephone[0]}
              onChange={handleTelephone}
            />
            <input
              className='errorMessage'
              value={localStatesHandler.telephoneError[0]}
              disabled
            />
          </div>
          <div className='inputForm'>
            <div className='formName'>Введите код</div>
            <input
              className='inputField'
              placeholder='_ _ _ _ _ _'
              value={localStatesHandler.telCode[0]}
              onChange={handleTelCode}
            />
            <input
              className='errorMessage'
              value={localStatesHandler.telCodeError[0]}
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
              value={localStatesHandler.username[0]}
              onChange={handleUserName}
            />
            <input
              className='errorMessage'
              value={localStatesHandler.nameError[0]}
              disabled
            />
          </div>
          <div className='inputForm'>
            <div className='formName'>Дата рождения</div>
            <input
              className='inputField'
              placeholder='ДД.ММ.ГГГГ'
              value={localStatesHandler.date[0]}
              onChange={handleDate}
            />
            <input
              className='errorMessage'
              value={localStatesHandler.calendarError[0]}
              disabled
            />
            <div onClick={handleClickCalendar}>
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
                value={localStatesHandler.day[0]}
                onChange={handleDay}
              />
              <input
                className='month'
                placeholder='ММ'
                value={localStatesHandler.month[0]}
                onChange={handleMonth}
              />
              <input
                className='year'
                placeholder='ГГГГ'
                value={localStatesHandler.year[0]}
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
            display: ${localStatesHandler.message[0] === 1 ? 'block' : 'none'};
          }
          .messageText {
            margin: 24.17px 0;
          }
          .wrapper {
            max-width: 1920px;
            padding: 0 0;
            margin: 0 auto;
          }
          .authForm {
            position: absolute;
            bottom: -300px;
            right: 0;
            z-index: 10;
            width: 70%;
            height: 100%;
            display: 'block';
          }
          .background {
            position: fixed;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.5;
            z-index: 8;
          }
          .authForm1 {
            position: absolute;
            right: 0;
            bottom: 0;
            background: white;
            display: ${localStatesHandler.authForm[0] === 1 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 512px;
            box-shadow: 0 0 18px rgba(0, 0, 0, 0.48);
          }
          .authForm2 {
            background: white;
            display: ${localStatesHandler.authForm[0] === 2 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 630px;
            box-shadow: 0 0 18px rgba(0, 0, 0, 0.48);
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
            border: 0;
            padding: 0;
            background: inherit;
          }
          .day {
            margin: 25px 4px 25px 25px;
            width: 46px;
            height: 41px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 5px 0 0 5px;
            text-indent: 10px;
          }
          .month {
            width: 41px;
            height: 41px;
            margin: 25px 4px 25px 0;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 0;
            text-indent: 5px;
          }
          .year {
            margin: 25px 25px 25px 0;
            width: 56px;
            height: 41px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 0 5px 5px 0;
            text-indent: 10px;
          }
          .calendar {
            visibility: ${localStatesHandler.isOpen[0] ? 'visible' : 'hidden'};
            width: 201px;
            height: 91px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            box-shadow: 0 0 11px rgba(0, 0, 0, 0.11);
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
            border: 0;
          }
          .telButton1:active {
            box-shadow: 0 0 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
          }
          .telButton21 {
            background: #232323;
            font: 22px Sans;
            color: white;
            border: 0;
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
            border: 0;
            display: inline-block;
            border-radius: 50px;
            width: 274px;
            height: 58px;
            margin: 58px 0 140px 0;
          }
          .telButton21:active {
            box-shadow: 0 0 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
          }
          .telButton22:active {
            box-shadow: 0 0 8px rgba(253, 0, 0, 0.5);
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
            border: 0;
          }
          .authButton:active {
            box-shadow: 0 0 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
          }
          a.authButton:focus {
            box-shadow: 0 0 8px rgba(253, 0, 0, 0.5);
            background: #af2f4e;
            outline: none;
          }
          .authForm3 {
            background: white;
            display: ${localStatesHandler.authForm[0] === 3 ? 'block' : 'none'};
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
            border: 0;
            border-bottom: 2px solid red;
          }
        `}
      </style>
    </div>
  )
}

export default AuthorizationForm
