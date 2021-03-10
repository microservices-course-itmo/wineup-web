import React from 'react'

const Button = ({ width = '100%', margin = 0, onClick = () => {}, text }) => (
  <button type='button' className='button' onClick={onClick}>
    {text}
    <style jsx>
      {`
        .button {
          width: ${width};
          height: 58px;
          margin: ${margin};
          background: #232323;
          color: white;
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
          background: #af2f4e;
          box-shadow: 0 0 8px rgba(253, 0, 0, 0.5);
        }
      `}
    </style>
  </button>
)

export default Button
