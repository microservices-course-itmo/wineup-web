import React, { useReducer, useState } from 'react'
import { initialState, reducer, ReducerType } from '../AuthorizationForm/store'

/**
 * @param {Object} options - массив городов
 * @param {number} id - уникальный номер города
 * @param {string} value - имя города
 * @param {boolean} selected - устанавливает какой пункт списка выбрант
 */

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Dropdown = ({ options, defaultValue }) => {
  const [formState, dispatch] = useReducer(reducer, initialState, reducer)
  const [selectedCity, setSelectedCity] = useState(defaultValue)

  const toggleIsDropdownVisible = () => {
    dispatch({
      type: ReducerType.showDropdown,
      payload: !formState.isDropdownVisible,
    })
  }

  const handleSelect = item => {
    dispatch({ type: ReducerType.setCityId, payload: item.id })
    setSelectedCity(item.value)
    toggleIsDropdownVisible()
  }

  return (
    <div>
      <div className='inputForm'>
        <div className='formName'>Город</div>
        <div className='inputField' onClick={toggleIsDropdownVisible}>
          <span className='selectedCity'>{selectedCity}</span>
          <img
            className='arrow'
            src={`${prefix}assets/authorization/arrow.svg`}
            alt=''
          />
        </div>
        <div className='list'>
          {options.map(option => (
            <button
              className='option'
              key={option.id}
              onClick={() => handleSelect(option)}
            >
              {option.value}
            </button>
          ))}
        </div>
        <input className='errorMessage' disabled />
      </div>
      <style jsx>
        {`
          .inputField {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 53px;
            text-indent: 25px;
            width: 499px;
            font-size: 18px;
            font-family: 'PT Sans', sans-serif;
            border: 1px solid #9e9e9e;
            border-radius: ${formState.isDropdownVisible
              ? '5px 5px 0 0'
              : '5px'};
            cursor: pointer;
          }

          .inputForm {
            position: relative;
            display: flex;
            flex-direction: column;
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

          .list {
            position: absolute;
            display: ${formState.isDropdownVisible ? 'flex' : 'none'};
            flex-direction: column;
            z-index: 1000;
            top: 85px;
            width: 499px;
            text-indent: 35px;
            box-shadow: 0 0 11px rgba(0, 0, 0, 0.11);
          }

          .option {
            text-align: left;
            text-indent: 35px;
            background: white;
            border: none;
            border-left: 1px solid #9e9e9e;
            border-right: 1px solid #9e9e9e;
            padding: 5px 0 5px 0;
            font-size: 18px;
            line-height: 23px;
            color: #232323;
            cursor: pointer;
            outline: none;
          }

          .option:hover {
            background-color: rgba(142, 142, 142, 0.05);
            font-weight: bold;
          }

          .option:last-child {
            border-bottom: 1px solid #9e9e9e;
            border-radius: 0 0 5px 5px;
          }

          .option:first-child {
            padding: 15px 0 5px 0;
          }

          .arrow {
            margin-right: 18px;
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
