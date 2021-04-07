import React from 'react'
import { useRecoilState } from 'recoil'
import { showClearSuccessState } from '../Favorites/favoritesStore'

const imagePath = '/assets/success.jpg'
const ClearFavoritesSuccess = () => {
  const [show, setShow] = useRecoilState(showClearSuccessState)

  return (
    <div>
      <div className='shadow'>
        <div className='confirmLogoutContainer'>
          <div className='header'>
            <button
              className='closeButton'
              onClick={() => {
                setShow(false)
              }}
            >
              x
            </button>
            <div className='confirmationText'>Избранное</div>
            <div className='confirmationText'>успешно очищено</div>
          </div>
          <img className='icon' src={imagePath} alt='confirmLogoutWavingHand' />
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
          .icon {
            transform: scale(0.3);
            transform-origin: top;
            margin-left: 50px;
          }
          .closeButton {
            background: transparent;
            height: 75%;
            font-size: 32px;
            font-weight: bold;
            color: #931332;
            border: none;
          }
          .shadow {
            width: 100%;
            height: 100%;
            display: ${show ? 'flex' : 'none'};
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
          }

          .confirmLogoutContainer {
            width: 646px;
            height: 300px;
            background: #ffffff;
            box-shadow: 0 0 17px rgba(0, 0, 0, 0.34);
            border-radius: 10px;
          }

          .confirmationText {
            width: 464px;
            height: 37px;
            margin: 0px 100px 0px 0px;
            font-family: 'Times New Roman', serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 37px;
            text-align: center;
            color: #000000;
          }
        `}
      </style>
    </div>
  )
}

export default ClearFavoritesSuccess
