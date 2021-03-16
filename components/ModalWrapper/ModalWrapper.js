import React from 'react'
import Styles from './ModalWrapper.styles'

/**
 * @param {boolean} visible
 * @param {ReactNode} children
 */
const ModalWrapper = ({ visible = true, children = 'hee hee' }) =>
  visible ? (
    <div>
      <div className='wrapper'>{children}</div>
      <style jsx>{Styles}</style>
    </div>
  ) : null

export default ModalWrapper
