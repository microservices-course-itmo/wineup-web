import React, { useState } from 'react'

const emptyInputValue = 'Не указано'

/**
 * @param{string} id - id поля
 * @param{string} label - label для поля
 * @param{string} value - Значение поля
 * @param{boolean} hasError - Ошибка при валидации
 * @param{function} onChange - Функция-обработчик изменений поля
 */
const CustomInput = ({ id, label, value, hasError, onChange }) => {
  const [isReadOnly, setReadOnly] = useState(true)
  return (
    <div className='container'>
      <label htmlFor={id}>
        <div className='labelText'>{label}</div>
        <div className='inputContainer'>
          <input
            id={id}
            className={hasError ? 'hasError' : null}
            autoComplete='off'
            readOnly={isReadOnly}
            disabled={isReadOnly}
            value={value}
            placeholder={!value ? emptyInputValue : null}
            onChange={onChange}
          />
          <div
            className='editIcon'
            onClick={() => setReadOnly(prevState => !prevState)}
          >
            <img src='assets/edit-icon.svg' alt='Edit' />
          </div>
        </div>
      </label>
      <style jsx>
        {`
          .inputContainer {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
          }

          .editIcon {
            margin-left: -40px;
            cursor: pointer;
          }

          .labelText {
            margin: 35px 0 15px;
            font-size: 24px;
            color: #818181;
          }

          input {
            width: 100%;
            height: 54px;
            padding: 15px;
            font-weight: normal;
            font-size: 22px;
            background-color: rgba(196, 196, 196, 0.16);
            border: 2px solid #9e9e9e;
          }
          input.hasError {
            border: 2px solid red;
            background-color: lightpink;
          }
        `}
      </style>
    </div>
  )
}

export default CustomInput
