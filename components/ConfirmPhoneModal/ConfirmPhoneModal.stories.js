import React from 'react'
import { action } from '@storybook/addon-actions'

import ConfirmPhoneModal from './ConfirmPhoneModal'

export default {
  title: 'Confirm Phone Modal',
  component: ConfirmPhoneModal,
}

const Template = args => <ConfirmPhoneModal {...args} />

export const knobs = Template.bind({})
knobs.args = {
  onClose: action('onClose'),
}
