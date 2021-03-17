import React, { useRef } from 'react'
import Styles from './ModalWrapper.styles'
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
      <style jsx>{Styles}</style>
    </div>
  ) : null
}

export default ModalWrapper
