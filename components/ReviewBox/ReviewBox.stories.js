import React from 'react'
import ReviewBox from './ReviewBox'

export default {
  title: 'ReviewBox',
  component: ReviewBox,
}
const Template = args => <ReviewBox {...args} />
export const reviewBox = Template.bind({})
reviewBox.args = {
  reviews: [
    {
      logDate: '11.10.2020',
      logName: 'Petar',
      stars: '1',
      review:
        'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
    },
    {
      logDate: '10.10.2020',
      logName: 'Petar',
      stars: '2',
      review: 'Здесь будут оставлять свои ревю...',
    },
    {
      logDate: '11.10.2020',
      logName: 'Petar',
      stars: '3',
      review:
        'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
    },
    {
      logDate: '11.10.2020',
      logName: 'Petar',
      stars: '4',
      review:
        'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
    },
  ],
}

export const emptyReviewBox = Template.bind({})
emptyReviewBox.args = { reviews: [] }
