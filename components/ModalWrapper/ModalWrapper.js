import React, { useRef } from 'react'
import useCatchOutsideClick from '../../hooks/useCatchOutsideClick'

/**
 * @param {boolean} visible
 * @param {ReactNode} children
 * @param {function} onClose
 */
const ModalWrapper = ({ visible = true, children, onClose }) => {
  const wrapperRef = useRef(null)

  useCatchOutsideClick(wrapperRef, onClose)

  return visible ? (
    <div>
      <div className='wrapper' ref={wrapperRef}>
        <div className='content'>{children}</div>
      </div>
      <div className='overlay' />
      <style jsx>{`
        .wrapper {
          position: fixed;
          width: 600px;
          max-width: 100%;
          height: 400px;
          max-height: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1010;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.2);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
        }

        .content {
          display: flex;
          padding: 40px 20px;
          align-items: center;
          justify-content: center;
          height: 100%;
          border-radius: 10px;
          border: 1px solid #e9e9e9;
          background-color: #ffffff;
        }
      `}</style>
    </div>
  ) : null
}

export default ModalWrapper
