import React from 'react'

const options = [
  {
    id: 1,
    value: 'Москва',
  },
  {
    id: 2,
    value: 'Санкт-Петербург',
  },
]

/**
 * @param {number} optional id for Profile change handling
 * @param {{
 *   id: number,
 *   value: string,
 * }} selectСity - выбранный город
 * @param {function} onChange - функция для смены значения
 */
const CitySelect = ({ id, selectedCity, onChange }) => {
  return (
    <select id={id} value={selectedCity.value} onChange={onChange}>
      {options.map(({ id, value }) => (
        <option id={id} key={id} className='option' value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

export default CitySelect
