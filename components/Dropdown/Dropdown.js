import React from 'react'

/**
 * @param {Object} options - массив городов
 * @param {number} id - уникальный номер города
 * @param {string} value - имя города
 * @param {boolean} selected - устанавливает какой пункт списка выбрант
 */

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Dropdown = ({ options }) => {
  return (
    <div>
      <div className='inputForm'>
        <div className='formName'>Город</div>
        <select className='custom-select'>
          {options.map(option => (
            <option key={option.id} selected={option.selected}>
              {option.value}
            </option>
          ))}
        </select>
        <input className='errorMessage' disabled />
      </div>
      <style jsx>
        {`
          .inputForm {
            margin: 2px 93px 12px 93px;
            width: 499px;
            height: 110px;
          }
          .formName {
            height: 22px;
            margin-bottom: 10px;
            font-size: 22px;
            font-family: 'PT Sans', sans-serif;
            color: black;
          }
          select {
            height: 53px;
            text-indent: 25px;
            width: 499px;
            font-size: 18px;
            font-family: 'PT Sans', sans-serif;
            border: 1px solid #9e9e9e;
            border-radius: 5px;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background: transparent;
            background-image: url('${prefix}assets/authorization/arrow.svg');
            background-repeat: no-repeat;
            background-position-x: 96.5%;
            background-position-y: 50%;
            cursor: pointer;
          }
          .custom-select:active {
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
        `}
      </style>
    </div>
  )
}

export default Dropdown
