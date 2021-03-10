import { useCallback } from 'react'
import { ReducerType } from '../AuthorizationForm/store'

const CURRENT_YEAR = 2021
const CONSENT_YEAR = 18
const TOO_YOUNG = CURRENT_YEAR - CONSENT_YEAR
const DAY_LIMIT = 31
const MONTH_LIMIT = 12
const DAY_MAX_LENGTH = 2

export const CalendarErrors = {
  dayLimit: `Ошибка: дней не может быть больше ${DAY_LIMIT}`,
  monthLimit: `Ошибка: месяцев всего ${MONTH_LIMIT}`,
  yearExceeded: 'Приветствую тебя, гость из будущего!',
  userYoungAge: `Ошибка: не достигли ${CONSENT_YEAR} лет`,
  sizeExceeded: 'Предупреждение: вы пытаетесь ввести слишком длинную строку',
}

const parseIntToDecimal = value => {
  return parseInt(value, 10)
}

const FormCalendar = props => {
  const { dateParts, isCalendarOpen, dispatch } = props

  const handleDay = useCallback(
    e => {
      const day = e.target.value
      if (day.length <= DAY_MAX_LENGTH) {
        if (parseIntToDecimal(day) <= DAY_LIMIT) {
          const [, month, year] = dateParts
          dispatch({
            type: ReducerType.setDate,
            payload: `${day}.${month}.${year}`,
          })
          dispatch({ type: ReducerType.clearCalendarError })
        } else {
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.dayLimit,
          })
        }
      }
    },
    [dateParts, dispatch]
  )
  const handleMonth = useCallback(
    e => {
      const month = e.target.value
      if (month.length <= MONTH_LIMIT) {
        if (parseIntToDecimal(month) <= MONTH_LIMIT) {
          const [day, , year] = dateParts
          dispatch({
            type: ReducerType.setDate,
            payload: `${day}.${month}.${year}`,
          })
          dispatch({ type: ReducerType.clearCalendarError })
        } else {
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.monthLimit,
          })
        }
      }
    },
    [dateParts, dispatch]
  )
  const handleYear = useCallback(
    e => {
      const year = e.target.value
      if (parseIntToDecimal(year) > CURRENT_YEAR)
        dispatch({
          type: ReducerType.setCalendarError,
          payload: CalendarErrors.yearExceeded,
        })
      if (year.length <= CURRENT_YEAR) {
        const [day, month] = dateParts
        dispatch({
          type: ReducerType.setDate,
          payload: `${day}.${month}.${year}`,
        })
        if (parseIntToDecimal(year) >= TOO_YOUNG)
          dispatch({
            type: ReducerType.setCalendarError,
            payload: CalendarErrors.userYoungAge,
          })
        else {
          dispatch({ type: ReducerType.clearCalendarError })
        }
      }
    },
    [dateParts, dispatch]
  )

  return (
    <div>
      <div className='calendar' id='calendar'>
        <input
          className='day'
          placeholder='ДД'
          value={dateParts[0]}
          onChange={handleDay}
        />
        <input
          className='month'
          placeholder='ММ'
          value={dateParts[1]}
          onChange={handleMonth}
        />
        <input
          className='year'
          placeholder='ГГГГ'
          value={dateParts[2]}
          onChange={handleYear}
        />
      </div>
      <style jsx>
        {`
          .day {
            margin: 25px 4px 25px 25px;
            width: 46px;
            height: 41px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 5px 0px 0px 5px;
            text-indent: 10px;
          }
          .month {
            width: 41px;
            height: 41px;
            margin: 25px 4px 25px 0px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 0px;
            text-indent: 5px;
          }
          .year {
            margin: 25px 25px 25px 0px;
            width: 56px;
            height: 41px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            border-radius: 0px 5px 5px 0px;
            text-indent: 10px;
          }
          .calendar {
            display: ${isCalendarOpen ? 'flex' : 'none'};
            width: 201px;
            height: 91px;
            border: 1px solid #9e9e9e;
            box-sizing: border-box;
            box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.11);
            border-radius: 5px;
            position: relative;
            left: 510px;
            top: -110px;
            background: white;
          }
        `}
      </style>
    </div>
  )
}

export default FormCalendar
