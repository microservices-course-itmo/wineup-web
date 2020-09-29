import React from 'react'

export const Search = () => {
  return (
    <div className='search-form'>
      <input className='search-field' placeholder='Красное ...' />
      <button type='button' className='button search-button'>
        <img
          src='assets/search-component/search-icon.png'
          alt='search-icon.png'
        />
        найти
      </button>
      <style jsx>
        {`
          .search-form {
            display: block;
            width: 100%;
            height: 30px;
          }
          .search-field {
            border-radius: 20px 0 0 20px;
            margin: 0 0.5% 0 0;
            width: 75%;
            height: 26px;
            padding: 0px;
            position: relative;
            top: -4px;
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
