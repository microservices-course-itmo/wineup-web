import React from 'react'
import { action } from '@storybook/addon-actions'

import ModalWrapper from './ModalWrapper'

export default {
  title: 'Modal Wrapper',
  component: ModalWrapper,
}

const Template = args => <ModalWrapper {...args} />

export const knobs = Template.bind({})
knobs.args = {
  visible: true,
  children: (
    <div style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
      children
    </div>
  ),
  onClose: action('onClose'),
}
