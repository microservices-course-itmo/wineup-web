import { useState } from 'react'

const starsNumber = [1, 2, 3, 4, 5]
/**
 * @param {string} logDate
 * @param {string} logName
 * @param {string} review
 * @param {number} stars
 */
const ReviewCard = ({ logDate, logName, stars, review }) => {
  const [allText, setAllText] = useState(true)
  const [btnText, setBtnText] = useState('Читать полностью')
  const handleReview = () => {
    return (
      allText ? setAllText(false) : setAllText(true),
      allText ? setBtnText('Меньше') : setBtnText('Читать полностью')
    )
  }
  return (
    <div className='container'>
      <div className='columnGap'>
        <div className='logs'>
          <text>{logDate}</text>
          <text>{logName}</text>
        </div>
        <div className='stars'>
          {starsNumber.map((star, index) => (
            <img
              src={`assets/review/${
                index < stars ? 'filled' : 'empty'
              }-star.svg`}
              alt={`${index < stars ? 'filled' : 'empty'} star`}
              key={star.toString()}
            />
          ))}
        </div>
      </div>
      <div className={`module ${allText ? 'line-clamp' : ''}`}>
        <p>{review}</p>
      </div>
      <button
        className='transparentBtn'
        onClick={() => handleReview()}
        type='button'
      >
        <text className='textBtn'>{btnText}</text>
      </button>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
          }
          .columnGap {
            display: flex;
            column-gap: 50px;
          }
          .logs {
            display: flex;
            column-gap: 5px;
            font-size: 12px;
            color: grey;
            font-family: arial;
          }
          .transparentBtn {
            display: flex;
            align-self: flex-end;
            background: transparent;
            border: none;
            width: 120px;
            outline: 0;
            // margin-top:     -17px;
            margin-right: -15px;
          }
          .textBtn {
            font-size: 10px;
            color: grey;
            font-family: arial;
            font-style: italic;
            text-decoration-line: underline;
          }
          .stars {
            width: 100px;
            display: flex;
            justify-content: space-between;
          }
          .module {
            width: 300px;
            // margin: 0 0 1em 0;
            overflow: hidden;
            // font-family: arial;
            padding-right: 0rem;
          }
          .line-clamp {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            padding-right: 1rem;
          }
        `}
      </style>
    </div>
  )
}
export default ReviewCard
