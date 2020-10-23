import SortButton from './SortButton'

/**
 * @param {Array<Object>} buttons - Список кнопок для отображения
 * @param {function} onChange - Функция-обработчик изменений для контролируемого поля
 */
const ButtonGroup = ({ buttons, onChange }) => {
  return (
    <div className='container'>
      {buttons.map(button => (
        <SortButton btn={button} onBtnClick={onChange} />
      ))}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
          }
        `}
      </style>
    </div>
  )
}
export default ButtonGroup
