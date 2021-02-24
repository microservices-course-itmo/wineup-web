import { useState } from 'react'
import ButtonGroup from '../ButtonGroup'

const ButtonGroupCatalog = () => {
  const [sortingBy, setSortingBy] = useState('recommendations')
  const sortingByObj = {
    title: 'Сортировать по',
    onChange: event => setSortingBy(event.currentTarget.value),
    inputList: [
      {
        id: 'sortingByRecommendations',
        name: 'sortingBy',
        value: 'recommendations',
        defaultChecked: sortingBy === 'recommendations',
        textLabel: 'Рекомендованные',
      },
      {
        id: 'sortingByPriceAsc',
        name: 'sortingBy',
        value: 'priceAsc',
        defaultChecked: sortingBy === 'priceAsc',
        textLabel: 'Возрастанию цен',
      },
      {
        id: 'sortingByPriceDesc',
        name: 'sortingBy',
        value: 'priceDesc',
        defaultChecked: sortingBy === 'priceDesc',
        textLabel: 'Убыванию цен',
      },
      {
        id: 'sortingByPopularity',
        name: 'sortingBy',
        value: 'popularity',
        defaultChecked: sortingBy === 'popularity',
        textLabel: 'Популярности',
      },
    ],
  }
  return (
    <div className='catalog'>
      <ButtonGroup
        title={sortingByObj.title}
        buttons={sortingByObj.inputList}
        onChange={sortingByObj.onChange}
      />
      <style jsx>{`
        .catalog {
          width: 100%;
        }
      `}</style>
    </div>
  )
}
export default ButtonGroupCatalog
