import { useState, useCallback } from 'react'

const Search = () => {
  const [input, setInput] = useState('')
  const handleClickButton = useCallback(e => {
    e.preventDefault()
  }, [])
  const handleChangeField = useCallback(e => {
    e.preventDefault()
    setInput(e.target.value)
  }, [])

  return (
    <div className='search-form'>
      <input
        onChange={handleChangeField}
        className='search-field'
        id='f1'
        value={input}
      />
      <button
        type='button'
        className='button search-button'
        onClick={handleClickButton}
      >
        <div className='search-button-content'>
          <img className='loop' src='assets/search/search-icon.svg' alt='' />
          Найти
        </div>
      </button>
      <style jsx>
        {`
          .search-form {
            font: 18px Sans;
            display: flex;
            margin: 10px;
          }
          .search-field {
            border-radius: 20px 0 0 20px;
            border-color: #9e9e9e;
            margin: 0 0.5% 0 0;
            width: 75%;
            height: 38px;
            padding: 0px;
            text-indent: 20px;
            outline: none;
          }
          .search-field::placeholder {
            color: black;
            padding: 20px;
          }
          .search-button {
            height: 38px;
            width: 24.5%;
            background: #931332;
            color: white;
            border-radius: 0 20px 20px 0;
            border: 0px;
            padding: 0px;
            margin: 0px;
            outline: none;
            cursor: pointer;
          }
          .search-button:hover {
            background: #af2f4e;
          }
          .search-button:focus {
            background: #680019;
          }
          .search-button-content {
            display: flex;
            justify-content: center;
            color: white;
          }
          .loop {
            padding: 0px;
            margin: 0px;
          }
          @media screen and (max-width: 600px) {
            .search-field {
              display: flex;
              width: 100%;
              margin: 0 0.5% 0 0.5%;
              border-radius: 20px;
              border-color: #9e9e9e;
              margin: 0 0.5% 0 0;
              height: 38px;
              padding: 0px;
              background-image: url(assets/search/search-icon-grey.svg);
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: 30px 19px;
              text-indent: 40px;
            }
            .search-button {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Search
