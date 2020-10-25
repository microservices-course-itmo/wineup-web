import { useCallback } from 'react'

const AuthorizationForm = () => {
  const handleClickCalendar = useCallback(e => {
    e.preventDefault()
    if (document.getElementById('calendar').style.visibility === 'hidden') {
      document.getElementById('calendar').style.visibility = 'visible'
    } else {
      document.getElementById('calendar').style.visibility = 'hidden'
    }
  }, [])

  return (
    <div>
      <div className='authForm'>
        <div className='header'>Войдите или зарегистрируйтесь</div>
        <div className='inputForm'>
          <div className='formName'>Введите имя</div>
          <input className='inputField' placeholder='Иван' />
        </div>
        <div className='inputForm'>
          <div className='formName'>Дата рождения</div>
          <input className='inputField' placeholder='ДД.ММ.ГГГГ' />
          <div onClick={handleClickCalendar}>
            <img
              className='icon1'
              src='assets/authorization/calendar.svg'
              alt=''
            />
          </div>
          <div className='calendar' id='calendar'>
            <div className='day'>ДД</div>
            <div className='month'>ММ</div>
            <div className='year'>ГГГГ</div>
          </div>
        </div>
        <div className='inputForm'>
          <div className='formName'>Город</div>
          <input className='inputField' placeholder='Москва' />
          <img className='icon2' src='assets/authorization/arrow.svg' alt='' />
        </div>
        <div className='authButton'>Зарегистрироваться</div>
        <div className='soulContract'>
          Нажимая кнопку «Зарегистрироваться», вы соглашаетесь с политикой
          конфиденциальности
        </div>
      </div>
      <style jsx>
        {`
          .day {
            margin: 25px 4px 25px 25px;
            width: 46px;
            height: 41px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 5px 0px 0px 5px;
          }
          .month {
            width: 41px;
            height: 41px;
            margin: 25px 4px 25px 0px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 0px;
          }
          .year {
            margin: 25px 25px 25px 0px;
            width: 56px;
            height: 41px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 0px 5px 5px 0px;
          }
          .calendar {
            visibility: hidden;
            width: 201px;
            height: 91px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.11);
            border-radius: 5px;
            position: relative;
            left: 510px;
            top: -92px;
            background: white;
            display: flex;
          }
          .icon1 {
            position: relative;
            top: -37px;
            left: 463px;
          }
          .icon2 {
            position: relative;
            top: -29.5px;
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
          .authForm {
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 797px;
            margin: 110px 377px 110px 378px;
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
            margin: 30px 93px 30px 93px;
            width: 499px;
            height: 85px;
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
