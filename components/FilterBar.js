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
    <form className='filter-list-container'>
      <div className='filter-bar-title'>Фильтры</div>
      <div className='filter-bar-subtitle'>WineUp</div>
      <ul className='filter-list'>{list}</ul>
      {/* eslint-disable-next-line react/button-has-type */}
      <button type='reset' className='clear-filter-button'>
        <span className='btn-text'>
          <span>Очистить фильтр</span>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16 2.29333L13.7067 0L8 5.70667L2.29333 0L0 2.29333L5.70667 8L0 13.7067L2.29333 16L8 10.2933L13.7067 16L16 13.7067L10.2933 8L16 2.29333Z'
              fill='white'
            />
          </svg>
        </span>
      </button>
      <style jsx>
        {`
          .filter-list-container {
            background-color: gray;
            width: 375px;
            overflow: hidden;
            height: 100vh;
          }
          .filter-list {
            margin-left: 20px;
            overflow: auto;
            height: calc(100vh - 160px);
            width: 100%;
          }
          .filter-bar-title {
            color: white;
            font-weight: bold;
            font-size: 44px;
            text-align: center;
          }
          .filter-bar-subtitle {
            color: white;
            font-size: 24px;
            text-align: right;
            margin-right: 48px;
          }
          .clear-filter-button {
            position: relative;
            height: 60px;
            width: 100%;
            background-color: #931332;
            color: white;
            font-size: 22px;
          }
          .btn-text {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .btn-text span {
            margin: 10px;
          }
        `}
      </style>
    </form>
  )
}

export default FilterBar
