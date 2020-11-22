import { useState } from 'react'
import ReviewCard from './ReviewCard'

const ReviewBox = ({ reviews }) => {
  const [showResults, setShowResults] = useState('hidden')
  const [clicked, setClicked] = useState(false)
  const handleAllReview = () => {
    return (
      clicked ? setClicked(false) : setClicked(true),
      clicked ? setShowResults('hidden') : setShowResults('')
    )
  }

  return (
    <div className='container'>
      <h2 className='title'>Отзывы</h2>
      <div className='box'>
        {reviews.length ? (
          reviews.map((review, index) => (
            <div
              id={index}
              className={`review-container ${index > 2 ? showResults : ''}`}
            >
              <ReviewCard
                logDate={review.logDate}
                logName={review.logName}
                stars={review.stars}
                review={review.review}
              />
            </div>
          ))
        ) : (
          <div className='marginEmptyReview'>
            <p>Здесь пока нет отзывов, но скоро появятся!</p>
            <img src='/assets/review/emptyReview.jpg' alt=';)' />
          </div>
        )}
        <div>
          {reviews.length > 3 ? (
            <button
              type='button'
              className='btnAllReviews'
              onClick={() => handleAllReview()}
            >
              <text className='textAllReviews'>
                {clicked ? 'Скрыть' : 'Все отзывы'}{' '}
              </text>
            </button>
          ) : (
            ''
          )}
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 47%;
          }

          .review-container {
            width: 100%;
          }

          .title {
            margin-bottom: 45px;

            font-size: 28px;
            font-family: 'Playfair Display', serif;
          }

          .box {
            width: 100%;
            padding: 0 40px;

            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .hidden {
            display: none;
          }

          .btnAllReviews {
            display: flex;
            align-self: center;
            background: transparent;
            border: none;
            outline: 0;
            margin-top: 35px;
          }

          .textAllReviews {
            font-size: 12px;
            color: grey;
            font-style: italic;
            text-decoration-line: underline;
            padding-left: 40px;
            cursor: pointer;
          }

          .marginComponent {
            margin-top: 10px;
          }

          .marginEmptyReview {
            width: 340px;
            margin-top: 40px;
          }

          .marginEmptyReview p {
            //font-family: Times New Roman;
            font-style: normal;
            font-weight: bold;
            font-size: 28px;
            line-height: 32px;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
export default ReviewBox
