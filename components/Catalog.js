const Catalog = ({ children }) => {
  return (
    <div className='catalog'>
      <div className='sorting' />
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

        .sorting {
          width: 100%;
          height: 77px;
          margin-bottom: 30px;
          background-color: lightgray;
        }
      `}</style>
    </div>
  )
}

export default Catalog
