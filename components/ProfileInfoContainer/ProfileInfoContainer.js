import React from 'react'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

const ProfileInfoContainer = ({ title, children }) => (
  <div className='wrapper'>
    <div className='header'>
      <h2 className='title'>{title}</h2>
      <button type='button' className='button'>
        <img src={`${prefix}/assets/notifications/gear.svg`} alt='settings' />
      </button>
    </div>

    <div className='container'>{children}</div>

    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-basis: 70%;
        flex-grow: 3;
        background-color: white;
        padding-bottom: 40px;
        margin-left: 80px;
        margin-bottom: 40px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background-color: #b65f74;
        font-family: 'Playfair Display', serif;
        color: white;
        font-size: 28px;
      }

      .title {
        font-weight: bold;
        font-size: 28px;
        color: #ffffff;
      }

      .container {
        background-color: #fff;
        display: flex;
        flex-flow: column nowrap;
        padding: 0 20px;
      }

      .button {
        padding: 0;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    `}</style>
  </div>
)

export default ProfileInfoContainer
