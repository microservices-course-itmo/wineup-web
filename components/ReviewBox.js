import { useState } from 'react'
import ReviewCard from './ReviewCard'

const reviewsMock = [
  {
    logDate: '11.10.2020',
    logName: 'Petar',
    stars: '1',
    review:
      'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
  },
  {
    logDate: '10.10.2020',
    logName: 'Petar',
    stars: '2',
    review: 'Здесь будут оставлять свои ревю...',
  },
  {
    logDate: '11.10.2020',
    logName: 'Petar',
    stars: '3',
    review:
      'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
  },
  {
    logDate: '11.10.2020',
    logName: 'Petar',
    stars: '4',
    review:
      'Здесь будут оставлять свои ревю...кому что понравилось,кому что непонравилось..Здесь будут оставлять свои ревю, кому что понравилось, кому что не понравилось..Здесь будут оставлять',
  },
]

const ReviewBox = ({ reviews = reviewsMock }) => {
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
        {reviews.map((review, index) => (
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
        ))}
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
        `}
      </style>
    </div>
  )
}
export default ReviewBox
