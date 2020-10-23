/**
 * @param {string} btnValue
 * @param {function} onClickSort
 * @param {string} classValue
 */
const SortButton = ({ btn, onBtnClick }) => {
  return (
    <div className='container' key={btn.id}>
      <button
        id={btn.id}
        type='button'
        name={btn.name}
        value={btn.value}
        className={`${btn.defaultChecked ? 'active ' : ''}btn`}
        onClick={onBtnClick}
      >
        {btn.textLabel}
      </button>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
          }
          .btn {
            background: transparent;
            color: grey;
            width: 150px;
            height: 30px;
            border-radius: 20px;
            outline: 0;
            cursor: pointer;
          }
          .active {
            background-color: #931332;
            color: white;
            border: none;
          }
        `}
      </style>
    </div>
  )
}
export default SortButton
