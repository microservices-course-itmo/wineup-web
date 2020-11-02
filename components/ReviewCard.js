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
  function split(string, length = 110) {
    const words = string.split('')
    const count = words.length
    const elements = []
    let position = 0
    while (position < count) {
      const text = words.slice(position, length).join('')
      position += length
      if (count < 110) {
        elements.push(<text>{text}</text>)
      } else {
        elements.push(<text>{text}.</text>)
      }
    }
    return elements
  }
  const firstPartText = split(review)
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
      <div className='reviewContainer'>
        <div className='module'>
          <p>{allText ? firstPartText : review}</p>
        </div>
        <button
          className={`transparentBtn ${allText ? '' : 'hideBtn'}`}
          onClick={() => handleReview()}
          type='button'
        >
          <text className='textBtn'>{btnText}</text>
        </button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
          }
          .reviewContainer {
            display: flex;
            flex-direction: column;
            width: 360px;
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
            width: 160px;
            outline: 0;
            margin-top: -20px;
          }
          .hideBtn {
            display: flex;
            width: 100px;
            align-self: flex-end;
            background: transparent;
            border: none;
            outline: 0;
            margin-top: -5px;
          }
          .textBtn {
            font-size: 10px;
            color: grey;
            font-family: arial;
            font-style: italic;
            text-decoration-line: underline;
            padding-left: 40px;
          }
          .stars {
            width: 100px;
            display: flex;
            justify-content: space-between;
          }
          .module {
            width: 340px;
            overflow: hidden;
            padding-right: 0rem;
          }
        `}
      </style>
    </div>
  )
}
export default ReviewCard
