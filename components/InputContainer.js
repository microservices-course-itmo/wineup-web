import { useState } from 'react'
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
            defaultChecked={buttonInput.value}
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
            defaultValue=''
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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='criteria-title'>{title}</div>
      <div className='list-container'>
        <InputList hidden={false} inputType={type} inputList={inputList} />
        <button
          className='arrow-btn'
          onClick={() => setIsOpen(!isOpen)}
          type='button'
        >
          <img
            className={` arrow-${isOpen ? 'down' : 'up'}`}
            src={`assets/arrow${isOpen ? 'Down' : 'Up'}.svg`}
            alt='arrow'
          />
        </button>
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
        `}
      </style>
    </>
  )
}

export default InputContainer
