import React from 'react'

export function Search() {
  const [input, setInput] = React.useState('')
  const handleClickButton = e => {
    e.preventDefault()
    setInput(document.getElementById('f1').value)
  }
  const handleClickField = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setInput(document.getElementById('f1').value)
    }
  }
  return (
    <div className='search-form'>
      <input
        className='search-field'
        placeholder=' '
        id='f1'
        onKeyDown={handleClickField}
      />
      <button
        type='button'
        className='button search-button'
        onClick={handleClickButton}
      >
        <div className='search-button-content'>
          <img
            className='loop'
            src='assets/search-component/search-icon.svg'
            alt=''
          />
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
              background-image: url(assets/search-component/search-icon-grey.svg);
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
