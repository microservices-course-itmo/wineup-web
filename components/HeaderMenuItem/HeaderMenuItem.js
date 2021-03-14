import React from 'react'
import Badge from '../Badge'

const HeaderMenuItem = ({
  iconSrc,
  isActive = false,
  labelText,
  badgeCount,
}) => {
  return (
    <div className='menu-item login'>
      <div className='badge-icon-container'>
        <img
          className='icon'
          src={`${iconSrc}${isActive ? '-active' : ''}.svg`}
          alt={labelText}
        />
        {badgeCount ? <Badge count={badgeCount} /> : null}
      </div>
      <p>{labelText}</p>
      <style jsx>
        {`
          .menu-item {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            font-size: 16px;
            min-width: max-content;
            line-height: 18px;
            margin: 0 8px;
            white-space: nowrap;
            cursor: pointer;
          }
          .badge-icon-container {
            display: flex;
            flex-flow: row nowrap;
            margin-right: 10px;
            max-width: 30px;
          }

          .active-icon {
            filter: invert(25%) sepia(30%) saturate(5944%) hue-rotate(310deg)
              brightness(60%) contrast(110%);
          }
          @media screen and (max-width: 1200px) {
            .menu-item p {
              display: none;
            }
          }

          @media screen and (max-width: 767px) {
            .menu-item {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export default HeaderMenuItem
