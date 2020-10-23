import { useState } from 'react'
import InputContainer from './InputContainer'

const FilterBar = () => {
  const [formState, setFormState] = useState({
    sortingBy: 'recommendations',
    priceFrom: 0,
    priceTo: 100000,
    volume: [],
    color: [],
    sugar: [],
    sort: [],
    country: [],
    region: [],
    sparkling: [],
  })

  const handleCheckoutChange = event => {
    const { name, value, checked } = event.target
    const g = formState[name]
    let newGroup = []
    if (checked) {
      if (!g.includes(value)) {
        newGroup = [...g, value]
      }
    } else {
      newGroup = g.filter(item => item !== value)
    }
    setFormState({ ...formState, [name]: newGroup })
  }
  const handleInputChange = event => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }
  const inputGroupMap = {
    sortingBy: {
      id: 'sortingBy',
      title: 'Сортировать по',
      type: 'buttons',
      onChange: handleInputChange,
      inputList: [
        {
          id: 'sortingByRecommendations',
          name: 'sortingBy',
          value: 'recommendations',
          defaultChecked: formState.sortingBy === 'recommendations',
          textLabel: 'Рекомендованные',
        },
        {
          id: 'sortingByPriceAsc',
          name: 'sortingBy',
          value: 'priceAsc',
          defaultChecked: formState.sortingBy === 'priceAsc',
          textLabel: 'Возрастанию цен',
        },
        {
          id: 'sortingByPriceDesc',
          name: 'sortingBy',
          value: 'priceDesc',
          defaultChecked: formState.sortingBy === 'priceDesc',
          textLabel: 'Убыванию цен',
        },
        {
          id: 'sortingByPopularity',
          name: 'sortingBy',
          value: 'popularity',
          defaultChecked: formState.sortingBy === 'popularity',
          textLabel: 'Популярности',
        },
      ],
    },
    price: {
      id: 'price',
      title: 'Цена',
      type: 'number',
      currency: 'RUB',
      onChange: handleInputChange,
      inputList: [
        {
          id: 'priceFrom',
          name: 'priceFrom',
          defaultValue: '0',
          textLabel: 'от',
        },
        {
          id: 'priceTo',
          name: 'priceTo',
          defaultValue: '10000',
          textLabel: 'до',
        },
      ],
    },
    volume: {
      id: 'volume',
      title: 'Объём',
      type: 'checkbox',
      onChange: handleCheckoutChange,
      inputList: [
        {
          id: 'volume_0_375',
          name: 'volume',
          value: '0.375',
          defaultChecked: formState.volume.includes('0.375'),
          textLabel: '0.375',
        },
        {
          id: 'volume_0_5',
          name: 'volume',
          value: '0.5',
          defaultChecked: formState.volume.includes('0.5'),
          textLabel: '0.5',
        },
        {
          id: 'volume_0_75',
          name: 'volume',
          value: '0.75',
          defaultChecked: formState.volume.includes('0.75'),
          textLabel: '0.75',
        },
        {
          id: 'volume_1',
          name: 'volume',
          value: '1.0',
          defaultChecked: formState.volume.includes('1.0'),
          textLabel: '1',
        },
      ],
    },
    color: {
      id: 'color',
      title: 'Цвет',
      type: 'checkbox',
      onChange: handleCheckoutChange,
      inputList: [
        {
          id: 'colorRed',
          name: 'color',
          value: 'red',
          defaultChecked: formState.color.includes('red'),
          textLabel: 'Красный',
        },
        {
          id: 'colorWhite',
          name: 'color',
          value: 'white',
          defaultChecked: formState.color.includes('white'),
          textLabel: 'Белый',
        },
        {
          id: 'colorPink',
          name: 'color',
          value: 'pink',
          defaultChecked: formState.color.includes('pink'),
          textLabel: 'Розовый',
        },
      ],
    },
    sugar: {
      id: 'sugar',
      title: 'Содержание сахара',
      type: 'checkbox',
      onChange: handleCheckoutChange,
      inputList: [
        {
          id: 'sugarDry',
          name: 'sugar',
          value: 'dry',
          defaultChecked: formState.sugar.includes('dry'),
          textLabel: 'Сухое',
        },
        {
          id: 'sugarSemiDry',
          name: 'sugar',
          value: 'semi_dry',
          defaultChecked: formState.sugar.includes('semi_dry'),
          textLabel: 'Полусладкое',
        },
        {
          id: 'sugarSweet',
          name: 'sugar',
          value: 'sweet',
          defaultChecked: formState.sugar.includes('sweet'),
          textLabel: 'Сладкое',
        },
      ],
    },
    wineSort: {
      id: 'wineSort',
      title: 'Сорт',
      type: 'checkbox',
      onChange: handleCheckoutChange,
      inputList: [
        {
          id: 'sortMerlot',
          name: 'sort',
          value: 'Merlot',
          defaultChecked: formState.sort.includes('Merlot'),
          textLabel: 'Мерло',
        },
        {
          id: 'sortCabernet',
          name: 'sort',
          value: 'Cabernet',
          defaultChecked: formState.sort.includes('Cabernet'),
          textLabel: 'Каберне',
        },
        {
          id: 'sortCarmenere',
          name: 'sort',
          value: 'Carmenere',
          defaultChecked: formState.sort.includes('Carmenere'),
          textLabel: 'Карменер',
        },
        {
          id: 'sortPetitVerdo',
          name: 'sort',
          value: 'PetitVerdo',
          defaultChecked: formState.sort.includes('PetitVerdo'),
          textLabel: 'Пти Вердо',
        },
      ],
    },
    countryFrom: {
      id: 'countryFrom',
      title: 'Страна',
      type: 'checkbox',
      onChange: handleCheckoutChange,
      inputList: [
        {
          id: 'countryItaly',
          name: 'country',
          value: 'Italy',
          defaultChecked: formState.country.includes('Italy'),
          textLabel: 'Италия',
        },
        {
          id: 'countryFrance',
          name: 'country',
          value: 'France',
          defaultChecked: formState.country.includes('France'),
          textLabel: 'Франция',
        },
        {
          id: 'countryPortugal',
          name: 'country',
          value: 'Portugal',
          defaultChecked: formState.country.includes('Portugal'),
          textLabel: 'Португалия',
        },
        {
          id: 'countryColumbia',
          name: 'country',
          value: 'Columbia',
          defaultChecked: formState.country.includes('Columbia'),
          textLabel: 'Колумбия',
        },
      ],
    },
    regionFrom: {
      id: 'regionFrom',
      title: 'Регион',
      type: 'checkbox',
      onChange: handleCheckoutChange,
      inputList: [
        {
          id: 'regionTrentino',
          name: 'region',
          value: 'Trentino',
          defaultChecked: formState.region.includes('Trentino'),
          textLabel: 'Трентино',
        },
        {
          id: 'regionNeapol',
          name: 'region',
          value: 'Neapol',
          defaultChecked: formState.region.includes('Neapol'),
          textLabel: 'Неаполь',
        },
        {
          id: 'regionCorsica',
          name: 'region',
          value: 'Corsica',
          defaultChecked: formState.region.includes('Corsica'),
          textLabel: 'Корсика',
        },
        {
          id: 'regionLimousin',
          name: 'regionLimousin',
          value: 'Limousin',
          defaultChecked: formState.region.includes('Limousin'),
          textLabel: 'Лимузен',
        },
      ],
    },
    sparkling: {
      id: 'sparkling',
      title: 'Игристость',
      type: 'checkbox',
      onChange: handleCheckoutChange,
      inputList: [
        {
          id: 'sparkling',
          name: 'sparkling',
          value: 'sparkling',
          defaultChecked: formState.sparkling.includes('sparkling'),
          textLabel: 'Игристое',
        },
        {
          id: 'non-sparkling',
          name: 'sparkling',
          value: 'nonSparkling',
          defaultChecked: formState.sparkling.includes('nonSparkling'),
          textLabel: 'Не игристое',
        },
      ],
    },
  }
  const list = Object.keys(inputGroupMap).map(inputGroup => {
    const { id, type, title, onChange, inputList } = inputGroupMap[inputGroup]
    return (
      <li key={id}>
        <InputContainer
          title={title}
          type={type}
          inputList={inputList}
          onChange={onChange}
        />
      </li>
    )
  })

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <form className='filter-list-container' onSubmit={handleSubmit}>
      <button type='submit'>Submit</button>
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
            background-image: url('assets/filterBackground.png');
            min-width: 375px;
            overflow: hidden;
            height: 100vh;
          }
          .filter-list {
            margin-left: 20px;
            overflow-y: auto;
            height: calc(100vh - 160px);
            width: 100%;
            padding-right: 20px;
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
            border: none;
            outline: none;
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
          button[type='submit'] {
            display: none;
          }
        `}
      </style>
    </form>
  )
}

export default FilterBar
