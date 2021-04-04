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
  colorOnHover = backgroundOnHover,
  textColorOnHovor = '#af2f4e',
  border = 'none',
  disabled = false,
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
          background-color: ${disabled ? '#e9e9e9' : background};
          color: ${disabled ? 'white' : color};
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
          color: ${textColorOnHovor};
          background: ${backgroundOnHover};
          background-color: ${disabled ? '#e9e9e9' : colorOnHover};
          box-shadow: ${disabled ? 'none' : '0 0 8px rgba(253, 0, 0, 0.5)'};
        }
      `}
    </style>
  </button>
)

export default CustomFormButton
