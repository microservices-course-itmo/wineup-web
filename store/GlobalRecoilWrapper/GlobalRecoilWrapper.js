import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import useLocalStorage from '../../hooks/useLocalStorage'
import { userState, errorState } from './store'
import AuthorizationStatus from '../../components/AuthorizationStatus'
import api from '../../api'
import handleError from '../../utils/handleError'

const GlobalRecoilWrapper = ({ children }) => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken')
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken')
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  const [error, setError] = useRecoilState(errorState)

  useEffect(() => {
    const getUser = async () => {
      const response = await api.getProfile(accessToken)

      if (!response.profile || response.profile.error) {
        const { error, message, data } = await api.refreshToken(refreshToken)

        if (error) {
          setTimeout(() => {
            setError({ error, message })
          }, 1000)
          return
        }

        setAccessToken(data[0])
        setRefreshToken(data[1])
      }
      const newCurrentUser = response.profile
      setCurrentUser(newCurrentUser)
    }
    if (!currentUser || currentUser.error) {
      getUser().catch(console.error)
    }
  }, [])

  useEffect(() => {
    handleError(setError, { error: false, message: '' })
  }, [error, setError])

  return (
    <div className='wrapper'>
      <AuthorizationStatus
        type='error'
        text={error.message}
        isVisible={error.error}
      />
      {children}
      <style jsx>{`
        .wrapper {
          position: relative
          max-width: 1440px;
          padding: 0 20px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default GlobalRecoilWrapper
