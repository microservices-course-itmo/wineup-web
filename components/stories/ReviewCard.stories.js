import React from 'react'
import ReviewCard from '../ReviewCard'

export default {
  title: 'ReviewCard',
  component: ReviewCard,
}
const Template = args => <ReviewCard {...args} />
export const reviewcard = Template.bind({})
reviewcard.args = {
  logDate: '09.10.2020',
  logName: 'Petar',
  stars: '4',
  review:
    'Красное, полусладкое, Красное, полусладкое, Красное, полусладкое,Красное, полусладкое, Красное, полусладкое, Красное, полусладкое, Красное, полусладкое',
}
