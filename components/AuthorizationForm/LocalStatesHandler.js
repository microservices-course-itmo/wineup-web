import { useMemo, useState } from 'react'
import useLocalStorage from '../../utils/useLocalStorage'

export function LocalStatesHandler() {
  const [authForm, setAuthForm] = useState(1)
  const [telephone, setTelephone] = useState('')
  const [telephoneError, setTelephoneError] = useState('')
  const [telCode, setTelCode] = useState('')
  const [telCodeError, setTelCodeError] = useState('')
  const [date, setDate] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [day, month, year] = useMemo(() => date.split('.'), [date])
  const [username, setUserName] = useState('')
  const [nameError, setNameError] = useState('')
  const [calendarError, setCalendarError] = useState('')
  const [sendCode, setSendCode] = useState(null)
  const [uid, setUid] = useState(null)
  const [message, setMessage] = useState(0)
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '')
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken', '')
  return {
    authForm: [authForm, setAuthForm],
    telephone: [telephone, setTelephone],
    telephoneError: [telephoneError, setTelephoneError],
    telCode: [telCode, setTelCode],
    telCodeError: [telCodeError, setTelCodeError],
    date: [date, setDate],
    isOpen: [isOpen, setIsOpen],
    dateParts: [day, month, year],
    username: [username, setUserName],
    nameError: [nameError, setNameError],
    calendarError: [calendarError, setCalendarError],
    sendCode: [sendCode, setSendCode],
    uid: [uid, setUid],
    message: [message, setMessage],
    accessToken: [accessToken, setAccessToken],
    refreshToken: [refreshToken, setRefreshToken],
  }
}
