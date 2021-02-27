import React from 'react'
import Toast from './Toast'

export default {
  title: 'Toast',
  component: Toast,
}

const Template = args => <Toast {...args} />
export const toast = Template.bind({})
toast.args = {
  message: 'Внимание! Вы не зарегистрированы',
}
