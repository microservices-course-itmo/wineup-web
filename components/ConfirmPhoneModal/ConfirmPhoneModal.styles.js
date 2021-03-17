import css from 'styled-jsx/css'

export default css`
  .header {
    text-align: center;
  }
  .inputField {
    height: 53px;
    margin-top: 10px;
    text-indent: 25px;
    width: 499px;
    font-size: 18px;
    font-family: 'PT Sans', sans-serif;
    border: 1px solid #9e9e9e;
    border-radius: 5px;
  }
  .inputField:active {
    border: 0;
    border-bottom: 2px solid red;
  }
  .content-wrapper {
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
  }
  .controls-wrapper {
    display: flex;
    justify-content: space-between;
  }
`
