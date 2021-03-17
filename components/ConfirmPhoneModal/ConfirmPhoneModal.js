import React, { useState, useCallback } from 'react'
import Styles from './ConfirmPhoneModal.styles'
import ModalWrapper from '../ModalWrapper'
import CustomFormButton from '../CustomFormButton'

const CODE_LENGTH = 6

/**
 * @param {boolean} visible
 * @param {function} onClose
 * @param {function} onSubmit
 */
const ConfirmPhoneModal = ({ visible, onSubmit, onClose }) => {
  const [verificationCode, setVerificationCode] = useState('')

  const isSubmitDisabled = verificationCode.length !== CODE_LENGTH

  const handleCodeChange = useCallback(
    e => {
      const code = e.target.value
      if (code.length <= CODE_LENGTH) setVerificationCode(code)
    },
    [setVerificationCode]
  )

  return (
    <div>
      <ModalWrapper visible={visible} onClose={onClose}>
        <div className='contentWrapper'>
          <h1 className='header'>Введите код подтверждения</h1>
          <input
            className='inputField'
            placeholder='Введите код подтверждения'
            value={verificationCode}
            onChange={handleCodeChange}
          />
          <div className='controlsWrapper'>
            <CustomFormButton width='49%' onClick={onClose} text='Отменить' />
            <CustomFormButton
              width='49%'
              text='Подтвердить'
              disabled={isSubmitDisabled}
              onClick={() => onSubmit(verificationCode)}
            />
          </div>
        </div>
      </ModalWrapper>
      <style jsx>{Styles}</style>
    </div>
  )
}

export default ConfirmPhoneModal
