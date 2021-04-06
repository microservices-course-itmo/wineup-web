import React from 'react'
import { useRecoilState, useRecoilCallback } from 'recoil'
import Link from 'next/link'
import CustomFormButton from '../CustomFormButton'
import useLocalStorage from '../../hooks/useLocalStorage'
import {
  deleteQuery,
  sortedFavoritesWinesState,
  emptyState,
} from '../Favorites/favoritesStore'

const ConfirmClearFavorites = () => {
  const [accessToken] = useLocalStorage('accessToken')
  const [, setEmpty] = useRecoilState(emptyState)
  const [, setSortedWine] = useRecoilState(sortedFavoritesWinesState)
  const clearFavorites = useRecoilCallback(({ snapshot }) => async () => {
    await snapshot.getPromise(deleteQuery(accessToken))
    const copy = []
    setSortedWine(() => copy)
    setEmpty(true)
  })

  return (
    <div>
      <div className='shadow'>
        <div className='confirmLogoutContainer'>
          <div className='header'>
            <div className='confirmationText'>Очистить избранное? </div>
            <Link href='/favorites'>
              <button className='closeButton'>x</button>
            </Link>
          </div>
          <div className='descriptionText'>Вы хотите очистить избранное?</div>
          <div className='descriptionText'>
            Отменить это действие будет невозможно
          </div>
          <div className='buttonsContainer'>
            <Link href='/favorites'>
              <CustomFormButton
                width='230px'
                height='33px'
                margin='0 40px 0 0'
                background='white'
                color='#931332'
                fontSize='18px'
                fontWeight='normal'
                backgroundOnHover='#931332'
                colorOnHover='#931332'
                textColorOnHovor='white'
                border='1px solid #931332'
                text='Отменить'
              />
            </Link>
            <Link href='/favorites'>
              <CustomFormButton
                width='230px'
                height='33px'
                background='white'
                color='#931332'
                fontSize='18px'
                fontWeight='normal'
                backgroundOnHover='#931332'
                colorOnHover='#931332'
                textColorOnHovor='white'
                border='1px solid #931332'
                text='Очистить'
                onClick={clearFavorites}
              />
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            flex-direction: row;
          }
          .closeButton {
            background: transparent;
            height: 75%;
            margin: 0px 0px 0px 100px;
            font-size: 32px;
            font-weight: bold;
            color: #931332;
            border: none;
          }
          .shadow {
            width: 100%;
            height: 100%;
            display: flex;
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
            margin: 20px 20px 40px 20px;
            font-family: 'Times New Roman', serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 37px;
            text-align: left;
            color: #000000;
          }

          .descriptionText {
            width: 464px;
            height: 37px;
            margin: 0px 91px 0px 91px;
            font-family: 'Times New Roman', serif;
            font-style: normal;
            font-size: 24px;
            line-height: 37px;
            text-align: center;
            color: #000000;
          }

          .icon {
            margin-left: 250.81px;
          }

          .buttonsContainer {
            margin-left: 73px;
            margin-top: 40px;
            display: flex;
          }
        `}
      </style>
    </div>
  )
}

export default ConfirmClearFavorites
