import { useState } from 'react'

import SortButton from './SortButton'

function ButtonGroup() {
  const types = [
    { name: 'Recommended' },
    { name: 'High price' },
    { name: 'Low price' },
    { name: 'Popular' },
  ]
  const [active, setActive] = useState(0)
  function setActiveButton(index) {
    setActive(index)
  }
  return (
    <div className='container'>
      {types.map((type, index) => (
        <SortButton
          classValue={active === index ? 'activeBtn' : 'notActiveBtn'}
          onClickSort={() => setActiveButton(index)}
          btnValue={type.name}
        />
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
export default ButtonGroup
