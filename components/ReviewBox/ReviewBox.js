import React, { useState } from 'react'
import ReviewCard from '../ReviewCard'

const ReviewBox = ({ reviews = [] }) => {
  const [showResults, setShowResults] = useState('hidden')
  const [clicked, setClicked] = useState(false)
  const handleAllReview = () => {
    if (clicked) {
      setClicked(false)
      setShowResults('hidden')
    } else {
      setClicked(true)
      setShowResults('')
    }
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
              <span className='textAllReviews'>
                {clicked ? 'Скрыть' : 'Все отзывы'}{' '}
              </span>
            </button>
          ) : (
            ''
          )}
        </div>
      </div>

      <style jsx>
        {`
          .container {
            width: 42vw;
            min-width: 500px;
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
            margin-top: 20px;

            background: transparent;
            border: none;
            outline: 0;
          }

          .textAllReviews {
            padding-left: 40px;

            font-size: 16px;
            font-weight: 300;
            font-family: 'Roboto', sans-serif;
            font-style: italic;
            text-decoration-line: underline;
            color: #707070;

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
            font-family: 'Playfair Display', serif;
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
