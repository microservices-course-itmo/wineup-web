/**
 * @param {string} btnValue
 * @param {function} onClickSort
 * @param {string} classValue
 */
function SortButton({ btnValue, onClickSort, classValue }) {
  return (
    <div className='container'>
      <button
        type='button'
        className={classValue}
        onClick={() => onClickSort()}
      >
        {btnValue}
      </button>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
          }
          .activeBtn {
            background-color: red;
            color: white;
            width: 150px;
            height: 30px;
            border-radius: 20px;
            border: none;
            outline: 0;
          }
          .notActiveBtn {
            background: transparent;
            color: grey;
            width: 150px;
            height: 30px;
            border-radius: 20px;
            outline: 0;
          }
        `}
      </style>
    </div>
  )
}
export default SortButton
