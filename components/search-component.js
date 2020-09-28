import React from 'react'

const handleClickButton = e => {
  e.preventDefault()
  console.log('Click')
}
const handleClickField = e => {
  e.preventDefault()
  if (e.key === 'Enter') {
    console.log('Clock')
  }
}

const Search = () => {
  return (
    <div className='search-form'>
      <input
        className='search-field'
        placeholder='Красное ...'
        onKeyDown={handleClickField}
      />
      <button
        type='button'
        className='button search-button'
        onClick={handleClickButton}
      >
        <img
          src='assets/search-component/search-icon.png'
          alt='search-icon.png'
        />
        найти
      </button>
      <style jsx>
        {`
          .search-form {
            display: flex;
            width: 100%;
          }
          .search-field {
            border-radius: 20px 0 0 20px;
            margin: 0 0.5% 0 0;
            width: 75%;
            height: 30px;
            padding: 0px;
          }
          .search-field::placeholder {
            color: black;
            padding: 20px;
          }
          .search-button {
            height: 30px;
            width: 23%;
            background: #cf3737;
            color: white;
            border-radius: 0 20px 20px 0;
            border: 0px;
            padding: 0px;
            margin: 0px;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}

export default Search
