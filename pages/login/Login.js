import Home from '../index'
import AuthorizationForm from '../../src/AuthorizationForm'

const Login = () => {
  return (
    <div className='wrapper'>
      <Home />
      <AuthorizationForm />
      <style jsx>{`
        .wrapper {
          max-width: 1920px;
          padding: 0 20px;
          margin: 0 auto;
        }
        .nav {
          width: 100%;
          height: 62px;
          background-color: lightgray;
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .content {
          display: flex;
          margin-top: 40px;
        }

        .filter {
          background-color: lightgray;
          min-width: 375px;
          min-height: 1265px;
          max-width: 375px;
          max-height: 1265px;
        }
      `}</style>
    </div>
  )
}

export default Login
