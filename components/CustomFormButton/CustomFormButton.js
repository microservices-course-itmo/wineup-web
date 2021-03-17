import React from 'react'

const CustomFormButton = ({
  width = '100%',
  height = '58px',
  margin = '0',
  onClick = () => {},
  text,
  fontWeight = 400,
  fontSize = '22px',
  background = '#232323',
  color = 'white',
  backgroundOnHover = '#af2f4e',
  colorOnHover = color,
  border = 'none',
  disabled,
}) => (
  <button
    type='button'
    className='button'
    onClick={onClick}
    disabled={disabled}
  >
    {text}
    <style jsx>
      {`
        .button {
          width: ${width};
          height: ${height};
          margin: ${margin};
          background-color: ${!disabled ? background : '#e9e9e9'};
          color: ${disabled ? color : 'white'};
          font-size: ${fontSize};
          font-family: 'PT Sans', sans-serif;
          font-weight: ${fontWeight};
          border: ${border};
          border-radius: 50px;
          cursor: pointer;
          outline: none;
          transition: 0.2s;
        }
        .button:hover {
          background: ${backgroundOnHover};
          background-color: ${!disabled ? colorOnHover : '#e9e9e9'};
          box-shadow: ${!disabled && '0 0 8px rgba(253, 0, 0, 0.5)'};
        }
      `}
    </style>
  </button>
)

export default CustomFormButton
