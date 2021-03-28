import React from 'react'
import Custom404 from '../../pages/404/404'

export default {
  title: 'Page 404',
  component: Custom404,
}

const Template = () => <Custom404 />
export const custom404 = Template.bind({})
custom404.args = {}
