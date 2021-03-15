/**
 * @param {string} message
 * @param {function} handler for close button
 */
import React from 'react'

const Toast = ({ message, onClose }) => {
  return (
    <div className='notification-container'>
      <div className='notification-msg'>{message}</div>
      <button className='notification-btn' type='button' onClick={onClose}>
        <img
          className='close-btn-img'
          src='assets/toast/close.svg'
          alt='close'
        />
      </button>
      <style jsx>
        {`
          .notification-container {
            position: absolute;
            left: 0;
            right: 0;
            max-width: 1440px;
            margin: 0 auto;
            border: 1px black solid;
            border-radius: 5px;
            background-color: #b1e86b;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
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
}
export default Toast
