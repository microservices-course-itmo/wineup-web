const CatalogFavorite = ({ children }) => {
  return (
    <div className='catalog'>
      <div className='grid'>{children}</div>
      <style jsx>{`
        .catalog {
          width: 100%;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, 300px);
          gap: 65px;
        }
      `}</style>
    </div>
  )
}

export default CatalogFavorite
