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
    if (event.key === '+'  || event.key === '-') {
      event.preventDefault()
    }
  }

  return (
    <>
      <div className='row-direction item-gap'>
        <div className='column-direction'>
          <label htmlFor={inputFrom.id} className='color'>
            {inputFrom.textLabel}
          </label>
          <div className='row-direction'>
            <input
              id={inputFrom.id}
              name={inputFrom.name}
              className='input-price color'
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
        <div className='column-direction'>
          <label htmlFor='inputTo' className='color'>
            {inputTo.textLabel}
          </label>
          <div className='row-direction'>
            <input
              id={inputTo.id}
              name={inputTo.name}
              className='input-price color'
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
          .column-direction {
            display: inline-flex;
            flex-direction: column;
          }
          .row-direction {
            display: inline-flex;
            flex-direction: row;
          }
          .item-gap {
            column-gap: 40px;
          }
          .symbol {
            position: relative;
            right: 15px;
            font-weight: bold;
            font-size: 24px;
            background: none;
          }
          .column-direction .color {
            color: #9e9e9e;
          }
          .column-direction:focus .color,
          .column-direction:hover .color {
            color: white;
          }
          .input-price {
            -moz-appearance: textfield;
            border: none;
            background: none;
            outline: none;
            width: 138px;
            border-bottom: 2px #9e9e9e solid;
            color: white;
          }
          .input-price:hover,
          .input-price:focus {
            -moz-appearance: number-input;
          }
          .input-price::-webkit-inner-spin-button,
          .input-price::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      </style>
    </>
  )
}
export default InputPrice
