import InputContainer from './InputContainer'

const FilterBar = ({ criteriaMap }) => {
  const list = Object.keys(criteriaMap).map(criteria => {
    const g = criteriaMap[criteria]
    const group = {
      id: g.id,
      title: g.title,
      type: g.type,
      inputList: g.inputList,
    }
    return (
      <li key={group.id}>
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
      <button type='reset' className='clear-filter-button'>
        <span className='btn-text'>
          <span>Очистить фильтр</span>
          <img src='/assets/resetBtnIcon.svg' alt='reset' />
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
