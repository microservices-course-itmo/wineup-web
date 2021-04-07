import { useCallback, useState } from 'react'

const titleBackground = type => {
  switch (type) {
    case 'success':
      return '#b1e86b'
    case 'warning':
      return '#ffc107'
    case 'error':
      return '#fa5766'
    default:
      return '#fff'
  }
}

const Toast = ({
  type,
  text,
  closeCallback = () => {},
  closeTimeout = 1000,
}) => {
  const [isHidden, setHidden] = useState(false)

  const clickHandler = useCallback(() => {
    setHidden(true)
    setTimeout(closeCallback, closeTimeout)
  }, [closeCallback])

  return (
    <div className='toastWrapper'>
      <div className={`finalMessage ${isHidden ? 'hidden' : ''}`}>
        <div className='title'>
          <h5>{text}</h5>
          <input type='button' onClick={clickHandler} />
        </div>
      </div>

      <style jsx>
        {`
          .toastWrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 10000;
          }

          .finalMessage {
            position: fixed;
            top: 10%;
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
            animation-duration: 1s;
            animation-fill-mode: both;
            animation-name: fadeIn;
            z-index: 2000;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .finalMessage.hidden {
            animation-duration: 1s;
            animation-fill-mode: both;
            animation-name: fadeOut;
          }

          .title {
            display: flex;
            padding: 20px 40px;
            border-bottom: 1px solid #e0e0e0;
            background-color: ${titleBackground(type)};
          }

          .title h5 {
            margin: 0;
            font-size: 28px;
          }

          .title input {
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

          .title input:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </div>
  )
}

export default Toast
