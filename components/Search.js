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
        className='search-button'
        onClick={handleClickButton}
      >
        <img
          className='loop'
          src='assets/search/search-icon.svg'
          alt='search icon'
        />
        Найти
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
            border: 1px solid #9e9e9e;
            margin: 0 0.5% 0 0;
            width: 75%;
            height: 38px;
            padding-left: 20px;
            //text-indent: 20px;
            outline: none;

            font-family: PT Sans, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 23px;
          }

          .search-field::placeholder {
            color: black;
            padding: 20px;
          }

          .search-button {
            height: 38px;
            width: 24.5%;
            //padding: 0;
            //margin: 0;

            display: flex;
            justify-content: center;
            align-items: center;

            background: #931332;
            border-radius: 0 20px 20px 0;
            border: 0;
            outline: none;
            cursor: pointer;
            font-family: PT Sans, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 23px;
            color: #ffffff;
          }

          .loop {
            margin-right: 10px;
          }

          .search-button:hover {
            background: #af2f4e;
          }

          .search-button:focus {
            background: #680019;
          }

          @media screen and (max-width: 600px) {
            .search-field {
              width: 100%;
              padding-left: 40px;
              border-radius: 20px;
              border-color: #9e9e9e;
              background-image: url('assets/search/search-icon-grey.svg');
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: 45px 19px;
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
