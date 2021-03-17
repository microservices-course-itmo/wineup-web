import React from 'react'

/**
 * @param{boolean} active
 * @param{string} labelText
 * @param{function} onClick
 * @param{Node} children
 * */
const ProfileSectionMenuItem = ({ active, labelText, onClick, children }) => {
  return (
    <div className={`${active ? 'active ' : ''}item`}>
      <div className='menu-item-title' onClick={onClick}>
        {labelText}
      </div>
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
          .menu-item-title {
            margin-right: 22px;
            cursor: pointer;
          }
          .menu-item-title:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  )
}

export default ProfileSectionMenuItem
