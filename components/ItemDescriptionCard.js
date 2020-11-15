/**
 * @param {string} color
 * @param {string} scent
 * @param {string} gastro
 * @param {string} taste
 */
const ItemDescription = ({ color, scent, gastro, taste }) => {
  return (
    <div className='headerTitle'>
      <h1>Подробное о вине</h1>
      <div className='descriptionBox'>
        <div>
          <h2>Цвет</h2>
          <p>{color}</p>
        </div>
        <div className='attributeBox'>
          <h2>Аромат</h2>
          <p>{scent}</p>
        </div>
        <div className='attributeBox'>
          <h2>Гастрономические сочитения</h2>
          <p>{gastro}</p>
        </div>
        <div className='attributeBox'>
          <h2>Вкус</h2>
          <p>{taste}</p>
        </div>
      </div>
      <style jsx>
        {`
          .headerTitle {
            font-size: 15px;
            font-family: 'Times New Roman', Times, serif;
            width: 700px;
          }
          .descriptionBox {
            margin: 20px;
          }
          .attributeBox {
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  )
}
export default ItemDescription
