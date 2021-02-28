import React, { useState } from 'react'

const CustomInput = ({ id, label, text, onChange }) => {
  const [isReadOnly, setReadOnly] = useState(true)
  return (
    <div className='container'>
      <label htmlFor='name-input'>
        <div className='label-text'>{label}</div>
        <div className='input-container'>
          <input
            id={id}
            readOnly={isReadOnly}
            disabled={isReadOnly}
            defaultValue={text}
            onChange={onChange}
          />
          <div
            className='edit-icon'
            onClick={() => setReadOnly(prevState => !prevState)}
          >
            <img src='assets/edit-icon.svg' alt='Edit' />
          </div>
        </div>
      </label>
      <style jsx>
        {`
          .input-container {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
          }
          .edit-icon {
            margin-left: -40px;
            cursor: pointer;
          }
          .label-text {
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
        `}
      </style>
    </div>
  )
}

export default CustomInput
