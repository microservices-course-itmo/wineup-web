import React from 'react'

const CustomFormButton = ({
  width = '100%',
  margin = 0,
  onClick = () => {},
  text,
  disabled
}) => (
  <button type='button' className='button' onClick={onClick} disabled={disabled}>
    {text}
    <style jsx>
      {`
        .button {
          width: ${width};
          height: 58px;
          margin: ${margin};
          background-color: ${!disabled ? '#232323' : '#e9e9e9'};
          color: ${disabled ? 'rgba(0,0,0,0.45)' : 'white'};
          font-size: 22px;
          font-family: 'PT Sans', sans-serif;
          font-weight: 400;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          outline: none;
          transition: 0.2s;
        }
        .button:hover {
          background-color: ${!disabled ? '#af2f4e' : '#e9e9e9'};
          box-shadow: ${!disabled && '0 0 8px rgba(253, 0, 0, 0.5)'};
        }
      `}
    </style>
  </button>
)

export default CustomFormButton
