import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import useLocalStorage from '../../hooks/useLocalStorage'
import { userState, errorState } from './store'
import Toast from '../../components/Toast'
import api from '../../api'

const GlobalRecoilWrapper = ({ children }) => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken')
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken')
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  const [error, setError] = useRecoilState(errorState)

  useEffect(() => {
    const getUser = async () => {
      const response = await api.getProfile(accessToken)

      if (!response.profile || response.error) {
        const { error, message, data } = await api.refreshToken(refreshToken)

        if (error) {
          setError({ error, message })
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

  return (
    <div className='wrapper'>
      {!!error.error && (
        <Toast
          type='error'
          text={error.message}
          closeCallback={() => setError({ error: false, message: '' })}
        />
      )}

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
