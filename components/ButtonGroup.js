import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function ButtonGroup({
  firstBtnValue = '1',
  secondBtnValue = '2',
  thirdBtnValue = '3',
  forthBtnValue = '4',
}) {
  const types = [firstBtnValue, secondBtnValue, thirdBtnValue, forthBtnValue]

  const [active, setActive] = useState(types[0])

  const Button = styled.button`
    background: transparent;

    color: grey;

    width: 150px;

    height: 30px;

    border-radius: 20px;

    outline: 0;
    ${({ active }) =>
      active &&
      `
            background-color: red;

            color: white;

            width: 150px;

            height: 30px;

            border-radius: 20px;

            border: none;

            outline: 0;
            `}
  `

  return (
    <div className='container'>
      {types.map(type => (
        <Button active={active === type} onClick={() => setActive(type)}>
          {type}
        </Button>
      ))}
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
          }
        `}
      </style>
    </div>
  )
}

ButtonGroup.propTypes = {
  firstBtnValue: PropTypes.string.isRequired,
  secondBtnValue: PropTypes.string.isRequired,
  thirdBtnValue: PropTypes.string.isRequired,
  forthBtnValue: PropTypes.string.isRequired,
}
export default ButtonGroup
