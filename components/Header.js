const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='city'>
          <img
            className='city-icon'
            src='assets/search/city-icon.svg'
            alt='город'
          />
          Город
        </div>
        <div className='title'>
          <b>Wine Up</b>
        </div>
        <div className='login'>
          <img
            className='city-icon'
            src='assets/search/heart.svg'
            alt='сердечко'
          />
          <img
            className='city-icon'
            src='assets/search/man.svg'
            alt='профиль'
          />
          Войти
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            margin: 0px 0px 10px 0px;
            height: 113px;
            background: #ffffff;
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.19);
          }
          .city {
            margin-left: 10px;
            position: relative;
            top: 30px;
            display: flex;
            width: 30%;
            height: 30px;
            justify-content: left;
          }
          .city-icon {
            margin: 0 10px 0 0;
          }
          .title {
            display: flex;
            width: 40%;
            font-family: Poller One;
            font-style: normal;
            font-weight: normal;
            font-size: 70px;
            line-height: 83px;
            justify-content: center;
          }
          .login {
            margin-right: 10px;
            position: relative;
            top: 30px;
            display: flex;
            width: 30%;
            height: 30px;
            justify-content: flex-end;
          }
          @media screen and (max-width: 600px) {
            .header {
              visibility: hidden;
              height: 0px;
              width: 0px;
              margin: 0px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Header
