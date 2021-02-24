const Wrapper = ({ children }) => (
  <div className='wrapper'>
    {children}
    <style jsx>{`
      .wrapper {
        max-width: 1440px;
        padding: 0 20px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Wrapper
