/**
 * @param {Object} btn
 * @param {string} btn.id
 * @param {string} btn.name - Имя поля, необходимо как ключ к state
 * @param {string} btn.value - Значение поля, добавляемое по ключу name к state
 * @param {boolean} btn.defaultChecked
 * @param {string} btn.textLabel - Текст кнопки
 * @param {function} onBtnClick - Функция-обработчик изменений для контролируемого поля
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
            color: #931332;
            width: 160px;
            height: 38px;
            border: 2px solid #931332;
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
