import React from 'react'

const ProfileSectionMenuItem = ({ active, children }) => {
  return (
    <div className={`${active ? 'active ' : ''}item`}>
      {children}
      <style jsx>
        {`
          .item {
            display: flex;
            flex-flow: row nowrap;
            font-weight: bold;
            font-size: 22px;
            font-family: 'Playfair Display', serif;
            margin: 20px;
          }
          .active {
            font-size: 28px;
          }
        `}
      </style>
    </div>
  )
}

export default ProfileSectionMenuItem
