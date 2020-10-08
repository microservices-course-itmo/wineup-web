import React, { useState } from 'react'
import PropTypes from 'prop-types'

function SortButton({ btnValue = '1' }) {
  const [clicked, setClicked] = useState(false)

  return (
    <div className='container'>
      <button
        type='button'
        className={`${clicked ? 'activeBtn' : 'notActiveBtn'}`}
        onClick={() => (clicked ? setClicked(false) : setClicked(true))}
      >
        {btnValue}
      </button>
      {/* eslint-disable-next-line */}
      <style jsx>
        {`
          .activeBtn {
            background-color: red;

            color: white;

            width: 150px;

            height: 30px;

            border-radius: 20px;

            border: none;

            outline: 0;
          }

          .notActiveBtn {
            background: transparent;

            color: grey;

            width: 150px;

            height: 30px;

            border-radius: 20px;

            outline: 0;
          }
          .container {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
          }
        `}
      </style>
    </div>
  )
}
SortButton.propTypes = {
  btnValue: PropTypes.string.isRequired,
}
export default SortButton
