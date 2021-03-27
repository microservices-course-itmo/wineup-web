import React from 'react'
import Toast from './Toast'

export default {
  title: '/Toast',
  component: Toast,
  argTypes: {
    type: {
      description: 'Тип, может быть success, warning и error',
    },
  },
}

const Template = args => <Toast {...args} />

export const toast = Template.bind({})

toast.args = {
  type: 'success',
  text: 'Вы успешно зарегистроровались в системе',
}

toast.storyName = 'Toast'
