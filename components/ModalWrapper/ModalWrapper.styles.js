import css from 'styled-jsx/css'

export default css`
  .wrapper {
    position: fixed;
    width: 600px;
    max-width: 100%;
    height: 400px;
    max-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #e9e9e9;
  }
`
