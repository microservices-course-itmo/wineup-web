import React, { useState } from 'react'

function SortButton(props) {
  // Declare a new state variable, which we'll call "count"

  /* eslint-disable-next-line */

  const [clicked1, setClicked1] = useState(false)

  /* eslint-disable-next-line */

  const [clicked2, setClicked2] = useState(false)

  /* eslint-disable-next-line */

  const [clicked3, setClicked3] = useState(false)

  /* eslint-disable-next-line */

  const [clicked4, setClicked4] = useState(false)

  /* eslint-disable-next-line */

  return (
    <div
      style={{
        display: 'flex',

        flexDirection: 'column',

        rowGap: '10px',
      }}
    >
      {/* eslint-disable-next-line */}
      <button
        type='button'
        className={`${clicked1 ? 'activeBtn' : 'notActiveBtn'}`}
        onClick={() =>
          clicked1
            ? setClicked1(false)
            : (setClicked1(true),
              setClicked2(false),
              setClicked3(false),
              setClicked4(false))
        }
      >
        {/* eslint-disable-next-line */}
        {props.firstBtnValue}
      </button>
      {/* eslint-disable-next-line */}
      <button
        type='button'
        className={`${clicked2 ? 'activeBtn' : 'notActiveBtn'}`}
        onClick={() =>
          clicked2
            ? setClicked2(false)
            : (setClicked2(true),
              setClicked1(false),
              setClicked3(false),
              setClicked4(false))
        }
      >
        {/* eslint-disable-next-line */}
        {props.secondBtnValue}
      </button>
      {/* eslint-disable-next-line */}
      <button
        type='button'
        className={`${clicked3 ? 'activeBtn' : 'notActiveBtn'}`}
        onClick={() =>
          clicked3
            ? setClicked3(false)
            : (setClicked3(true),
              setClicked2(false),
              setClicked1(false),
              setClicked4(false))
        }
      >
        {/* eslint-disable-next-line */}
        {props.thirdBtnValue}
      </button>
      {/* eslint-disable-next-line */}
      <button
        type='button'
        className={`${clicked4 ? 'activeBtn' : 'notActiveBtn'}`}
        onClick={() =>
          clicked4
            ? setClicked4(false)
            : (setClicked4(true),
              setClicked2(false),
              setClicked3(false),
              setClicked1(false))
        }
      >
        {/* eslint-disable-next-line */}
        {props.forthBtnValue}
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

          }

          .notActiveBtn {

            background: transparent;

            color: grey;

            width: 150px;

            height: 30px;

            border-radius: 20px;

        `}
      </style>
    </div>
  )
}

export default SortButton
