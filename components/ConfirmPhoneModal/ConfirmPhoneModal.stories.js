import React from 'react'
import ConfirmPhoneModal from './ConfirmPhoneModal'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Confirm Phone Modal',
  component: ConfirmPhoneModal,
}

const Template = args => <ConfirmPhoneModal {...args} />

export const knobs = Template.bind({})
knobs.args = {
  onClose: action('onClose'),
}
