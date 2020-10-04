import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='city'>
          <img
            className='city-icon'
            src='assets/search-component/city-icon.png'
            alt='city-icon.png'
          />
          Город
        </div>
        <div className='tittle'>
          <b>Wine Up</b>
        </div>
        <div className='login'>
          <img
            className='city-icon'
            src='assets/search-component/heart.png'
            alt='heart.png'
          />
          <img
            className='city-icon'
            src='assets/search-component/man.png'
            alt='man.png'
          />
          Войти
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            margin: 10px 10px 10px 10px;
          }
          .city {
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
          .tittle {
            display: flex;
            width: 40%;
            font-size: 60px;
            justify-content: center;
          }
          .login {
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
