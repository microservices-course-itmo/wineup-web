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

const AuthorizationStatus = ({ type, text, closeCallback = () => {} }) => {
  return (
    <>
      <div className='finalMessage'>
        <div className='title'>
          <h5>{text}</h5>
          <input type='button' onClick={closeCallback} />
        </div>
      </div>

      <style jsx>
        {`
          .finalMessage {
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

          .title {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            display: flex;
            padding: 24px 40px;
            border-bottom: 1px solid #e0e0e0;
            background-color: ${titleBackground(type)};
            z-index: 100000;
          }

          .title h5 {
            margin: auto;
            font-size: 28px;
            font-family: 'Times New Roman', serif;
          }

          .title input {
            width: 20px;
            margin: 0 0 0 1.5em;
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
    </>
  )
}

export default AuthorizationStatus
