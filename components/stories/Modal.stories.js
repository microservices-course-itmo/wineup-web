import React from 'react'
import Modal from '../Modal'

export default {
  title: 'Modal',
  component: Modal,
}

const Template = args => <Modal {...args} />
export const modal = Template.bind({})
modal.args = {
  show: true,
  children: (
    <>
      <header>Войдите или зарегистрируйтесь</header>
      <label htmlFor='phone-input'>Введите номер телефона</label>
      <input id='phone-input' placeholder='+7- (_ _ _) - _ _ _ - _ _ - _ _' />
      <button onClick={() => alert('Submit!')}>
        Запросить код подтверждения
      </button>
    </>
  ),
}
