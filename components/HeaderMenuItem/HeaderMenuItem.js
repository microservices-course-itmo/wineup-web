import React from 'react'
import Link from 'next/link'
import Badge from '../Badge'

/**
 * @param{string} href - link
 * @param{string} iconSrc - path to icon
 * @param{boolean} isActive - is menu item active
 * @param{string} labelText - text label around icon
 * @param{number} badgeCount - value for badge (if necessary)
 */
const HeaderMenuItem = ({
  href,
  iconSrc,
  isActive = false,
  labelText,
  badgeCount,
}) => {
  return (
    <>
      <Link href={href}>
        <div className='menuItem'>
          <div className='badgeIconContainer'>
            <img
              className='icon'
              src={`${iconSrc}${isActive ? '-active' : ''}.svg`}
              alt={labelText}
            />
            {badgeCount ? <Badge count={badgeCount} /> : null}
          </div>
          <p>{labelText}</p>
        </div>
      </Link>
      <style jsx>
        {`
          .menuItem {
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
          .badgeIconContainer {
            display: flex;
            flex-flow: row nowrap;
            margin-right: 10px;
            max-width: 30px;
          }
          .activeIcon {
            filter: invert(25%) sepia(30%) saturate(5944%) hue-rotate(310deg)
              brightness(60%) contrast(110%);
          }
          @media screen and (max-width: 1200px) {
            .menuItem p {
              display: none;
            }
          }

          @media screen and (max-width: 767px) {
            .menuItem {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default HeaderMenuItem
