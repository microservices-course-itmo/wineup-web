/**
 * @param {boolean} show
 * @param {string} message
 */
import React, { useState } from 'react'

const Toast = ({ show = true, message }) => {
  const [showToast, setShowToast] = useState(show)
  return (
    showToast && (
      <div className='notificationContainer'>
        <div className='notificationMsg'>{message}</div>
        <button
          className='notificationBtn'
          type='button'
          onClick={() => setShowToast(false)}
        >
          <img
            className='closeBtnImg'
            src='assets/toast/close.svg'
            alt='close'
          />
        </button>
        <style jsx>
          {`
            .notificationContainer {
              position: relative;
              margin: 0 40px;
              border: 1px black solid;
              border-radius: 5px;
              background-color: #b1e86b;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .notificationBtn {
              position: absolute;
              top: 18px;
              bottom: 18px;
              right: 43px;
              background: transparent;
              border: none;
              outline: none;
              cursor: pointer;
              justify-self: flex-end;
              padding: 0;
            }

            .notificationMsg {
              margin-top: 24px;
              margin-bottom: 24px;
              font-weight: bold;
              font-size: 28px;
            }

            .closeBtnImg {
              width: 50px;
              height: 50px;
            }
          `}
        </style>
      </div>
    )
  )
}
export default Toast
