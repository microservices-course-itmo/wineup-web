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
  setSendCode: 'setSendCode',
  setUid: 'setUid',
  showMessage: 'setIsMessageVisible',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ReducerType.setAuthForm:
      return { ...state, authForm: action.payload }
    case ReducerType.setTelephone:
      return { ...state, telephone: action.payload }
    case ReducerType.setTelephoneError:
      return { ...state, telephoneError: action.payload }
    case ReducerType.clearTelephoneError:
      return { ...state, telephoneError: initialState.telephoneError }
    case ReducerType.setTelCode:
      return { ...state, telCode: action.payload }
    case ReducerType.setTelCodeError:
      return { ...state, telCodeError: action.payload }
    case ReducerType.clearTelCodeError:
      return { ...state, telCodeError: initialState.telCodeError }
    case ReducerType.setDate:
      return {
        ...state,
        date: action.payload,
        dateParts: action.payload.split('.'),
      }
    case ReducerType.setIsCalendarOpen:
      return { ...state, isCalendarOpen: action.payload }
    case ReducerType.setUserName:
      return { ...state, username: action.payload }
    case ReducerType.setUsernameError:
      return { ...state, usernameError: action.payload }
    case ReducerType.clearUsernameError:
      return { ...state, usernameError: initialState.usernameError }
    case ReducerType.setCalendarError:
      return { ...state, calendarError: action.payload }
    case ReducerType.clearCalendarError:
      return { ...state, calendarError: initialState.calendarError }
    case ReducerType.showMessage:
      return { ...state, isMessageVisible: true }
    default:
      return initialState
  }
}
