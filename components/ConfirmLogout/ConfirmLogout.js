import React from 'react'
import { useRecoilState } from 'recoil'
import Link from 'next/link'
import CustomFormButton from '../CustomFormButton'
import { userState } from '../../store/GlobalRecoilWrapper/store'
import useLocalStorage from '../../hooks/useLocalStorage'

const imagePath = '/assets/confirmLogoutWavingHand.svg'

const ConfirmLogout = () => {
  const [, setUser] = useRecoilState(userState)
  const [, setAccessToken] = useLocalStorage('accessToken')
  const [, setRefreshToken] = useLocalStorage('refreshToken')

  const logout = () => {
    setUser('')
    setAccessToken('')
    setRefreshToken('')
  }

  return (
    <div>
      <div className='shadow'>
        <div className='confirmLogoutContainer'>
          <div className='confirmationText'>Вы уверены, что хотите выйти?</div>
          <img className='icon' src={imagePath} alt='confirmLogoutWavingHand' />
          <div className='buttonsContainer'>
            <Link href='profile'>
              <CustomFormButton
                width='230px'
                height='33px'
                margin='0 40px 0 0'
                background='white'
                color='#931332'
                fontSize='18px'
                fontWeight='normal'
                backgroundOnHover='#931332'
                colorOnHover='white'
                border='1px solid #931332'
                text='Отменить'
              />
            </Link>
            <Link href='/'>
              <CustomFormButton
                width='230px'
                height='33px'
                background='white'
                color='#931332'
                fontSize='18px'
                fontWeight='normal'
                backgroundOnHover='#931332'
                colorOnHover='white'
                border='1px solid #931332'
                text='Подтвердить'
                onClick={logout}
              />
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
            height: 459px;
            background: #ffffff;
            box-shadow: 0 0 17px rgba(0, 0, 0, 0.34);
            border-radius: 10px;
          }

          .confirmationText {
            width: 464px;
            height: 37px;
            margin: 50px 91px 60.81px 91px;
            font-family: 'Times New Roman', serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 37px;
            text-align: center;
            color: #000000;
          }

          .icon {
            margin-left: 250.81px;
          }

          .buttonsContainer {
            margin-left: 73px;
            margin-top: 83.81px;
            display: flex;
          }
        `}
      </style>
    </div>
  )
}

export default ConfirmLogout
