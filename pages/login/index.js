import Home from '../index'
import AuthorizationForm from '../../components/AuthorizationForm'

const Login = () => {
  return (
    <div className='wrapper'>
      <Home />
      <div className='authForm'>
        <div className='background' />
        <AuthorizationForm />
      </div>
      <style jsx>{`
        .background {
          width: 1920px;
          height: 1520px;
          background-color: black;
          opacity: 0.5;
        }
        .authForm {
          position: relative;
          top: -1515px;
          z-index: 3;
          height: 0px;
          width: 0px;
        }
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
