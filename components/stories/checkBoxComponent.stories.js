import React from 'react'

import { Checkbox } from '../checkBoxComponent'

export default {
  title: 'CheckBox',
  component: Checkbox,
}

const Template = args => <Checkbox {...args} />

export const CheckBox = Template.bind({})
Checkbox.args = {
}
