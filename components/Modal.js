/**
 * @param{boolean} show
 * @param{function} onClose
 * @param{JSXElement} children
 */
const Modal = ({ show, onClose, children }) => {
  return (
    <>
      {show && (
        <>
          <div className='modal-overlay' onClick={onClose}>
            <div
              className='modal-container'
              onClick={event => event.stopPropagation()}
            >
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
                padding: 45px 120px 140px;
              }
              .modal-content {
                display: flex;
                flex-direction: column;
                flex: 1 0 100px;
              }
              .modal-content header {
                font-family: serif;
                font-weight: bold;
                font-size: 28px;
                margin-bottom: 60px;
                text-align: center;
              }
              .modal-content label {
                margin-bottom: 16px;
                font-size: 22px;
              }
              .modal-content input {
                padding: 15px 25px;
                margin-bottom: 80px;
              }
              .modal-content button {
                color: white;
                background-color: #232323;
                border-radius: 50px 50px;
                margin: 0 30px;
                padding: 15px 75px;
                font-size: 22px;
                cursor: pointer;
                outline: none;
              }
            `}
          </style>
        </>
      )}
    </>
  )
}
export default Modal
