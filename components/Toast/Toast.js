/**
 * @param {string} message
 * @param {function} handler for close button
 */
import React from 'react'

const Toast = ({ message, onClose }) => {
  return (
    <div className='toastWrapper'>
      <div className='notificationContainer'>
        <div className='notificationMsg'>{message}</div>
        <button className='notificationBtn' type='button' onClick={onClose}>
          <img
            className='closeBtnImg'
            src='assets/toast/close.svg'
            alt='close'
          />
        </button>
      </div>
      <style jsx>
        {`
          .toastWrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
          }

          .notificationContainer {
            width: 100%;
            max-width: 700px;
            display: block;
            background: #fff;
            border: 1px solid black;
            border-radius: 5px;
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            text-align: center;
            overflow: hidden;
            box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);
            z-index: 100000;
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
}
export default Toast
