import React from 'react'
import { action } from '@storybook/addon-actions'

import CitySelect from './CitySelect'

export default {
  title: 'City Select',
  component: CitySelect,
}

const Template = args => <CitySelect {...args} />

export const knobs = Template.bind({})
knobs.args = {
  selectedCity: {
    id: 1,
    value: 'Москва',
  },
  onChange: action('onChange'),
}
