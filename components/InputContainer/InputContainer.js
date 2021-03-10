import React, { useState, useMemo, useCallback } from 'react'
import CustomCheckBox from '../CustomCheckBox'
import InputPrice from '../InputPrice'
import ButtonGroup from '../ButtonGroup'

export const InputGroupType = {
  checkboxWithInput: 'checkboxWithInput',
  checkbox: 'checkbox',
  buttons: 'buttons',
  number: 'number',
}

const inputPlaceholderTitle = {
  countryFrom: 'страны',
  wineSort: 'сорта ',
}

/**
 * @param {string} type - 'checkbox' || 'number' || 'buttons'
 * @param {Array<Object>} inputList - Список полей ввода для этой группы
 * @param {function} onChange - Функция-обработчик изменений для этой группы полей ввода
 * @param props
 * @returns {JSX.Element} InputGroup - Список кастомных полей ввода одной группы
 */

const InputGroup = ({ type, inputList, onChange, visible, ...props }) => {
  let customInputList
  switch (type) {
    case InputGroupType.checkbox:
    case InputGroupType.checkboxWithInput:
      customInputList = inputList.map(checkbox => (
        <li key={checkbox.id}>
          <CustomCheckBox checkbox={checkbox} onChange={onChange} />
        </li>
      ))
      break
    case InputGroupType.buttons:
      customInputList = <ButtonGroup buttons={inputList} onChange={onChange} />
      break
    case InputGroupType.number:
      customInputList = (
        <InputPrice
          inputFrom={inputList[0]}
          inputTo={inputList[1]}
          currency={props.currency}
          onChange={onChange}
        />
      )
      break
    default:
      customInputList = <li className={`${type} default`} />
      break
  }
  const fullWidth = type === 'number'
  return (
    <>
      <ul
        className={`input-list${visible ? '' : '-invisible'} ${
          fullWidth ? 'full-width' : ''
        }`}
      >
        {customInputList}
      </ul>
      <style jsx>
        {`
          .input-list {
            display: flex;
            flex-direction: column;
            align-items: baseline;
            margin: 0 auto;
            width: 165px;
          }
          .input-list-invisible {
            display: none;
          }
          .full-width {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

const InputContainer = ({ id, title, type, inputList, onChange }) => {
  const [filterText, setFilterText] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  const filteredList = useMemo(
    () =>
      filterText
        ? inputList.filter(inputElement =>
            inputElement.textLabel.toLowerCase().includes(filterText)
          )
        : inputList,
    [filterText, inputList]
  )

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = useCallback(e => {
    e.preventDefault()
    setFilterText(e.target.value.toLowerCase())
  }, [])

  return (
    <>
      <div className='criteria-title'>{title}</div>
      {type === InputGroupType.checkboxWithInput && (
        <input
          type='text'
          value={filterText}
          placeholder={`Введите название ${inputPlaceholderTitle[id] || ''}`}
          className='inputField'
          onChange={handleInputChange}
        />
      )}
      <div className='list-container'>
        {filteredList && filteredList.length !== 0 ? (
          <>
            <InputGroup
              type={type}
              inputList={filteredList}
              onChange={onChange}
              visible={isOpen}
            />
            <button className='arrow-btn' onClick={handleClick} type='button'>
              <img
                className={`arrow-${isOpen ? 'up' : 'down'}`}
                src={`/assets/arrow${isOpen ? 'Up' : 'Down'}.svg`}
                alt='arrow'
              />
            </button>
          </>
        ) : (
          <span className='empty-filter-message'>Нет данных по фильтру</span>
        )}
      </div>
      <style jsx>
        {`
          .list-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .criteria-title {
            color: white;
            font-size: 22px;
            font-weight: bold;
          }
          .arrow-btn {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px;
          }
          .inputField {
            display: flex;
            margin: 22px auto 10px auto;
            height: 40px;
            width: 335px;
            text-indent: 25px;
            font: 18px Sans;
            color: #fff;
            background: transparent;
            border: 1px solid #9e9e9e;
            border-radius: 50px;
          }
          .inputField:focus {
            outline: none;
          }
          .empty-filter-message {
            color: #fff;
          }
        `}
      </style>
    </>
  )
}

export default InputContainer
