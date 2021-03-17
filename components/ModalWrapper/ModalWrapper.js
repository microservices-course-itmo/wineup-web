import React, { useRef } from 'react'
import Styles from './ModalWrapper.styles'
import { useCatchOutsideClick } from './helpers'

/**
 * @param {boolean} visible
 * @param {ReactNode} children
 * @param {function} onClose
 */
const ModalWrapper = ({ visible = true, children = 'hee hee', onClose }) => {
  const wrapperRef = useRef(null)
  useCatchOutsideClick(wrapperRef, onClose)
  return visible ? (
    <div>
      <div className='wrapper' ref={wrapperRef}>
        <div className='content'>{children}</div>
      </div>
      <style jsx>{Styles}</style>
    </div>
  ) : null
}

export default ModalWrapper
