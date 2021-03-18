import React, { useState, useCallback } from 'react'
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
      <style jsx>{`
        .header {
          text-align: center;
        }

        .inputField {
          height: 53px;
          margin-top: 10px;
          text-indent: 25px;
          width: 499px;
          font-size: 18px;
          font-family: 'PT Sans', sans-serif;
          border: 1px solid #9e9e9e;
          border-radius: 5px;
        }

        .inputField:active {
          border: 0;
          border-bottom: 2px solid red;
        }

        .contentWrapper {
          display: flex;
          height: 100%;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: space-between;
        }

        .controlsWrapper {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}

export default ConfirmPhoneModal
