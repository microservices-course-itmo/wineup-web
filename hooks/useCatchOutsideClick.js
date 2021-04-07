import { useEffect } from 'react'

/**
 * @param {ref} ref
 * @param {function} onAction
 */
const useCatchOutsideClick = (ref, onAction) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.className !== 'buttonSettings'
      )
        onAction()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onAction])
}

export default useCatchOutsideClick
