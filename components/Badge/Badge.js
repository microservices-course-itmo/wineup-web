import React from 'react'

/**
 * @param{number} count - value for badge
 */
const Badge = ({ count }) => {
  return (
    <>
      {count ? (
        <div className='container'>
          <div className='textContent'>{count}</div>
        </div>
      ) : null}
      <style jsx>
        {`
          .container {
            position: relative;
            top: -7px;
            left: -10px;
            align-self: flex-start;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #931332;
            border-radius: 9px;
            height: 18px;
            padding: 1px 5px;
          }

          .textContent {
            color: white;
            font-size: 14px;
            font-weight: normal;
            font-family: 'Arial', sans-serif;
          }
        `}
      </style>
    </>
  )
}

export default Badge
