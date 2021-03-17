import React from 'react'

const ChangePageButtons = ({ nextPage, previousPage, isPrev }) => (
  <>
    <div className='pagesController'>
      {isPrev && (
        <button className='pagesButton' type='button' onClick={previousPage}>
          ← Предыдущая
        </button>
      )}
      <button className='pagesButton nextPage' type='button' onClick={nextPage}>
        Следующая →
      </button>
    </div>
    <style jsx>
      {`
        .pagesController {
          width: 100%;
          margin-bottom: 40px;
          display: flex;
          justify-content: space-between;
        }

        .nextPage {
          margin-left: auto;
        }

        .pagesButton {
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
          .pagesController {
            flex-direction: column;
          }

          .nextPage {
            margin-left: 0;
            margin-top: 10px;
          }
        }
      `}
    </style>
  </>
)

export default ChangePageButtons
