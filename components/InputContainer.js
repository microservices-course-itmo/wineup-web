import React, { useState } from 'react'
import CustomCheckBox from './CustomCheckBox'

const InputList = ({ hidden, inputType, inputList }) => {
  let customInputList
  switch (inputType) {
    case 'checkbox':
      customInputList = inputList.map(checkbox => (
        <li>
          <CustomCheckBox
            id={checkbox.id}
            name={checkbox.name}
            value={checkbox.value}
            label={checkbox.textLabel}
          />
        </li>
      ))
      break
    case 'buttons':
      customInputList = inputList.map(buttonInput => (
        <li>
          <input
            type='radio'
            id={buttonInput.id}
            name={buttonInput.name}
            checked={buttonInput.value}
            value={buttonInput.id}
          />
          <label htmlFor={buttonInput.id}>{buttonInput.textLabel}</label>
        </li>
      ))
      break
    case 'number':
      customInputList = inputList.map(numberInput => (
        <li>
          <label htmlFor={numberInput.id}>{numberInput.textLabel}</label>
          <input
            type='number'
            placeholder={numberInput.value}
            id={numberInput.id}
            value=''
          />
        </li>
      ))
      break
    default:
      customInputList = <li className={`${inputType} default`} />
      break
  }
  return (
    <>
      <ul className={`${hidden ? 'hidden' : 'visible'} input-list`}>
        {customInputList}
      </ul>
      <style jsx>
        {`
          .input-list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 50%;
          }
          .hidden {
            display: none;
          }
        `}
      </style>
    </>
  )
}

const InputContainer = ({ title, type, inputList }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='criteria-title'>{title}</div>
      <div className='list-container'>
        <InputList hidden={false} inputType={type} inputList={inputList} />
        <button
          type='button'
          className={open ? 'arrow-up' : 'arrow-down'}
          onClick={() => setOpen(prevState => !prevState)}
        >
          <svg
            width='16'
            height='9'
            viewBox='0 0 16 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.0179 0L8 5.42578L1.98213 0L0 1.78711L8 9L16 1.78711L14.0179 0Z'
              fill='white'
            />
          </svg>
        </button>
        {/* <InputList hidden inputType={type} inputList={inputList} /> */}
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
          .arrow-down {
            background-color: transparent;
            border: 0;
          }
        `}
      </style>
    </>
  )
}

export default InputContainer
