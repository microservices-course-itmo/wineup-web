import React from 'react'
import { RecoilRoot } from 'recoil'

import Profile from '../../pages/profile/Profile'

export default {
  title: 'Profile',
  component: Profile,
}

const Template = args => (
  <RecoilRoot>
    <Profile {...args} />
  </RecoilRoot>
)
export const profile = Template.bind({})
profile.args = {
  user: {
    name: 'Виноделов Винокур Винокурович',
    city: 'Санкт-Петербург',
    tel: '+7 999 999 99 99',
  },
}
