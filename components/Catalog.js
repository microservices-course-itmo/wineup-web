import { useState } from 'react'
import ButtonGroup from './ButtonGroup'

const Catalog = ({ children }) => {
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
      <div className='grid'>{children}</div>
      <style jsx>{`
        .catalog {
          width: 100%;
          margin-left: 35px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, 300px);
          justify-content: center;
          gap: 45px;
        }

        .sorting {
          width: 100%;
          height: 77px;
          margin-bottom: 30px;
          background-color: lightgray;
        }
      `}</style>
    </div>
  )
}

export default Catalog
