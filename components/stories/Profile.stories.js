import React from 'react'
import Profile from '../../pages/Profile'

export default {
  title: 'Profile',
  component: Profile,
}

const Template = args => <Profile {...args} />
export const profile = Template.bind({})
profile.args = {
  user: {
    name: 'Виноделов Винокур Винокурович',
    city: 'Санкт-Петербург',
    tel: '+7 999 999 99 99',
  },
}
