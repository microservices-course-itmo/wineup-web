import React, { useState } from 'react'

/**
 * @param {Object} options - массив городов
 * @param {number} id - уникальный номер города
 * @param {string} value - имя города
 * @param {string} defaultValue - дефолтное значение списка
 */

const options = [
  {
    id: 1,
    value: 'Москва',
    selected: true,
  },
  {
    id: 2,
    value: 'Санкт-Петербург',
    selected: false,
  },
]

export const cityIndexSeparator = '\u0333'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * @param {number} optional id for Profile change handling
 * @param {{
 *   id: number,
 *   value: string,
 * }} selectСity - выбранный город
 * @param {function} onChange - функция для смены значения
 */
const Dropdown = ({
  id,
  width,
  selectedCity,
  backgroundColor,
  margin,
  colorLabel,
  color,
  border,
  marginLabel,
  onChange,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const toggleIsDropdownVisible = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  return (
    <div>
      <div className='inputForm'>
        <div className='formName'>Город</div>
        <div className='wrapper'>
          <input
            className='inputField'
            value={selectedCity.value}
            autoComplete='off'
            placeholder={selectedCity.value}
            onClick={toggleIsDropdownVisible}
            readOnly
          />
          <img
            className='arrow'
            src={`${prefix}assets/authorization/arrow.svg`}
            alt=''
          />
        </div>
        <div className='list'>
          {options.map(({ id: cityId, value }) => (
            <button
              id={`${id}${cityIndexSeparator}${cityId}`}
              key={`city-option-${cityId}`}
              type='button'
              value={value}
              className='option'
              onClick={event => {
                onChange(event)
                toggleIsDropdownVisible()
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          input {
            outline: none;
          }
          .wrapper {
            position: relative;
            display: flex;
          }

          .inputField {
            color: ${color};
            background: ${backgroundColor};
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 53px;
            text-indent: 25px;
            width: ${width};
            font-size: 18px;
            font-family: 'PT Sans', sans-serif;
            border: ${border};
            border-radius: ${isDropdownVisible ? '5px 5px 0 0' : '5px'};
            cursor: pointer;
            z-index: 100;
          }

          .inputForm {
            position: relative;
            margin: ${margin};
            width: ${width};
            /*height: 110px;*/
          }

          .formName {
            height: 22px;
            margin: ${marginLabel};
            font-size: 22px;
            font-family: 'PT Sans', sans-serif;
            color: ${colorLabel};
          }

          .list {
            position: absolute;
            display: ${isDropdownVisible ? 'flex' : 'none'};
            flex-direction: column;
            z-index: 1000;
            top: 85px;
            width: ${width};
            text-indent: 35px;
            box-shadow: 0 0 11px rgba(0, 0, 0, 0.11);
          }

          .option {
            text-align: left;
            text-indent: 35px;
            background: white;
            border: none;
            border-left: ${border};
            border-right: ${border};
            padding: 5px 0 5px 0;
            font-size: 18px;
            line-height: 23px;
            color: #232323;
            cursor: pointer;
            outline: none;
          }

          .option:hover {
            font-weight: bold;
          }

          .option:last-child {
            border-bottom: ${border};
            border-radius: 0 0 5px 5px;
          }

          .option:first-child {
            padding: 15px 0 5px 0;
          }

          .arrow {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 18px;
          }
        `}
      </style>
    </div>
  )
}

export default Dropdown
