export const initialState = {
  authForm: 1,
  telephone: '',
  telephoneError: '',
  telCode: '',
  telCodeError: '',
  date: '',
  isCalendarOpen: false,
  dateParts: [0, 0, 0],
  username: '',
  usernameError: '',
  calendarError: '',
  sendCode: null,
  uid: null,
  isMessageVisible: false,
  cityId: 1,
  cityName: 'Москва',
  token: null,
  finalMessage: '',
  fb: null,
}

export const ReducerType = {
  setAuthForm: 'setAuthForm',
  setTelephone: 'setTelephone',
  setTelephoneError: 'setTelephoneError',
  clearTelephoneError: 'clearTelephoneError',
  setTelCode: 'setTelCode',
  setTelCodeError: 'setTelCodeError',
  clearTelCodeError: 'clearTelCodeError',
  setDate: 'setDate',
  setIsCalendarOpen: 'setIsCalendarOpen',
  setUserName: 'setUserName',
  setUsernameError: 'setUsernameError',
  clearUsernameError: 'clearUsernameError',
  setCalendarError: 'setCalendarError',
  clearCalendarError: 'clearCalendarError',
  setUid: 'setUid',
  showMessage: 'setIsMessageVisible',
  setCityId: 'setCityId',
  setCityName: 'setCityName',
  setFinalMessage: 'setFinalMessage',
  setFB: 'setFB',
}

export const reducer = (state, action) => {
  const { type, payload } = action || {}
  switch (type) {
    case ReducerType.setAuthForm:
      return { ...state, authForm: payload }
    case ReducerType.setTelephone:
      return { ...state, telephone: payload }
    case ReducerType.setTelephoneError:
      return { ...state, telephoneError: payload }
    case ReducerType.clearTelephoneError:
      return { ...state, telephoneError: initialState.telephoneError }
    case ReducerType.setTelCode:
      return { ...state, telCode: payload }
    case ReducerType.setTelCodeError:
      return { ...state, telCodeError: payload }
    case ReducerType.clearTelCodeError:
      return { ...state, telCodeError: initialState.telCodeError }
    case ReducerType.setDate:
      return {
        ...state,
        date: action.payload,
        dateParts: action.payload.split('.'),
      }
    case ReducerType.setIsCalendarOpen:
      return { ...state, isCalendarOpen: payload }
    case ReducerType.setUserName:
      return { ...state, username: payload }
    case ReducerType.setUsernameError:
      return { ...state, usernameError: payload }
    case ReducerType.clearUsernameError:
      return { ...state, usernameError: initialState.usernameError }
    case ReducerType.setCalendarError:
      return { ...state, calendarError: payload }
    case ReducerType.clearCalendarError:
      return { ...state, calendarError: initialState.calendarError }
    case ReducerType.showMessage:
      return { ...state, isMessageVisible: true }
    case ReducerType.setCityId:
      return { ...state, cityId: payload }
    case ReducerType.setCityName:
      return { ...state, cityName: payload }
    case ReducerType.setUid:
      return { ...state, token: payload, uid: payload }
    case ReducerType.setFinalMessage:
      return { ...state, finalMessage: payload }
    case ReducerType.setFB:
      return { ...state, fb: payload }
    default:
      return initialState
  }
}
