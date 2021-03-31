import React from 'react'

const CloseButton = ({ callback }) => (
  <>
    <input className='closeBtn' type='button' onClick={callback} />
    <style jsx>
      {`
        .closeBtn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 20px;
          margin: 0 0 0 auto;
          background: transparent
            url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3E%3C/svg%3E")
            50%/1em auto no-repeat;
          border: none;
          border-radius: 0.25rem;
          outline: none;
          opacity: 0.5;
          cursor: pointer;
          transition: 0.2s;
        }

        .closeBtn:hover {
          opacity: 0.8;
        }
      `}
    </style>
  </>
)

export default CloseButton
