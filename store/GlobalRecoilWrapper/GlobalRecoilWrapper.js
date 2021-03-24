import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import useLocalStorage from '../../hooks/useLocalStorage'
import { userState } from './store'
import api from '../../api'

const GlobalRecoilWrapper = ({ children }) => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken')
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken')
  const [currentUser, setCurrentUser] = useRecoilState(userState)
  useEffect(() => {
    const getUser = async () => {
      const response = await api.getProfile(accessToken)

      if (!response.profile || response.profile.error) {
        const [newAccessToken, newRefreshToken] = await api.refreshToken(
          refreshToken
        )
        setAccessToken(newAccessToken)
        setRefreshToken(newRefreshToken)
      }
      const newCurrentUser = await response.profile
      setCurrentUser(newCurrentUser)
    }
    if (!currentUser || currentUser.error) {
      getUser().catch(console.error)
    }
  }, [
    accessToken,
    currentUser,
    refreshToken,
    setAccessToken,
    setCurrentUser,
    setRefreshToken,
  ])
  return (
    <div className='wrapper'>
      {children}
      <style jsx>{`
        .wrapper {
          max-width: 1440px;
          padding: 0 20px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default GlobalRecoilWrapper
