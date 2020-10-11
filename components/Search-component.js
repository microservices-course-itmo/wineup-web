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
        className='search-field-1'
        placeholder='|'
        onKeyDown={handleClickField}
      />
      <input
        className='search-field-2'
        placeholder='Найти'
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
            src='assets/search-component/search-icon.png'
            alt='search-icon.png'
          />
          Найти
        </div>
      </button>
      <style jsx>
        {`
          .search-form {
            display: flex;
            margin: 10px;
          }
          .search-field-1 {
            border-radius: 20px 0 0 20px;
            border-color: #9e9e9e;
            margin: 0 0.5% 0 0;
            width: 75%;
            height: 38px;
            padding: 0px;
            text-indent: 20px;
          }
          .search-field-2 {
            display: none;
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
            .search-field-1 {
              display: none;
            }
            .search-field-2 {
              display: flex;
              width: 100%;
              margin: 0 0.5% 0 0.5%;
              border-radius: 20px;
              border-color: #9e9e9e;
              margin: 0 0.5% 0 0;
              height: 38px;
              padding: 0px;
              background-image: url(assets/search-component/search-icon-grey.png);
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
