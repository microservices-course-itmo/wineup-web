import { useCallback } from 'react'
import { ReducerType } from './store'

const phoneRegex = /[ `1234567890№!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
const TELEPHONE_MAX_SIZE = 12

const TelephoneForm = props => {
  const { dispatch, authForm, telephone, telephoneError } = props
  const handleTelephone = useCallback(
    e => {
      const telephone = e.target.value
      if (phoneRegex.test(telephone))
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
    [dispatch]
  )

  const handleFirstForm = async () => {
    if (telephoneError === '' && telephone.length === TELEPHONE_MAX_SIZE) {
      dispatch({ type: ReducerType.setAuthForm, payload: 2 })
    } else
      dispatch({
        type: ReducerType.setTelephoneError,
        payload:
          'Ошибка: Неправильный формат номера телефона - +7-XXX-XXX-XX-XX',
      })
  }

  return (
    <div>
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
        <div id='telButton1' className='telButton1' onClick={handleFirstForm}>
          Запросить код подтверждения
        </div>
        <div id='recaptcha' />
      </div>
      <style jsx>
        {`
          .authForm1 {
            position: absolute;
            right: 0px;
            bottom: 0px;
            background: white;
            display: ${authForm === 1 ? 'block' : 'none'};
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 512px;
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
        `}
      </style>
    </div>
  )
}

export default TelephoneForm
