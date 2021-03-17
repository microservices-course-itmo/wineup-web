import React, { useRef, useEffect } from 'react'

/**
 * @param {ref} ref
 * @param {function} onAction
 */
export const useCatchOutsideClick = (ref, onAction) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) onAction()
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
