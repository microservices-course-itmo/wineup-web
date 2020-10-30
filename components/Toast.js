/**
 * @param {boolean} show
 * @param {string} message
 */
import { useState } from 'react'

const Toast = ({ show = true, message }) => {
  const [showToast, setShowToast] = useState(show)
  return (
    showToast && (
      <div className='notification-container'>
        <div className='notification-msg'>{message}</div>
        <button
          className='notification-btn'
          type='button'
          onClick={() => setShowToast(false)}
        >
          <img
            className='close-btn-img'
            src='assets/toast/close.svg'
            alt='close'
          />
        </button>
        <style jsx>
          {`
            .notification-container {
              position: relative;
              margin: 0 40px;
              border: 1px black solid;
              border-radius: 5px;
              background-color: #b1e86b;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .notification-btn {
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
            .notification-msg {
              margin-top: 24px;
              margin-bottom: 24px;
              font-weight: bold;
              font-size: 28px;
            }
            .close-btn-img {
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
