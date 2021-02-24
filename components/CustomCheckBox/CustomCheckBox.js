/**
 * @param {Object} checkbox - Данные поля
 * @param {string} checkbox.id
 * @param {string} checkbox.name - Имя поля, необходимо как ключ к state
 * @param {string} checkbox.value - Значение поля, добавляемое по ключу name к state
 * @param {boolean} checkbox.defaultChecked
 * @param {string} checkbox.textLabel - Текст label для этого checkbox
 * @param {function} onChange - Функция-обработчик изменений для контролируемого поля
 */
const CustomCheckBox = ({ checkbox, onChange }) => {
  return (
    <div className='checkbox-container'>
      <input
        id={checkbox.id}
        type='checkbox'
        name={checkbox.name}
        value={checkbox.value}
        defaultChecked={checkbox.defaultChecked}
        onChange={onChange}
      />
      <span className='checkbox-custom' />
      <label htmlFor={checkbox.id} className='checkbox-label'>
        {checkbox.textLabel}
      </label>
      <style jsx>
        {`
          .checkbox-container {
            display: block;
            position: relative;
            height: 20px;
            margin: 10px 0;
            width: fit-content;
          }
          .checkbox-label {
            position: relative;
            left: 30px;
            font-size: 18px;
            height: 23px;
            line-height: 20px;
            color: #9e9e9e;
          }
          input:checked ~ .checkbox-label {
            color: white;
          }

          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            z-index: 999;
          }

          .checkbox-custom {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: transparent;
            border-radius: 1px;
            transition: all 0.3s ease-out;
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -ms-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
            border: 1px solid #9e9e9e;
            cursor: pointer;
          }

          input:checked ~ .checkbox-custom {
            background-color: #931332;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-image: url('assets/checkboxTick.svg');
            border-radius: 1px;
            opacity: 1;
            border: 1px solid #931332;
          }
        `}
      </style>
    </div>
  )
}

export default CustomCheckBox
