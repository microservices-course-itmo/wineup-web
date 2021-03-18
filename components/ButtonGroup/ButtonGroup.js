import React from 'react'
import SortButton from '../SortButton'

/**
 * @param {string} title - Заголовок группы кнопок
 * @param {Array<Object>} buttons - Список кнопок для отображения
 * @param {function} onChange - Функция-обработчик изменений для контролируемого поля
 * @param {string} activeButton - Активная в данный момент кнопка
 */
const ButtonGroup = ({ title, buttons, onChange, activeButton }) => {
  return (
    <div className='buttonGroupContainer'>
      <div className='title'>{title}</div>
      <div className='buttonsList'>
        {buttons.map(button => (
          <SortButton
            btn={button}
            onBtnClick={onChange}
            key={button.value}
            active={button.value === activeButton}
          />
        ))}
      </div>

      <style jsx>
        {`
          .buttonGroupContainer {
            margin-bottom: 40px;
          }

          .buttonsList {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            row-gap: 10px;
            margin-top: 10px;
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
