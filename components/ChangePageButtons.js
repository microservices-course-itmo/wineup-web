import React from 'react'

const ChangePageButtons = ({ nextPage, previousPage, isPrev }) => (
  <>
    <div className='pages-controller'>
      {isPrev && (
        <button className='pages-button' type='button' onClick={previousPage}>
          ← Предыдущая
        </button>
      )}
      <button
        className='pages-button next-page'
        type='button'
        onClick={nextPage}
      >
        Следующая →
      </button>
    </div>
    <style jsx>
      {`
        .pages-controller {
          width: 100%;
          margin-bottom: 40px;
          display: flex;
          justify-content: space-between;
        }

        .next-page {
          margin-left: auto;
        }

        .pages-button {
          padding: 0 20px;
          background-color: transparent;
          border: none;

          font-family: 'PT Sans', sans-serif;
          font-size: 24px;
          color: #931332;
          outline: none;
          cursor: pointer;
        }

        @media screen and (max-width: 767px) {
          .pages-controller {
            flex-direction: column;
          }

          .next-page {
            margin-left: 0;
            margin-top: 10px;
          }
        }
      `}
    </style>
  </>
)

export default ChangePageButtons
