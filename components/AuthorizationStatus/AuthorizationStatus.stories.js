import React from 'react'
import AuthorizationStatus from './AuthorizationStatus'

export default {
  title: '/AuthorizationStatus',
  component: AuthorizationStatus,
  argTypes: {
    type: {
      description: 'Тип, может быть success, warning и error',
    },
  },
}

const Template = args => <AuthorizationStatus {...args} />

export const authorizationStatus = Template.bind({})

authorizationStatus.args = {
  type: 'success',
  title: 'Успех!',
  text: 'Вы успешно зарегистроровались в системе',
  isVisible: true,
}

authorizationStatus.storyName = 'AuthorizationStatus'
