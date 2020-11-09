import { useState, useCallback, useMemo } from 'react'

const AuthorizationForm = () => {
  const [authForm, setAuthForm] = useState(1)
  const [telephone, setTelephone] = useState('')
  const [telephoneError, setTelephoneError] = useState('')
  const [telCode, setTelCode] = useState('')
  const [date, setDate] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [day, month, year] = useMemo(() => date.split('.'), [date])
  const [username, setUserName] = useState('')
  const [nameError, setNameError] = useState('')
  const [calendarError, setCalendarError] = useState('')
  const handleDate = useCallback(
    e => {
      if (parseInt(e.target.value.split('.')[2], 10) > 2020) {
        setCalendarError('Приветствую тебя, гость из будущего!')
      } else if (parseInt(e.target.value.split('.')[2], 10) > 2012) {
        setCalendarError('Ошибка: не достигли 18 лет')
      } else if (parseInt(e.target.value.split('.')[0], 10) > 31) {
        setCalendarError('Ошибка: дней не может быть больше 31')
      } else if (parseInt(e.target.value.split('.')[1], 10) > 12) {
        setCalendarError('Ошибка: месяцев всего 12')
      } else {
        setCalendarError('')
      }
      if (e.target.value.split('.')[0].length > 2)
        setCalendarError('Ошибка: не надо так делать')
      if (e.target.value.length > 4)
        if (e.target.value.split('.')[1].length > 2)
          setCalendarError('Ошибка: не надо так делать')
      if (e.target.value.length > 7)
        if (e.target.value.split('.')[2].length > 4)
          setCalendarError('Ошибка: не надо так делать')
      if (calendarError === '') {
        if (!(e.target.value.charAt(e.target.value.length - 1) === '.')) {
          if (e.target.value.length === 2 || e.target.value.length === 5) {
            setDate(`${e.target.value}.`)
          } else if (e.target.value.length < 11) {
            setDate(e.target.value)
          }
        }
      }
    },
    [setDate, calendarError]
  )

  const handleDay = useCallback(
    e => {
      if (e.target.value.length <= 2) {
        if (parseInt(e.target.value, 10) < 32) {
          setDate([e.target.value, month, year].join('.'))
          setCalendarError('')
        } else setCalendarError('Ошибка: дней не может быть больше 31')
      }
    },
    [month, year, setDate]
  )
  const handleMonth = useCallback(
    e => {
      if (e.target.value.length <= 2) {
        if (parseInt(e.target.value, 10) < 13) {
          setDate([day, e.target.value, year].join('.'))
          setCalendarError('')
        } else setCalendarError('Ошибка: месяцев всего 12')
      }
    },
    [day, year, setDate]
  )
  const handleYear = useCallback(
    e => {
      if (e.target.value.length <= 4) {
        setDate([day, month, e.target.value].join('.'))
        if (parseInt(e.target.value, 10) > 2020) {
          setCalendarError('Приветствую тебя, гость из будущего!')
        } else if (parseInt(e.target.value, 10) > 2012) {
          setCalendarError('Ошибка: не достигли 18 лет')
        } else {
          setCalendarError('')
        }
      }
    },
    [day, month, setDate]
  )
  const handleClickCalendar = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const handleUserName = useCallback(
    e => {
      setUserName(e.target.value)
      if (e.target.value.length < 2) {
        setNameError(
          'Ошибка: слишком короткое значение. Допустимая длина 2-15 символов'
        )
      } else if (e.target.value.length > 15) {
        setNameError(
          'Ошибка: слишком длинное значение. Допустимая длина 2-15 символов'
        )
      } else {
        const format = /[ `1234567890№!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
        if (format.test(e.target.value)) {
          setNameError('Ошибка: недопустимые символы')
        } else {
          setNameError('')
        }
      }
    },
    [setNameError]
  )
  const handleTelephone = useCallback(
    e => {
      const format = /[ `№!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~a-zA-Zа-яА-Я]/
      if (format.test(e.target.value))
        setTelephoneError('Ошибка: недопустимые символы')
      else if (
        (e.target.value.charAt(0) === '+' &&
          e.target.value.charAt(1) === '7' &&
          e.target.value.length <= 12) ||
        (e.target.value.charAt(0) === '8' && e.target.value.length <= 11) ||
        e.target.value.length <= 2
      )
        setTelephoneError('')
      else
        setTelephoneError(
          'Ошибка: Неправильный формат номера телефона, допустимы лишь +7 и 8'
        )
      setTelephone(e.target.value)
    },
    [setTelephoneError]
  )
  const handleTelCode = useCallback(e => {
    if (e.target.value.length <= 6) setTelCode(e.target.value)
  }, [])
  const handleFirstForm = useCallback(() => {
    setAuthForm(2)
  }, [])
  const handleSecondForm1 = useCallback(() => {
    setAuthForm(3)
  }, [])
  const handleSecondForm2 = useCallback(() => {
    setAuthForm(1)
  }, [])
  const handleThirdForm = useCallback(() => {
    setAuthForm(1)
  }, [])
  return (
    <div className='authForm'>
      <div className='authForm1'>
        <div className='header'>Войдите или зарегистрируйтесь</div>
        <div className='inputForm'>
          <div className='formName'>Введите номер телефона</div>
          <input
            className='inputField'
            placeholder='+7- (_ _ _) - _ _ _ - _ _ - _ _'
            value={telephone}
            onChange={handleTelephone}
          />
          <input className='errorMessage' value={telephoneError} disabled />
        </div>
        <div className='telButton1' onClick={handleFirstForm}>
          Запросить код подтверждения
        </div>
      </div>
      <div className='authForm2'>
        <div className='header'>Войдите или зарегистрируйтесь</div>
        <div className='inputForm'>
          <div className='formName'>Введите номер телефона</div>
          <input
            className='inputField'
            placeholder='+7- (_ _ _) - _ _ _ - _ _ - _ _'
            value={telephone}
            onChange={handleTelephone}
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
        </div>
        <div className='telButton21'>
          <div className='telButton2Inner' onClick={handleSecondForm1}>
            Подтвердить
          </div>
        </div>
        <div className='telButton22'>
          <div className='telButton2Inner' onClick={handleSecondForm2}>
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
            value={username}
            onChange={handleUserName}
          />
          <input className='errorMessage' value={nameError} disabled />
        </div>
        <div className='inputForm'>
          <div className='formName'>Дата рождения</div>
          <input
            className='inputField'
            placeholder='ДД.ММ.ГГГГ'
            value={date}
            onChange={handleDate}
          />
          <input className='errorMessage' value={calendarError} disabled />
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
              value={day}
              onChange={handleDay}
            />
            <input
              className='month'
              placeholder='ММ'
              value={month}
              onChange={handleMonth}
            />
            <input
              className='year'
              placeholder='ГГГГ'
              value={year}
              onChange={handleYear}
            />
          </div>
        </div>
        <div className='inputForm'>
          <div className='formName'>Город</div>
          <input className='inputField' placeholder='Москва' />
          <input className='errorMessage' disabled />
          <img className='icon2' src='assets/authorization/arrow.svg' alt='' />
        </div>
        <div className='authButton' onClick={handleThirdForm}>
          Зарегистрироваться
        </div>
        <div className='soulContract'>
          Нажимая кнопку «Зарегистрироваться», вы соглашаетесь с политикой
          конфиденциальности
        </div>
      </div>
      <style jsx>
        {`
          .authForm {
            background-image: url(assets/authorization/signUp.svg);
            background-repeat: repeat;
            height: 1996px;
            display: flex;
            justify-content: center;
          }
          .authForm1 {
            background: white;
            display: ${authForm === 1 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 512px;
            position: relative;
            top: 110px;
            margin: 0px 377px 110px 378px;
            box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.48);
          }
          .authForm2 {
            background: white;
            display: ${authForm === 2 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 630px;
            position: relative;
            top: 110px;
            margin: 0px 377px 110px 378px;
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
            visibility: ${isOpen ? 'visible' : 'hidden'};
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
            display: ${authForm === 3 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 797px;
            position: relative;
            top: 110px;
            margin: 0px 377px 110px 378px;
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
