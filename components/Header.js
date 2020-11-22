const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='city'>
          <img className='icon' src='/assets/search/city-icon.svg' alt='city' />
          Санкт-Петербург
        </div>
        <div className='title'>
          <b>WineUp</b>
        </div>
        <div className='login'>
          <img
            className='heart-icon'
            src='/assets/search/heart.svg'
            alt='heart'
          />
          <img className='icon' src='/assets/search/man.svg' alt='profile' />
          Войти
        </div>
      </div>
      <style jsx>
        {`
          .header {
            height: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px;

            position: relative;

            font-family: Playfair Display, serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;

            color: #000000;
          }

          .city {
            display: flex;
          }

          .icon {
            margin-right: 10px;
          }

          .heart-icon {
            margin-right: 30px;
          }

          .title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-family: 'Poller One', cursive;
            font-style: normal;
            font-weight: normal;
            font-size: 70px;
            line-height: 83px;

            color: #000000;
          }

          .login {
            display: flex;
          }

          @media screen and (max-width: 720px) {
            .header {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Header
