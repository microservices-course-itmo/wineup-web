const CatalogFavorite = ({ children }) => {
  return (
    <div className='catalog'>
      <div className='grid'>{children}</div>
      <style jsx>{`
        .catalog {
          width: 100%;
          margin-left: 35px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, 300px);
          justify-content: center;
          gap: 45px;
        }
      `}</style>
    </div>
  )
}

export default CatalogFavorite
