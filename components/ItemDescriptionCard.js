import React from 'react'

/**
 * @param {string} color
 * @param {string} scent
 * @param {string} gastro
 * @param {string} taste
 */
const ItemDescription = ({ color, scent, gastro, taste }) => {
  return (
    <div className='description'>
      <h2>Подробное о вине</h2>

      <div className='descriptionBox'>
        <div>
          <h3>Цвет</h3>
          <p>{color}</p>
        </div>

        <div className='attributeBox'>
          <h3>Аромат</h3>
          <p>{scent}</p>
        </div>

        <div className='attributeBox'>
          <h3>Гастрономические сочитения</h3>
          <p>{gastro}</p>
        </div>

        <div className='attributeBox'>
          <h3>Вкус</h3>
          <p>{taste}</p>
        </div>
      </div>

      <style jsx>
        {`
          .description {
            font-size: 15px;
            width: 47%;
          }

          .descriptionBox {
            margin: 20px;
          }

          .attributeBox {
            margin-top: 10px;
          }

          h2 {
            margin-bottom: 45px;

            font-size: 28px;
            font-family: 'Playfair Display', serif;
          }

          h3 {
            margin-bottom: 10px;

            font-size: 24px;
            font-family: 'Playfair Display', serif;
          }

          p {
            font-size: 18px;
            font-weight: 300;
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
    </div>
  )
}
export default ItemDescription
