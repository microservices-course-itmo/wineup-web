import React from 'react'
import InputContainer from './InputContainer'

const getCriteriaGroup = (criteria, mapObject) => {
  const group = mapObject[criteria]
  return {
    title: group.title,
    type: group.type,
    inputList: group.inputList,
  }
}

const FilterBar = ({ criteriaMap }) => {
  const list = Object.keys(criteriaMap).map(criteria => {
    const group = getCriteriaGroup(criteria, criteriaMap)
    return (
      <li>
        <InputContainer
          title={group.title}
          type={group.type}
          inputList={group.inputList}
        />
      </li>
    )
  })
  return (
    <div className='filter-list-container'>
      <ul className='filter-list'>{list}</ul>
      <style jsx>
        {`
          .filter-list-container {
            background-color: gray;
            width: 375px;
          }
          .filter-list {
            margin: 20px;
          }
        `}
      </style>
    </div>
  )
}

export default FilterBar
