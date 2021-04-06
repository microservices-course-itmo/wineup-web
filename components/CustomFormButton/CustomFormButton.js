import React from 'react'

/**
 * @param {string} width
 * @param {string} height
 * @param {string} margin
 * @param {string} padding
 * @param {function} onClick
 * @param {string} text
 * @param {number} fontWeight
 * @param {string} fontSize
 * @param {string} backgroundColor
 * @param {string} color
 * @param {string} backgroundOnHover
 * @param {string} colorOnHover
 * @param {string} border
 * @param {boolean} disabled
 */
const CustomFormButton = ({
  width = '100%',
  height = '58px',
  margin = '0',
  padding = '0',
  onClick = () => {},
  text,
  fontWeight = 400,
  fontSize = '22px',
  backgroundColor = '#232323',
  color = 'white',
  backgroundOnHover = '#af2f4e',
  colorOnHover = backgroundOnHover,
  textColorOnHovеr = '#af2f4e',
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
          padding: ${padding};
          background-color: ${disabled ? '#e9e9e9' : backgroundColor};
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
          color: ${textColorOnHovеr};
          background: ${backgroundOnHover};
          background-color: ${disabled ? '#e9e9e9' : colorOnHover};
          box-shadow: ${disabled ? 'none' : '0 0 8px rgba(253, 0, 0, 0.5)'};
        }
      `}
    </style>
  </button>
)

export default CustomFormButton
