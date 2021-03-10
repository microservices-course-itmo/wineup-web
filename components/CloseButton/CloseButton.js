import React from 'react'

const CloseButton = () => (
  <a className='closeButton' href='/'>
    ✕
    <style jsx>
      {`
        .closeButton {
          position: absolute;
          top: 15px;
          right: 15px;
          text-decoration: none;
          color: black;
          font-size: 16px;
        }
      `}
    </style>
  </a>
)

export default CloseButton
