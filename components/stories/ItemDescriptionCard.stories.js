import React from 'react'
import ItemDescription from '../ItemDescriptionCard'

export default {
  title: 'ItemDescription',
  component: ItemDescription,
}
const Template = args => <ItemDescription {...args} />
export const itemDescription = Template.bind({})
itemDescription.args = {
  color: 'Вино елегантного розового цвета.',
  scent: 'Свежий аромат вина наполнен отенками полевих цветов.',
  gastro:
    'Вино является идеалным аперитивом, хорошо сочетается со свежими фруктами и десертами.',
  taste:
    'Изисканный вкус вина характеризуется ягодными тонами, легкой кислинкой и богатыми оттенками малины в долгом послевкусии.',
}
