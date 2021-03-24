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
  return (
    <>
      <div className='infoList'>
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
      <footer className='buttonFooter'>
        <button type='reset' className='btn cancelBtn' onClick={onCancel}>
          Отменить
        </button>
        <button type='button' className='btn submitBtn' onClick={onSubmit}>
          Подтвердить
        </button>
      </footer>
      <style jsx>
        {`
          .buttonFooter {
            display: flex;
            justify-content: space-around;
            margin-top: 150px;
          }

          .infoList {
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

          .logoutBtn,
          .cancelBtn {
            background-color: #931332;
            border-color: #931332;
            color: white;
          }

          .submitBtn {
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