import React, { useState } from 'react'

/**
 * @param {string} logDate
 * @param {string} logName
 * @param {string} review
 * @param {number} stars
 */
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
const ReviewCard = ({ logDate, logName, stars, review }) => {
  const [allText, setAllText] = useState(true)
  const [btnText, setBtnText] = useState('Читать полностью')

  const handleReview = () => {
    if (allText) {
      setAllText(false)
      setBtnText('Свернуть отзыв')
    } else {
      setAllText(true)
      setBtnText('Читать полностью')
    }
  }

  const split = (string, length = 120) => {
    if (string.length <= length) {
      return string
    }

    let newString = ''

    while (newString.length < length && string.length > newString.length) {
      newString += string[newString.length]
    }

    return `${newString}...`
  }

  const firstPartText = split(review)

  return (
    <div className='container'>
      <div className='columnGap'>
        <div className='logs'>
          <p>{logDate}</p>
          <p>{logName}</p>
        </div>
        <div className='stars'>
          {Array.from({ length: 5 }).map((star, index) => (
            <img
              src={`${prefix}/assets/review/${
                index < stars ? 'filled' : 'empty'
              }-star.svg`}
              alt={`${index < stars ? 'filled' : 'empty'} star`}
            />
          ))}
        </div>
      </div>

      <div className='reviewContainer'>
        <div className='module'>
          <p>{allText ? firstPartText : review}</p>

          {review.length > 120 ? (
            <button
              className={`transparentBtn ${allText ? '' : 'hideBtn'}`}
              onClick={() => handleReview()}
              type='button'
            >
              {btnText}
            </button>
          ) : null}
        </div>
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 20px 0;
          }

          .reviewContainer {
            display: flex;
            flex-direction: column;
          }

          .columnGap {
            display: flex;
            align-items: center;
            column-gap: 50px;
          }

          .logs {
            display: flex;
            column-gap: 5px;
            font-size: 16px;
            color: grey;
            font-family: PT Sans, sans-serif;
          }

          .transparentBtn {
            display: block;
            padding: 0;
            margin: -25px 30px 0 auto;

            background: transparent;
            border: none;
            outline: 0;

            font-size: 16px;
            font-weight: 300;
            font-family: 'Roboto', sans-serif;
            font-style: italic;
            text-decoration-line: underline;
            color: #707070;

            cursor: pointer;
          }

          .hideBtn {
            margin-top: 0;
          }

          .stars {
            width: 100px;
            display: flex;
            justify-content: space-between;
          }

          .module {
            position: relative;
            margin-top: 10px;
            padding-right: 0;

            overflow: hidden;
          }

          .module p {
            margin-right: 50px;

            font-size: 18px;
            font-weight: 300;
            font-family: 'Roboto', sans-serif;

            color: #000000;
          }
        `}
      </style>
    </div>
  )
}
export default ReviewCard
