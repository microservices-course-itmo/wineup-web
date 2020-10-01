import React from 'react'

import { Search } from './search-component'

export default {
  title: 'Search',
  component: Search,
}

const Template = args => <Search {...args} />

export const search = Template.bind({})

search.args = {}
