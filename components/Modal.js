/**
 * @param{boolean} show
 * @param children
 */
const Modal = ({ show, children }) => {
  return (
    <>
      {show && (
        <>
          <div className='modal-overlay'>
            <div className='modal-container'>
              <div className='modal-content'>{children}</div>
            </div>
          </div>
          <style jsx global>
            {`
              .modal-overlay {
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 999;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              }
              .modal-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #fff;
                min-width: 685px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 45px 5% 140px;
              }
            `}
          </style>
        </>
      )}
    </>
  )
}
export default Modal
