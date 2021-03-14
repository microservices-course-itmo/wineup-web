import React from 'react'

const Badge = ({ count }) => {
  return (
    <>
      {count ? (
        <div className='container'>
          <div className='text-content'>{count}</div>
        </div>
      ) : null}
      <style jsx>
        {`
          .container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #931332;
            border-radius: 9px;
            height: 18px;
            margin: 0 12px;
            padding: 1px 5px;
          }

          .text-content {
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
