import React, { useMemo, useCallback } from 'react'
import ModalWrapper from '../ModalWrapper'
import CustomFormButton from '../CustomFormButton'

const CODE_LENGTH = 6

const ErrorCodesMapper = {
  'auth/captcha-check-failed': 'Повторите ввод reCAPTCHA',
  'auth/invalid-phone-number': 'Неверный формат номера телефона',
  'auth/quota-exceeded': 'Квота на отправку СМС превышена',
  'auth/user-disabled': 'Данные профиля недоступны',
  'auth/maximum-second-factor-count-exceeded':
    'Превышен максимальный лимит двухфакторных проверок',
  'auth/unsupported-first-factor':
    'Для изменения данных профиля необходимо повторить вход в аккаунт',
  'auth/unverified-email': 'Неподтвержденная электронная почта',
  'auth/too-many-requests': 'Превышен лимит запросов',
}

const unknownErrorMessage = 'Профиль не обновлен: система перегружена'

/**
 * @param {boolean} visible
 * @param {string} errorCode
 * @param {function} onClose
 * @param {function} onSubmit
 */
const ConfirmPhoneModal = ({
  visible,
  errorCode,
  onClose,
  verificationCode,
  setVerificationCode,
}) => {
  const errorMessage = useMemo(() => {
    if (errorCode) return ErrorCodesMapper[errorCode] || unknownErrorMessage
    return null
  }, [errorCode])

  const isSubmitDisabled = useMemo(() => {
    return verificationCode.length !== CODE_LENGTH || errorCode
  }, [verificationCode, errorCode])

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
          <div className='inputWithErrorWrapper'>
            <input
              className='inputField'
              placeholder='Введите код подтверждения'
              value={verificationCode}
              onChange={handleCodeChange}
            />
            {errorMessage && (
              <span className='errorMessage'>{errorMessage}</span>
            )}
          </div>
          <div className='controlsWrapper'>
            <CustomFormButton width='49%' onClick={onClose} text='Отменить' />
            <CustomFormButton
              width='49%'
              text='Подтвердить'
              disabled={isSubmitDisabled}
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

        .inputWithErrorWrapper {
          display: flex;
          flex-direction: column;
        }

        .errorMessage {
          color: #cf3737;
          font-family: 'PT Sans', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          height: 18px;
          width: 499px;
          border: 0;
          padding: 0;
          background: inherit;
        }
      `}</style>
    </div>
  )
}

export default ConfirmPhoneModal
