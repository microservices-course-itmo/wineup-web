import { useCallback } from 'react'
import { ReducerType } from '../AuthorizationForm/store'
import CustomFormButton from '../CustomFormButton/CustomFormButton'

const phoneRegex = /[ `1234567890№!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
const TELEPHONE_MAX_SIZE = 12

const TelephoneForm = props => {
  const { dispatch, telephone, telephoneError } = props
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

  const handlePressEnter = event => {
    if (event.key === 'Enter') {
      handleFirstForm()
    }
  }

  return (
    <div className='authForm1'>
      <div className='header'>Войдите или зарегистрируйтесь</div>

      <div className='inputForm'>
        <div className='formName'>Введите номер телефона</div>

        <input
          className='inputField'
          placeholder='+7- (_ _ _) - _ _ _ - _ _ - _ _'
          value={telephone}
          onChange={handleTelephone}
          onKeyDown={handlePressEnter}
        />

        {telephoneError && (
          <span className='errorMessage'>{telephoneError}</span>
        )}
      </div>

      <CustomFormButton
        width='464px'
        margin='50px 120px 5px 119px'
        onClick={handleFirstForm}
        text='Запросить код подтверждения'
      />

      <div id='recaptcha' />

      <style jsx>
        {`
          .authForm1 {
            background: white;
            display: block;
            border: 2px solid black;
            border-radius: 10px;
            width: 685px;
            height: 512px;
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
            margin: 2px 93px 2px 93px;
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
        `}
      </style>
    </div>
  )
}

export default TelephoneForm
