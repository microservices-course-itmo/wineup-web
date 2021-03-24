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

const AuthorizationStatus = ({
  type,
  title,
  text,
  closeCallback = () => {},
}) => {
  return (
    <>
      <div className='finalMessage'>
        <div className='title'>
          <h5>{title}</h5>
          <input type='button' onClick={closeCallback} />
        </div>
        <p>{text}</p>
      </div>

      <style jsx>
        {`
          .finalMessage {
            width: 100%;
            max-width: 700px;
            margin: 0 20px;
            display: block;
            background: #fff;
            border: 1px solid black;
            border-radius: 5px;
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            text-align: center;
            overflow: hidden;
            box-shadow: 0 10px 20px 0 rgb(0 0 0 / 5%);
          }

          .finalMessage p {
            padding: 20px 40px;
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
    </>
  )
}

export default AuthorizationStatus