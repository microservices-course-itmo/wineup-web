import React from 'react'
import CustomSwitchCheckbox from './index'

export default {
  title: 'CustomInputs',
  component: CustomSwitchCheckbox,
}
const Template = args => <CustomSwitchCheckbox {...args} />
export const switchCheckbox = Template.bind({})
switchCheckbox.args = {}
