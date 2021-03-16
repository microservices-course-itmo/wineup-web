import React from 'react'
import ModalWrapper from './ModalWrapper'

export default {
  title: 'Modal Wrapper',
  component: ModalWrapper,
}

const Template = args => <ModalWrapper {...args} />

export const knobs = Template.bind({})
knobs.args = {
  visible: true,
  children: 'Im a child',
}
