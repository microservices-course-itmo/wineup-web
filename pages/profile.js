import React from 'react'
import { atom, selector, useRecoilValueLoadable } from 'recoil'
import Header from '../components/Header'
import Search from '../components/Search'

const currentUserMock = atom({
  key: 'currentUserMock',
  default: {
    accessToken:
      'eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZV9udW1iZXIiOiIrNzk5OTg4ODc3NjYiLCJyb2xlIjoiVVNFUiIsImlkIjoiMTYiLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNjA3NzE1NTYwLCJleHAiOjE2MDc3MTkxNjB9.yfduLSC-ngalUYB2V2uJdcpNx7LYzGwmYc-kZjsjgKU',
    refreshToken:
      'eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZV9udW1iZXIiOiIrNzk5OTg4ODc3NjYiLCJyb2xlIjoiVVNFUiIsImlkIjoiMTYiLCJ0eXBlIjoiUkVGUkVTSF9UT0tFTiIsImlhdCI6MTYwNzcxNTU2MCwiZXhwIjoxNjEwMzA3NTYwfQ.0-Puf8n8hHbhN2-CFsOxl4_J2e1Nq5aHFMxQftrEQp4',
    user: {
      id: '16',
      phoneNumber: '+79998887766',
      role: 'USER',
      name: 'qwerty',
      cityId: 1,
      birthdate: '1999-01-01',
    },
  },
})

const currentUserSelector = selector({
  key: 'profileInfo',
  get: async ({ get }) => {
    const userMock = get(currentUserMock)
    if (userMock) {
      return userMock.user.id
    }
    const userResponse = await fetch(
      'http://77.234.215.138:48080/user-service/users/me',
      {
        headers: {
          Authorization: `Bearer ${userMock.accessToken}`,
        },
      }
    )
    const user = await userResponse.json()
    return await user.id
  },
})

const userFullInfoSelector = selector({
  key: 'userFullInfo',
  get: async ({ get }) => {
    const response = await fetch(
      `http://77.234.215.138:48080/user-service/users/${get(
        currentUserSelector
      )}/full`
    )
    if (response.error) {
      throw response.error
    }
    return await response.json()
  },
})

const Profile = () => {
  const { contents, state } = useRecoilValueLoadable(userFullInfoSelector)
  const user =
    state === 'hasValue' && !contents.error
      ? {
          name: contents.name || 'Не указано',
          cityName: (contents.city && contents.city.name) || 'Не указано',
          phoneNumber: contents.phoneNumber || 'Не указано',
        }
      : null
  const onClose = () => {
    window.location = '/'
  }

  return (
    <div className='wrapper'>
      <Header />
      <Search />
      <div className='content'>
        {user && (
          <div className='profile-wrapper'>
            <div className='profile'>
              <div className='icon-container'>
                <div className='user-avatar'>
                  <img
                    className='avatar'
                    src='/assets/user.svg'
                    alt='user-pic'
                  />
                  <img
                    className='edit-btn'
                    src='/assets/edit-icon.svg'
                    alt='edit'
                  />
                </div>
              </div>
              <div className='info-container'>
                <div className='info-list'>
                  <label htmlFor='name-input'>
                    <div>Ваше имя</div>
                    <input id='name-input' readOnly value={user.name} />
                  </label>
                  <label htmlFor='city-input'>
                    <div>Город</div>
                    <input id='city-input' readOnly value={user.cityName} />
                  </label>
                  <label htmlFor='tel-input'>
                    <div>Телефон</div>
                    <input id='phone-input' readOnly value={user.phoneNumber} />
                  </label>
                </div>
              </div>
            </div>
            <div className='btn-footer'>
              <button type='button' className='close-btn' onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
        {(state === 'hasError' || contents.error) && <p>Error</p>}
      </div>
      <style jsx>
        {`
          .wrapper {
            max-width: 1440px;
            padding: 0 20px;
            margin: 0 auto;
          }
          .content {
            display: flex;
            margin-top: 40px;
          }
          .profile-wrapper {
            display: flex;
            flex-flow: column nowrap;
            padding: 0 10%;
            width: 100%;
          }
          .profile {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            width: 100%;
          }
          .icon-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 90px;
            margin-right: 90px;
          }
          .info-container {
            flex-basis: 60%;
          }
          .user-avatar {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;
          }
          .btn-footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 70px;
          }
          .info-list {
            display: flex;
            flex-flow: column nowrap;
          }
          .info-list label {
            margin-bottom: 30px;
            font-size: 28px;
            font-weight: bold;
          }
          .info-list input {
            width: 100%;
            height: 54px;
            padding: 15px;
            font-weight: normal;
            font-size: 22px;
            background-color: rgba(196, 196, 196, 0.16);
            border: 2px solid #9e9e9e;
          }
          .info-list label div {
            margin-bottom: 15px;
          }
          .info-list label:last-child {
            margin-bottom: 0;
          }
          .icon-container .avatar {
            height: 210px;
            width: 210px;
            border-radius: 50%;
          }
          .edit-btn {
            cursor: pointer;
          }
          .close-btn {
            background-color: transparent;
            color: #931332;
            border: 1px solid #931332;
            border-radius: 50px;
            font-size: 18px;
            padding: 5px 60px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Profile
