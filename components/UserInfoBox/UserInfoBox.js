import React from 'react'
import CustomInput from '../CustomInput'

const InputTypes = {
  name: 'name-input',
  cityName: 'city-input',
  phone: 'phone-input',
}

/**
 * @param{string} name
 * @param{string} cityName
 * @param{string} phone
 * @param{function} onInputChange
 * @param{function} onSubmit
 * @param{function} onCancel
 */
const UserInfoBox = ({
  name,
  cityName,
  phone,
  onInputChange,
  onSubmit,
  onCancel,
}) => {
  // const [nameInputState, setNameInputState] = useState(name)
  // const [cityInputState, setCityInputState] = useState(cityName)
  // const [phoneInputState, setPhoneInputState] = useState(phone)
  return (
    <>
      <div className='info-list'>
        <CustomInput
          id={InputTypes.name}
          label='Ваше имя'
          value={name}
          onChange={onInputChange}
        />
        <CustomInput
          id={InputTypes.cityName}
          label='Город'
          value={cityName}
          onChange={onInputChange}
        />
        <CustomInput
          id={InputTypes.phone}
          label='Телефон'
          value={phone}
          onChange={onInputChange}
        />
      </div>
      <footer className='button-footer'>
        <button type='reset' className='btn cancel-btn' onClick={onCancel}>
          Отменить
        </button>
        <button type='button' className='btn submit-btn' onClick={onSubmit}>
          Подтвердить
        </button>
      </footer>
      <style jsx>
        {`
          .button-footer {
            display: flex;
            justify-content: space-around;
            margin-top: 150px;
          }

          .info-list {
            display: flex;
            flex-flow: column nowrap;
            padding: 0 20px;
          }

          .btn {
            border: 1px solid;
            border-radius: 50px;
            font-size: 18px;
            padding: 5px 60px;
            cursor: pointer;
          }

          .logout-btn,
          .cancel-btn {
            background-color: #931332;
            border-color: #931332;
            color: white;
          }

          .submit-btn {
            background-color: transparent;
            border-color: #717171;
            color: #717171;
          }
        `}
      </style>
    </>
  )
}

export default UserInfoBox
