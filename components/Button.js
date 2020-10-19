const Button = ({ selected, children }) => {
  return (
    <>
      <button
        type='button'
        className={selected ? 'button' : 'button button-outline'}
      >
        {children}
      </button>
      <style jsx>
        {`
          .button {
            color: white;
            background: #931332;
            border: none;
            padding: 5px 25px;
            border-radius: 30px;
          }
          .button:hover {
            background: #af2f4e;
          }
          .button:active {
            background: #680019;
          }
          .button-outline {
            background: none;
            border: 1px solid #931332;
            color: #931332;
          }
          .button-outline:active {
            background: none;
          }
          .button-outline:hover {
            background: none;
          }
        `}
      </style>
    </>
  )
}
export default Button
