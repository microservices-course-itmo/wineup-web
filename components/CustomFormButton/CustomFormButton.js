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
}) => (
  <button type='button' className='button' onClick={onClick}>
    {text}
    <style jsx>
      {`
        .button {
          width: ${width};
          height: ${height};
          margin: ${margin};
          background: ${background};
          color: ${color};
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
          color: ${colorOnHover};
          box-shadow: 0 0 8px rgba(253, 0, 0, 0.5);
        }
      `}
    </style>
  </button>
)

export default CustomFormButton
