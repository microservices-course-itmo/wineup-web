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
      <div className='menuItemTitle' onClick={onClick}>
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
          .menuItemTitle {
            margin-right: 22px;
            cursor: pointer;
          }
          .menuItemTitle:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  )
}

export default ProfileSectionMenuItem
