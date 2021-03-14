/**
 * @param {Object} inputFrom - Данные поля "Цена от"
 * @param {string} inputFrom.id
 * @param {string} inputFrom.name - Имя поля, необходимо как ключ к state
 * @param {number} inputFrom.defaultValue - Значение по-умолчанию для placeholder
 * @param {string} inputFrom.textLabel - Текст label для этого поля
 * @param {Object} inputTo - Данные поля "Цена до"
 * @param {string} inputTo.id
 * @param {string} inputTo.name - Имя поля, необходимо как ключ к state
 * @param {number} inputTo.defaultValue - Значение по-умолчанию для placeholder
 * @param {string} inputTo.textLabel - Текст label для этого поля
 * @param {symbol} currency
 * @param {function} onChange - Функция-обработчик изменений для контролируемого поля
 */
const InputPrice = ({ inputFrom, inputTo, currency = '₽', onChange }) => {
  const onKeyPress = event => {
    if (event.key === '+' || event.key === '-') {
      event.preventDefault()
    }
  }

  return (
    <>
      <div className='rowDirection itemGap'>
        <div className='columnDirection'>
          <label htmlFor={inputFrom.id} className='color'>
            {inputFrom.textLabel}
          </label>
          <div className='rowDirection'>
            <input
              id={inputFrom.id}
              name={inputFrom.name}
              className='inputPrice color'
              type='number'
              placeholder={inputFrom.defaultValue}
              onChange={onChange}
              min='0'
              onKeyPress={onKeyPress}
            />
            <label className='symbol color' htmlFor={inputFrom.id}>
              {currency}
            </label>
          </div>
        </div>
        <div className='columnDirection'>
          <label htmlFor='inputTo' className='color'>
            {inputTo.textLabel}
          </label>
          <div className='rowDirection'>
            <input
              id={inputTo.id}
              name={inputTo.name}
              className='inputPrice color'
              type='number'
              placeholder={inputTo.defaultValue}
              onChange={onChange}
            />
            <label className='symbol color' htmlFor={inputTo.id}>
              {currency}
            </label>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .columnDirection {
            display: inline-flex;
            flex-direction: column;
          }

          .rowDirection {
            display: inline-flex;
            flex-direction: row;
          }

          .itemGap {
            column-gap: 40px;
          }

          .symbol {
            position: relative;
            right: 15px;
            font-weight: bold;
            font-size: 24px;
            background: none;
          }

          .columnDirection .color {
            color: #9e9e9e;
          }

          .columnDirection:focus .color,
          .columnDirection:hover .color {
            color: white;
          }

          .inputPrice {
            -moz-appearance: textfield;
            border: none;
            background: none;
            outline: none;
            width: 138px;
            border-bottom: 2px #9e9e9e solid;
            color: white;
          }

          .inputPrice:hover,
          .inputPrice:focus {
            -moz-appearance: number-input;
          }

          .inputPrice::-webkit-inner-spin-button,
          .inputPrice::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      </style>
    </>
  )
}
export default InputPrice
