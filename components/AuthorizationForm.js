const AuthorizationForm = () => {
  return (
    <div>
      <div className='form'>
        <div className='formName'>Введите имя</div>
        <input className='inputField' placeholder='Иван' />
      </div>
      <div className='form'>
        <div className='formName'>Дата рождения</div>
        <input className='inputField' placeholder='ДД.ММ.ГГГГ' />
      </div>
      <div className='form'>
        <div className='formName'>Город</div>
        <input className='inputField' placeholder='Москва' />
      </div>
      <div className='form'>
        <div className='formName'>Номер телефона</div>
        <input className='inputField' placeholder='+7 (9хх) ххх - хх - хх' />
      </div>
      <div className='form'>
        <div className='formName'>Пароль</div>
        <input className='inputField' placeholder='user93592394712' />
      </div>
      <div className='form'>
        <div className='formName'>Логин</div>
        <input className='inputField' placeholder='qwerty65432' />
      </div>
      <style jsx>
        {`
          .form {
            height: 40px;
            width: 330px;
            margin: 10px;
          }
          .formName {
            margin: 0 0 0 2px;
            font: 12px Sans;
            color: red;
          }
          .inputField {
            width: 100%;
            border: 0px;
            border-bottom: 2px solid red;
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
