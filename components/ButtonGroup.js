import SortButton from './SortButton'

/**
 * @param {string} title - Заголовок группы кнопок
 * @param {Array<Object>} buttons - Список кнопок для отображения
 * @param {function} onChange - Функция-обработчик изменений для контролируемого поля
 */
const ButtonGroup = ({ title, buttons, onChange }) => {
  return (
    <div className='button-group-container'>
      <div className='title'>{title}</div>
      <div className='buttons-list'>
        {buttons.map(button => (
          <SortButton btn={button} onBtnClick={onChange} key={button.id} />
        ))}
      </div>
      <style jsx>
        {`
          .button-group-container {
            margin-bottom: 40px;
          }
          .buttons-list {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            row-gap: 10px;
            margin-top: 15px;
          }
          .title {
            font-size: 22px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  )
}
export default ButtonGroup
